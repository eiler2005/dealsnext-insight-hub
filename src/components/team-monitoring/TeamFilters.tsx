
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const TeamFilters = ({ onFiltersChange }: TeamFiltersProps) => {
  const [filters, setFilters] = useState({
    search: "",
    department: "all",
    workload: "all",
    taskType: "all",
    period: "week"
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      search: "",
      department: "all",
      workload: "all",
      taskType: "all",
      period: "week"
    };
    setFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по имени сотрудника..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={filters.department} onValueChange={(value) => handleFilterChange("department", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Подразделение" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все подразделения</SelectItem>
              <SelectItem value="Продажи">Продажи</SelectItem>
              <SelectItem value="Юридический">Юридический</SelectItem>
              <SelectItem value="Финансы">Финансы</SelectItem>
              <SelectItem value="Техническое">Техническое</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.workload} onValueChange={(value) => handleFilterChange("workload", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Уровень нагрузки" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любая нагрузка</SelectItem>
              <SelectItem value="Низкая">Низкая</SelectItem>
              <SelectItem value="Средняя">Средняя</SelectItem>
              <SelectItem value="Высокая">Высокая</SelectItem>
              <SelectItem value="Перегрузка">Перегрузка</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.taskType} onValueChange={(value) => handleFilterChange("taskType", value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Тип задач" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="Согласование условий">Согласование условий</SelectItem>
              <SelectItem value="Юридическая проверка">Юридическая проверка</SelectItem>
              <SelectItem value="Финансовая проверка">Финансовая проверка</SelectItem>
              <SelectItem value="Техническая проверка">Техническая проверка</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.period} onValueChange={(value) => handleFilterChange("period", value)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">День</SelectItem>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={resetFilters} className="gap-2">
            <Filter className="w-4 h-4" />
            Сбросить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamFilters;
