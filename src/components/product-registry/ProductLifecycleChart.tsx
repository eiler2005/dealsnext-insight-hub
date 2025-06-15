
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from "recharts";

const lifecycleData = [
  { age: 1, profit: 3, label: "Q2-2024" },
  { age: 2, profit: 7, label: "Q3-2024" },
  { age: 3, profit: 14, label: "Q4-2024" },
  { age: 4, profit: 17, label: "Q1-2025" },
  { age: 5, profit: 13, label: "Q2-2025" },
  { age: 6, profit: 11, label: "Q3-2025" },
  { age: 7, profit: 14, label: "Q4-2025" },
];

// 📣 Название продукта для примера
const PRODUCT_NAME = "API-доступ";

export default function ProductLifecycleChart() {
  return (
    <div className="bg-white dark:bg-secondary rounded-xl shadow p-5 mb-5 border border-slate-100/80">
      <div className="flex flex-col gap-1 mb-2">
        <span className="text-base font-bold flex items-center gap-2 select-none">
          <span role="img" aria-label="hourglass">⏳</span>
          Жизненный цикл продукта
        </span>
        <span className="text-indigo-600 font-medium text-[15px] ml-[28px] mb-1">{PRODUCT_NAME}</span>
      </div>
      <div className="flex flex-col gap-2 text-xs mb-1 ml-[2px]">
        <span>Дата запуска: <span className="font-semibold">12.05.2021</span></span>
        <span>Дата вывода: <span className="font-semibold text-slate-400">—</span></span>
      </div>
      <div className="h-40 min-h-[136px] mt-2 px-0.5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lifecycleData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 13, fill: "#64748b" }}
              minTickGap={0}
            />
            <YAxis
              unit=" млн"
              domain={[0, 20]}
              tick={{ fontSize: 13, fill: "#64748b" }}
              width={40}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="px-3 py-2 rounded-md bg-white dark:bg-neutral-800 shadow border border-indigo-100">
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
              strokeWidth={3}
              dot={{ r: 6, fill: "#2563eb", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
            <ReferenceLine
              x="Q2-2025"
              label={
                <span style={{ color: "#a3a3a3", fontSize: 20, fontWeight: 600, opacity: 0.55 }}>
                  Сейчас
                </span>
              }
              stroke="#94a3b8"
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs mt-3 text-blue-700 font-medium underline hover:cursor-pointer ml-2">Динамика выручки (факт + прогноз)</div>
    </div>
  );
}
