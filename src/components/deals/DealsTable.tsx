
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, Edit, Share, Bell, CheckSquare } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Deal {
  id: string;
  client: string;
  products: string[];
  status: string;
  startDate: string;
  expectedEndDate: string;
  responsible: string;
  sla: string;
  marginality: string;
  profitability: number;
  hasUrgentTasks: boolean;
  conditionsType: string;
}

interface DealsTableProps {
  deals: Deal[];
}

const DealsTable = ({ deals }: DealsTableProps) => {
  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { variant: any; className: string }> = {
      "На согласовании": { variant: "secondary", className: "bg-yellow-100 text-yellow-800" },
      "Исполняется": { variant: "secondary", className: "bg-blue-100 text-blue-800" },
      "Завершена": { variant: "secondary", className: "bg-green-100 text-green-800" }
    };
    
    const config = statusConfig[status] || { variant: "secondary", className: "" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const getSLABadge = (sla: string) => {
    const slaConfig: Record<string, { variant: any; className: string }> = {
      "В срок": { variant: "secondary", className: "bg-green-100 text-green-800" },
      "Просрочка": { variant: "secondary", className: "bg-red-100 text-red-800" },
      "Риск": { variant: "secondary", className: "bg-orange-100 text-orange-800" }
    };
    
    const config = slaConfig[sla] || { variant: "secondary", className: "" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {sla}
      </Badge>
    );
  };

  const getMarginalityBadge = (marginality: string) => {
    const marginalityConfig: Record<string, { variant: any; className: string }> = {
      "Очень высокая": { variant: "secondary", className: "bg-emerald-100 text-emerald-800" },
      "Высокая": { variant: "secondary", className: "bg-green-100 text-green-800" },
      "Средняя": { variant: "secondary", className: "bg-yellow-100 text-yellow-800" },
      "Низкая": { variant: "secondary", className: "bg-red-100 text-red-800" }
    };
    
    const config = marginalityConfig[marginality] || { variant: "secondary", className: "" };
    return (
      <Badge variant={config.variant} className={config.className}>
        {marginality}
      </Badge>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID / Клиент</TableHead>
            <TableHead>Продукты</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Даты</TableHead>
            <TableHead>Ответственный</TableHead>
            <TableHead>SLA</TableHead>
            <TableHead>Маржинальность</TableHead>
            <TableHead>Прибыль</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deals.map((deal) => (
            <TableRow key={deal.id} className="hover:bg-gray-50">
              <TableCell>
                <div>
                  <div className="font-medium text-primary-blue">{deal.id}</div>
                  <div className="text-sm text-gray-600">{deal.client}</div>
                  {deal.hasUrgentTasks && (
                    <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs mt-1">
                      Срочные задачи
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  {deal.products.slice(0, 2).map((product, index) => (
                    <div key={index} className="text-sm">{product}</div>
                  ))}
                  {deal.products.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{deal.products.length - 2} еще
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {getStatusBadge(deal.status)}
              </TableCell>
              <TableCell>
                <div className="text-sm">
                  <div>Начало: {formatDate(deal.startDate)}</div>
                  <div>Окончание: {formatDate(deal.expectedEndDate)}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm">{deal.responsible}</div>
              </TableCell>
              <TableCell>
                {getSLABadge(deal.sla)}
              </TableCell>
              <TableCell>
                {getMarginalityBadge(deal.marginality)}
              </TableCell>
              <TableCell>
                <div className="font-medium">{formatCurrency(deal.profitability)}</div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="w-4 h-4 mr-2" />
                      Подробнее
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" />
                      Редактировать
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="w-4 h-4 mr-2" />
                      Поделиться
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell className="w-4 h-4 mr-2" />
                      Уведомления
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckSquare className="w-4 h-4 mr-2" />
                      Задачи
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DealsTable;
