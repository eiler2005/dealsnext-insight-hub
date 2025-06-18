
import { LayoutDashboard, DollarSign, Users, Package, BarChart2, LineChart, BrainCircuit, FileText, Book, User2, FileMinus } from "lucide-react";

export const navItems = [
  {
    name: "Дашборд",
    path: "/",
    icon: "dashboard",
    highlight: false,
  },
  {
    name: "Сделки",
    path: "/deals",
    icon: "layout-dashboard",
    highlight: false,
  },
  {
    name: "Мониторинг команды",
    path: "/team-monitoring",
    icon: "users",
    highlight: false,
  },
  {
    name: "Прибыльность сделок",
    path: "/deal-profitability",
    icon: "deal-profitability",
    highlight: false,
  },
  {
    name: "Инсайты по клиентам",
    path: "/client-insights",
    icon: "client-insights",
    highlight: false,
  },
  {
    name: "Эффективность продуктов",
    path: "/product-effectiveness",
    icon: "product-effectiveness",
    highlight: false,
  },
  {
    name: "Воронка продаж",
    path: "/sales-funnel",
    icon: "sales-funnel",
    highlight: false,
  },
  {
    name: "ИИ рекомендации",
    path: "/ai-recommendations",
    icon: "ai-recommendations",
    highlight: false,
  },
  {
    name: "Отчёты и экспорт",
    path: "/reports-export",
    icon: "reports-export",
    highlight: false,
  },
  {
    name: "Реестр продуктов",
    path: "/product-registry",
    icon: "product-registry",
    highlight: false,
  },
  {
    name: "Реестр клиентов",
    path: "/client-registry",
    icon: "client-registry",
    highlight: false,
  },
  {
    name: "Индивидуальные условия",
    path: "/individual-conditions",
    icon: "individual-conditions",
    highlight: false,
  },
];

// Типы
export interface Client {
  id: string;
  name: string;
  industry: string;
  activity: string;
  profit: number;
  products: string[];
  customTerms: boolean;
  sla: number;
  manager: string;
  comments: string;
  status: string;
  lastDealDate: string;
  type: string;
  tags?: string[];
  region: string;
}

export interface Deal {
  id: string;
  clientName: string;
  product: string;
  amount: number;
  profit: number;
  status: "Выполнена" | "В работе" | "Отменена";
  manager: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  assignedTasks: number;
  pendingTasks: number;
  completionRate: number;
  workloadLevel: string;
  avgTaskTime: number;
  isOnline: boolean;
}

export interface Task {
  id: string;
  title: string;
  type: string;
  status: string;
  priority: string;
  deadline: string;
  dealId: string;
  assigneeId: string;
  comments?: string;
}

// Данные для KPI дашборда
export const kpiData = [
  {
    title: "Общая прибыль",
    value: "₽45.6M",
    change: "+12.5%",
    trend: "up" as const,
    icon: "dollar-sign"
  },
  {
    title: "Активные сделки",
    value: "127",
    change: "+8.3%",
    trend: "up" as const,
    icon: "trending-up"
  },
  {
    title: "Новые клиенты",
    value: "23",
    change: "+15.2%",
    trend: "up" as const,
    icon: "users"
  },
  {
    title: "Средний SLA",
    value: "4.2 дня",
    change: "-0.8 дня",
    trend: "down" as const,
    icon: "clock"
  }
];

// Данные для графика прибыли и SLA
export const chartData = [
  { month: "Янв", прибыль: 32, sla: 5.2 },
  { month: "Фев", прибыль: 28, sla: 4.8 },
  { month: "Мар", прибыль: 35, sla: 4.5 },
  { month: "Апр", прибыль: 42, sla: 4.2 },
  { month: "Май", прибыль: 38, sla: 4.0 },
  { month: "Июн", прибыль: 46, sla: 4.2 }
];

// AI инсайты
export const aiInsightsData = [
  {
    title: "Рост конверсии",
    description: "Конверсия РКО выросла на 23% благодаря новым условиям",
    impact: "high" as const,
    type: "positive" as const
  },
  {
    title: "Риск оттока",
    description: "3 крупных клиента показывают признаки снижения активности",
    impact: "high" as const,
    type: "warning" as const
  },
  {
    title: "Новая возможность",
    description: "Овердрафт показывает потенциал роста в сегменте МСБ",
    impact: "medium" as const,
    type: "opportunity" as const
  },
  {
    title: "Оптимизация SLA",
    description: "Автоматизация процессов может сократить SLA на 15%",
    impact: "medium" as const,
    type: "insight" as const
  }
];

