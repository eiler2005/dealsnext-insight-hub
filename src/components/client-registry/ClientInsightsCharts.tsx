
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Pie, PieChart, Cell
} from "recharts";
import { Card } from "@/components/ui/card";

// Цвета для диаграмм и легенды (как на скрине)
const COLORS = ["#4ADE80", "#FACC15", "#F87171"];
const LIFECYCLE_LABELS = [
  { name: "Вовлечённый", color: "#4ADE80", key: "active" },       // зелёный
  { name: "Падает интерес", color: "#FACC15", key: "fading" },    // жёлтый
  { name: "Под угрозой ухода", color: "#F87171", key: "danger" }  // красный
];

const industryData = [
  { name: "Финансы", profit: 1250000 },
  { name: "Строительство", profit: 420000 },
];

const regionData = [
  { region: "Москва", sla: 92 },
  { region: "СПб", sla: 76 },
  { region: "Урал", sla: 70 },
];

const lifecycleData = [
  { name: "Вовлечённый", value: 2 },
  { name: "Падает интерес", value: 1 },
  { name: "Под угрозой ухода", value: 1 },
];

export default function ClientInsightsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-3 my-6">
      {/* Прибыль по отраслям */}
      <Card className="p-4 shadow border bg-white">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span role="img" aria-label="bar-chart">📊</span>
          Прибыль по отраслям
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={industryData}>
            <XAxis dataKey="name" fontSize={13} />
            <YAxis fontSize={13} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: 8
              }}
              formatter={() => <span className="font-bold text-indigo-500">Прибыль</span>}
            />
            <Bar dataKey="profit" fill="#6366F1" radius={[4, 4, 0, 0]} name="Прибыль" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      {/* SLA-карта по регионам */}
      <Card className="p-4 shadow border bg-white">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span role="img" aria-label="map">🗺️</span>
          SLA-карта по регионам
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={regionData}>
            <XAxis dataKey="region" fontSize={13} />
            <YAxis fontSize={13} unit="%" />
            <Tooltip />
            <Legend
              wrapperStyle={{
                paddingTop: 8
              }}
              formatter={() => <span className="font-bold text-orange-400">SLA (%)</span>}
            />
            <Bar dataKey="sla" fill="#FDBA74" radius={[4, 4, 0, 0]} name="SLA (%)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      {/* Жизненный цикл клиентов */}
      <Card className="p-4 shadow border bg-white">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <span role="img" aria-label="stethoscope">🩺</span>
          Жизненный цикл клиентов
        </h3>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <ResponsiveContainer width={130} height={130}>
            <PieChart>
              <Pie
                data={lifecycleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                stroke="none"
              >
                {lifecycleData.map((entry, idx) => (
                  <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2 pl-2">
            {LIFECYCLE_LABELS.map((label, i) => (
              <div key={label.key} className="flex gap-2 items-center text-sm">
                <span className="inline-block w-3 h-3 rounded bg-[var(--color)]" style={{ background: label.color }} />
                <span
                  className="font-semibold"
                  style={{ color: label.color }}>
                  {label.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
