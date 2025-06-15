
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DollarSign, Briefcase, Clock, Target } from "lucide-react";

const kpiList = [
  {
    title: "Общая прибыль",
    value: "₽2.4 млрд",
    desc: "За выбранный период",
    icon: DollarSign,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Активные сделки",
    value: "1,247",
    desc: "Сделки в исполнении",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Средний SLA",
    value: "4.2 дня",
    desc: "Средняя длительность сделки",
    icon: Clock,
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Конверсия",
    value: "73.4%",
    desc: "Доля завершённых",
    icon: Target,
    color: "bg-purple-100 text-purple-700",
  },
];

const ProfitKpiCards = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    {kpiList.map((kpi) => (
      <Card key={kpi.title} className="flex flex-row items-center p-4">
        <div className={`rounded-lg p-2 mr-4 ${kpi.color}`}>
          <kpi.icon className="w-6 h-6" />
        </div>
        <div>
          <CardTitle className="text-base">{kpi.title}</CardTitle>
          <CardContent className="pl-0 pr-0 pt-1 pb-0">
            <div className="text-2xl font-bold">{kpi.value}</div>
            <div className="text-xs text-muted-foreground">{kpi.desc}</div>
          </CardContent>
        </div>
      </Card>
    ))}
  </div>
);

export default ProfitKpiCards;
