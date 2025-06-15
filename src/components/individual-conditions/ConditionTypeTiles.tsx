
import {
  Gift,
  Percent,
  CreditCard,
  BadgeDollarSign,
  Package,
  Users,
  Timer,
} from "lucide-react";

const typeTiles = [
  {
    title: "Финансовые",
    icon: CreditCard,
    description: "Рассрочка, отсрочка, бонусы, возврат.",
    color: "bg-indigo-50 text-indigo-700",
    iconColor: "text-[#3D36CC]",
  },
  {
    title: "Продуктовые",
    icon: Package,
    description: "Пакетные предложения, временные лицензии.",
    color: "bg-orange-50 text-orange-700",
    iconColor: "text-[#C04506]",
  },
  {
    title: "Ценовые",
    icon: Percent,
    description: "Инд. скидки, сезонные, комиссии.",
    color: "bg-pink-50 text-pink-700",
    iconColor: "text-[#D51D59]",
  },
  {
    title: "SLA/юридические",
    icon: Timer,
    description: "Исключения по срокам, обслуживание.",
    color: "bg-fuchsia-50 text-fuchsia-700",
    iconColor: "text-[#892BD3]",
  },
  {
    title: "Партнёрские",
    icon: Users,
    description: "Совместное развитие, MFC.",
    color: "bg-emerald-50 text-emerald-700",
    iconColor: "text-[#16895D]",
  },
  {
    title: "Комиссионные",
    icon: BadgeDollarSign,
    description: "Проценты, фикс за прибыль/оборот.",
    color: "bg-yellow-50 text-yellow-700",
    iconColor: "text-[#F5A623]",
  },
];

export default function ConditionTypeTiles() {
  return (
    <div className="w-full flex flex-col gap-4 mb-2">
      <div className="text-lg font-semibold text-slate-800 mb-1 pl-1">Типы условий</div>
      <div className="w-full flex gap-3 overflow-x-auto pb-2">
        {typeTiles.map(t => (
          <div
            key={t.title}
            className={`shrink-0 flex flex-col items-center p-5 rounded-xl min-w-[220px] max-w-[260px] border border-slate-200 shadow-sm hover:shadow-md transition bg-white ${t.color}`}
            style={{ boxShadow: "0 2px 8px 0 rgba(57,69,153,0.04)" }}
          >
            <div className={`mb-2 ${t.iconColor}`}>
              <t.icon className="w-9 h-9" strokeWidth={2.2} />
            </div>
            <div className="font-bold text-base mb-1" style={{ color: t.iconColor }}>
              {t.title}
            </div>
            <div className="text-sm text-slate-500 text-center leading-tight">{t.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
