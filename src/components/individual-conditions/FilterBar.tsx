
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Props = {
  filters: {
    query: string;
    type: string;
    status: string;
    minMargin: string;
    deviation: string;
    endDate: string;
  };
  onChange: (filters: Props["filters"]) => void;
};

const CONDITION_TYPES = [
  "all",
  "Скидка",
  "Рассрочка",
  "Бонус",
  "Пакет",
  "Отложенный платёж",
  "SLA-исключение",
  "Комиссия",
  "MFC",
  "Совместная разработка"
];
const STATUSES = [
  "all",
  "Активно",
  "На пересогласовании",
  "Архив",
  "Критично",
  "Риск"
];

export default function FilterBar({ filters, onChange }: Props) {
  // update onChange logic for type/status filters: treat "all" same as empty string in parent
  const handleTypeChange = (v: string) => {
    onChange({ ...filters, type: v === "all" ? "" : v });
  };
  const handleStatusChange = (v: string) => {
    onChange({ ...filters, status: v === "all" ? "" : v });
  };

  return (
    <div className="flex flex-wrap gap-3 bg-white/60 rounded-xl px-4 py-3 border items-end">
      {/* Поиск */}
      <div>
        <Label className="mb-1 block">Поиск</Label>
        <Input
          type="search"
          className="w-48 text-sm"
          placeholder="Клиент или Продукт"
          value={filters.query}
          onChange={e => onChange({ ...filters, query: e.target.value })}
        />
      </div>
      {/* Тип */}
      <div>
        <Label className="mb-1 block">Тип</Label>
        <Select value={filters.type === "" ? "all" : filters.type} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-32 text-sm" >
            <SelectValue placeholder="Тип" />
          </SelectTrigger>
          <SelectContent>
            {CONDITION_TYPES.map((type, i) =>
              <SelectItem key={i} value={type}>{type === "all" ? "Все" : type}</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
      {/* Статус */}
      <div>
        <Label className="mb-1 block">Статус</Label>
        <Select value={filters.status === "" ? "all" : filters.status} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-40 text-sm" >
            <SelectValue placeholder="Статус" />
          </SelectTrigger>
          <SelectContent>
            {STATUSES.map((s, i) =>
              <SelectItem key={i} value={s}>{s === "all" ? "Все" : s}</SelectItem>
            )}
          </SelectContent>
        </Select>
      </div>
      {/* Маржа */}
      <div>
        <Label className="mb-1 block">Мин. маржа</Label>
        <Input
          type="number"
          className="w-24 text-sm"
          placeholder="мин. %"
          min={-100} max={100}
          value={filters.minMargin}
          onChange={e => onChange({ ...filters, minMargin: e.target.value })}
        />
      </div>
      {/* Отклонение */}
      <div>
        <Label className="mb-1 block">Отклонение, %</Label>
        <Input
          type="number"
          className="w-24 text-sm"
          placeholder="мин."
          min={-100} max={100}
          value={filters.deviation}
          onChange={e => onChange({ ...filters, deviation: e.target.value })}
        />
      </div>
      {/* Дата окончания позже или равно */}
      <div>
        <Label className="mb-1 block">Окончание после</Label>
        <Input
          type="date"
          className="w-36 text-sm"
          value={filters.endDate}
          onChange={e => onChange({ ...filters, endDate: e.target.value })}
        />
      </div>
    </div>
  );
}

