import { LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus } from "lucide-react";

export const kpiData = [
  {
    title: "Общая прибыль",
    value: "$2.5M",
    trend: "+15%",
    description: "По сравнению с прошлым месяцем",
  },
  {
    title: "Средний чек",
    value: "$12K",
    trend: "-5%",
    description: "По сравнению с прошлым месяцем",
  },
  {
    title: "Новые клиенты",
    value: "120",
    trend: "+20%",
    description: "По сравнению с прошлым месяцем",
  },
  {
    title: "Удержание клиентов",
    value: "85%",
    trend: "+3%",
    description: "По сравнению с прошлым месяцем",
  },
];

export const aiInsightsData = [
  {
    title: "Оптимизация цен",
    description: "Рекомендации по ценообразованию для увеличения прибыли.",
  },
  {
    title: "Прогноз спроса",
    description: "Прогнозирование спроса на основе исторических данных.",
  },
  {
    title: "Персонализация предложений",
    description: "Создание персонализированных предложений для клиентов.",
  },
  {
    title: "Автоматизация маркетинга",
    description: "Автоматизация маркетинговых кампаний для привлечения клиентов.",
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
