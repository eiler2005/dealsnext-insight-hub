
import React from "react";
import { AlertTriangle, Archive, TrendingUp } from "lucide-react";

const aiInsights = [
  {
    icon: <Archive className="text-muted-foreground mr-1.5" size={15} />,
    text: "Продукт не используется 3+ месяца — возможен архив.",
    type: "archive",
  },
  {
    icon: <AlertTriangle className="text-yellow-500 mr-1.5" size={15} />,
    text: "Продукт стабильно нарушает SLA — требуется предупреждение.",
    type: "sla",
  },
  {
    icon: <TrendingUp className="text-green-500 mr-1.5" size={15} />,
    text: "Продукт часто приносит upsell — усилить развитие.",
    type: "upsell",
  },
];

export default function ProductAiInsights() {
  return (
    <div className="bg-white dark:bg-secondary rounded-lg shadow p-4 mb-5">
      <div className="font-semibold mb-2 flex items-center gap-2 text-[15px]">🤖 AI-инсайты</div>
      <ul className="space-y-2">
        {aiInsights.map((ins, i) => (
          <li key={i} className={
            "flex items-center p-2 rounded text-sm " +
            (ins.type === "archive"
              ? "bg-slate-100 dark:bg-slate-800"
              : ins.type === "sla"
              ? "bg-yellow-50 dark:bg-yellow-950"
              : "bg-green-50 dark:bg-green-950")
          }>
            {ins.icon}
            <span className={
              ins.type === "archive"
                ? "text-muted-foreground"
                : ins.type === "sla"
                ? "text-yellow-800 dark:text-yellow-400"
                : "text-green-700 dark:text-green-300"
            }>
              {ins.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
