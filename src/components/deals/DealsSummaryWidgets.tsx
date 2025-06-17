
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Clock, CheckCircle, Target, Users } from "lucide-react";

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

interface DealsSummaryWidgetsProps {
  deals: Deal[];
}

const DealsSummaryWidgets = ({ deals }: DealsSummaryWidgetsProps) => {
  const totalDeals = deals.length;
  const urgentDeals = deals.filter(deal => deal.hasUrgentTasks).length;
  const overdueDeals = deals.filter(deal => deal.sla === "Просрочка").length;
  const completedDeals = deals.filter(deal => deal.status === "Завершена").length;
  const highMarginDeals = deals.filter(deal => 
    deal.marginality === "Высокая" || deal.marginality === "Очень высокая"
  ).length;
  const individualTermsDeals = deals.filter(deal => deal.conditionsType === "Индивидуальные").length;

  const widgets = [
    {
      title: "Всего сделок",
      value: totalDeals,
      icon: Target,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-blue-800"
    },
    {
      title: "Срочные задачи",
      value: urgentDeals,
      icon: AlertTriangle,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      valueColor: "text-red-800"
    },
    {
      title: "Просроченные",
      value: overdueDeals,
      icon: Clock,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      valueColor: "text-orange-800"
    },
    {
      title: "Завершенные",
      value: completedDeals,
      icon: CheckCircle,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      valueColor: "text-green-800"
    },
    {
      title: "Высокая маржа",
      value: highMarginDeals,
      icon: TrendingUp,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      valueColor: "text-emerald-800"
    },
    {
      title: "Индивидуальные условия",
      value: individualTermsDeals,
      icon: Users,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      valueColor: "text-purple-800"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {widgets.map((widget, index) => {
        const Icon = widget.icon;
        return (
          <Card key={index} className={`${widget.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Icon className={`w-5 h-5 ${widget.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className={`text-2xl font-bold ${widget.valueColor} mb-1`}>
                {widget.value}
              </div>
              <CardTitle className="text-sm font-medium text-gray-600">
                {widget.title}
              </CardTitle>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DealsSummaryWidgets;
