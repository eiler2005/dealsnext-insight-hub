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
  AlertTriangle,
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

type Kpi = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
};

export const kpiData: Kpi[] = [
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

type AiInsight = {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
}

export const aiInsightsData: AiInsight[] = [
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

export type Deal = {
  id: string;
  clientName: string;
  product: string;
  amount: number;
  profit: number;
  status: "Выполнена" | "В работе" | "Отменена";
  manager: string;
  date: string;
};

export const dealProfitabilityData: Deal[] = [
  { id: 'deal-001', clientName: 'ПАО "ТехноКорп"', product: 'Облачная платформа', amount: 1200000, profit: 300000, status: 'Выполнена', manager: 'Иванов И.И.', date: '2025-05-15' },
  { id: 'deal-002', clientName: 'ООО "Ритейл-Сервис"', product: 'CRM система', amount: 850000, profit: 150000, status: 'Выполнена', manager: 'Петров П.П.', date: '2025-05-20' },
  { id: 'deal-003', clientName: 'АО "Финанс-Групп"', product: 'Аналитическая платформа', amount: 2500000, profit: 750000, status: 'В работе', manager: 'Сидорова А.В.', date: '2025-06-01' },
  { id: 'deal-004', clientName: 'ИП Смирнов В.А.', product: 'Консалтинг', amount: 300000, profit: 120000, status: 'В работе', manager: 'Иванов И.И.', date: '2025-06-05' },
  { id: 'deal-005', clientName: 'ООО "Логистика Плюс"', product: 'ERP система', amount: 3200000, profit: 900000, status: 'Отменена', manager: 'Петров П.П.', date: '2025-06-10' },
  { id: 'deal-006', clientName: 'ПАО "ТехноКорп"', product: 'Техподдержка', amount: 500000, profit: 250000, status: 'Выполнена', manager: 'Сидорова А.В.', date: '2025-06-12' },
];

export type FunnelStage = {
  name: string;
  value: number;
  fill: string;
};

export const salesFunnelData: FunnelStage[] = [
  { name: 'Новые лиды', value: 100, fill: '#8884d8' },
  { name: 'Квалификация', value: 80, fill: '#83a6ed' },
  { name: 'Предложение', value: 50, fill: '#8dd1e1' },
  { name: 'Переговоры', value: 30, fill: '#82ca9d' },
  { name: 'Закрытие сделки', value: 20, fill: '#a4de6c' },
];

export type Client = {
  id: string;
  name: string;
  profit: number;
  sla: number;
  status: string;
  lastDealDate: string;
  manager: string;
  industry: string;
  region: string;
  activity: string;
  products: string[];
  customTerms: boolean;
  comments: string;
  type?: string; // "VIP" | "Страт." | "Станд."
  tags?: string[]; // ["тендер", "key client", "есть заметки", ...]
};

export const clientsData: Client[] = [
  {
    id: "client-001",
    name: 'ООО "ТехПром"',
    profit: 12300000,
    sla: 3.2,
    status: "🔴 Риск",
    lastDealDate: "2025-05-15",
    manager: "И. Сидоров",
    industry: "Логистика",
    region: "Москва",
    activity: "Низкая (2 сделки за 3 мес)",
    products: ["Корп. кредит", "Овердрафт"],
    customTerms: false,
    comments: "Возможный отток, требуется встреча.",
    type: "Станд.",
    tags: ["тендер"]
  },
  {
    id: "client-002",
    name: "АО “ЛогистикГрупп”",
    profit: 24800000,
    sla: 2.0,
    status: "🟢 Активный",
    lastDealDate: "2025-06-11",
    manager: "А. Белова",
    industry: "Логистика",
    region: "Поволжье",
    activity: "Высокая (5 сделок за квартал)",
    products: ["Факторинг", "Овердрафт"],
    customTerms: true,
    comments: "Расширяют бизнес в Поволжье, планируется доп. сделка в Q3.",
    type: "VIP",
    tags: ["key client"]
  },
  {
    id: "client-003",
    name: "ЗАО “Ритейл-Холдинг”",
    profit: 8500000,
    sla: 5.4,
    status: "🟡 Низкая активность",
    lastDealDate: "2025-04-29",
    manager: "М. Орлов",
    industry: "Ритейл",
    region: "Москва",
    activity: "Средняя (3 сделки за 3 мес)",
    products: ["Гарантия", "Лизинг"],
    customTerms: false,
    comments: "Потеря одного из ключевых контрактов.",
    type: "Страт.",
    tags: ["есть заметки"]
  },
  // ... добавьте по необходимости еще клиентов ...
];
