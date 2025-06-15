import React, { useState } from "react";
import { Search, CircleCheck, CircleX, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Header from "@/components/layout/Header";
import ProductAnalyticsSidebar from "@/components/product-registry/ProductAnalyticsSidebar";
import ProductCardSidebar from "@/components/product-registry/ProductCardSidebar";
import ProductRoiScore from "@/components/product-registry/ProductRoiScore";
import ProductAnalyticsSection from "@/components/product-registry/ProductAnalyticsSection";
import ProductRatingComparisonSection from "@/components/product-registry/ProductRatingComparisonSection";

// Демо-данные с метками и ROI Score
const demoProducts = [
  {
    id: 1,
    name: "API Платформа",
    type: "Интеграция",
    description: "Внешний API для интеграции в ИТ-ландшафт",
    profit: 12300000,
    avgProfit: 4100000,
    margin: 22,
    clients: 57,
    deals: 18,
    sla: 2.8,
    status: "active",
    roi: 89,
    category: "IT",
    tag: "Флагман",
  },
  {
    id: 2,
    name: "Лизинговый модуль",
    type: "Фин. продукт",
    description: "Лизинг для корпоративных клиентов",
    profit: -2500000,
    avgProfit: -800000,
    margin: 6,
    clients: 9,
    deals: 7,
    sla: 5.4,
    status: "loss",
    roi: 31,
    category: "Финансы",
    tag: "На пересмотр",
  },
  {
    id: 3,
    name: "CRM-расширение",
    type: "SaaS-модуль",
    description: "Облачное расширение функций CRM",
    profit: 8500000,
    avgProfit: 2125000,
    margin: 18,
    clients: 32,
    deals: 4,
    sla: 3.2,
    status: "review",
    roi: 74,
    category: "ИТ",
    tag: "Низкая активность",
  },
];

const statusIcons: Record<string, JSX.Element> = {
  active: <CircleCheck className="inline text-green-500 mr-1" />,
  loss: <CircleX className="inline text-rose-500 mr-1" />,
  review: <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-1 align-middle" />,
};

const statusLabels: Record<string, string> = {
  active: "Активен",
  loss: "Убыточен",
  review: "Пересмотр",
};

const types = ["Все", "Интеграция", "Фин. продукт", "SaaS-модуль", "CRM", "API"];
const categories = ["Все", "IT", "Финансы", "Тариф", "Сервис"];
const tags = ["Все", "Флагман", "На пересмотр", "Низкая активность"];

export default function ProductRegistry() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Все");
  const [categoryFilter, setCategoryFilter] = useState("Все");
  const [tagFilter, setTagFilter] = useState("Все");
  const [showCard, setShowCard] = useState<null | number>(null);

  // Фильтрация и поиск + по метке
  const filtered = demoProducts.filter((p) => {
    if (typeFilter !== "Все" && p.type !== typeFilter) return false;
    if (categoryFilter !== "Все" && p.category !== categoryFilter) return false;
    if (tagFilter !== "Все" && p.tag !== tagFilter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="flex-1 p-4 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-4">
            <h1 className="text-3xl font-bold">Реестр продуктов</h1>
            <div className="flex gap-2 items-end flex-wrap">
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Тип</label>
                <select
                  className="border rounded-md px-2 py-1 bg-card text-sm"
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                >
                  {types.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Категория</label>
                <select
                  className="border rounded-md px-2 py-1 bg-card text-sm"
                  value={categoryFilter}
                  onChange={e => setCategoryFilter(e.target.value)}
                >
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1">Метка</label>
                <select
                  className="border rounded-md px-2 py-1 bg-card text-sm"
                  value={tagFilter}
                  onChange={e => setTagFilter(e.target.value)}
                >
                  {tags.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск по названию…"
                  className="border rounded-md px-3 py-2 w-44 pl-8 bg-card text-sm"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
              {/* Placeholder under role check */}
              <Button className="hidden md:inline-flex">
                <Edit className="mr-1 w-4 h-4" /> Добавить продукт
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto bg-card rounded-lg shadow mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Продукт</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Описание</TableHead>
                  <TableHead>Прибыль&nbsp;за период</TableHead>
                  <TableHead>Маржа, %</TableHead>
                  <TableHead>Клиентов</TableHead>
                  <TableHead>Сделок</TableHead>
                  <TableHead>SLA</TableHead>
                  <TableHead>ROI Score</TableHead>
                  <TableHead>Метка</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  filtered.map(p => (
                    <TableRow
                      key={p.id}
                      className="hover:bg-muted/50 cursor-pointer"
                      onClick={() => setShowCard(p.id)}
                    >
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell>{p.type}</TableCell>
                      <TableCell>{p.description}</TableCell>
                      <TableCell>
                        {"₽" + (p.profit/1_000_000).toLocaleString("ru-RU", {maximumFractionDigits:1}) + "М"}
                      </TableCell>
                      <TableCell>{p.margin}%</TableCell>
                      <TableCell>{p.clients}</TableCell>
                      <TableCell>{p.deals}</TableCell>
                      <TableCell>{p.sla}</TableCell>
                      <TableCell>
                        <ProductRoiScore score={p.roi} />
                      </TableCell>
                      <TableCell>
                        <span className="inline-block rounded px-2 py-0.5 text-xs font-semibold border"
                          style={{
                            borderColor: p.tag === "Флагман"
                              ? "#22c55e"
                              : p.tag === "На пересмотр"
                              ? "#f43f5e"
                              : p.tag === "Низкая активность"
                              ? "#f59e42"
                              : "#d1d5db",
                            color: p.tag === "Флагман"
                              ? "#22c55e"
                              : p.tag === "На пересмотр"
                              ? "#f43f5e"
                              : p.tag === "Низкая активность"
                              ? "#b45309"
                              : "#6b7280"
                          }}
                        >
                          {p.tag}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="inline-flex items-center text-xs font-semibold">
                          {statusIcons[p.status]}
                          {statusLabels[p.status]}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
          {/* Новый красивый секционный блок аналитики */}
          <ProductAnalyticsSection />
          <ProductRatingComparisonSection />
        </div>
      </div>
      {/* Сайдбар по продукту, если открыт */}
      {showCard !== null && (
        <ProductCardSidebar
          product={demoProducts.find(p => p.id === showCard)!}
          onClose={() => setShowCard(null)}
        />
      )}
    </>
  );
}
