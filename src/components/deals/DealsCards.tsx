
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Eye, Edit, Share, Bell, CheckSquare, Calendar, User, TrendingUp } from "lucide-react";
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

interface DealsCardsProps {
  deals: Deal[];
}

const DealsCards = ({ deals }: DealsCardsProps) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <Card key={deal.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg text-primary-blue">{deal.id}</CardTitle>
                <p className="text-sm text-gray-600 mt-1">{deal.client}</p>
              </div>
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
            </div>
            <div className="flex gap-2 mt-3">
              {getStatusBadge(deal.status)}
              {deal.hasUrgentTasks && (
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Срочно
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Products */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Продукты:</p>
              <div className="space-y-1">
                {deal.products.slice(0, 2).map((product, index) => (
                  <p key={index} className="text-sm text-gray-600">{product}</p>
                ))}
                {deal.products.length > 2 && (
                  <p className="text-xs text-gray-500">+{deal.products.length - 2} еще</p>
                )}
              </div>
            </div>

            {/* Dates */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <div className="text-sm">
                <p>Начало: {formatDate(deal.startDate)}</p>
                <p>Окончание: {formatDate(deal.expectedEndDate)}</p>
              </div>
            </div>

            {/* Responsible */}
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              <span className="text-sm">{deal.responsible}</span>
            </div>

            {/* SLA and Marginality */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-500 mb-1">SLA</p>
                {getSLABadge(deal.sla)}
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Маржинальность</p>
                {getMarginalityBadge(deal.marginality)}
              </div>
            </div>

            {/* Profitability */}
            <div className="flex items-center gap-2 pt-2 border-t">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-600">
                {formatCurrency(deal.profitability)}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DealsCards;
