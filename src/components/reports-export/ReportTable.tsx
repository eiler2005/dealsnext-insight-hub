
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useState } from "react";
import ReportDetailModal from "./ReportDetailModal";

const demoDealRows = [
  { id: 1, client: "РЖД", product: "API Платформа", profit: "12 млн ₽", date: "23.05.2025", status: "Завершена", sla: "Выполнено" },
  { id: 2, client: "Аэрофлот", product: "CRM-интеграция", profit: "8.5 млн ₽", date: "01.06.2025", status: "В работе", sla: "Просрочка 3 дня" }
];

const demoManagerRows = [
  { id: 1, manager: "Иванов С.", deals: 18, profit: "2.3 млн ₽", slaIssues: 3, lastActive: "12.06.2025" },
  { id: 2, manager: "Смирнова А.", deals: 24, profit: "1.7 млн ₽", slaIssues: 0, lastActive: "14.06.2025" }
];

interface Props {
  category: string;
  role: "manager" | "director";
}

export default function ReportTable({ category, role }: Props) {
  const [detailRow, setDetailRow] = useState<any>(null);

  // Выбор демо-таблицы
  if (category === "managers") {
    return (
      <>
        <div className="bg-card p-2 rounded-lg shadow overflow-x-auto mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Менеджер</TableHead>
                <TableHead>Кол-во сделок</TableHead>
                <TableHead>Средняя прибыль</TableHead>
                <TableHead>SLA-нарушения</TableHead>
                <TableHead>Последняя активность</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoManagerRows.map(row => (
                <TableRow key={row.id} className="cursor-pointer hover:bg-accent" onClick={() => setDetailRow(row)}>
                  <TableCell>{row.manager}</TableCell>
                  <TableCell>{row.deals}</TableCell>
                  <TableCell>{row.profit}</TableCell>
                  <TableCell>{row.slaIssues > 0 ? <span className="text-red-500">{row.slaIssues}</span> : row.slaIssues}</TableCell>
                  <TableCell>{row.lastActive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <ReportDetailModal open={!!detailRow} row={detailRow} onClose={() => setDetailRow(null)} type="manager" />
      </>
    );
  }

  // (по умолчанию — сделки)
  return (
    <>
      <div className="bg-card p-2 rounded-lg shadow overflow-x-auto mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Клиент</TableHead>
              <TableHead>Продукт</TableHead>
              <TableHead>Прибыль</TableHead>
              <TableHead>Дата сделки</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>SLA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoDealRows.map(row => (
              <TableRow key={row.id} className="cursor-pointer hover:bg-accent" onClick={() => setDetailRow(row)}>
                <TableCell>{row.client}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell>{row.profit}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  {row.sla?.startsWith("Просрочка") ? (
                    <span className="text-red-500">{row.sla}</span>
                  ) : row.sla}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <ReportDetailModal open={!!detailRow} row={detailRow} onClose={() => setDetailRow(null)} type="deal" />
    </>
  );
}
