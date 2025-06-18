import { LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus } from "lucide-react";

export const kpiData = [
  {
    title: "Общая прибыль",
    value: "$2.5M",
    trend: "+15%",
    description: "По сравнению с прошлым месяцем",
    change: "15%",
    changeType: "increase" as const,
    icon: DollarSign,
  },
  {
    title: "Средний чек",
    value: "$12K",
    trend: "-5%",
    description: "По сравнению с прошлым месяцем",
    change: "-5%",
    changeType: "decrease" as const,
    icon: BarChart2,
  },
  {
    title: "Новые клиенты",
    value: "120",
    trend: "+20%",
    description: "По сравнению с прошлым месяцем",
    change: "20%",
    changeType: "increase" as const,
    icon: Users,
  },
  {
    title: "Удержание клиентов",
    value: "85%",
    trend: "+3%",
    description: "По сравнению с прошлым месяцем",
    change: "3%",
    changeType: "increase" as const,
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
    name: "Мониторинг команды",
    path: "/team-monitoring",
    icon: "users",
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
  clientName?: string;
  products: string[];
  product?: string;
  revenue: number;
  cost: number;
  profit: number;
  margin: number;
  status: string;
  date: string;
  amount?: number;
  manager?: string;
  startDate?: string;
  expectedEndDate?: string;
  responsible?: string;
  sla?: string;
  marginality?: string;
  profitability?: number;
  hasUrgentTasks?: boolean;
  conditionsType?: string;
}

export const dealProfitabilityData: Deal[] = [
  {
    id: "DL-001",
    client: "ООО Технологии Будущего",
    clientName: "ООО Технологии Будущего",
    products: ["РКО Премиум", "ДБО"],
    product: "РКО Премиум",
    revenue: 3000000,
    cost: 500000,
    profit: 2500000,
    margin: 83.3,
    status: "Завершена",
    date: "2024-01-15",
    amount: 3000000,
    manager: "Иванов И.И."
  },
  {
    id: "DL-002",
    client: "АО Промышленные Решения",
    clientName: "АО Промышленные Решения",
    products: ["РКО Стандарт"],
    product: "РКО Стандарт",
    revenue: 2200000,
    cost: 400000,
    profit: 1800000,
    margin: 81.8,
    status: "Исполняется",
    date: "2024-02-01",
    amount: 2200000,
    manager: "Петрова С.А."
  },
  {
    id: "DL-003",
    client: "ПАО Банк Развития",
    clientName: "ПАО Банк Развития",
    products: ["Банковское сопровождение", "Овердрафт"],
    product: "Банковское сопровождение",
    revenue: 5000000,
    cost: 800000,
    profit: 4200000,
    margin: 84.0,
    status: "Завершена",
    date: "2023-11-10",
    amount: 5000000,
    manager: "Сидоров А.В."
  },
  {
    id: "DL-004",
    client: "ООО Торговый Дом Сибирь",
    clientName: "ООО Торговый Дом Сибирь",
    products: ["Эквайринг", "ДБО"],
    product: "Эквайринг",
    revenue: 1800000,
    cost: 300000,
    profit: 1500000,
    margin: 83.3,
    status: "Завершена",
    date: "2024-01-20",
    amount: 1800000,
    manager: "Козлова М.П."
  },
  {
    id: "DL-005",
    client: "ЗАО Металлург",
    clientName: "ЗАО Металлург",
    products: ["Овердрафт"],
    product: "Овердрафт",
    revenue: 2500000,
    cost: 450000,
    profit: 2050000,
    margin: 82.0,
    status: "Исполняется",
    date: "2024-02-05",
    amount: 2500000,
    manager: "Николаев В.К."
  },
  {
    id: "DL-006",
    client: "ИП Романов А.А.",
    clientName: "ИП Романов А.А.",
    products: ["РКО Малый бизнес", "Эквайринг"],
    product: "РКО Малый бизнес",
    revenue: 800000,
    cost: 150000,
    profit: 650000,
    margin: 81.25,
    status: "Завершена",
    date: "2024-01-28",
    amount: 800000,
    manager: "Иванов И.И."
  },
  {
    id: "DL-007",
    client: "ООО Строительные Технологии",
    clientName: "ООО Строительные Технологии",
    products: ["Банковское сопровождение", "ДБО"],
    product: "Банковское сопровождение",
    revenue: 3500000,
    cost: 600000,
    profit: 2900000,
    margin: 82.9,
    status: "Исполняется",
    date: "2024-02-10",
    amount: 3500000,
    manager: "Петрова С.А."
  },
  {
    id: "DL-008",
    client: "АО Нефтегаз Урал",
    clientName: "АО Нефтегаз Урал",
    products: ["РКО Корпоративный", "Овердрафт", "ДБО"],
    product: "РКО Корпоративный",
    revenue: 6200000,
    cost: 950000,
    profit: 5250000,
    margin: 84.7,
    status: "Завершена",
    date: "2024-01-12",
    amount: 6200000,
    manager: "Сидоров А.В."
  },
  {
    id: "DL-009",
    client: "ООО Ритейл Плюс",
    clientName: "ООО Ритейл Плюс",
    products: ["Эквайринг", "РКО Стандарт"],
    product: "Эквайринг",
    revenue: 1300000,
    cost: 220000,
    profit: 1080000,
    margin: 83.1,
    status: "Исполняется",
    date: "2024-02-15",
    amount: 1300000,
    manager: "Козлова М.П."
  },
  {
    id: "DL-010",
    client: "ПАО Агропромышленный Холдинг",
    clientName: "ПАО Агропромышленный Холдинг",
    products: ["Банковское сопровождение", "Овердрафт"],
    product: "Банковское сопровождение",
    revenue: 4100000,
    cost: 700000,
    profit: 3400000,
    margin: 82.9,
    status: "Завершена",
    date: "2024-01-25",
    amount: 4100000,
    manager: "Николаев В.К."
  },
  {
    id: "DL-011",
    client: "ООО Логистические Решения",
    clientName: "ООО Логистические Решения",
    products: ["РКО Премиум", "ДБО", "Эквайринг"],
    product: "РКО Премиум",
    revenue: 2800000,
    cost: 480000,
    profit: 2320000,
    margin: 82.9,
    status: "Исполняется",
    date: "2024-02-08",
    amount: 2800000,
    manager: "Иванов И.И."
  },
  {
    id: "DL-012",
    client: "АО Фармацевтическая Компания",
    clientName: "АО Фармацевтическая Компания",
    products: ["Банковское сопровождение"],
    product: "Банковское сопровождение",
    revenue: 3200000,
    cost: 550000,
    profit: 2650000,
    margin: 82.8,
    status: "Завершена",
    date: "2024-01-30",
    amount: 3200000,
    manager: "Петрова С.А."
  }
];

// Sales funnel data
export const salesFunnelData = [
  { stage: "Лиды", count: 1000, conversion: 100, name: "Лиды", value: 1000, fill: "#8884d8" },
  { stage: "Квалификация", count: 300, conversion: 30, name: "Квалификация", value: 300, fill: "#82ca9d" },
  { stage: "Предложение", count: 150, conversion: 15, name: "Предложение", value: 150, fill: "#ffc658" },
  { stage: "Переговоры", count: 75, conversion: 7.5, name: "Переговоры", value: 75, fill: "#ff7300" },
  { stage: "Закрытие", count: 30, conversion: 3, name: "Закрытие", value: 30, fill: "#ff0000" },
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
  region?: string;
  profit?: number;
  sla?: string;
  manager?: string;
  type?: string;
  customTerms?: boolean;
  activity?: string;
  lastDealDate?: string;
  comments?: string;
  products?: string[];
  tags?: string[];
}

export const clientsData: Client[] = [
  {
    id: "CL-001",
    name: "ООО Технологии Будущего",
    industry: "IT",
    revenue: 3000000,
    deals: 5,
    status: "Активный",
    lastActivity: "2024-01-15",
    region: "Москва",
    profit: 2500000,
    sla: "3.2",
    manager: "Иванов И.И.",
    type: "VIP",
    customTerms: true,
    activity: "Высокая",
    lastDealDate: "2024-01-15",
    comments: "Ключевой клиент",
    products: ["РКО Премиум", "ДБО"],
    tags: ["VIP", "Технологии"]
  },
  {
    id: "CL-002",
    name: "АО Промышленные Решения",
    industry: "Промышленность",
    revenue: 2200000,
    deals: 3,
    status: "Активный",
    lastActivity: "2024-02-01",
    region: "СПб",
    profit: 1800000,
    sla: "4.1",
    manager: "Петрова С.А.",
    type: "Стандартный",
    customTerms: false,
    activity: "Средняя",
    lastDealDate: "2024-02-01",
    comments: "Регулярный клиент",
    products: ["РКО Стандарт"],
    tags: ["Промышленность"]
  },
  {
    id: "CL-003",
    name: "ПАО Банк Развития",
    industry: "Финансы",
    revenue: 5000000,
    deals: 8,
    status: "VIP",
    lastActivity: "2023-11-10",
    region: "Москва",
    profit: 4200000,
    sla: "2.8",
    manager: "Сидоров А.В.",
    type: "VIP",
    customTerms: true,
    activity: "Очень высокая",
    lastDealDate: "2023-11-10",
    comments: "Стратегический партнер",
    products: ["Банковское сопровождение", "Овердрафт"],
    tags: ["VIP", "Банки", "Финансы"]
  }
];

// Mock data for deals
export const dealsData = [
  {
    id: "DL-2024-001",
    client: "ООО Технологии Будущего",
    products: ["РКО Премиум", "ДБО", "Эквайринг"],
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
    products: ["РКО Стандарт", "Банковское сопровождение"],
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
    products: ["Банковское сопровождение", "Овердрафт", "ДБО"],
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
    products: ["Эквайринг", "РКО Малый бизнес"],
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

// Team monitoring data
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  avatar?: string;
  assignedTasks: number;
  pendingTasks: number;
  completionRate: number;
  workloadLevel: "Низкая" | "Средняя" | "Высокая" | "Перегрузка";
  isOnline: boolean;
  avgTaskTime: number;
}

export interface Task {
  id: string;
  title: string;
  type: "Согласование условий" | "Юридическая проверка" | "Финансовая проверка" | "Техническая проверка";
  status: "Новая" | "В работе" | "Просроченная" | "Завершена";
  deadline: string;
  priority: "Низкий" | "Средний" | "Высокий" | "Критический";
  dealId: string;
  assigneeId: string;
  comments?: string;
  createdAt: string;
  completedAt?: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: "TM-001",
    name: "Иванов Иван Иванович",
    position: "Старший менеджер",
    department: "Продажи",
    assignedTasks: 12,
    pendingTasks: 3,
    completionRate: 87,
    workloadLevel: "Высокая",
    isOnline: true,
    avgTaskTime: 2.5
  },
  {
    id: "TM-002",
    name: "Петрова Светлана Александровна",
    position: "Юрист",
    department: "Юридический",
    assignedTasks: 8,
    pendingTasks: 2,
    completionRate: 92,
    workloadLevel: "Средняя",
    isOnline: true,
    avgTaskTime: 3.2
  },
  {
    id: "TM-003",
    name: "Сидоров Алексей Владимирович",
    position: "Финансовый аналитик",
    department: "Финансы",
    assignedTasks: 15,
    pendingTasks: 6,
    completionRate: 78,
    workloadLevel: "Перегрузка",
    isOnline: false,
    avgTaskTime: 4.1
  },
  {
    id: "TM-004",
    name: "Козлова Мария Петровна",
    position: "Менеджер",
    department: "Продажи",
    assignedTasks: 6,
    pendingTasks: 1,
    completionRate: 94,
    workloadLevel: "Низкая",
    isOnline: true,
    avgTaskTime: 1.8
  }
];

export const tasksData: Task[] = [
  {
    id: "TSK-001",
    title: "Согласование условий поставки",
    type: "Согласование условий",
    status: "В работе",
    deadline: "2024-06-20",
    priority: "Высокий",
    dealId: "DL-2024-001",
    assigneeId: "TM-001",
    comments: "Требуется уточнение по срокам",
    createdAt: "2024-06-15"
  },
  {
    id: "TSK-002",
    title: "Проверка договора на соответствие",
    type: "Юридическая проверка",
    status: "Новая",
    deadline: "2024-06-22",
    priority: "Средний",
    dealId: "DL-2024-002",
    assigneeId: "TM-002",
    createdAt: "2024-06-17"
  },
  {
    id: "TSK-003",
    title: "Анализ рентабельности сделки",
    type: "Финансовая проверка",
    status: "Просроченная",
    deadline: "2024-06-16",
    priority: "Критический",
    dealId: "DL-2024-003",
    assigneeId: "TM-003",
    comments: "Просрочена на 1 день",
    createdAt: "2024-06-10"
  }
];

export const teamKpiData = [
  {
    title: "Активные задачи",
    value: 43,
    icon: "tasks",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    valueColor: "text-blue-800"
  },
  {
    title: "В SLA",
    value: 38,
    icon: "check",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    valueColor: "text-green-800"
  },
  {
    title: "Вне SLA",
    value: 5,
    icon: "alert",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    valueColor: "text-red-800"
  },
  {
    title: "Среднее время",
    value: "2.8ч",
    icon: "clock",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    valueColor: "text-orange-800"
  },
  {
    title: "Завершено",
    value: "89%",
    icon: "percentage",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    valueColor: "text-emerald-800"
  },
  {
    title: "Новые за день",
    value: 12,
    icon: "plus",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    valueColor: "text-purple-800"
  }
];
