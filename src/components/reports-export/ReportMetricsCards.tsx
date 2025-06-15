
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, AlertTriangle } from "lucide-react";

interface Metric {
  title: string;
  value: string;
  icon: React.ReactNode;
  bg: string;
  delta?: string;
  // highlight property removed
}

const metricsDemoByRole = {
  manager: [
    { title: "Мои сделки в работе", value: "6", icon: <TrendingUp className="text-primary" />, bg: "bg-blue-50" },
    { title: "Средняя прибыль", value: "1.8 млн ₽", icon: <Clock className="text-green-600" />, bg: "bg-green-50", delta: "+7%" },
    { title: "Просрочено по SLA", value: "2", icon: <AlertTriangle className="text-yellow-500" />, bg: "bg-yellow-50", delta: "−1" }
  ],
  director: [
    { title: "Сделки по команде", value: "24", icon: <TrendingUp className="text-primary" />, bg: "bg-blue-50" },
    { title: "Средняя прибыль (филиал)", value: "2.3 млн ₽", icon: <Clock className="text-green-600" />, bg: "bg-green-50", delta: "-20%" },
    { title: "SLA-нарушения", value: "3", icon: <AlertTriangle className="text-yellow-500" />, bg: "bg-yellow-50", delta: "+1" }
  ]
}

export default function ReportMetricsCards({ role }: { role: "manager" | "director" }) {
  const metrics = metricsDemoByRole[role];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {metrics.map((m, idx) => (
        <Card key={idx} className={m.bg}>
          <CardHeader className="flex-row items-center space-y-0 gap-2">
            <div>{m.icon}</div>
            <CardTitle className="text-base">{m.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{m.value}</div>
            {m.delta && (
              <CardDescription className="text-xs">
                Изменение:{" "}
                <span className={
                  m.delta.trim().startsWith('-') || m.delta.trim().startsWith('−')
                    ? "text-red-600"
                    : "text-green-600"
                }>
                  {m.delta}
                </span>
              </CardDescription>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

