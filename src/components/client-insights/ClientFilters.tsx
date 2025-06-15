
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

type ClientFiltersProps = {
  filters: {
    industry: string;
    profitRange: [number, number];
    region: string;
    activity: string;
    sla: number | "";
    search: string;
  };
  setFilters: (filters: any) => void;
};

const industries = ["Все", "Логистика", "Производство", "Ритейл", "IT", "Финансы"];
const regions = ["Все", "Москва", "СПб", "Поволжье", "Юг", "Сибирь"];
const activities = ["Все", "Высокая", "Средняя", "Низкая", "Нет сделок"];
const slaList = [1, 2, 3, 4, 5, 6, 7, 10];

export default function ClientFilters({ filters, setFilters }: ClientFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4 items-end">
      <div>
        <Select value={filters.industry} onValueChange={(industry) => setFilters({ ...filters, industry })}>
          <SelectTrigger>
            <SelectValue placeholder="Отрасль" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Input type="text" placeholder="Регион" value={filters.region} onChange={e => setFilters({ ...filters, region: e.target.value })} />
      </div>
      <div>
        <Input type="text" placeholder="Менеджер/Клиент" value={filters.search} onChange={e => setFilters({ ...filters, search: e.target.value })}/>
      </div>
      <div>
        <Input type="number" placeholder="SLA макс." min={1} max={14} value={filters.sla} onChange={e => setFilters({ ...filters, sla: e.target.value ? Number(e.target.value) : "" })}/>
      </div>
      <div>
        <Input type="number" placeholder="Мин. прибыль" value={filters.profitRange[0]} onChange={e => setFilters({ ...filters, profitRange: [Number(e.target.value), filters.profitRange[1]] })}/>
      </div>
      <div>
        <Input type="number" placeholder="Макс. прибыль" value={filters.profitRange[1]} onChange={e => setFilters({ ...filters, profitRange: [filters.profitRange[0], Number(e.target.value)] })}/>
      </div>
    </div>
  );
}
