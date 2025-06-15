
import React from "react";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Map, ChartBar, ChartPie } from "lucide-react";

// --- Мок-данные для графиков ---
const profitTrend = [
  { period: "Янв", profit: 280 },
  { period: "Фев", profit: 320 },
  { period: "Мар", profit: 313 },
  { period: "Апр", profit: 374 },
  { period: "Май", profit: 265 },
  { period: "Июн", profit: 388 },
];

const regionData = [
  { region: "Москва", profit: 520, sla: 2.2 },
  { region: "Урал", profit: 235, sla: 4.7 },
  { region: "Сибирь", profit: 140, sla: 4.1 },
  { region: "Приволжье", profit: 87, sla: 3.8 },
];

const productScatter = [
  { product: "Корп. кредиты", clients: 124, profit: 1200 },
  { product: "Торг. финанс.", clients: 89, profit: 650 },
  { product: "Валютные опер.", clients: 77, profit: 380 },
  { product: "Депозиты", clients: 210, profit: 240 },
];

const slaSegment = [
  { segment: "МСБ", sla: 4.9 },
  { segment: "Крупный бизнес", sla: 3.2 },
  { segment: "Госсектор", sla: 2.4 },
  { segment: "Розница", sla: 1.7 },
];

// Для Pie-chart по отраслям (примерно)
const profitByIndustry = [
  { industry: "Строительство", value: 400 },
  { industry: "Ритейл", value: 210 },
  { industry: "IT", value: 120 },
  { industry: "Агро", value: 70 },
  { industry: "Другие", value: 65 },
];
const pieColors = [
  "#2563eb", "#10b981", "#fbbf24", "#f87171", "#6366f1"
];

const ProductEffectivenessCharts = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* График тренда прибыли/убыточности */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col h-60">
        <span className="font-medium mb-2 flex items-center gap-1">
          <TrendingUp className="text-primary" size={18}/> Тренд прибыли
        </span>
        <ChartContainer config={{
          profit: { label: "Прибыль", color: "#2563eb", icon: TrendingUp },
        }}>
          <LineChart data={profitTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis unit=" млн" />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <Line type="monotone" dataKey="profit" stroke="#2563eb" strokeWidth={2} dot />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Карта эффективности по регионам */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col h-60">
        <span className="font-medium mb-2 flex items-center gap-1">
          <Map className="text-primary" size={18}/> Эффективность по регионам
        </span>
        <ChartContainer
          config={{
            profit: { label: "Прибыль", color: "#10b981", icon: ChartBar },
            sla: { label: "SLA", color: "#f87171" },
          }}
        >
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis unit=" млн" />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <Bar dataKey="profit" fill="#10b981" />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Популярность vs прибыльность (ScatterChart) */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col h-60">
        <span className="font-medium mb-2 flex items-center gap-1">
          <ChartBar className="text-primary" size={18}/> Популярность vs прибыльность
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 16, right: 8, left: 0, bottom: 8 }}>
            <CartesianGrid />
            <XAxis dataKey="clients" name="Клиенты" unit="" />
            <YAxis dataKey="profit" name="Прибыль" unit=" млн" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Продукты" data={productScatter} fill="#6366f1" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Диаграмма распределения прибыли по отраслям (PieChart) */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col h-60">
        <span className="font-medium mb-2 flex items-center gap-1">
          <ChartPie className="text-primary" size={18}/> Прибыль по отраслям
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={profitByIndustry}
              dataKey="value"
              nameKey="industry"
              cx="50%"
              cy="50%"
              outerRadius={50}
              label
            >
              {profitByIndustry.map((entry, i) => (
                <Cell key={entry.industry} fill={pieColors[i % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductEffectivenessCharts;
