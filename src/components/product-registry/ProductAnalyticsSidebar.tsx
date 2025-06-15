
import React from "react";
import ProductRadarChart from "./ProductRadarChart";
import ProductLifecycleChart from "./ProductLifecycleChart";
import ProductAiInsights from "./ProductAiInsights";

export default function ProductAnalyticsSidebar() {
  // Сайдбар с тремя аналитическими блоками + современные стили
  return (
    <aside className="sticky top-0 w-full">
      <div className="flex flex-col gap-5">
        <ProductRadarChart />
        <ProductLifecycleChart />
        <ProductAiInsights />
      </div>
    </aside>
  );
}
