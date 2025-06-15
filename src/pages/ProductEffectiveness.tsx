import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUp, ArrowDown } from "lucide-react";
import ProductEffectivenessCharts from "@/components/product-effectiveness/ProductEffectivenessCharts";

// Мок-данные по продуктам
const productData = [
  {
    name: "Корп. кредиты",
    profit: 1200000000,
    margin: 45,
    avgSla: 3.5,
    clientsCount: 124,
    status: "Активен",
    trend: "up",
    roi: 155,
    npv: 320_000_000,
    retention: 91,
  },
  {
    name: "Торговое финансирование",
    profit: 650000000,
    margin: 25,
    avgSla: 4.1,
    clientsCount: 89,
    status: "Под вопрос",
    trend: "stable",
    roi: 87,
    npv: 126_000_000,
    retention: 82,
  },
  {
    name: "Валютные операции",
    profit: 380000000,
    margin: 15,
    avgSla: 2.8,
    clientsCount: 77,
    status: "Убыточен",
    trend: "down",
    roi: 52,
    npv: -25_000_000,
    retention: 73,
  },
  {
    name: "Депозиты",
    profit: 240000000,
    margin: 10,
    avgSla: 1.5,
    clientsCount: 210,
    status: "Активен",
    trend: "up",
    roi: 163,
    npv: 61_000_000,
    retention: 95,
  },
];

const statusColors: Record<string, string> = {
  "Активен": "bg-green-100 text-green-700",
  "Убыточен": "bg-red-100 text-red-700",
  "Под вопрос": "bg-yellow-100 text-yellow-800",
};

const trendIcons: Record<string, JSX.Element> = {
  up: <ArrowUp className="text-green-500 inline-block"/>,
  stable: <span className="w-2 h-2 inline-block rounded-full bg-gray-400 align-middle" />,
  down: <ArrowDown className="text-red-500 inline-block"/>,
};

// Фильтры (прототип)
const defaultFilters = {
  productType: "Все",
  region: "Все",
  segment: "Все",
  profitStatus: "Все",
  period: "6m",
  roi: "",
  npv: "",
  retention: "",
};
const productTypes = ["Все", "Кредиты", "Депозиты", "Финансирование", "Валютные опер."];
const regions = ["Все", "Москва", "Урал", "Сибирь", "Приволжье"];
const segments = ["Все", "МСБ", "Крупный бизнес", "Госсектор", "Розница"];
const profitStatuses = ["Все", "Прибыльные", "Убыточные", "Под вопрос"];

const periods = [
  { value: "1m", label: "Месяц" },
  { value: "3m", label: "Квартал" },
  { value: "6m", label: "6 месяцев" },
  { value: "12m", label: "Год" },
];

