
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Filter, Download } from "lucide-react";

interface Props {
  template: string;
  setTemplate: (t: string) => void;
  period: string;
  setPeriod: (p: string) => void;
  onExport: () => void;
}

export default function ReportFilters({ template, setTemplate, period, setPeriod, onExport }: Props) {
  return (
    <div className="flex flex-col items-start md:flex-row md:items-center gap-2 mb-4 w-full">
      <Select value={template} onValueChange={setTemplate}>
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Выбор шаблона" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="by-deals">Эффективность сделок</SelectItem>
          <SelectItem value="by-managers">Сводка по менеджерам</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="month"
        value={period}
        onChange={e => setPeriod(e.target.value)}
        className="w-36"
      />
      <Button variant="outline" size="sm">
        <Filter className="mr-2 h-4 w-4" />Фильтры
      </Button>
      <Button variant="outline" size="sm" onClick={onExport}>
        <Download className="mr-2 h-4 w-4" />Экспорт
      </Button>
    </div>
  );
}
