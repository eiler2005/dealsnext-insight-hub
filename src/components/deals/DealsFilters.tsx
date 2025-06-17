
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface DealsFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const DealsFilters = ({ onFiltersChange }: DealsFiltersProps) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [marginality, setMarginality] = useState("all");
  const [conditionsType, setConditionsType] = useState("all");

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFiltersChange({ search: value, status, marginality, conditionsType });
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    onFiltersChange({ search, status: value, marginality, conditionsType });
  };

  const handleMarginalityChange = (value: string) => {
    setMarginality(value);
    onFiltersChange({ search, status, marginality: value, conditionsType });
  };

  const handleConditionsTypeChange = (value: string) => {
    setConditionsType(value);
    onFiltersChange({ search, status, marginality, conditionsType: value });
  };

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setMarginality("all");
    setConditionsType("all");
    onFiltersChange({ search: "", status: "all", marginality: "all", conditionsType: "all" });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex flex-wrap gap-4 items-end">
        {/* Search */}
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Поиск
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Поиск по клиенту, продукту, ID сделки..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="min-w-[180px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Статус
          </label>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Все статусы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="На согласовании">На согласовании</SelectItem>
              <SelectItem value="Исполняется">Исполняется</SelectItem>
              <SelectItem value="Завершена">Завершена</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Marginality Filter */}
        <div className="min-w-[180px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Маржинальность
          </label>
          <Select value={marginality} onValueChange={handleMarginalityChange}>
            <SelectTrigger>
              <SelectValue placeholder="Все уровни" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все уровни</SelectItem>
              <SelectItem value="Очень высокая">Очень высокая</SelectItem>
              <SelectItem value="Высокая">Высокая</SelectItem>
              <SelectItem value="Средняя">Средняя</SelectItem>
              <SelectItem value="Низкая">Низкая</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditions Type Filter */}
        <div className="min-w-[180px]">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Тип условий
          </label>
          <Select value={conditionsType} onValueChange={handleConditionsTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="Стандартные">Стандартные</SelectItem>
              <SelectItem value="Индивидуальные">Индивидуальные</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <Button variant="outline" onClick={clearFilters} className="gap-2">
          <Filter className="w-4 h-4" />
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default DealsFilters;
