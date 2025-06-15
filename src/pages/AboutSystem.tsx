import { Layers, FileText, Book, TrendingUp, Eye, ArrowRight, Users, BarChart3, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import OverviewGlossary from "@/components/overview/OverviewGlossary";
import { useNavigate } from "react-router-dom";
import React from "react";

const MODS = [
  {
    key: "products",
    label: "Продукт",
    icon: <Layers size={32} className="text-blue-600" />,
    desc: "Каталог, себестоимость, прайс, типы клиентов",
    to: "/product-registry",
    color: "bg-blue-50",
    arrow: true,
    explain: "Каталог всех продуктов/услуг, данные для дальнейшей аналитики."
  },
  {
    key: "deals",
    label: "Сделка",
    icon: <FileText size={32} className="text-orange-500" />,
    desc: "Сделка как актив: условия, структура, жизненный цикл",
    to: "/deal-profitability",
    color: "bg-orange-50",
    arrow: true,
    explain: "Сделка = набор продуктов + индивидуальные условия клиента."
  },
  {
    key: "analytics",
    label: "Аналитика",
    icon: <TrendingUp size={32} className="text-green-600" />,
    desc: "Контроль SLA, прибыльности, принятие решений",
    to: "/dashboard",
    color: "bg-green-50",
    arrow: true,
    explain: "Аналитика по исполнению сделки, прибыли, SLA, AI-подсказки."
  },
  {
    key: "ai",
    label: "Рекомендации",
    icon: <Eye size={32} className="text-purple-600" />,
    desc: "AI Growth: точки роста, сигналы, новые возможности",
    to: "/ai-recommendations",
    color: "bg-purple-50",
    arrow: false,
    explain: "AI-инсайты и подсказки для роста и удержания."
  },
];

// Ссылки "Что посмотреть первым"
const QUICK_LINKS = [
  {
    icon: <FileText className="text-orange-500 mr-1" size={18} />,
    label: "Сделки в работе",
    to: "/deal-profitability",
  },
  {
    icon: <AlertCircle className="text-yellow-700 mr-1" size={18} />,
    label: "Просроченные SLA",
    to: "/dashboard",
  },
  {
    icon: <BarChart3 className="text-green-600 mr-1" size={18} />,
    label: "ТОП-5 клиентов по прибыли",
    to: "/client-insights",
  },
];

// FAQ
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
  {
    q: "Чем DealsNext отличается от CRM?",
    a: "CRM работает с контактами и лидами. DealsNext — управляет продуктами, прибылью и условиями сделок.",
  },
  {
    q: "Можно ли интегрировать DealsNext с другими системами?",
    a: "Да, поддерживается интеграция с CRM, ERP, BI, хранилищами и внешними площадками.",
  },
  {
    q: "Какую ценность получает топ-менеджер?",
    a: "Прозрачность по сделкам, анализ условий, контроль SLA и прибыли, эффективность команды в цифрах.",
  },
];

// Сценарий "Как живёт сделка"
const LIFE_SCENARIO = [
  {
    title: "1. Идея/Запрос клиента",
    content: "Клиент проявляет интерес или приходит запрос от менеджера. Оцениваются возможные продукты.",
  },
  {
    title: "2. Формирование сделки",
    content: "В сделку добавляют продукты, определяют условия, рассчитывают маржинальность.",
  },
  {
    title: "3. Исполнение и SLA",
    content: "Контроль выполнения договорённостей, автоматический мониторинг SLA, аналитика по исполнению.",
  },
  {
    title: "4. Моделирование роста",
    content: "AI анализирует успешность, даёт рекомендации: upsell, новые возможности или оптимизацию условий.",
  },
];

