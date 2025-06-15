
import React from "react";
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

// Демо-данные продуктов
const radarData = [
  { name: "API Платформа", margin: 22, profit: 12.3, deals: 18, sla: 2.8 },
  { name: "Лизинговый модуль", margin: 6, profit: -2.5, deals: 7, sla: 5.4 },
  { name: "CRM-расширение", margin: 18, profit: 8.5, deals: 4, sla: 3.2 },
  // Типичные "мертвый груз", "звезда", "скрытая возможность"
  { name: "Legacy Core", margin: 2, profit: -5.1, deals: 2, sla: 6.0 },
  { name: "B2B-super-app", margin: 25, profit: 14, deals: 31, sla: 2.3 },
];

function getCategory(p: any) {
  if (p.margin > 16 && p.profit > 10) return "Звезда";
  if (p.margin < 5 && p.profit < 0) return "Мертвый груз";
  if (p.margin > 10 && p.profit < 3) return "Скрытая возможность";
  return "";
}

// Чем хуже SLA, тем цвет ярче (краснее/желтее)
function slaColor(sla: number) {
  if (sla < 3) return "#22c55e";
  if (sla < 4) return "#eab308"; // жёлтый
  return "#ef4444"; // красный
}

export default function ProductRadarChart() {
  return (
    <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 mb-5">
      <div className="font-semibold mb-2 flex items-center gap-2 text-[15px]">🎯 Продуктовый Radar</div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="margin" name="Маржа, %" unit="%" />
            <YAxis dataKey="profit" name="Прибыль" unit=" млн" />
            <Tooltip
              cursor={{ fill: "#0001" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="rounded-md shadow px-3 py-2 bg-white dark:bg-neutral-800">
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="text-xs">Маржа: <b>{p.margin}%</b></div>
                      <div className="text-xs">Прибыль: <b>{p.profit > 0 ? "+" : ""}{p.profit} млн</b></div>
                      <div className="text-xs">Сделок: <b>{p.deals}</b></div>
                      <div className="text-xs">SLA: <b>{p.sla} дн.</b></div>
                      {getCategory(p) && (
                        <div className={
                          "mt-1 px-2 py-0.5 rounded-sm text-xs font-medium " +
                          (getCategory(p) === "Звезда"
                            ? "bg-green-100 text-green-600"
                            : getCategory(p) === "Мертвый груз"
                            ? "bg-rose-100 text-rose-600"
                            : "bg-yellow-50 text-yellow-700")
                        }>
                          {getCategory(p)}
                        </div>
                      )}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Scatter
              name="Продукты"
              data={radarData}
              fill="#94a3b8"
              shape="circle"
              // Размер круга — по сделкам, цвет по SLA
              fillOpacity={0.9}
            >
              {radarData.map((entry, i) => (
                <circle
                  key={entry.name}
                  r={10 + entry.deals}
                  fill={slaColor(entry.sla)}
                  fillOpacity={0.8}
                  stroke="#fff"
                  strokeWidth={2}
                  cx={undefined}
                  cy={undefined}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
