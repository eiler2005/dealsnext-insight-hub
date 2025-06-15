
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flame, AlertOctagon, TrendingDown } from "lucide-react";

export default function ManagerAiInsights() {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-1">
          <Flame className="text-orange-500" />
          <CardTitle className="text-sm">Риск выгорания</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            У <b>Петрова П.П.</b> — частые SLA-просрочки, высокая рабочая нагрузка.  
            <br />
            Рекомендуется обсудить рабочий график и распределить сделки.
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-1">
          <AlertOctagon className="text-rose-500" />
          <CardTitle className="text-sm">Динамика ухудшается</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            <b>Иванов И.И.</b>: снижение объёма сделок 2 мес подряд.
            <br />
            Автоматическое предупреждение руководителю.
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-1">
          <TrendingDown className="text-primary" />
          <CardTitle className="text-sm">KPI: Новые VS опытные</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            Новые менеджеры показывают SLA ~20% хуже, чем опытные.<br />
            Требуется поддержка в адаптации.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
