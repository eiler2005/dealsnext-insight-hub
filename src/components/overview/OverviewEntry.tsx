
import { Button } from "@/components/ui/button";
import { Layers, FileText, Book, TrendingUp, Eye, Download } from "lucide-react";
import OverviewGlossary from "./OverviewGlossary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MODS = [
  {
    key: "products",
    label: "Продукт",
    icon: <Layers size={24} className="text-blue-600" />,
    color: "bg-blue-50",
    desc: "Каталог, себестоимость, прайс, типы клиентов",
    to: "/ProductRegistry",
  },
  {
    key: "deals",
    label: "Сделка",
    icon: <FileText size={24} className="text-orange-500" />,
    color: "bg-orange-50",
    desc: "Сделка как актив: условия, структура, жизненный цикл",
    to: "/DealProfitability",
  },
  {
    key: "conditions",
    label: "Инд. условия",
    icon: <Book size={24} className="text-yellow-600" />,
    color: "bg-yellow-50",
    desc: "Скидки, комиссии, рассрочки — влияние на P&L/выгоду",
    to: "/IndividualConditions",
  },
  {
    key: "analytics",
    label: "Аналитика",
    icon: <TrendingUp size={24} className="text-green-600" />,
    color: "bg-green-50",
    desc: "Контроль SLA, прибыльности, принятие решений",
    to: "/Dashboard",
  },
  {
    key: "ai",
    label: "Рекомендации",
    icon: <Eye size={24} className="text-purple-600" />,
    color: "bg-purple-50",
    desc: "AI Growth: точки роста, сигналы, новые возможности",
    to: "/AiRecommendations",
  },
];

const FAQS = [
  {
    q: "Что такое DealsNext Suite?",
    a: "Единая экосистема: Продукты, Сделки, Условия, Аналитика, AI Growth. Помогает управлять продажами, рентабельностью и развитием клиентов.",
  },
  {
    q: "Зачем нужен модуль условий?",
    a: "Позволяет гибко учитывать скидки, комиссии, различные схемы, контролировать влияние на прибыльность.",
  },
  {
    q: "Что даёт модуль AI Growth?",
    a: "Автоматические инсайты: точки роста, предложения для upsell/cross-sell и сигналы рисков.",
  },
];

const LS_KEY = "overview-section-hidden2";

export default function OverviewEntry() {
  const [hidden, setHidden] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem(LS_KEY) === "true";
    } catch {
      return false;
    }
  });
  const navigate = useNavigate();

  if (hidden) {
    return (
      <div className="bg-muted px-3 py-2 flex justify-between items-center border-b rounded select-none mt-0">
        <span className="text-xs text-muted-foreground font-semibold">🔍 Как работает система</span>
        <Button variant="ghost" size="sm" className="text-xs px-2" onClick={() => setHidden(false)}>
          Показать
        </Button>
      </div>
    );
  }

  return (
    <section className="
      bg-[#f9fafb]
      p-4 pb-6
      rounded-xl
      mb-2
      border-b border-slate-200
      shadow-sm
      animate-fade-in
      flex flex-col
      max-w-[330px]
      mx-auto
    "
    style={{ zIndex: 1 }}>
      {/* Header */}
      <div className="mb-1">
        <div className="font-bold text-lg leading-tight text-primary mb-1">Формула продукта DealsNext</div>
        <div className="text-xs mb-2 text-muted-foreground">Каждая сделка = управляемый актив. Вот как это работает.</div>
      </div>

      {/* Cards module chain */}
      <div className="flex gap-2 flex-nowrap overflow-x-auto pb-1 mb-2 no-scrollbar">
        {MODS.map((mod) => (
          <button onClick={() => navigate(mod.to)} key={mod.key}
            className={`min-w-[90px] flex-1 flex flex-col items-center text-xs px-1 pt-2 pb-1 rounded-md border border-transparent hover:border-primary transition shadow-sm ${mod.color} clickable-card`}
            style={{ flexGrow: 1, flexShrink: 0, marginRight: 4, maxWidth: 110 }}>
            <span>{mod.icon}</span>
            <span className="font-semibold">{mod.label}</span>
            <span className="text-[11px] text-muted-foreground mt-0.5 text-center">{mod.desc}</span>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mb-2">
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

      {/* Onboarding instructions */}
      <div className="mb-2">
        <div className="text-xs font-medium mb-1">🧠 Как пользоваться платформой?</div>
        <ul className="pl-4 list-disc text-xs text-muted-foreground">
          <li>Откройте любой модуль, кликнув по карточке выше.</li>
          <li>Изучайте аналитику сделки для поиска точек роста.</li>
          <li>Воспользуйтесь подсказками на экране для понимания интерфейса.</li>
          <li>
            Пройдите{" "}
            <a href="https://dealsnext.su/walkthrough" target="_blank" className="underline text-blue-700">
              интерактивный тур платформы
            </a>.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mb-2">
        <div className="text-xs font-medium mb-1">Часто задаваемые вопросы</div>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {FAQS.map((f) => (
            <li key={f.q}>
              <span className="font-medium">{f.q}</span><span className="block">{f.a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mini glossary */}
      <OverviewGlossary />

    </section>
  );
}
