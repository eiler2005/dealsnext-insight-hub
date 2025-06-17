
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  CheckCircle, AlertTriangle, Clock, Target, 
  TrendingUp, Plus 
} from "lucide-react";

interface TeamKpiData {
  title: string;
  value: string | number;
  icon: string;
  bgColor: string;
  iconColor: string;
  valueColor: string;
}

interface TeamKpiCardsProps {
  data: TeamKpiData[];
}

const iconMap: Record<string, any> = {
  tasks: Target,
  check: CheckCircle,
  alert: AlertTriangle,
  clock: Clock,
  percentage: TrendingUp,
  plus: Plus,
};

const TeamKpiCards = ({ data }: TeamKpiCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {data.map((item, index) => {
        const Icon = iconMap[item.icon];
        return (
          <Card key={index} className={`${item.bgColor} border-0 shadow-sm hover:shadow-md transition-shadow`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className={`text-2xl font-bold ${item.valueColor} mb-1`}>
                {item.value}
              </div>
              <p className="text-sm font-medium text-gray-600">
                {item.title}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TeamKpiCards;
