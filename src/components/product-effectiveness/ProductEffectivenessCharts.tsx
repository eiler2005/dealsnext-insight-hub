
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
    <div
      className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 mb-6"
      style={{ minHeight: 480 }}
    >
      {/* Левая верхняя: Тренд прибыли */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col min-h-[220px] md:min-h-[260px]">
        <span className="font-medium mb-2 flex items-center gap-2 text-[15px]">
          <TrendingUp className="text-primary" size={19}/> Тренд прибыли
        </span>
        <div className="flex-1">
          <ChartContainer config={{
            profit: { label: "Прибыль", color: "#2563eb", icon: TrendingUp },
          }}>
            <LineChart data={profitTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis unit=" млн" domain={[200, 400]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
      {/* Правая верхняя: Эффективность по регионам (Bar) */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col min-h-[220px] md:min-h-[260px]">
        <span className="font-medium mb-2 flex items-center gap-2 text-[15px]">
          <Map className="text-primary" size={19}/> Эффективность по регионам
        </span>
        <div className="flex-1">
          <ChartContainer
            config={{
              profit: { label: "Прибыль", color: "#10b981", icon: ChartBar },
            }}
          >
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis unit=" млн" domain={[0, 600]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend content={<ChartLegendContent />} />
              <Bar dataKey="profit" fill="#10b981" barSize={48} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      {/* Левая нижняя: Популярность vs прибыльность (Scatter) */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col min-h-[200px] md:min-h-[210px]">
        <span className="font-medium mb-2 flex items-center gap-2 text-[15px]">
          <ChartBar className="text-primary" size={19}/> Популярность vs прибыльность
        </span>
        <div className="flex-1 min-h-[150px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              margin={{ top: 16, right: 8, left: 0, bottom: 8 }}
            >
              <CartesianGrid />
              <XAxis
                dataKey="clients"
                name="Клиенты"
                unit=""
                tick={{ fontSize: 13 }}
                domain={[0, 210]}
                type="number"
              />
              <YAxis
                dataKey="profit"
                name="Прибыль"
                unit=" млн"
                tick={{ fontSize: 13 }}
                domain={[0, 1200]}
                type="number"
              />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ fontSize: 13 }}
              />
              <Scatter
                name="Продукты"
                data={productScatter}
                fill="#2563eb"
                line
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Правая нижняя: Диаграмма по отраслям (Pie) */}
      <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 flex flex-col min-h-[200px] md:min-h-[210px]">
        <span className="font-medium mb-2 flex items-center gap-2 text-[15px]">
          <ChartPie className="text-primary" size={19}/> Прибыль по отраслям
        </span>
        <div className="flex-1 flex flex-col items-center justify-evenly min-h-[150px]">
          <ResponsiveContainer width={190} height={140}>
            <PieChart>
              <Pie
                data={profitByIndustry}
                dataKey="value"
                nameKey="industry"
                cx="50%"
                cy="50%"
                outerRadius={56}
                label={({ name, value }) => `${value}`}
                labelLine={false}
                paddingAngle={0}
                stroke="#fff"
              >
                {profitByIndustry.map((entry, i) => (
                  <Cell key={entry.industry} fill={pieColors[i % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                align="center"
                verticalAlign="bottom"
                iconType="square"
                height={36}
                wrapperStyle={{
                  fontSize: 13,
                  marginTop: 12,
                }}
                formatter={(value: string) => {
                  switch (value) {
                    case "Строительство": return <span style={{ color: "#2563eb" }}>Строительство</span>;
                    case "Ритейл": return <span style={{ color: "#10b981" }}>Ритейл</span>;
                    case "IT": return <span style={{ color: "#fbbf24" }}>IT</span>;
                    case "Агро": return <span style={{ color: "#f87171" }}>Агро</span>;
                    case "Другие": return <span style={{ color: "#6366f1" }}>Другие</span>;
                    default: return value;
                  }
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProductEffectivenessCharts;
