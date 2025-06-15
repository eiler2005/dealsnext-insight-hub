
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// DatePicker import removed as it is defined locally below

const Header = () => {
  return (
    <header className="bg-card p-4 border-b">
      <div className="flex items-center space-x-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Выбор региона" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="msk">Москва</SelectItem>
            <SelectItem value="spb">Санкт-Петербург</SelectItem>
            <SelectItem value="all">Все регионы</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Выбор команды" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="team1">Команда 1</SelectItem>
            <SelectItem value="team2">Команда 2</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Выбор сегмента" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="large">Крупный бизнес</SelectItem>
            <SelectItem value="medium">Средний бизнес</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Поиск клиента" className="pl-10" />
        </div>
        <DatePicker />
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Экспорт
        </Button>
      </div>
    </header>
  );
};

export const DatePicker = () => {
  return <Input type="month" defaultValue="2025-06" className="w-[180px]" />;
};

export default Header;
