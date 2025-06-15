
import { Layers, FileText, Book, TrendingUp, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import OverviewGlossary from "@/components/overview/OverviewGlossary";
import { useNavigate } from "react-router-dom";

const MODS = [
  {
    key: "products",
    label: "Продукт",
    icon: <Layers size={36} className="text-blue-600" />,
    color: "bg-blue-50",
    desc: "Каталог, себестоимость, прайс, типы клиентов",
    to: "/product-registry",
  },
  {
    key: "deals",
    label: "Сделка",
    icon: <FileText size={36} className="text-orange-500" />,
    color: "bg-orange-50",
    desc: "Сделка как актив: условия, структура, жизненный цикл",
    to: "/deal-profitability",
  },
  {
    key: "conditions",
    label: "Инд. условия",
    icon: <Book size={36} className="text-yellow-600" />,
    color: "bg-yellow-50",
    desc: "Скидки, комиссии, рассрочки — влияние на P&L/выгоду",
    to: "/individual-conditions",
  },
  {
    key: "analytics",
    label: "Аналитика",
    icon: <TrendingUp size={36} className="text-green-600" />,
    color: "bg-green-50",
    desc: "Контроль SLA, прибыльности, принятие решений",
    to: "/dashboard",
  },
  {
    key: "ai",
    label: "Рекомендации",
    icon: <Eye size={36} className="text-purple-600" />,
    color: "bg-purple-50",
    desc: "AI Growth: точки роста, сигналы, новые возможности",
    to: "/ai-recommendations",
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

export default function AboutSystem() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Формула продукта DealsNext</h1>
        <p className="text-slate-700 text-base md:text-lg mb-4">
          Каждая сделка = управляемый актив. Вот как это работает.
        </p>
      </div>
      {/* Modules cards */}
      <div className="flex flex-wrap gap-3 mb-4 justify-between">
        {MODS.map((mod) => (
          <button
            key={mod.key}
            className={`flex-1 min-w-[135px] max-w-[180px] flex flex-col items-center px-3 pt-4 pb-3 rounded-xl border border-slate-200 shadow-sm transition hover:shadow-lg duration-150 ${mod.color} clickable-card`}
            style={{ flexBasis: "18%" }}
            onClick={() => navigate(mod.to)}
          >
            <span>{mod.icon}</span>
            <span className="font-semibold text-base mt-2 mb-1 text-slate-900">{mod.label}</span>
            <span className="text-xs text-slate-700 text-center mb-0">{mod.desc}</span>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 items-center mb-5">
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-3"
          onClick={() => window.open("https://dealsnext.su/presentation.pdf", "_blank")}
        >
          <Download className="w-4 h-4 mr-1" /> Скачать презентацию
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="text-xs px-3"
          onClick={() => window.open("https://dealsnext.su/demo", "_blank")}
        >
          Перейти к демо
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-xs px-3 text-muted-foreground"
          onClick={() => window.open("https://dealsnext.su/walkthrough", "_blank")}
        >
          Интерактивный тур платформы
        </Button>
      </div>

      {/* Onboarding Instructions */}
      <div className="mb-4 bg-white rounded-xl p-4 border border-slate-100">
        <div className="text-base font-medium mb-1">🧠 Как пользоваться платформой?</div>
        <ul className="pl-5 list-disc text-sm text-slate-700 mb-0">
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

      {/* FAQ Section */}
      <div className="mb-4 bg-white rounded-xl p-4 border border-slate-100">
        <div className="text-base font-medium mb-2">Часто задаваемые вопросы</div>
        <ul className="space-y-2 text-sm text-slate-700">
          {FAQS.map((f) => (
            <li key={f.q}>
              <div className="font-semibold">{f.q}</div>
              <div>{f.a}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Glossary */}
      <OverviewGlossary />
    </div>
  );
}
