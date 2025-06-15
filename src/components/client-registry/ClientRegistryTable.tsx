
import { Button } from "@/components/ui/button";

// Для визуальных бейджей
function StatusBadge({ status }: { status: string }) {
  let color = "text-green-600";
  if (status.includes("рис")) color = "text-rose-600";
  if (status.includes("Заморожен")) color = "text-slate-500";
  return <span className={`font-bold ${color}`}>{status}</span>;
}

function CustomBadge({ custom }: { custom: string }) {
  if (custom === "—") return <span className="text-muted-foreground">—</span>;
  return (
    <span className="inline-block bg-indigo-100 text-indigo-800 rounded px-2 py-0.5 text-xs font-semibold border border-indigo-200">
      {custom}
    </span>
  );
}

// Демо-данные
const clients = [
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

// Маркеры клиенто
const CLIENT_MARKERS: Record<string, React.ReactNode> = {
  "ООО “ФинТехПлюс”": <span title="VIP" className="ml-1 text-xl align-middle">🔥</span>,
  "АО “ГлобалТорг”": <span title="Под риском" className="ml-1 text-xl align-middle">⚠️</span>,
  "ЗАО “СеверСтрой”": <span title="Остывший" className="ml-1 text-xl align-middle">❄️</span>,
};

export default function ClientRegistryTable({ filterManager, filterSegment, filterRegion, filterSearch }: {
  filterManager?: string;
  filterSegment?: string;
  filterRegion?: string;
  filterSearch?: string;
}) {
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
    <div className="rounded-2xl border border-slate-200 shadow-lg bg-white/90 overflow-x-auto mt-2 animate-fade-in">
      <table className="w-full text-base">
        <thead className="bg-gray-50 border-b">
          <tr className="">
            <th className="px-4 py-3 text-slate-800 font-bold text-left whitespace-nowrap">Клиент</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Менеджер</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Прибыль</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Сделок</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">SLA</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Последний контакт</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Статус</th>
            <th className="px-4 py-3 font-bold text-left whitespace-nowrap">Инд. условия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(client => (
            <tr
              key={client.id}
              className="hover:bg-slate-100/70 transition-colors cursor-pointer"
              style={{ animation: "fade-in .4s" }}
            >
              <td className="px-4 py-3 flex items-center gap-1 font-semibold">
                <span>{client.name}</span>
                {CLIENT_MARKERS[client.name]}
              </td>
              <td className="px-4 py-3">{client.manager}</td>
              <td className="px-4 py-3">{client.profit}</td>
              <td className="px-4 py-3">{client.deals}</td>
              <td className="px-4 py-3">{client.sla}</td>
              <td className="px-4 py-3">{client.lastContact}</td>
              <td className="px-4 py-3"><StatusBadge status={client.status} /></td>
              <td className="px-4 py-3"><CustomBadge custom={client.custom} /></td>
              <td className="px-4 py-3">
                <button className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 font-medium text-sm border border-slate-300 transition-colors">
                  Открыть
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50 text-sm rounded-b-2xl">
        <span className="text-slate-500">Показано {filtered.length > 0 ? `1–${filtered.length} из ${filtered.length}` : "0"}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Назад</Button>
          <Button variant="outline" size="sm" disabled>Вперёд</Button>
        </div>
      </div>
    </div>
  );
}
