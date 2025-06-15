
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Users } from "lucide-react";
import ManagerAnalyticsCharts from "./ManagerAnalyticsCharts";
import ManagerAiInsights from "./ManagerAiInsights";

// Демо-данные по менеджерам
const managersDemoRows = [
  {
    id: 1,
    name: "Иванов И.И.",
    deals: 6,
    totalProfit: "9.7 млн ₽",
    avgProfit: "1.62 млн ₽",
    clients: 4,
    sla: "3.7 дня",
    lastDeal: "13.06.2025",
  },
  {
    id: 2,
    name: "Петров П.П.",
    deals: 4,
    totalProfit: "5.3 млн ₽",
    avgProfit: "1.33 млн ₽",
    clients: 2,
    sla: "4.5 дня",
    lastDeal: "10.06.2025",
  },
  {
    id: 3,
    name: "Сидорова А.В.",
    deals: 3,
    totalProfit: "4.8 млн ₽",
    avgProfit: "1.6 млн ₽",
    clients: 2,
    sla: "3.1 дня",
    lastDeal: "12.06.2025",
  },
];

export default function ReportManagersSection() {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Users className="text-primary" />
        <CardTitle className="text-base">Результаты по менеджерам</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Диаграммы и аналитика */}
        <ManagerAnalyticsCharts />
        <ManagerAiInsights />
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Менеджер</TableHead>
                <TableHead>Сделок</TableHead>
                <TableHead>Клиентов</TableHead>
                <TableHead>Общая прибыль</TableHead>
                <TableHead>Средняя прибыль</TableHead>
                <TableHead>SLA (средн.)</TableHead>
                <TableHead>Последняя сделка</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {managersDemoRows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.deals}</TableCell>
                  <TableCell>{row.clients}</TableCell>
                  <TableCell>{row.totalProfit}</TableCell>
                  <TableCell>{row.avgProfit}</TableCell>
                  <TableCell>{row.sla}</TableCell>
                  <TableCell>{row.lastDeal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
