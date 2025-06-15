
import Header from "@/components/layout/Header";
import ProfitKpiCards from "@/components/deal-profitability/ProfitKpiCards";
import ProfitLineChart from "@/components/deal-profitability/ProfitLineChart";
import DealTopTable from "@/components/deal-profitability/DealTopTable";
import DealsTable from "@/components/deal-profitability/DealsTable";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const filtersInitial = {
  period: "2025-06",
  team: "all",
  product: "all",
  client: "",
  region: "all",
  sla: "",
};

const DealProfitability = () => {
  const [filters, setFilters] = useState(filtersInitial);

  // Примеры базовых фильтров (статические)
  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Прибыльность сделок</h1>
        <ProfitKpiCards />
        <ProfitLineChart />
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <label className="flex items-center gap-2 text-xs">
            <span>Период:</span>
            <input
              type="month"
              value={filters.period}
              onChange={(e) => setFilters({ ...filters, period: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </label>
          <label className="flex items-center gap-2 text-xs">
            <span>Команда:</span>
            <select
              value={filters.team}
              onChange={(e) => setFilters({ ...filters, team: e.target.value })}
              className="border rounded px-2 py-1"
            >
              <option value="all">Все</option>
              <option value="teamA">Команда 1</option>
              <option value="teamB">Команда 2</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs">
            <span>Продукт:</span>
            <select
              value={filters.product}
              onChange={(e) => setFilters({ ...filters, product: e.target.value })}
              className="border rounded px-2 py-1"
            >
              <option value="all">Все</option>
              <option value="crm">CRM</option>
              <option value="cloud">Облачная платформа</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs">
            <span>Клиент:</span>
            <input
              type="text"
              value={filters.client}
              onChange={(e) => setFilters({ ...filters, client: e.target.value })}
              className="border rounded px-2 py-1"
              placeholder="Название клиента"
            />
          </label>
          <label className="flex items-center gap-2 text-xs">
            <span>Регион:</span>
            <select
              value={filters.region}
              onChange={(e) => setFilters({ ...filters, region: e.target.value })}
              className="border rounded px-2 py-1"
            >
              <option value="all">Все</option>
              <option value="msk">Москва</option>
              <option value="spb">Санкт-Петербург</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs">
            <span>SLA (дней):</span>
            <input
              type="number"
              value={filters.sla}
              min={0}
              onChange={(e) => setFilters({ ...filters, sla: e.target.value })}
              className="border rounded px-2 py-1 w-16"
              placeholder="--"
            />
          </label>
          <Button variant="outline" className="ml-4" onClick={() => alert("Экспорт в Excel!")}>
            Экспорт
          </Button>
        </div>
        <DealTopTable />
        <DealsTable />
      </div>
    </>
  );
};

export default DealProfitability;