// Данные клиентов
export const clientsData: Client[] = [
  {
    id: "1",
    name: "ООО \"ТехПром\"",
    industry: "Производство",
    activity: "Высокая",
    profit: 5200000,
    products: ["РКО", "Овердрафт"],
    customTerms: true,
    sla: 3,
    manager: "Иванов И.И.",
    comments: "Ключевой клиент, требует особого внимания",
    status: "🟢 Активный",
    lastDealDate: "2025-06-15",
    type: "Премиум",
    tags: ["VIP", "Производство"],
    region: "Москва"
  },
  {
    id: "2",
    name: "АО \"ЛогистикГрупп\"",
    industry: "Логистика",
    activity: "Средняя",
    profit: 3800000,
    products: ["РКО", "Эквайринг"],
    customTerms: false,
    sla: 5,
    manager: "Петрова А.С.",
    comments: "",
    status: "🟡 Низкая активность",
    lastDealDate: "2025-05-28",
    type: "Стандарт",
    tags: ["Логистика"],
    region: "СПб"
  },
  {
    id: "3",
    name: "ЗАО \"Ритейл-Холдинг\"",
    industry: "Торговля",
    activity: "Высокая",
    profit: 7100000,
    products: ["РКО", "Эквайринг", "ДБО"],
    customTerms: true,
    sla: 2,
    manager: "Сидоров П.П.",
    comments: "Растущий клиент с большим потенциалом",
    status: "🟢 Активный",
    lastDealDate: "2025-06-18",
    type: "Премиум",
    tags: ["VIP", "Ритейл"],
    region: "Москва"
  }
];

// Данные сделок для прибыльности
export const dealProfitabilityData: Deal[] = [
  {
    id: "D001",
    clientName: "ООО \"ТехПром\"",
    product: "РКО",
    amount: 2500000,
    profit: 375000,
    status: "Выполнена",
    manager: "Иванов И.И.",
    date: "2025-06-15"
  },
  {
    id: "D002",
    clientName: "АО \"ЛогистикГрупп\"",
    product: "Эквайринг",
    amount: 1800000,
    profit: 270000,
    status: "В работе",
    manager: "Петрова А.С.",
    date: "2025-06-10"
  },
  {
    id: "D003",
    clientName: "ЗАО \"Ритейл-Холдинг\"",
    product: "ДБО",
    amount: 3200000,
    profit: 480000,
    status: "Выполнена",
    manager: "Сидоров П.П.",
    date: "2025-06-18"
  },
  {
    id: "D004",
    clientName: "ООО \"СтройИнвест\"",
    product: "Овердрафт",
    amount: 5000000,
    profit: 250000,
    status: "Выполнена",
    manager: "Козлов Д.В.",
    date: "2025-06-12"
  },
  {
    id: "D005",
    clientName: "ИП \"Торговый Дом\"",
    product: "Банковское сопровождение",
    amount: 800000,
    profit: 160000,
    status: "В работе",
    manager: "Морозова Е.А.",
    date: "2025-06-14"
  },
  {
    id: "D006",
    clientName: "ООО \"ИТ-Решения\"",
    product: "РКО",
    amount: 1200000,
    profit: 180000,
    status: "Выполнена",
    manager: "Волков С.Н.",
    date: "2025-06-16"
  },
  {
    id: "D007",
    clientName: "АО \"ПищеПром\"",
    product: "Эквайринг",
    amount: 2800000,
    profit: 420000,
    status: "Отменена",
    manager: "Лебедева О.И.",
    date: "2025-06-08"
  },
  {
    id: "D008",
    clientName: "ООО \"МедСервис\"",
    product: "ДБО",
    amount: 1500000,
    profit: 225000,
    status: "В работе",
    manager: "Новиков А.Р.",
    date: "2025-06-17"
  },
  {
    id: "D009",
    clientName: "ЗАО \"АвтоТранс\"",
    product: "Овердрафт",
    amount: 3500000,
    profit: 175000,
    status: "Выполнена",
    manager: "Федоров М.К.",
    date: "2025-06-11"
  },
  {
    id: "D010",
    clientName: "ООО \"ЭкоСтрой\"",
    product: "Банковское сопровождение",
    amount: 2200000,
    profit: 440000,
    status: "Выполнена",
    manager: "Орлова Т.В.",
    date: "2025-06-13"
  },
  {
    id: "D011",
    clientName: "ИП \"КафеСеть\"",
    product: "РКО",
    amount: 900000,
    profit: 135000,
    status: "В работе",
    manager: "Зайцев Н.П.",
    date: "2025-06-19"
  },
  {
    id: "D012",
    clientName: "АО \"ЭнергоСбыт\"",
    product: "Эквайринг",
    amount: 4200000,
    profit: 630000,
    status: "Выполнена",
    manager: "Макарова Л.С.",
    date: "2025-06-09"
  }
];

