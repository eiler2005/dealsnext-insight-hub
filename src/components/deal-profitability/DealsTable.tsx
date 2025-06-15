
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dealProfitabilityData, Deal } from "@/data/mockData";
import { cn } from "@/lib/utils";

const DealsTable = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(amount);
  }

  const getStatusVariant = (status: Deal["status"]): "default" | "secondary" | "destructive" => {
    switch (status) {
      case "Выполнена":
        return "default";
      case "В работе":
        return "secondary";
      case "Отменена":
        return "destructive";
      default:
        return "secondary";
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Все сделки</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Клиент</TableHead>
              <TableHead>Продукт</TableHead>
              <TableHead className="text-right">Сумма</TableHead>
              <TableHead className="text-right">Прибыль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Менеджер</TableHead>
              <TableHead>Дата</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dealProfitabilityData.map((deal) => (
              <TableRow key={deal.id}>
                <TableCell className="font-medium">{deal.clientName}</TableCell>
                <TableCell>{deal.product}</TableCell>
                <TableCell className="text-right">{formatCurrency(deal.amount)}</TableCell>
                <TableCell className="text-right font-semibold text-green-600">{formatCurrency(deal.profit)}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(deal.status)} className={cn(
                    getStatusVariant(deal.status) === 'default' && 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
                    getStatusVariant(deal.status) === 'secondary' && 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
                    getStatusVariant(deal.status) === 'destructive' && 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200'
                  )}>
                    {deal.status}
                  </Badge>
                </TableCell>
                <TableCell>{deal.manager}</TableCell>
                <TableCell>{new Date(deal.date).toLocaleDateString('ru-RU')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DealsTable;
