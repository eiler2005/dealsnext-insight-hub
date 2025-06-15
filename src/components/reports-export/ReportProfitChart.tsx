
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const demoProfitData = [
  { name: "Янв", "Прибыль": 10 },
  { name: "Фев", "Прибыль": 14 },
  { name: "Мар", "Прибыль": 11 },
  { name: "Апр", "Прибыль": 17 },
  { name: "Май", "Прибыль": 13 },
  { name: "Июн", "Прибыль": 18 }
];

export default function ReportProfitChart() {
  return (
    <div className="bg-card rounded-lg p-4 shadow mb-6">
      <h3 className="text-lg font-semibold mb-2">Динамика прибыли (млн ₽)</h3>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={demoProfitData}>
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Прибыль" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