// Данные воронки продаж
export const salesFunnelData = [
  { name: "Новые лиды", value: 250, fill: "#60a5fa" },
  { name: "Квалификация", value: 180, fill: "#34d399" },
  { name: "Предложение", value: 120, fill: "#fbbf24" },
  { name: "Переговоры", value: 80, fill: "#f87171" },
  { name: "Закрытие сделки", value: 45, fill: "#a78bfa" }
];

// Данные команды
export const teamMembersData: TeamMember[] = [
  {
    id: "1",
    name: "Иванов Иван Иванович",
    position: "Старший менеджер",
    department: "Продажи",
    assignedTasks: 12,
    pendingTasks: 3,
    completionRate: 85,
    workloadLevel: "Средняя",
    avgTaskTime: 2.5,
    isOnline: true
  },
  {
    id: "2",
    name: "Петрова Анна Сергеевна",
    position: "Менеджер по работе с клиентами",
    department: "Клиентский сервис",
    assignedTasks: 8,
    pendingTasks: 1,
    completionRate: 92,
    workloadLevel: "Низкая",
    avgTaskTime: 1.8,
    isOnline: true
  },
  {
    id: "3",
    name: "Сидоров Петр Петрович",
    position: "Ведущий специалист",
    department: "Продажи",
    assignedTasks: 15,
    pendingTasks: 6,
    completionRate: 78,
    workloadLevel: "Высокая",
    avgTaskTime: 3.2,
    isOnline: false
  }
];

// Данные задач
export const tasksData: Task[] = [
  {
    id: "T001",
    title: "Подготовка предложения по РКО",
    type: "Коммерческое предложение",
    status: "В работе",
    priority: "Высокий",
    deadline: "2025-06-25",
    dealId: "D001",
    assigneeId: "1",
    comments: "Требуется согласование с юридическим отделом"
  },
  {
    id: "T002",
    title: "Консультация по эквайрингу",
    type: "Клиентская поддержка",
    status: "Новая",
    priority: "Средний",
    deadline: "2025-06-22",
    dealId: "D002",
    assigneeId: "2"
  },
  {
    id: "T003",
    title: "Анализ кредитной истории",
    type: "Андеррайтинг",
    status: "Просроченная",
    priority: "Критический",
    deadline: "2025-06-20",
    dealId: "D004",
    assigneeId: "3",
    comments: "Срочно! Клиент ждет решения"
  }
];

// KPI данные команды
export const teamKpiData = [
  {
    title: "Активные задачи",
    value: "35",
    change: "+5",
    trend: "up" as const
  },
  {
    title: "Средняя нагрузка",
    value: "11.7",
    change: "-2.3",
    trend: "down" as const
  },
  {
    title: "Выполнение в срок",
    value: "85%",
    change: "+3%",
    trend: "up" as const
  },
  {
    title: "Просроченные",
    value: "4",
    change: "+1",
    trend: "up" as const
  }
];

// Данные сделок (общий список)
export const dealsData = [
  {
    id: "D001",
    client: "ООО \"ТехПром\"",
    products: ["РКО", "Овердрафт"],
    amount: 2500000,
    status: "Выполнена",
    marginality: "Высокая",
    conditionsType: "Индивидуальные",
    manager: "Иванов И.И.",
    lastUpdate: "2025-06-15"
  },
  {
    id: "D002",
    client: "АО \"ЛогистикГрупп\"",
    products: ["Эквайринг"],
    amount: 1800000,
    status: "В работе",
    marginality: "Средняя",
    conditionsType: "Стандартные",
    manager: "Петрова А.С.",
    lastUpdate: "2025-06-18"
  },
  {
    id: "D003",
    client: "ЗАО \"Ритейл-Холдинг\"",
    products: ["РКО", "ДБО"],
    amount: 3200000,
    status: "Выполнена",
    marginality: "Высокая",
    conditionsType: "Индивидуальные",
    manager: "Сидоров П.П.",
    lastUpdate: "2025-06-18"
  }
];
