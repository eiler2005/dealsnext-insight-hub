
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Download } from "lucide-react";

export default function ClientRegistryFilters() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
      {/* Поиск */}
      <div className="relative flex-1">
        <Input placeholder="Поиск по клиенту или менеджеру" className="pl-10" />
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
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
