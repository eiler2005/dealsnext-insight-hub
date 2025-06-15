
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AiInsightCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  delay: string;
};

const AiInsightCard = ({ title, description, icon: Icon, color, bgColor, delay }: AiInsightCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-fade-in" style={{ animationDelay: delay }}>
      <CardContent className="p-4 flex items-start space-x-4">
        <div className={cn("p-3 rounded-full", bgColor)}>
          <Icon className={cn("h-6 w-6", color)} />
        </div>
        <div>
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiInsightCard;
