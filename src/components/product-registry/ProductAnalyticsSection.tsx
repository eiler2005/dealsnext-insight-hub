
import React from "react";
import ProductRadarChart from "./ProductRadarChart";
import ProductLifecycleChart from "./ProductLifecycleChart";
import ProductAiInsights from "./ProductAiInsights";

export default function ProductAnalyticsSection() {
  return (
    <section className="w-full mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Аналитика по продуктам</h2>
      <div className="flex flex-col gap-6 md:flex-row md:gap-6">
        <div className="flex-1 min-w-0 animate-fade-in">
          <ProductRadarChart />
        </div>
        <div className="flex-1 min-w-0 animate-fade-in">
          <ProductLifecycleChart />
        </div>
        <div className="flex-1 min-w-0 animate-fade-in">
          <ProductAiInsights />
        </div>
      </div>
    </section>
  );
}
