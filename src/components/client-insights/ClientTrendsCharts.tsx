
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { clientsData } from "@/data/mockData";

// ==== Моковые расчёты для графиков ====

// Тренд прибыли по клиентам (по месяцам)
const profitTrend = [
  { month: "2024-12", profit: 6400000 },
  { month: "2025-01", profit: 11200000 },
  { month: "2025-02", profit: 17900000 },
  { month: "2025-03", profit: 23200000 },
  { month: "2025-04", profit: 28700000 },
  { month: "2025-05", profit: 37200000 },
  { month: "2025-06", profit: 45600000 },
];

// SLA по сегментам (группировка по type)
function getSlaByType(
  clients: typeof clientsData
): { type: string; avgSla: number }[] {
  const byType: Record<string, { sum: number; count: number }> = {};
  clients.forEach((c) => {
    const type = c.type ?? "Станд.";
    if (!byType[type]) byType[type] = { sum: 0, count: 0 };
    byType[type].sum += Number(c.sla); // Convert to number explicitly
    byType[type].count += 1;
  });
  return Object.entries(byType).map(([type, v]) => ({
    type,
    avgSla: Number((v.sum / v.count).toFixed(2)),
  }));
}
const slaByType = getSlaByType(clientsData);

// Прибыль по отраслям (pie)
function getProfitByIndustry(
  clients: typeof clientsData
): { name: string; value: number }[] {
  const by: Record<string, number> = {};
  clients.forEach((c) => {
    if (!by[c.industry]) by[c.industry] = 0;
    by[c.industry] += c.profit;
  });
  return Object.entries(by).map(([industry, profit]) => ({
    name: industry,
    value: profit,
  }));
}
const profitByIndustry = getProfitByIndustry(clientsData);

// SLA-нарушения: пусть будет имитация для нескольких клиентов по месяцам
const slaViolations = [
  { month: "2025-02", "ООО \"ТехПром\"": 2, "АО “ЛогистикГрупп”": 0, "ЗАО “Ритейл-Холдинг”": 1 },
  { month: "2025-03", "ООО \"ТехПром\"": 3, "АО “ЛогистикГрупп”": 1, "ЗАО “Ритейл-Холдинг”": 1 },
  { month: "2025-04", "ООО \"ТехПром\"": 2, "АО “ЛогистикГрупп”": 1, "ЗАО “Ритейл-Холдинг”": 2 },
  { month: "2025-05", "ООО \"ТехПром\"": 4, "АО “ЛогистикГрупп”": 0, "ЗАО “Ритейл-Холдинг”": 1 },
  { month: "2025-06", "ООО \"ТехПром\"": 1, "АО “ЛогистикГрупп”": 0, "ЗАО “Ритейл-Холдинг”": 1 },
];

// Цвета для pie
const pieColors = ["#60a5fa", "#fbbf24", "#f87171", "#a78bfa", "#34d399"];

export default function ClientTrendsCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardTitle className="text-base font-semibold px-6 pt-6">Тренд прибыли по клиентам</CardTitle>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={profitTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#60a5fa"
                strokeWidth={2}
                name="Прибыль"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-base font-semibold px-6 pt-6">SLA по сегментам</CardTitle>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={slaByType}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="avgSla" fill="#4ade80" name="SLA средний" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-base font-semibold px-6 pt-6">Распределение прибыли по отраслям</CardTitle>
        <CardContent>
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={profitByIndustry}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={35}
                label={({ name, value }) => `${name}: ₽${value.toLocaleString("ru-RU")}`}
              >
                {profitByIndustry.map((entry, idx) => (
                  <Cell key={entry.name} fill={pieColors[idx % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => `₽${Number(v).toLocaleString("ru-RU")}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardTitle className="text-base font-semibold px-6 pt-6">SLA-нарушения по времени</CardTitle>
        <CardContent>
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={slaViolations}>
              <XAxis dataKey="month" />
              <YAxis allowDecimals={false} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              {Object.keys(slaViolations[0])
                .filter((k) => k !== "month")
                .map((k, i) => (
                  <Line
                    key={k}
                    type="monotone"
                    dataKey={k}
                    name={k}
                    stroke={pieColors[i % pieColors.length]}
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
