
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer,
} from "recharts";

// Demo data: profit per product, monthly breakdown
const profitLineData = [
  { month: "Янв", "API-платформа": 2.2, "CRM-интеграция": 1.7, "Облачная платформа": 3.2 },
  { month: "Фев", "API-платформа": 2.8, "CRM-интеграция": 1.9, "Облачная платформа": 2.6 },
  { month: "Мар", "API-платформа": 3.1, "CRM-интеграция": 2.2, "Облачная платформа": 2.0 },
  { month: "Апр", "API-платформа": 2.5, "CRM-интеграция": 1.5, "Облачная платформа": 1.3 },
  { month: "Май", "API-платформа": 3.0, "CRM-интеграция": 2.3, "Облачная платформа": 2.8 },
  { month: "Июн", "API-платформа": 2.7, "CRM-интеграция": 2.0, "Облачная платформа": 2.5 },
];

const pieData = [
  { name: "API-платформа", value: 16.3 },
  { name: "CRM-интеграция", value: 11.6 },
  { name: "Облачная платформа", value: 12.4 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ProductProfitCharts() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* Линейный график */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Динамика прибыли по продуктам</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={profitLineData} margin={{ top: 20, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis unit=" млн ₽" />
                <Tooltip formatter={(v: number) => `${v} млн ₽`} />
                <Legend />
                <Line type="monotone" dataKey="API-платформа" stroke={COLORS[0]} strokeWidth={2} dot />
                <Line type="monotone" dataKey="CRM-интеграция" stroke={COLORS[1]} strokeWidth={2} dot />
                <Line type="monotone" dataKey="Облачная платформа" stroke={COLORS[2]} strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Круговая диаграмма */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Доля прибыли по продуктам (6 мес)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-0 pb-4">
          <div className="h-[240px] w-full flex items-center justify-center">
            <ResponsiveContainer width="95%" height="100%">
              <PieChart>
                <Pie 
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={65}
                  fill="#8884d8"
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {pieData.map((entry, idx) => <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => `${v} млн ₽`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
