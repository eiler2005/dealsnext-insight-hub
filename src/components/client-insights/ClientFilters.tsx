
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type ClientFiltersProps = {
  filters: {
    industry: string;
    profitRange: [number, number];
    region: string;
    activity: string;
    sla: [number, number];
    search: string;
    type: string;
    hasCustomTerms: string;
    lastDealFrom: string;
    lastDealTo: string;
    onlyWithComments: boolean;
  };
  setFilters: (filters: any) => void;
};

const industries = ["Все", "Логистика", "Производство", "Ритейл", "IT", "Финансы"];
const regions = ["Все", "Москва", "СПб", "Поволжье", "Юг", "Сибирь"];
const activities = ["Все", "Высокая", "Средняя", "Низкая", "Нет сделок"];
const slaList = [1, 2, 3, 4, 5, 6, 7, 10];
const clientTypes = ["Все", "VIP", "Страт.", "Станд."];

export default function ClientFilters({ filters, setFilters }: ClientFiltersProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-4 items-end">
      {/* Отрасль */}
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
      {/* Регион */}
      <div>
        <Input type="text" placeholder="Регион" value={filters.region} onChange={e => setFilters({ ...filters, region: e.target.value })} />
      </div>
      {/* Менеджер/Клиент */}
      <div>
        <Input type="text" placeholder="Менеджер/Клиент" value={filters.search} onChange={e => setFilters({ ...filters, search: e.target.value })}/>
      </div>
      {/* SLA ОТ */}
      <div>
        <Input
          type="number"
          placeholder="SLA от"
          min={0}
          max={filters.sla[1]}
          value={filters.sla[0]}
          onChange={e =>
            setFilters({
              ...filters,
              sla: [Number(e.target.value), filters.sla[1]],
            })
          }
        />
      </div>
      {/* SLA ДО */}
      <div>
        <Input
          type="number"
          placeholder="SLA до"
          min={filters.sla[0]}
          max={14}
          value={filters.sla[1]}
          onChange={e =>
            setFilters({
              ...filters,
              sla: [filters.sla[0], Number(e.target.value)],
            })
          }
        />
      </div>
      {/* Тип клиента */}
      <div>
        <Select value={filters.type} onValueChange={type => setFilters({ ...filters, type })}>
          <SelectTrigger>
            <SelectValue placeholder="Тип клиента" />
          </SelectTrigger>
          <SelectContent>
            {clientTypes.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      {/* Активность */}
      <div>
        <Select value={filters.activity} onValueChange={activity => setFilters({ ...filters, activity })}>
          <SelectTrigger>
            <SelectValue placeholder="Активность" />
          </SelectTrigger>
          <SelectContent>
            {activities.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>
      {/* Индивидуальные условия */}
      <div>
        <Select value={filters.hasCustomTerms} onValueChange={val => setFilters({ ...filters, hasCustomTerms: val })}>
          <SelectTrigger>
            <SelectValue placeholder="Инд. условия" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Все">Все</SelectItem>
            <SelectItem value="Да">Да</SelectItem>
            <SelectItem value="Нет">Нет</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Диапазон прибыли */}
      <div>
        <Input
          type="number"
          placeholder="Мин. прибыль"
          value={filters.profitRange[0]}
          onChange={e => setFilters({ ...filters, profitRange: [Number(e.target.value), filters.profitRange[1]] })}
        />
      </div>
      <div>
        <Input
          type="number"
          placeholder="Макс. прибыль"
          value={filters.profitRange[1]}
          onChange={e => setFilters({ ...filters, profitRange: [filters.profitRange[0], Number(e.target.value)] })}
        />
      </div>
      {/* Диапазон даты последней сделки */}
      <div>
        <Input
          type="date"
          placeholder="Последняя сделка: от"
          value={filters.lastDealFrom}
          onChange={e => setFilters({ ...filters, lastDealFrom: e.target.value })}
        />
      </div>
      <div>
        <Input
          type="date"
          placeholder="Последняя сделка: до"
          value={filters.lastDealTo}
          onChange={e => setFilters({ ...filters, lastDealTo: e.target.value })}
        />
      </div>
      {/* Только с комментариями */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={filters.onlyWithComments}
          onChange={e => setFilters({ ...filters, onlyWithComments: e.target.checked })}
          id="comments-filter"
        />
        <label htmlFor="comments-filter" className="text-xs">Только с комментариями</label>
      </div>
    </div>
  );
}
