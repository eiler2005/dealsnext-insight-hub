
import { useNavigate } from "react-router-dom";
import { Layers, FileText, Book, TrendingUp, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const modules = [
  {
    key: "product",
    label: "Продукт",
    icon: Layers,
    color: "bg-blue-100 text-blue-700",
    desc: "В каталоге — себестоимость, прайс, типы клиентов",
    route: "/ProductRegistry",
  },
  {
    key: "deal",
    label: "Сделка",
    icon: FileText,
    color: "bg-orange-100 text-orange-700",
    desc: "Сделка как актив — условия, структура, жизненный цикл",
    route: "/DealProfitability",
  },
  {
    key: "condition",
    label: "Инд. условия",
    icon: Book,
    color: "bg-yellow-100 text-yellow-700",
    desc: "Скидки, комиссии, рассрочки — просчет P&L и влияние на выгоду",
    route: "/IndividualConditions",
  },
  {
    key: "analytics",
    label: "Аналитика",
    icon: TrendingUp,
    color: "bg-green-100 text-green-700",
    desc: "Контроль SLA, прибыльности, принятие решений",
    route: "/Dashboard",
  },
  {
    key: "ai",
    label: "Рекомендации",
    icon: Eye,
    color: "bg-purple-100 text-purple-700",
    desc: "AI Growth: точки роста, сигналы, новые возможности",
    route: "/AiRecommendations",
  },
];

export default function OverviewCardsRow() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full justify-center transition-all">
      {modules.map((mod, idx) => (
        <Card
          key={mod.key}
          role="button"
          tabIndex={0}
          className={`min-w-[140px] sm:w-1/5 px-3 py-3 cursor-pointer clickable-card border-2 border-transparent hover:border-primary hover:shadow-lg transition flex-1 flex flex-col items-center gap-2 ${mod.color}`}
          onClick={() => navigate(mod.route)}
        >
          <mod.icon size={32} />
          <div className="font-semibold text-base">{mod.label}</div>
          <div className="text-xs text-muted-foreground text-center">{mod.desc}</div>
          {idx < modules.length - 1 && (
            <span className="hidden sm:block absolute top-1/2 right-[-22px] translate-y-[-50%]">
              {/* Simple arrow; can be replaced with SVG/animation */}
              <svg width="26" height="08" viewBox="0 0 16 8"><path d="M0 4h14m0 0l-3-3m3 3l-3 3" stroke="#b2b2b2" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          )}
        </Card>
      ))}
    </div>
  );
}
