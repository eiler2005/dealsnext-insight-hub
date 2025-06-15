
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import OverviewCardsRow from "./OverviewCardsRow";
import OverviewGlossary from "./OverviewGlossary";
import { Download } from "lucide-react";

const FAQS = [
  { q: "Что такое DealsNext Suite?", a: "Единая экосистема: Продукты, Сделки, Условия, Аналитика, AI Growth. Помогает управлять продажами, рентабельностью и развитием клиентов." },
  { q: "Зачем нужен модуль условий?", a: "Позволяет гибко учитывать скидки, комиссии, различные схемы, контролировать влияние на прибыльность." },
  { q: "Что даёт модуль AI Growth?", a: "Автоматические инсайты: точки роста, предложения для upsell/cross-sell и сигналы рисков." },
];

const LS_KEY = "overview-section-hidden";

export default function OverviewEntry() {
  const [hidden, setHidden] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem(LS_KEY) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (hidden) window.localStorage.setItem(LS_KEY, "true");
    else window.localStorage.removeItem(LS_KEY);
  }, [hidden]);

  if (hidden) {
    return (
      <div className="bg-muted px-3 py-2 flex justify-between items-center border-b border-muted select-none rounded mt-0">
        <span className="text-xs text-muted-foreground font-semibold">🔍 Как работает система</span>
        <Button variant="ghost" size="sm" className="text-xs px-2" onClick={() => setHidden(false)}>
          Показать
        </Button>
      </div>
    );
  }

  return (
    <section className="bg-[#f9fafb] px-3 py-5 rounded-xl border-b border-slate-200 mb-2 animate-fade-in shadow-sm transition-all">
      {/* Шапка */}
      <div className="mb-2 flex items-center justify-between gap-4 flex-wrap">
        <div className="font-bold text-xl md:text-2xl flex items-center gap-2 text-black">
          <span className="text-primary">Формула продукта DealsNext</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            size="sm"
            variant="outline"
            className="text-xs px-2 rounded"
            onClick={() => window.open("https://dealsnext.su/presentation.pdf", "_blank")}
          >
            <Download className="w-4 h-4 mr-1" /> Скачать презентацию
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="text-xs px-2 rounded"
            onClick={() =>
              window.open("https://dealsnext.su/demo", "_blank")
            }
          >
            Перейти к демо
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-xs px-2 rounded text-muted-foreground"
            onClick={() => setHidden(true)}
          >
            Скрыть обзор
          </Button>
        </div>
      </div>
      {/* Подзаголовок */}
      <div className="text-base text-muted-foreground mb-5">
        Каждая сделка = управляемый актив. Вот как это работает.
      </div>
      {/* Цепочка карточек */}
      <OverviewCardsRow />
      {/* FAQ + Онбординг + Глоссарий */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="text-[15px] font-semibold mb-2">Часто задаваемые вопросы</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {FAQS.map((f, i) => (
              <li key={f.q}>
                <span className="font-medium">{f.q}</span>
                <span className="block">{f.a}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Блок Онбординга */}
        <div className="flex-1">
          <div className="text-[15px] font-semibold mb-2">🧠 Как пользоваться платформой?</div>
          <ul className="pl-2 list-disc text-sm text-muted-foreground">
            <li>Откройте любой модуль, кликнув по соответствующей карточке выше.</li>
            <li>Изучайте аналитику сделки для поиска точек роста.</li>
            <li>Воспользуйтесь подсказками в подсвеченных элементах.</li>
            <li>Пройдите <a href="https://dealsnext.su/walkthrough" target="_blank" className="underline text-blue-700">интерактивный тур платформы</a>.</li>
          </ul>
          <div className="mt-2">
            <OverviewGlossary />
          </div>
        </div>
      </div>
    </section>
  );
}
