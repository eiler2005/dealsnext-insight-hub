
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Мокаем несколько наборов данных для примера (по командам)
const allChartData = {
  total: [
    { period: "Янв", value: 245, teamA: 120, teamB: 125 },
    { period: "Фев", value: 220, teamA: 110, teamB: 110 },
    { period: "Мар", value: 255, teamA: 145, teamB: 110 },
    { period: "Апр", value: 230, teamA: 120, teamB: 110 },
    { period: "Май", value: 280, teamA: 150, teamB: 130 },
    { period: "Июн", value: 310, teamA: 180, teamB: 130 },
  ],
};

const teamOptions = [
  { value: "total", label: "Все команды" },
  { value: "teamA", label: "Команда 1" },
  { value: "teamB", label: "Команда 2" },
];

const ProfitLineChart = () => {
  const [segment, setSegment] = useState("total");

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Динамика прибыли</CardTitle>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-xs">Фильтр по команде:</span>
          <select value={segment} onChange={(e) => setSegment(e.target.value)} className="text-xs border rounded px-2 py-1">
            {teamOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={allChartData["total"]}
            margin={{ top: 10, right: 24, left: 8, bottom: 10 }}
          >
            <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip />
            <Legend />
            {segment === "total" ? (
              <>
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Общая прибыль"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="teamA"
                  name="Команда 1"
                  stroke="#2563eb"
                  strokeDasharray="4 2"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="teamB"
                  name="Команда 2"
                  stroke="#8b5cf6"
                  strokeDasharray="2 2"
                  strokeWidth={2}
                />
              </>
            ) : (
              <Line
                type="monotone"
                dataKey={segment}
                name={teamOptions.find((t) => t.value === segment)?.label}
                stroke="#2563eb"
                strokeWidth={3}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProfitLineChart;
