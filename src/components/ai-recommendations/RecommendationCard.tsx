
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Zap, Bell, TrendingUp, AlertTriangle } from "lucide-react";

export type RecommendationType =
  | "Потенциал роста"
  | "Риск оттока"
  | "Оптимизация"
  | "Проблемные зоны";

const icons: Record<RecommendationType, React.ElementType> = {
  "Потенциал роста": TrendingUp,
  "Риск оттока": Bell,
  "Оптимизация": Zap,
  "Проблемные зоны": AlertTriangle,
};

const bgColors: Record<RecommendationType, string> = {
  "Потенциал роста": "bg-green-100 text-green-600",
  "Риск оттока": "bg-orange-100 text-orange-600",
  "Оптимизация": "bg-sky-100 text-sky-600",
  "Проблемные зоны": "bg-red-100 text-red-600",
};

export type RecommendationCardProps = {
  type: RecommendationType;
  description: string;
  potential: string;
  date: string;
  status: "new" | "inprogress" | "done" | "ignored";
  onDetails: () => void;
  onSetStatus: (st: "inprogress" | "done" | "ignored") => void;
};

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  type,
  description,
  potential,
  date,
  status,
  onDetails,
  onSetStatus,
}) => {
  const Icon = icons[type];

  return (
    <div
      className={cn(
        "bg-card rounded-lg shadow-sm border flex flex-col p-4 gap-3 transition hover:shadow-md relative animate-fade-in"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("rounded-full p-2 shrink-0", bgColors[type])}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-base">{type}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-between text-sm mt-0.5">
        <div className="font-semibold text-xl">{potential || <span>-</span>}</div>
        <div className="text-muted-foreground">{date}</div>
      </div>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={onDetails}
        >
          Детали
        </Button>
        <Button
          variant={status === "done" ? "default" : "outline"}
          size="sm"
          onClick={() => onSetStatus("done")}
        >
          Выполнено
        </Button>
        <Button
          variant={status === "inprogress" ? "default" : "outline"}
          size="sm"
          onClick={() => onSetStatus("inprogress")}
        >
          В работе
        </Button>
        <Button
          variant={status === "ignored" ? "destructive" : "outline"}
          size="sm"
          onClick={() => onSetStatus("ignored")}
        >
          Игнор
        </Button>
        {status !== "new" && (
          <span className={cn(
            "ml-2 text-xs px-2 py-0.5 rounded opacity-80 inline-block",
            status === "done" && "bg-green-200 text-green-800",
            status === "inprogress" && "bg-sky-200 text-sky-800",
            status === "ignored" && "bg-red-100 text-red-600"
          )}>
            {status === "done"
              ? "Выполнено"
              : status === "inprogress"
                ? "В работе"
                : "Проигнорировано"}
          </span>
        )}
      </div>
    </div>
  );
};
