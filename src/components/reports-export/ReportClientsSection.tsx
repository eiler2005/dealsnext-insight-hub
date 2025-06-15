
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart2, Users, Award } from "lucide-react";
import ReportDetailModal from "./ReportDetailModal";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";

// Демо-данные для таблицы
const clientsDemoRows = [
  {
    id: 1,
    name: "РЖД",
    products: "API-платформа",
    deals: 5,
    totalProfit: "12 млн ₽",
    totalProfitValue: 12,
    avgProfit: "2.4 млн ₽",
    avgSLA: "3.1 дня",
    lastActive: "23.05.2025",
    comment: "требуется спец. тариф",
  },
  {
    id: 2,
    name: "Аэрофлот",
    products: "CRM-интеграция",
    deals: 3,
    totalProfit: "8.5 млн ₽",
    totalProfitValue: 8.5,
    avgProfit: "2.83 млн ₽",
    avgSLA: "4.8 дня",
    lastActive: "01.06.2025",
    comment: "просрочка, нужно связаться",
  },
  {
    id: 3,
    name: "Газпромбанк",
    products: "API-платформа, CRM",
    deals: 2,
    totalProfit: "5.2 млн ₽",
    totalProfitValue: 5.2,
    avgProfit: "2.6 млн ₽",
    avgSLA: "2.6 дня",
    lastActive: "04.06.2025",
    comment: "",
  },
];

// Для графика берём тот же демо-массив (можно отсортировать, если нужен топ-10)
const chartData = clientsDemoRows
  .map((c) => ({ name: c.name, value: c.totalProfitValue }))
  .sort((a, b) => b.value - a.value);

export default function ReportClientsSection() {
  const [detail, setDetail] = useState<any>(null);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-card rounded-lg shadow p-4">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-primary" />
            <h3 className="font-semibold text-lg">Каталог клиентов</h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Продукты</TableHead>
                  <TableHead>Сделок</TableHead>
                  <TableHead>Общая прибыль</TableHead>
                  <TableHead>Средняя прибыль</TableHead>
                  <TableHead>SLA (средн.)</TableHead>
                  <TableHead>Последняя активность</TableHead>
                  <TableHead>Комментарий</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientsDemoRows.map(row => (
                  <TableRow key={row.id} className="cursor-pointer hover:bg-accent">
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.products}</TableCell>
                    <TableCell>{row.deals}</TableCell>
                    <TableCell>{row.totalProfit}</TableCell>
                    <TableCell>{row.avgProfit}</TableCell>
                    <TableCell>{row.avgSLA}</TableCell>
                    <TableCell>{row.lastActive}</TableCell>
                    <TableCell>{row.comment}</TableCell>
                    <TableCell>
                      <button
                        className="text-xs text-blue-600 underline"
                        onClick={e => {
                          e.stopPropagation();
                          setDetail(row);
                        }}
                      >
                        Подробнее
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="w-full lg:w-[420px]">
          <Card className="h-full">
            <CardHeader className="flex-row items-center space-y-0 gap-2">
              <BarChart2 className="text-primary" />
              <CardTitle className="text-base">Топ-10 клиентов по прибыли</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">График: топ-клиенты по прибыли.</p>
              <div className="h-44 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ left: 24, right: 12, top: 8, bottom: 8 }}
                    barSize={26}
                  >
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip
                      formatter={value => `${value} млн ₽`}
                      cursor={{ fill: "#f1f5f9" }}
                    />
                    <Bar dataKey="value" fill="#3b82f6">
                      {chartData.map((entry, i) => (
                        <Cell key={`cell-${i}`} fill="#3b82f6" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <Award className="text-yellow-500" />
            <CardTitle className="text-base">AI-инсайты по клиентам (демо)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm pl-4 list-disc">
              <li>Потенциал допродаж: 2 клиента с ростом.</li>
              <li>Зона риска (падение активности/SLA): 1 клиент.</li>
              <li>Профили для таргета: 2 похожих на топ-прибыльных.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <ReportDetailModal open={!!detail} row={detail} onClose={() => setDetail(null)} type="deal" />
    </div>
  );
}

