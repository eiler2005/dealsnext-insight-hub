
import React from "react";

export default function ProductAnalyticsSidebar() {
  // В следующих шагах сюда добавится дашборд с графиками, AI, экспорт, фильтры по трендам и т.д.
  return (
    <aside className="sticky top-0">
      <div className="font-semibold mb-2">📊 Аналитика</div>
      <div className="text-sm text-muted-foreground mb-2">
        <span>Графики по прибыли, маржинальности, категориям — скоро тут!</span>
      </div>
      <div className="font-semibold mb-2">🧠 AI‑рекомендации</div>
      <ul className="text-sm text-muted-foreground pl-4 list-disc">
        <li>Видны продукты с низкой маржинальностью, SLA проблемами, провалами по прибыли.</li>
        <li>Мгновенные советы по развитию продуктовой линейки.</li>
        <li>Связки для cross-sell и индивидуальных условий.</li>
        <li className="mt-2 text-xs text-muted-foreground/60">— soon™ (по клику класса будут подробности)</li>
      </ul>
    </aside>
  );
}
