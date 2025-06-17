
import { LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus } from "lucide-react";

export const kpiData = [
  {
    title: "Общая прибыль",
    value: "$2.5M",
    trend: "+15%",
    description: "По сравнению с прошлым месяцем",
    change: "15%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Средний чек",
    value: "$12K",
    trend: "-5%",
    description: "По сравнению с прошлым месяцем",
    change: "-5%",
    changeType: "negative" as const,
    icon: BarChart2,
  },
  {
    title: "Новые клиенты",
    value: "120",
    trend: "+20%",
    description: "По сравнению с прошлым месяцем",
    change: "20%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Удержание клиентов",
    value: "85%",
    trend: "+3%",
    description: "По сравнению с прошлым месяцем",
    change: "3%",
    changeType: "positive" as const,
    icon: Package,
  },
];

export const aiInsightsData = [
  {
    title: "Оптимизация цен",
    description: "Рекомендации по ценообразованию для увеличения прибыли.",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Прогноз спроса",
    description: "Прогнозирование спроса на основе исторических данных.",
    icon: BarChart2,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Персонализация предложений",
    description: "Создание персонализированных предложений для клиентов.",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Автоматизация маркетинга",
    description: "Автоматизация маркетинговых кампаний для привлечения клиентов.",
    icon: BrainCircuit,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export const navItems = [
  {
    name: "Дашборд",
    path: "/",
    icon: "dashboard",
  },
  {
    name: "Сделки",
    path: "/deals",
    icon: "deal-profitability",
  },
  {
    name: "Прибыльность сделок",
    path: "/deal-profitability",
    icon: "deal-profitability",
  },
  {
    name: "Анализ клиентов",
    path: "/client-insights",
    icon: "client-insights",
  },
  {
    name: "Эффективность продуктов",
    path: "/product-effectiveness",
    icon: "product-effectiveness",
  },
  {
    name: "Воронка продаж",
    path: "/sales-funnel",
    icon: "sales-funnel",
  },
  {
    name: "AI рекомендации",
    path: "/ai-recommendations",
    icon: "ai-recommendations",
  },
  {
    name: "Экспорт отчетов",
    path: "/reports-export",
    icon: "reports-export",
  },
  {
    name: "Реестр продуктов",
    path: "/product-registry",
    icon: "product-registry",
  },
  {
    name: "Реестр клиентов",
    path: "/client-registry",
    icon: "client-registry",
  },
  {
    name: "Индивидуальные условия",
    path: "/individual-conditions",
    icon: "individual-conditions",
  },
];

// Chart data for dashboard
export const chartData = [
  { month: "Янв", прибыль: 2.1, sla: 3.2 },
  { month: "Фев", прибыль: 2.3, sla: 2.8 },
  { month: "Мар", прибыль: 2.5, sla: 3.1 },
  { month: "Апр", прибыль: 2.7, sla: 2.5 },
  { month: "Май", прибыль: 2.4, sla: 2.9 },
  { month: "Июн", прибыль: 2.8, sla: 2.3 },
];

// Deal profitability data
export interface Deal {
  id: string;
  client: string;
  products: string[];
  revenue: number;
  cost: number;
  profit: number;
  margin: number;
  status: string;
  date: string;
}

export const dealProfitabilityData: Deal[] = [
  {
    id: "DL-001",
    client: "ООО Технологии Будущего",
    products: ["CRM Enterprise", "Analytics Pro"],
    revenue: 3000000,
    cost: 500000,
    profit: 2500000,
    margin: 83.3,
    status: "Завершена",
    date: "2024-01-15"
  },
  {
    id: "DL-002",
    client: "АО Промышленные Решения",
    products: ["ERP Standard"],
    revenue: 2200000,
    cost: 400000,
    profit: 1800000,
    margin: 81.8,
    status: "Исполняется",
    date: "2024-02-01"
  },
  {
    id: "DL-003",
    client: "ПАО Банк Развития",
    products: ["Financial Analytics", "Risk Management"],
    revenue: 5000000,
    cost: 800000,
    profit: 4200000,
    margin: 84.0,
    status: "Завершена",
    date: "2023-11-10"
  }
];

// Sales funnel data
export const salesFunnelData = [
  { stage: "Лиды", count: 1000, conversion: 100 },
  { stage: "Квалификация", count: 300, conversion: 30 },
  { stage: "Предложение", count: 150, conversion: 15 },
  { stage: "Переговоры", count: 75, conversion: 7.5 },
  { stage: "Закрытие", count: 30, conversion: 3 },
];

// Client data
export interface Client {
  id: string;
  name: string;
  industry: string;
  revenue: number;
  deals: number;
  status: string;
  lastActivity: string;
}

export const clientsData: Client[] = [
  {
    id: "CL-001",
    name: "ООО Технологии Будущего",
    industry: "IT",
    revenue: 3000000,
    deals: 5,
    status: "Активный",
    lastActivity: "2024-01-15"
  },
  {
    id: "CL-002",
    name: "АО Промышленные Решения",
    industry: "Промышленность",
    revenue: 2200000,
    deals: 3,
    status: "Активный",
    lastActivity: "2024-02-01"
  },
  {
    id: "CL-003",
    name: "ПАО Банк Развития",
    industry: "Финансы",
    revenue: 5000000,
    deals: 8,
    status: "VIP",
    lastActivity: "2023-11-10"
  }
];

// Mock data for deals
export const dealsData = [
  {
    id: "DL-2024-001",
    client: "ООО Технологии Будущего",
    products: ["CRM Enterprise", "Analytics Pro", "Integration Suite"],
    status: "На согласовании",
    startDate: "2024-01-15",
    expectedEndDate: "2024-03-15",
    responsible: "Иванов И.И.",
    sla: "В срок",
    marginality: "Высокая",
    profitability: 2500000,
    hasUrgentTasks: true,
    conditionsType: "Индивидуальные"
  },
  {
    id: "DL-2024-002", 
    client: "АО Промышленные Решения",
    products: ["ERP Standard", "Mobile App"],
    status: "Исполняется",
    startDate: "2024-02-01",
    expectedEndDate: "2024-04-30",
    responsible: "Петрова С.А.",
    sla: "Просрочка",
    marginality: "Средняя",
    profitability: 1800000,
    hasUrgentTasks: false,
    conditionsType: "Стандартные"
  },
  {
    id: "DL-2024-003",
    client: "ПАО Банк Развития",
    products: ["Financial Analytics", "Risk Management", "Compliance Suite"],
    status: "Завершена",
    startDate: "2023-11-10",
    expectedEndDate: "2024-02-10",
    responsible: "Сидоров А.В.",
    sla: "В срок",
    marginality: "Очень высокая",
    profitability: 4200000,
    hasUrgentTasks: false,
    conditionsType: "Индивидуальные"
  },
  {
    id: "DL-2024-004",
    client: "ООО Логистика Плюс",
    products: ["Transport Management", "Warehouse Control"],
    status: "На согласовании",
    startDate: "2024-02-20",
    expectedEndDate: "2024-05-20",
    responsible: "Козлова М.П.",
    sla: "В срок",
    marginality: "Средняя",
    profitability: 1500000,
    hasUrgentTasks: true,
    conditionsType: "Стандартные"
  }
];