const ProductEffectiveness = () => {
  const [filters, setFilters] = useState(defaultFilters);

  // Моки KPI
  const totalProfit = productData.reduce((s, p) => s + p.profit, 0);
  const lossShare = (productData.filter((p) => p.status === "Убыточен").length / productData.length) * 100;
  const avgSla = (productData.reduce((s, p) => s + p.avgSla, 0) / productData.length).toFixed(1);
  const totalClients = productData.reduce((s, p) => s + p.clientsCount, 0);

  // Фильтры (пока без сложной логики)
  const filtered = productData.filter((p) => {
    if (filters.profitStatus === "Прибыльные" && p.profit <= 0) return false;
    if (filters.profitStatus === "Убыточные" && p.status !== "Убыточен") return false;
    if (filters.productType !== "Все" && !p.name.toLowerCase().includes(filters.productType.toLowerCase())) return false;
    if (filters.region !== "Все" && filters.region !== "") return true; // Данных по регионам нет
    if (filters.segment !== "Все" && filters.segment !== "") return true; // Данных по сегментам нет
    return true;
  });

  return (
    <>
      <Header />
      <div className="flex-1 p-4 md:p-8 bg-background">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Эффективность продуктовой линейки</h1>
          <p className="text-muted-foreground mt-1">Раздел для анализа доходности и операционной эффективности банковских продуктов.</p>
        </div>

        {/* --- Блок фильтров --- */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6 flex-wrap">
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">Тип продукта</label>
            <select
              className="px-3 py-2 border rounded-md bg-card"
              value={filters.productType}
              onChange={e => setFilters(f => ({ ...f, productType: e.target.value }))}
            >
              {productTypes.map(t => (<option key={t}>{t}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">Регион</label>
            <select
              className="px-3 py-2 border rounded-md bg-card"
              value={filters.region}
              onChange={e => setFilters(f => ({ ...f, region: e.target.value }))}
            >
              {regions.map(r => (<option key={r}>{r}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">Сегмент</label>
            <select
              className="px-3 py-2 border rounded-md bg-card"
              value={filters.segment}
              onChange={e => setFilters(f => ({ ...f, segment: e.target.value }))}
            >
              {segments.map(s => (<option key={s}>{s}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">Период</label>
            <select
              className="px-3 py-2 border rounded-md bg-card"
              value={filters.period}
              onChange={e => setFilters(f => ({ ...f, period: e.target.value }))}
            >
              {periods.map(p => (<option key={p.value} value={p.value}>{p.label}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">ROI (%)</label>
            <input
              className="px-3 py-2 border rounded-md bg-card w-24"
              placeholder="min"
              value={filters.roi}
              onChange={e => setFilters(f => ({ ...f, roi: e.target.value }))}
              type="number"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">NPV</label>
            <input
              className="px-3 py-2 border rounded-md bg-card w-24"
              placeholder="min"
              value={filters.npv}
              onChange={e => setFilters(f => ({ ...f, npv: e.target.value }))}
              type="number"
            />
          </div>
          <div>
            <label className="block text-xs mb-1 text-muted-foreground">Retention (%)</label>
            <input
              className="px-3 py-2 border rounded-md bg-card w-24"
              placeholder="min"
              value={filters.retention}
              onChange={e => setFilters(f => ({ ...f, retention: e.target.value }))}
              type="number"
            />
          </div>
          {/* Кнопка экспорта */}
          <div className="ml-auto flex gap-2">
            <Button variant="outline">Экспорт XLSX</Button>
            <Button variant="outline">PDF</Button>
          </div>
        </div>

        {/* --- Блок KPI --- */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Прибыль всей линейки</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{(totalProfit/1_000_000).toLocaleString()} млн ₽</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Доля убыточных</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{lossShare.toFixed(0)}%</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Средний SLA (дней)</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{avgSla}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Клиентов по линейке</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">{totalClients}</CardContent>
          </Card>
        </div>

        {/* --- Таблица продуктов --- */}
        <div className="overflow-x-auto bg-card rounded-lg shadow mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Продукт</TableHead>
                <TableHead>Прибыль</TableHead>
                <TableHead>Маржа, %</TableHead>
                <TableHead>Сред. SLA</TableHead>
                <TableHead>Кл-во клиентов</TableHead>
                <TableHead>ROI</TableHead>
                <TableHead>NPV</TableHead>
                <TableHead>Retention</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Тренд</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p, i) => (
                <TableRow key={i} className="group hover:bg-accent transition cursor-pointer">
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell>{p.profit > 0 ? "₽" + (p.profit/1_000_000).toLocaleString() + " млн" : "₽0"}</TableCell>
                  <TableCell>{p.margin}%</TableCell>
                  <TableCell>{p.avgSla}</TableCell>
                  <TableCell>{p.clientsCount}</TableCell>
                  <TableCell>{p.roi}%</TableCell>
                  <TableCell>{p.npv.toLocaleString()} ₽</TableCell>
                  <TableCell>{p.retention}%</TableCell>
                  <TableCell>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${statusColors[p.status] || "bg-gray-200 text-gray-700"}`}>
                      {p.status}
                    </span>
                  </TableCell>
                  <TableCell>{trendIcons[p.trend]}</TableCell>
                  <TableCell>
                    {/* Интерактив: чекбокс для сравнения */}
                    <input type="checkbox" className="accent-primary" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* --- Блок графиков: тренды, карты, аналитика --- */}
        <ProductEffectivenessCharts />

        {/* --- AI-рекомендации --- */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-secondary rounded-lg p-6 shadow mb-6">
          <span className="font-semibold text-lg block mb-2">🤖 AI‑рекомендации по улучшению продуктовой линейки</span>
          <ul className="text-muted-foreground list-disc pl-6 space-y-1 text-sm">
            <li>Оптимизируйте SLA для убыточных продуктов (<span className="font-medium text-red-700">валютные операции</span>).</li>
            <li>Повысить маркетинговое продвижение депозитов среди корпоративных клиентов.</li>
            <li>Пересмотреть условия по <span className="font-medium text-yellow-800">торговому финансированию</span> в регионах с низкой прибыльностью.</li>
            <li>Добавить новые digital‑каналы для привлечения МСБ.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductEffectiveness;
