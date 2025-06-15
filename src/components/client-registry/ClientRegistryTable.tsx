
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
  segment?: string;
  region?: string;
};

// Добавим segment и region для фильтрации (демо)
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
    custom: "—",
    segment: "ФинТех",
    region: "msk"
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
    custom: "Спец. условия",
    segment: "Глобал",
    region: "spb"
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
    custom: "—",
    segment: "Север",
    region: "ural"
  }
];

import React from "react";

// VIP/рисковость + устаревание определим простым правилом для demo
const CLIENT_MARKERS: Record<string, React.ReactNode> = {
  "ООО “ФинТехПлюс”": <span title="VIP" className="ml-1 text-xl align-middle">🔥</span>,
  "АО “ГлобалТорг”": <span title="Под риском" className="ml-1 text-xl align-middle">⚠️</span>,
  "ЗАО “СеверСтрой”": <span title="Остывший" className="ml-1 text-xl align-middle">❄️</span>,
};

function statusClass(status: string) {
  if (status.includes("рис")) return "text-rose-600 font-bold";
  if (status.includes("Активный")) return "text-green-700 font-bold";
  if (status.includes("Заморожен")) return "text-slate-500 font-semibold";
  return "";
}

export default function ClientRegistryTable({ filterManager, filterSegment, filterRegion, filterSearch }: {
  filterManager?: string;
  filterSegment?: string;
  filterRegion?: string;
  filterSearch?: string;
}) {
  // Эмулируем фильтрацию
  let filtered = clients;
  if (filterManager) filtered = filtered.filter(c => c.manager === filterManager);
  if (filterRegion) filtered = filtered.filter(c => c.region === filterRegion);
  if (filterSegment) filtered = filtered.filter(c => c.segment === filterSegment);
  if (filterSearch) {
    filtered = filtered.filter(
      c =>
        c.name.toLowerCase().includes(filterSearch.toLowerCase()) ||
        c.manager.toLowerCase().includes(filterSearch.toLowerCase())
    );
  }

  return (
    <div className="rounded-xl border shadow bg-white/70 dark:bg-slate-900/60 overflow-x-auto">
      <table className="w-full caption-bottom text-sm">
        <thead>
          <tr>
            <th>Клиент</th>
            <th>Менеджер</th>
            <th>Прибыль</th>
            <th>Сделок</th>
            <th>SLA</th>
            <th>Последний контакт</th>
            <th>Статус</th>
            <th>Инд. условия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(client => (
            <tr key={client.id} className="hover:bg-accent/40 cursor-pointer transition-all">
              <td>
                <span>{client.name}</span>
                {CLIENT_MARKERS[client.name]}
              </td>
              <td>{client.manager}</td>
              <td>{client.profit}</td>
              <td>{client.deals}</td>
              <td>{client.sla}</td>
              <td>{client.lastContact}</td>
              <td className={statusClass(client.status)}>{client.status}</td>
              <td>
                {client.custom === "—"
                  ? <span className="text-muted-foreground">—</span>
                  : <span className="inline-block bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded px-2 py-0.5 text-xs">{client.custom}</span>}
              </td>
              <td>
                <button className="px-3 py-1 text-xs rounded bg-slate-100 hover:bg-slate-200 font-medium">Открыть</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Простая пагинация-заглушка */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-xs bg-white/60 dark:bg-slate-900/40">
        <span>Показано {filtered.length > 0 ? `1–${filtered.length} из ${filtered.length}` : "0"} </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Назад</Button>
          <Button variant="outline" size="sm" disabled>Вперёд</Button>
        </div>
      </div>
    </div>
  );
}
