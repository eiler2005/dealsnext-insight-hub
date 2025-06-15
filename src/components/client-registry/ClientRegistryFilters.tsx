
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

type Props = {
  onFilterChange: (manager?: string, segment?: string, region?: string, search?: string) => void;
};

export default function ClientRegistryFilters({ onFilterChange }: Props) {
  const [manager, setManager] = React.useState("all");
  const [segment, setSegment] = React.useState("all");
  const [region, setRegion] = React.useState("all");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    onFilterChange(
      manager === "all" ? undefined : manager,
      segment === "all" ? undefined : segment,
      region === "all" ? undefined : region,
      search.length > 0 ? search : undefined
    );
  }, [manager, segment, region, search, onFilterChange]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
      {/* Поиск */}
      <div className="relative flex-1">
        <Input
          placeholder="Поиск по клиенту или менеджеру"
          className="pl-10"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
      <Select value={manager} onValueChange={setManager}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Менеджер" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          <SelectItem value="И. Иванов">И. Иванов</SelectItem>
          <SelectItem value="А. Смирнова">А. Смирнова</SelectItem>
          <SelectItem value="Д. Гринев">Д. Гринев</SelectItem>
        </SelectContent>
      </Select>
      <Select value={segment} onValueChange={setSegment}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Сегмент" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          <SelectItem value="ФинТех">Финансы</SelectItem>
          <SelectItem value="Глобал">Торговля</SelectItem>
          <SelectItem value="Север">Строительство</SelectItem>
        </SelectContent>
      </Select>
      <Select value={region} onValueChange={setRegion}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Регион" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Все</SelectItem>
          <SelectItem value="msk">Москва</SelectItem>
          <SelectItem value="spb">СПб</SelectItem>
          <SelectItem value="ural">Урал</SelectItem>
        </SelectContent>
      </Select>
      {/* Кнопки */}
      <div className="flex flex-row gap-2">
        <Button variant="default" size="sm">
          <Plus className="mr-2 w-4 h-4" />
          Добавить клиента
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 w-4 h-4" />
          Экспорт
        </Button>
      </div>
    </div>
  );
}
