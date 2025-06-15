
import { useState } from "react";
import { Info, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const CARDS = [
  {
    icon: <LayoutGrid className="w-7 h-7 text-blue-600" />,
    title: "Продукты",
    desc: "Модульный каталог решений, в котором можно видеть себестоимость, цены, типы клиентов и индивидуальные условия для каждого продукта.",
    color: "text-blue-600",
    border: "border border-blue-100",
  },
  {
    icon: <Info className="w-7 h-7 text-orange-500 rounded-full ring-1 ring-orange-200 bg-white" />,
    title: "Сделки",
    desc: "Автоматизация пути сделки: от черновика до подписания. Контроль прибыльности и SLA на каждом этапе.",
    color: "text-orange-500",
    border: "border border-orange-100",
  },
  {
    icon: <LayoutGrid className="w-7 h-7 text-blue-600" />,
    title: "Аналитика",
    desc: "Контроль исполнения по сделке, отклонениям и прибыльности. Аналитика по клиентам и продуктам. Выявление зон риска.",
    color: "text-blue-600",
    border: "border border-blue-100",
  },
  {
    icon: <LayoutGrid className="w-7 h-7 text-green-600" />,
    title: "AI Growth",
    desc: "AI‑рекомендации для роста: сигналы оттока, предложения по ключевым клиентам и допродажам.",
    color: "text-green-600",
    border: "border border-green-100",
  },
];

export default function IntroHub() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <div className="flex justify-between items-center bg-[#f9fafb] border-b border-transparent px-6 py-2 rounded-t-lg mt-0">
        <span className="text-xs text-muted-foreground font-semibold select-none">🔍 Обзор DealsNext</span>
        <Button variant="ghost" size="sm" className="text-xs px-2" onClick={() => setCollapsed(false)}>
          Показать
        </Button>
      </div>
    );
  }

  return (
    <section id="intro-hub" className="bg-[#f9fafb] px-6 py-6 rounded-lg border-b border-slate-100 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold text-2xl flex items-center gap-2 text-black">
          <span role="img" aria-label="Лупа">🔍</span> Обзор DealsNext
        </div>
        <Button size="sm" variant="ghost" className="font-bold text-base text-black px-3" onClick={() => setCollapsed(true)}>
          Свернуть
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        {CARDS.map(({ icon, title, desc, color, border }, idx) => (
          <div
            key={title}
            className={`flex items-start gap-4 bg-white ${border} rounded-2xl py-7 px-7 min-h-[140px] transition-shadow`}
            style={{ boxShadow: "0 1px 5px 0 rgba(46,60,100,.03)" }}
          >
            <div className="pt-1 flex-shrink-0">
              {icon}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1.5">
                <div className="font-bold text-lg text-black">{title}</div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-1 cursor-pointer flex items-center">
                      <Info className="w-4 h-4 text-gray-400" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>{desc}</TooltipContent>
                </Tooltip>
              </div>
              <div className="text-base text-[15px] text-slate-500 leading-snug mb-1">{desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-2 flex gap-3 flex-wrap items-center text-[15px] mb-1">
        <a href="#" className="underline text-blue-700 font-medium">Узнай больше</a>
        <span className="text-slate-400 select-none">|</span>
        <a href="#" className="underline text-blue-700 font-medium">Документация</a>
        <span className="text-slate-400 select-none">|</span>
        <a href="#" className="underline text-blue-700 font-medium">Методология расчетов</a>
      </div>
      <div className="text-slate-500 mt-2 text-[15px]">
        О системе: DealsNext Suite — ценный фундамент для быстрого старта, понимания структуры и уверенной работы в B2B-аналитике.
      </div>
    </section>
  );
}
