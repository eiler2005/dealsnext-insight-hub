
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Client } from "@/data/mockData";

type ClientsTableProps = {
  clients: Client[];
  onSelect: (client: Client) => void;
};

function kpiColor(status: string) {
  if (status === "Риск" || status === "🔴 Риск") return "text-red-600 font-bold";
  if (status === "Низкая активность" || status === "🟡 Низкая активность") return "text-yellow-700 font-bold";
  if (status === "Активный" || status === "🟢 Активный") return "text-green-600 font-bold";
  return "";
}

export default function ClientsTable({ clients, onSelect }: ClientsTableProps) {
  return (
    <div className="rounded-lg border overflow-x-auto bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Клиент</TableHead>
            <TableHead>Прибыль (₽)</TableHead>
            <TableHead>SLA (дн.)</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Последняя сделка</TableHead>
            <TableHead>Менеджер</TableHead>
            <TableHead>Тип</TableHead>
            <TableHead>Теги</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((c) => (
            <TableRow key={c.id} onClick={() => onSelect(c)} className="cursor-pointer hover:bg-muted/50">
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.profit.toLocaleString("ru-RU")}</TableCell>
              <TableCell>{c.sla}</TableCell>
              <TableCell className={kpiColor(c.status)}>{c.status}</TableCell>
              <TableCell>{c.lastDealDate}</TableCell>
              <TableCell>{c.manager}</TableCell>
              <TableCell>{c.type}</TableCell>
              <TableCell>
                {c.tags?.map(tag => (
                  <span key={tag} className="inline-block text-xs bg-muted rounded px-2 mr-1">{tag}</span>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
