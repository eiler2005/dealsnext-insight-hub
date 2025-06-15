
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ElementType;
};

const KpiCard = ({ title, value, change, changeType, icon: Icon }: KpiCardProps) => {
  const isIncrease = changeType === 'increase';
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn("text-xs text-muted-foreground flex items-center", isIncrease ? "text-green-600" : "text-red-600")}>
          {isIncrease ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
          {change} к прошлому периоду
        </p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;
