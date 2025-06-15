
import {
  LayoutDashboard,
  DollarSign,
  Users,
  Briefcase,
  TrendingUp,
  BrainCircuit,
  FileText,
  Book,
  FileSignature,
  type LucideIcon,
  LineChart,
  Target,
  Clock,
  ArrowUp,
  ArrowDown,
  Scale,
} from "lucide-react";

export const navItems = [
  { name: "Дашборд", path: "/", icon: LayoutDashboard },
  { name: "Прибыльность сделок", path: "/deal-profitability", icon: DollarSign },
  { name: "Инсайты по клиентам", path: "/client-insights", icon: Users },
  { name: "Эффективность продуктов", path: "/product-effectiveness", icon: Briefcase },
  { name: "Воронка и процесс продаж", path: "/sales-funnel", icon: TrendingUp },
  { name: "AI-рекомендации", path: "/ai-recommendations", icon: BrainCircuit },
  { name: "Отчёты и экспорт", path: "/reports-export", icon: FileText },
  { name: "Реестр продуктов", path: "/product-registry", icon: Book },
  { name: "Реестр клиентов", path: "/client-registry", icon: Users },
  { name: "Индивидуальные условия", path: "/individual-conditions", icon: FileSignature },
];

export const kpiData = [
  {
    title: "Общая прибыль",
    value: "₽2.4 млрд",
    change: "+12.5%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "Активные сделки",
    value: "1,247",
    change: "+8.2%",
    changeType: "increase",
    icon: Briefcase,
  },
  {
    title: "Средний SLA",
    value: "4.2 дня",
    change: "-0.8 дня",
    changeType: "decrease",
    icon: Clock,
  },
  {
    title: "Конверсия",
    value: "73.4%",
    change: "+2.1%",
    changeType: "increase",
    icon: Target,
  },
];

export const chartData = [
  { month: "Янв", прибыль: 200, sla: 5.5 },
  { month: "Фев", прибыль: 220, sla: 5.2 },
  { month: "Мар", прибыль: 250, sla: 4.9 },
  { month: "Апр", прибыль: 230, sla: 5.0 },
  { month: "Май", прибыль: 280, sla: 4.5 },
  { month: "Июн", прибыль: 310, sla: 4.2 },
];

export const aiInsightsData = [
  {
    title: "Потенциал роста",
    description: "3 клиента готовы к допродажам на ₽180 млн",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Риск оттока",
    description: "2 клиента снизили активность на 40%",
    icon: ArrowDown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Оптимизация",
    description: "Сократить SLA на 1.2 дня в сегменте МСБ",
    icon: Scale,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Проблемные зоны",
    description: "Убыточность в регионах выросла на 15%",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
];
