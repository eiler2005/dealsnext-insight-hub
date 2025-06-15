
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LayoutGrid, Info, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARDS = [
  {
    icon: <LayoutGrid className="text-primary w-8 h-8" />,
    title: "Продукты",
    desc: "Модульный каталог решений, в котором можно видеть себестоимость, цены, типы клиентов и индивидуальные условия для каждого продукта.",
    tooltip: "Каждый продукт настраивается индивидуально под клиента",
  },
  {
    icon: <Info className="text-accent w-8 h-8" />,
    title: "Сделки",
    desc: "Автоматизация пути сделки: от черновика до подписания. Контроль прибыльности и SLA на каждом этапе.",
    tooltip: "В каждой сделке учитываются скидки, комиссии, доп. условия.",
  },
  {
    icon: <LayoutDashboard className="text-blue-600 w-8 h-8" />,
    title: "Аналитика",
    desc: "Контроль исполнения по сделке, отклонениям и прибыльности. Аналитика по клиентам и продуктам. Выявление зон риска.",
    tooltip: "Всё прозрачно — видны и сильные, и слабые места по сделкам.",
  },
  {
    icon: <LayoutGrid className="text-green-600 w-8 h-8" />,
    title: "AI Growth",
    desc: "AI‑рекомендации для роста: сигналы оттока, предложения по ключевым клиентам и допродажам.",
    tooltip: "Система подскажет, где можно увеличить прибыль или предотвратить потери.",
  },
];

export default function IntroHub() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) return (
    <div className="flex justify-between items-center px-3 py-2">
      <span className="text-xs text-muted-foreground font-semibold select-none">🔎 Обзор DealsNext</span>
      <Button variant="ghost" size="sm" onClick={() => setCollapsed(false)}>
        Показать
      </Button>
    </div>
  );

  return (
    <section id="intro-hub" className="bg-card/95 border-b px-4 pt-4 pb-2">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-base flex items-center gap-2">
          <span role="img" aria-label="Лупа">🔎</span> Обзор DealsNext
        </div>
        <Button size="sm" variant="ghost" onClick={() => setCollapsed(true)}>
          Свернуть
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CARDS.map(({ icon, title, desc, tooltip }, idx) => (
          <Card key={title}>
            <CardContent className="flex items-start gap-3 py-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex-shrink-0">{icon}</div>
                </TooltipTrigger>
                <TooltipContent>{tooltip}</TooltipContent>
              </Tooltip>
              <div>
                <div className="font-semibold mb-1 flex items-center gap-2">
                  {title}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer" />
                    </PopoverTrigger>
                    <PopoverContent className="max-w-xs text-sm">{desc}</PopoverContent>
                  </Popover>
                </div>
                <div className="text-xs text-muted-foreground">{desc}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="pt-2 flex gap-2 flex-wrap text-xs">
        <a href="#" className="underline text-primary">Узнай больше</a>
        <span className="text-muted-foreground">|</span>
        <a href="#" className="underline text-primary">Документация</a>
        <span className="text-muted-foreground">|</span>
        <a href="#" className="underline text-primary">Методология расчетов</a>
      </div>
      <div className="text-muted-foreground mt-2 text-xs">
        О системе: DealsNext Suite — ценный фундамент для быстрого старта, понимания структуры и уверенной работы в B2B-аналитике.
      </div>
    </section>
  );
}
