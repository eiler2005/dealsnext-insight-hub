
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Pie, PieChart, Cell } from "recharts";
import { Card } from "@/components/ui/card";

const industryData = [
  { name: "Финансы", profit: 1250000 },
  { name: "Торговля", profit: 420000 },
  { name: "Строительство", profit: 0 },
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

const COLORS = ["#4ADE80", "#FACC15", "#F87171"];

export default function ClientInsightsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-3 my-6">
      {/* Прибыль по отраслям */}
      <Card className="p-4">
        <h3 className="font-semibold mb-2 flex items-center">
          📊 Прибыль по отраслям
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={industryData}>
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="profit" fill="#6366F1" radius={[4, 4, 0, 0]} name="Прибыль" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      {/* SLA-карта по регионам */}
      <Card className="p-4">
        <h3 className="font-semibold mb-2 flex items-center">
          🗺️ SLA-карта по регионам
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={regionData}>
            <XAxis dataKey="region" fontSize={12} />
            <YAxis fontSize={12} unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="sla" fill="#FDBA74" radius={[4, 4, 0, 0]} name="SLA (%)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      {/* Жизненный цикл клиентов */}
      <Card className="p-4">
        <h3 className="font-semibold mb-2 flex items-center">
          🩺 Жизненный цикл клиентов
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={lifecycleData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={75}
              label={({ name }) => name}
            >
              {lifecycleData.map((entry, idx) => (
                <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
