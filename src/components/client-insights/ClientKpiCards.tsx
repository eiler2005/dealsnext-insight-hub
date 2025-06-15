
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowDown, ArrowUp, Briefcase } from "lucide-react";

const kpis = [
  {
    title: "Активные клиенты",
    value: "57",
    icon: Users,
    bg: "bg-green-50",
    color: "text-green-600",
    desc: "+6% к прошлому месяцу"
  },
  {
    title: "Средняя прибыль на клиента",
    value: "₽4.6 млн",
    icon: Briefcase,
    bg: "bg-blue-50",
    color: "text-blue-600",
    desc: ""
  },
  {
    title: "Доля убыточных",
    value: "8%",
    icon: ArrowDown,
    bg: "bg-yellow-50",
    color: "text-yellow-700",
    desc: "↓ на 1% vs Q1"
  },
  {
    title: "Ретеншн по сегменту",
    value: "91%",
    icon: ArrowUp,
    bg: "bg-purple-50",
    color: "text-purple-700",
    desc: "В сегменте «логистика»"
  }
];

export default function ClientKpiCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {kpis.map(kpi => (
        <Card key={kpi.title} className="flex flex-row items-center p-4">
          <div className={`rounded-lg p-2 mr-4 ${kpi.bg}`}>
            <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
          </div>
          <div>
            <div className="text-base font-semibold">{kpi.title}</div>
            <CardContent className="pl-0 pr-0 pt-1 pb-0">
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-xs text-muted-foreground">{kpi.desc}</div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
