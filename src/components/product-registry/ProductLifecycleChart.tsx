
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from "recharts";

const lifecycleData = [
  { age: 1, profit: 3, label: "Q2-2024" },
  { age: 2, profit: 7, label: "Q3-2024" },
  { age: 3, profit: 14, label: "Q4-2024" },
  { age: 4, profit: 17, label: "Q1-2025" },
  { age: 5, profit: 13, label: "Q2-2025" }, // Сейчас
  { age: 6, profit: 11, label: "Q3-2025" }, // прогноз
  { age: 7, profit: 14, label: "Q4-2025" }, // прогноз
];

export default function ProductLifecycleChart() {
  return (
    <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 mb-5">
      <div className="font-semibold mb-2 flex items-center gap-2 text-[15px]">⏳ Жизненный цикл продукта</div>
      <div className="flex flex-col gap-2 text-xs">
        <span>Дата запуска: <span className="font-semibold">12.05.2021</span></span>
        <span>Дата вывода: <span className="font-semibold text-slate-400">—</span></span>
      </div>
      <div className="h-36 min-h-36 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lifecycleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12 }}
              minTickGap={0}
            />
            <YAxis unit=" млн" domain={[0, 20]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="px-3 py-2 rounded-md bg-white dark:bg-neutral-800 shadow">
                      <div>Квартал: <b>{p.label}</b></div>
                      <div>Прибыль: <b>{p.profit} млн</b></div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#2563eb"
              strokeWidth={2}
              dot={{ r: 4, fill: "#2563eb" }}
              activeDot={{ r: 6 }}
            />
            <ReferenceLine x="Q2-2025" label="Сейчас" stroke="#94a3b8" strokeDasharray="3 3" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-muted-foreground mt-1">Динамика выручки (факт + прогноз)</div>
    </div>
  );
}