function FlowChain() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center my-4 justify-center gap-0 relative z-10">
      {MODS.map((mod, idx) => (
        <React.Fragment key={mod.key}>
          <div
            className={`relative flex flex-col items-center px-4 py-3 min-w-[120px] max-w-[150px] rounded-xl border border-slate-200 shadow-sm transition-all cursor-pointer hover:shadow-md group ${mod.color}`}
            tabIndex={0}
            onClick={() => navigate(mod.to)}
            title={mod.explain}
          >
            {mod.icon}
            <span className="font-semibold text-sm mt-1 text-slate-800">{mod.label}</span>
            <span className="text-[11px] text-slate-700 text-center">{mod.desc}</span>
            <span className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white p-2 border rounded shadow-md w-max z-40 text-xs text-slate-700">
              {mod.explain}
            </span>
          </div>
          {mod.arrow && (
            <span className="mx-2">
              <ArrowRight size={28} className="text-slate-400" />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function RoleWalkthroughStub() {
  return (
    <div className="bg-slate-50 border p-3 rounded-md mb-4 flex flex-col gap-2">
      <div className="font-medium text-sm mb-1"><Users className="inline mr-1" size={18}/>Выберите свою роль:</div>
      <div className="flex gap-3 flex-wrap">
        <Button size="sm" variant="outline" className="text-xs">Менеджер</Button>
        <Button size="sm" variant="outline" className="text-xs">Аналитик</Button>
        <Button size="sm" variant="outline" className="text-xs">Руководитель</Button>
        <span className="ml-2 text-xs text-muted-foreground">(рольвая настройка - скоро)</span>
      </div>
    </div>
  );
}

export default function AboutSystem() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      {/* Закрепленный заголовок */}
      <div className="mb-3">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">📘 Обзор DealsNext Suite — как работает система</h1>
        <div className="text-base mb-2 text-slate-700">Каждая сделка = управляемый актив. Формула и шаги работы платформы:</div>
      </div>

      {/* Формула продукта: расширенное описание */}
      <div className="mb-2 rounded-lg p-4 border border-blue-100 bg-blue-50/50">
        <div className="font-medium text-blue-800 text-lg mb-2">Формула продукта DealsNext Suite</div>
        <ul className="list-disc pl-5 text-slate-800 text-sm space-y-1">
          <li><b>Продукт = единица ценности:</b> каталог, себестоимость, тип клиента, ROI, детальная аналитика</li>
          <li><b>Сделка:</b> набор продуктов, индивидуальные условия, жизненный цикл, маржинальность</li>
          <li><b>Аналитика:</b> контроль SLA, прибыльность, AI-комментарии, графики и тренды</li>
          <li><b>Рекомендации (AI Growth):</b> инсайты для роста, upsell/cross-sell, предупреждение рисков</li>
        </ul>
      </div>

      {/* Интерактивная flow-цепочка */}
      <FlowChain />

      {/* Пример сквозного сценария */}
      <div className="mb-4 bg-slate-50 border rounded p-4 text-sm text-slate-700">
        <div className="font-semibold text-slate-800 mb-1">Пример сквозного сценария:</div>
        <div className="space-y-1 text-[15px]">
          <div>
            <span className="mr-1 rounded px-1 py-0.5 font-bold" style={{ background: "#eaf3fc", color: "#2463eb" }}>🟦</span>
            <b>Продукт:</b> “API-доступ”
          </div>
          <div>
            <span className="mr-1 rounded px-1 py-0.5 font-bold" style={{ background: "#fff5ea", color: "#ff9500" }}>🟧</span>
            <b>Сделка:</b> клиент получает API + индивидуальная скидка 10%
          </div>
          <div>
            <span className="mr-1 rounded px-1 py-0.5 font-bold" style={{ background: "#e8faed", color: "#25aa6a" }}>🟩</span>
            <b>Аналитика:</b> SLA = 5 дней (норма), маржа сделки — 7%
          </div>
          <div>
            <span className="mr-1 rounded px-1 py-0.5 font-bold" style={{ background: "#f3eafe", color: "#9333ea" }}>🟪</span>
            <b>AI Growth:</b> система предлагает перевести клиента на пакет “Pro”
          </div>
          <div>
            <span className="mr-1 rounded px-1 py-0.5 font-bold" style={{ background: "#f0f4f8", color: "#16437e" }}>🎯</span>
            <b>Ожидаемый эффект:</b> маржинальность увеличится до 12%, SLA снизится до 3 дней
          </div>
        </div>
      </div>

      {/* Блок сценария */}
      <Accordion type="single" collapsible className="mb-4">
        {LIFE_SCENARIO.map((step, i) => (
          <AccordionItem key={step.title} value={`step${i}`}>
            <AccordionTrigger className="text-[15px] text-slate-800">{step.title}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Быстрые ссылки */}
      <div className="mb-4 bg-white/60 border rounded-xl p-3 flex flex-col gap-2">
        <div className="font-medium text-slate-800 text-sm mb-1">Что посмотреть первым:</div>
        <div className="flex flex-wrap gap-3">
          {QUICK_LINKS.map(link => (
            <Button
              key={link.label}
              size="sm"
              variant="outline"
              className="text-xs px-2 flex items-center"
              onClick={() => navigate(link.to)}
            >
              {link.icon} {link.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Ролевой walkthrough-stub */}
      <RoleWalkthroughStub />

      {/* Actions */}
      <div className="flex flex-wrap gap-3 items-center mb-5">
        <Button
          size="sm"
          variant="outline"
          className="text-xs px-3"
          onClick={() => window.open("https://dealsnext.su/presentation.pdf", "_blank")}
        >
          Скачать презентацию
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
      {/* FAQ */}
      <div className="mb-4 bg-white rounded-xl p-4 border border-slate-100">
        <div className="text-base font-semibold mb-2">#### Часто задаваемые вопросы</div>
        <div className="space-y-4 text-[15px]">
          <div>
            <span className="font-semibold">Что такое DealsNext Suite?</span>
            <br />
            Единая экосистема: Продукты, Сделки, Условия, Аналитика, AI Growth. Помогает управлять продажами, рентабельностью и развитием клиентов.
          </div>
          <div>
            <span className="font-semibold">Зачем нужен модуль условий?</span>
            <br />
            Позволяет гибко учитывать скидки, комиссии, различные схемы, контролировать влияние на прибыльность.
          </div>
          <div>
            <span className="font-semibold">Что даёт модуль AI Growth?</span>
            <br />
            Автоматические инсайты: точки роста, предложения для upsell/cross-sell и сигналы рисков.
          </div>
          <div>
            <span className="font-semibold">Чем DealsNext отличается от CRM?</span>
            <br />
            CRM работает с контактами и лидами. DealsNext — управляет продуктами, прибылью и условиями сделок.
          </div>
          <div>
            <span className="font-semibold">Можно ли интегрировать DealsNext с другими системами?</span>
            <br />
            Да, поддерживается интеграция с CRM, ERP, BI, хранилищами и внешними площадками.
          </div>
          <div>
            <span className="font-semibold">Какую ценность получает топ-менеджер?</span>
            <br />
            Прозрачность по сделкам, анализ условий, контроль SLA и прибыли, эффективность команды в цифрах.
          </div>
        </div>
      </div>
      {/* Глоссарий */}
      <OverviewGlossary />
    </div>
  );
}
