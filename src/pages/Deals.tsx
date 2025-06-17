
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import DealsFilters from "@/components/deals/DealsFilters";
import DealsTable from "@/components/deals/DealsTable";
import DealsCards from "@/components/deals/DealsCards";
import { Button } from "@/components/ui/button";
import { Plus, Table, Grid3X3 } from "lucide-react";
import { dealsData } from "@/data/mockData";

const Deals = () => {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [filteredDeals, setFilteredDeals] = useState(dealsData);

  const handleCreateDeal = () => {
    console.log("Создание новой сделки");
  };

  const handleFiltersChange = (filters: any) => {
    // Простая фильтрация по поисковому запросу
    let filtered = dealsData;
    
    if (filters.search) {
      filtered = filtered.filter(deal => 
        deal.client.toLowerCase().includes(filters.search.toLowerCase()) ||
        deal.id.toLowerCase().includes(filters.search.toLowerCase()) ||
        deal.products.some(product => product.toLowerCase().includes(filters.search.toLowerCase()))
      );
    }

    if (filters.status && filters.status !== "all") {
      filtered = filtered.filter(deal => deal.status === filters.status);
    }

    if (filters.marginality && filters.marginality !== "all") {
      filtered = filtered.filter(deal => deal.marginality === filters.marginality);
    }

    if (filters.conditionsType && filters.conditionsType !== "all") {
      filtered = filtered.filter(deal => deal.conditionsType === filters.conditionsType);
    }

    setFilteredDeals(filtered);
  };

  return (
    <>
      <Header />
      <div className="flex-1 p-6 pt-2 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Сделки</h1>
          <div className="flex gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === "table" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("table")}
                className="gap-2"
              >
                <Table className="w-4 h-4" />
                Таблица
              </Button>
              <Button
                variant={viewMode === "cards" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("cards")}
                className="gap-2"
              >
                <Grid3X3 className="w-4 h-4" />
                Карточки
              </Button>
            </div>
            <Button onClick={handleCreateDeal} className="gap-2">
              <Plus className="w-4 h-4" />
              Создать сделку
            </Button>
          </div>
        </div>

        {/* Filters */}
        <DealsFilters onFiltersChange={handleFiltersChange} />

        {/* Deals Content */}
        <div className="mt-6">
          {viewMode === "table" ? (
            <DealsTable deals={filteredDeals} />
          ) : (
            <DealsCards deals={filteredDeals} />
          )}
        </div>
      </div>
    </>
  );
};

export default Deals;
