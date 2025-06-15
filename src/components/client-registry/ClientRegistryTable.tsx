
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type Client = {
  id: string;
  name: string;
  manager: string;
  profit: string;
  deals: number;
  sla: string;
  lastContact: string;
  status: string;
  custom: string;
};

const clients: Client[] = [
  {
    id: "1",
    name: "ООО “ФинТехПлюс”",
    manager: "И. Иванов",
    profit: "₽1 250 000",
    deals: 8,
    sla: "92%",
    lastContact: "2025-06-03",
    status: "Активный",
    custom: "—"
  },
  {
    id: "2",
    name: "АО “ГлобалТорг”",
    manager: "А. Смирнова",
    profit: "₽420 000",
    deals: 3,
    sla: "76%",
    lastContact: "2025-04-20",
    status: "Под риском",
    custom: "Спец. условия"
  },
  {
    id: "3",
    name: "ЗАО “СеверСтрой”",
    manager: "Д. Гринев",
    profit: "₽0",
    deals: 0,
    sla: "—",
    lastContact: "2025-01-14",
    status: "Заморожен",
    custom: "—"
  }
];

function statusClass(status: string) {
  if (status.includes("рис")) return "text-rose-600 font-bold";
  if (status.includes("Активный")) return "text-green-700 font-bold";
  if (status.includes("Заморожен")) return "text-slate-500 font-semibold";
  return "";
}

export default function ClientRegistryTable() {
  return (
    <div className="rounded-xl border shadow bg-white/70 dark:bg-slate-900/60 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Клиент</TableHead>
            <TableHead>Менеджер</TableHead>
            <TableHead>Прибыль</TableHead>
            <TableHead>Сделок</TableHead>
            <TableHead>SLA</TableHead>
            <TableHead>Последний контакт</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Инд. условия</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map(client => (
            <TableRow key={client.id} className="hover:bg-accent/40 cursor-pointer transition-all">
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.manager}</TableCell>
              <TableCell>{client.profit}</TableCell>
              <TableCell>{client.deals}</TableCell>
              <TableCell>{client.sla}</TableCell>
              <TableCell>{client.lastContact}</TableCell>
              <TableCell className={statusClass(client.status)}>{client.status}</TableCell>
              <TableCell>
                {client.custom === "—"
                  ? <span className="text-muted-foreground">—</span>
                  : <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded px-2 py-0.5 text-xs">{client.custom}</span>}
              </TableCell>
              <TableCell>
                <Button size="sm" variant="ghost" className="text-xs font-medium">Открыть</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Простая пагинация-заглушка */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-xs bg-white/60 dark:bg-slate-900/40">
        <span>Показано 1–3 из 3</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Назад</Button>
          <Button variant="outline" size="sm" disabled>Вперёд</Button>
        </div>
      </div>
    </div>
  );
}
