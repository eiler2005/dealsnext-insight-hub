
import {
  Gift,
  Percent,
  CreditCard,
  BadgeDollarSign,
  Package,
  FileBarChart2,
  Users,
  Timer,
  FileLock2,
  TrendingDown,
} from "lucide-react";

const typeTiles = [
  {
    title: "Финансовые",
    icon: CreditCard,
    description: "Рассрочка, отсрочка, бонусы, возврат.",
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    title: "Продуктовые",
    icon: Package,
    description: "Пакетные предложения, временные лицензии.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    title: "Ценовые",
    icon: Percent,
    description: "Инд. скидки, сезонные, комиссии.",
    color: "bg-pink-50 text-pink-700",
  },
  {
    title: "SLA/юридические",
    icon: Timer,
    description: "Исключения по срокам, обслуживание.",
    color: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    title: "Партнёрские",
    icon: Users,
    description: "Совместное развитие, MFC.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Комиссионные",
    icon: BadgeDollarSign,
    description: "Проценты, фикс за прибыль/оборот.",
    color: "bg-yellow-50 text-yellow-700",
  },
];

export default function ConditionTypeTiles() {
  return (
    <div className="w-full flex gap-3 overflow-x-auto pb-2">
      {typeTiles.map(t => (
        <div
          key={t.title}
          className={`shrink-0 flex flex-col items-center p-4 rounded-xl min-w-[160px] border border-slate-200 hover:shadow-md transition bg-white ${t.color}`}
        >
          <div className="mb-2">
            <t.icon className="w-7 h-7" />
          </div>
          <div className="font-bold text-sm mb-1">{t.title}</div>
          <div className="text-xs text-slate-500 text-center">{t.description}</div>
        </div>
      ))}
    </div>
  );
}
