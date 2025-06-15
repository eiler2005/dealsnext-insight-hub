
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Briefcase } from "lucide-react";
import ProductProfitCharts from "./ProductProfitCharts";

// Демо-данные по продуктам
const productsDemoRows = [
  {
    id: 1,
    product: "API-платформа",
    deals: 7,
    totalProfit: "15.7 млн ₽",
    avgProfit: "2.24 млн ₽",
    clients: 4,
    lastDeal: "10.06.2025",
  },
  {
    id: 2,
    product: "CRM-интеграция",
    deals: 5,
    totalProfit: "10.3 млн ₽",
    avgProfit: "2.06 млн ₽",
    clients: 3,
    lastDeal: "08.06.2025",
  },
  {
    id: 3,
    product: "Облачная платформа",
    deals: 2,
    totalProfit: "6.5 млн ₽",
    avgProfit: "3.25 млн ₽",
    clients: 2,
    lastDeal: "06.06.2025",
  },
];

export default function ReportProductsSection() {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-2">
        <Briefcase className="text-primary" />
        <CardTitle className="text-base">Эффективность по продуктам</CardTitle>
      </CardHeader>
      <CardContent>
        <ProductProfitCharts />
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Продукт</TableHead>
                <TableHead>Сделок</TableHead>
                <TableHead>Клиентов</TableHead>
                <TableHead>Общая прибыль</TableHead>
                <TableHead>Средняя прибыль</TableHead>
                <TableHead>Последняя сделка</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsDemoRows.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.deals}</TableCell>
                  <TableCell>{row.clients}</TableCell>
                  <TableCell>{row.totalProfit}</TableCell>
                  <TableCell>{row.avgProfit}</TableCell>
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
