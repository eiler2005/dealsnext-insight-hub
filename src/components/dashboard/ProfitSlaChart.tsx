
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { chartData } from "@/data/mockData";

const ProfitSlaChart = () => {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <CardHeader>
        <CardTitle>Динамика прибыли и SLA</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" label={{ value: 'Прибыль (млн ₽)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'SLA (дни)', angle: 90, position: 'insideRight' }} />
            <Tooltip
              formatter={(value, name) => {
                if (name === "прибыль") return [`${value} млн ₽`, "Прибыль"];
                if (name === "sla") return [`${value} дн.`, "SLA"];
                return [value, name];
              }}
            />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="прибыль" stroke="#2563eb" strokeWidth={2} name="Прибыль" />
            <Line yAxisId="right" type="monotone" dataKey="sla" stroke="#f97316" strokeWidth={2} name="SLA" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProfitSlaChart;
