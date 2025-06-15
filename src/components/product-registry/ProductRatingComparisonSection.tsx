
import React, { useState } from "react";
import { demoProducts as baseProducts } from "@/pages/ProductRegistry"; // Используем уже заведенные демо-данные
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, AlertCircle, TrendingUp, TrendingDown, Users, Star } from "lucide-react";

const metrics = [
  { key: "profit", label: "💰 Прибыль" },
  { key: "sla", label: "⚙️ SLA" },
  { key: "deals", label: "📊 Активность" },
  { key: "margin", label: "📈 Маржа" },
];

function getColorByMetric(val: number, key: string) {
  if (key === "profit") return val > 0 ? "bg-green-100 text-green-700" : "bg-rose-100 text-rose-600";
  if (key === "sla") return val < 3 ? "bg-green-100 text-green-700" : val < 5 ? "bg-yellow-100 text-yellow-700" : "bg-rose-100 text-rose-600";
  if (key === "margin") return val > 18 ? "bg-green-100 text-green-700" : val > 10 ? "bg-yellow-100 text-yellow-700" : "bg-rose-100 text-rose-600";
  if (key === "deals") return val > 15 ? "bg-green-100 text-green-700" : val >= 7 ? "bg-yellow-100 text-yellow-700" : "bg-rose-100 text-rose-600";
  return "";
}

// Рейтинг продуктов по метрике (top-10)
function getTopProducts(products: typeof baseProducts, metric: string) {
  return [...products]
    .sort((a, b) => (b[metric] as number) - (a[metric] as number))
    .slice(0, 10);
}

export default function ProductRatingComparisonSection() {
  const [activeTab, setActiveTab] = useState<string>(metrics[0].key);
  const [selected, setSelected] = useState<number[]>([]);
  const products = baseProducts;

  const topList = getTopProducts(products, activeTab);

  // Сравнение двух выбранных продуктов
  const comparison =
    selected.length >= 2
      ? selected.map(id => products.find(p => p.id === id)).filter(Boolean)
      : [];

  // Пример простого AI-инсайта на базе сравнения
  let aiInsight = "";
  if (comparison.length === 2) {
    const [a, b] = comparison;
    if (activeTab === "profit" && a && b) {
      aiInsight =
        a.profit > b.profit
          ? `“${a.name} приносит на ${(100 * (a.profit - b.profit) / Math.abs(b.profit || 1)).toFixed(1)}% больше прибыли, при SLA ${a.sla} против ${b.sla}.”`
          : `“${b.name} приносит на ${(100 * (b.profit - a.profit) / Math.abs(a.profit || 1)).toFixed(1)}% больше прибыли, при SLA ${b.sla} против ${a.sla}.”`;
    }
    if (activeTab === "sla" && a && b) {
      aiInsight =
        a.sla < b.sla
          ? `“${a.name} быстрее исполняет SLA (${a.sla} дн. против ${b.sla} дн.)”`
          : `“${b.name} быстрее исполняет SLA (${b.sla} дн. против ${a.sla} дн.)”`;
    }
  }

  return (
    <section className="w-full mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">📌 Продуктовый рейтинг и сравнение</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Левая часть: рейтинг */}
        <div className="flex-1 min-w-0">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex mb-3 w-full justify-start gap-2 flex-wrap">
              {metrics.map(m => (
                <TabsTrigger key={m.key} value={m.key} className="px-3">
                  {m.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {metrics.map(m => (
              <TabsContent key={m.key} value={m.key}>
                <div className="rounded-lg border bg-background p-2 mb-2 max-w-full overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr>
                        <th className="p-2 font-semibold text-left">#</th>
                        <th className="p-2 font-semibold text-left">Продукт</th>
                        <th className="p-2 font-semibold text-left">{m.label}</th>
                        <th className="p-2 font-semibold text-left">ROI</th>
                        <th className="p-2 font-semibold text-left"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {getTopProducts(products, m.key).map((p, idx) => (
                        <tr key={p.id} className="border-b last:border-b-0">
                          <td className="py-2 px-2 font-mono text-xs text-muted-foreground">{idx + 1}</td>
                          <td className="py-2 px-2 font-medium flex flex-col">
                            <span>{p.name}</span>
                            <span className="text-xs text-muted-foreground">{p.type}</span>
                          </td>
                          <td className={`py-2 px-2 font-semibold ${getColorByMetric(p[m.key], m.key)} rounded`}>
                            {m.key === "profit"
                              ? "₽" +
                                (p.profit / 1_000_000).toLocaleString("ru-RU", {
                                  maximumFractionDigits: 1,
                                }) +
                                "М"
                              : m.key === "sla"
                              ? p.sla + " дн."
                              : m.key === "deals"
                              ? p.deals
                              : m.key === "margin"
                              ? p.margin + " %"
                              : p[m.key]}
                          </td>
                          <td className="py-2 px-2">{p.roi}</td>
                          <td className="py-2 px-2">
                            <input
                              type="checkbox"
                              checked={selected.includes(p.id)}
                              onChange={e => {
                                if (e.target.checked) {
                                  if (selected.length < 4) setSelected(sel => [...sel, p.id]);
                                } else {
                                  setSelected(sel => sel.filter(id => id !== p.id));
                                }
                              }}
                              className="accent-primary"
                              title="Выбрать для сравнения"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-muted-foreground px-2">Выберите 2–4 продукта для сравнения</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        {/* Правая часть: сравнение */}
        <div className="flex-1 min-w-0">
          {comparison.length < 2 ? (
            <div className="h-full flex items-center justify-center text-muted-foreground text-sm min-h-[170px]">
              <span>Выберите минимум 2 продукта для сравнения</span>
            </div>
          ) : (
            <Card className="mb-4">
              <CardContent className="py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                  {comparison.map((p, i) => (
                    <div key={p!.id} className="flex flex-col gap-2 border rounded-lg p-3 bg-secondary/80">
                      <div className="flex items-center gap-2 font-semibold text-lg">
                        <Star className="w-4 h-4 text-primary" /> {p!.name}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <span className="font-medium">Прибыль:</span>
                        <span>{p!.profit > 0 ? "+" : ""}{(p!.profit/1_000_000).toLocaleString("ru-RU",{maximumFractionDigits:1})} млн</span>
                        <span className="font-medium">Маржа:</span>
                        <span>{p!.margin}%</span>
                        <span className="font-medium">Клиентов:</span>
                        <span>{p!.clients}</span>
                        <span className="font-medium">Сделок:</span>
                        <span>{p!.deals}</span>
                        <span className="font-medium">ROI:</span>
                        <span>{p!.roi}</span>
                        <span className="font-medium">SLA:</span>
                        <span>{p!.sla} дн.</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Простое сравнение: кто выигрывает по выбранной метрике */}
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-medium text-sm text-primary">🔎 Сравнительный инсайт</span>
                  <span className="text-xs">{aiInsight || "Отметьте метрику, чтобы получить инсайт"}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
