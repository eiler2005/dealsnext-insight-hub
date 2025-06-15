
import React, { useState } from "react";
import { demoProducts as baseProducts } from "@/data/productDemoData";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wallet, Globe, BarChart2, AreaChart } from "lucide-react";

// Карточки и метрики с иконками для табов
const metrics = [
  { key: "profit", label: <> <Wallet className="inline mr-1 -mt-1 text-yellow-500" /> <span>Прибыль</span> </> },
  { key: "sla", label: <> <Globe className="inline mr-1 -mt-1 text-blue-500" /> <span>SLA</span> </> },
  { key: "deals", label: <> <BarChart2 className="inline mr-1 -mt-1 text-purple-500" /> <span>Активность</span> </> },
  { key: "margin", label: <> <AreaChart className="inline mr-1 -mt-1 text-pink-500" /> <span>Маржа</span> </> },
];

function getColorByMetric(val: number, key: string) {
  if (key === "profit") return val > 0 ? "bg-green-50 text-green-700" : "bg-rose-50 text-rose-400";
  if (key === "sla") return val < 3 ? "bg-green-50 text-green-700" : val < 5 ? "bg-yellow-50 text-yellow-700" : "bg-rose-50 text-rose-400";
  if (key === "margin") return val > 18 ? "bg-green-50 text-green-700" : val > 10 ? "bg-yellow-50 text-yellow-700" : "bg-rose-50 text-rose-400";
  if (key === "deals") return val > 15 ? "bg-green-50 text-green-700" : val >= 7 ? "bg-yellow-50 text-yellow-700" : "bg-rose-50 text-rose-400";
  return "";
}

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

  // Пример для сравнения: показываем всегда, если выбрано < 2 продуктов
  const exampleProducts = [
    products[1], // B
    products[2], // C
  ];

  // AI-инсайт на базе сравнения
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
    <section className="w-full mt-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left flex gap-2 items-center">
        <span role="img" aria-label="rating">📌</span>
        Продуктовый рейтинг и сравнение
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Левая часть: рейтинг */}
        <div className="flex-1 min-w-0">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex mb-4 w-full justify-start gap-3 flex-wrap bg-muted/30 p-1 rounded-lg border">
              {metrics.map(m => (
                <TabsTrigger
                  key={typeof m.key === "string" ? m.key : String(m.key)}
                  value={m.key}
                  className="px-4 py-2 rounded-lg data-[state=active]:bg-white transition-colors font-semibold data-[state=active]:shadow border"
                >
                  {m.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {metrics.map(m => (
              <TabsContent key={m.key} value={m.key}>
                <div className="rounded-xl border bg-white p-2 mb-2 max-w-full overflow-x-auto shadow-sm transition-shadow">
                  <table className="min-w-full text-sm table-fixed">
                    <thead>
                      <tr>
                        <th className="p-2 font-semibold text-left text-slate-500 w-7">#</th>
                        <th className="p-2 font-semibold text-left w-40">Продукт</th>
                        <th className="p-2 font-semibold text-left">{m.label}</th>
                        <th className="p-2 font-semibold text-left w-12">ROI</th>
                        <th className="p-2 font-semibold text-center w-9"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {getTopProducts(products, m.key).map((p, idx) => (
                        <tr key={p.id}
                            className={
                              "group border-b last:border-b-0 transition-all " +
                              (selected.includes(p.id)
                                ? "bg-blue-50/50 hover:bg-blue-100"
                                : "hover:bg-muted/50")
                            }
                        >
                          <td className="py-2 px-2 font-mono text-xs text-muted-foreground">{idx + 1}</td>
                          <td className="py-2 px-2 font-semibold flex gap-2 items-baseline">
                            <span className="truncate">{p.name}</span>
                            <span className="text-xs text-slate-400 font-normal">{p.type}</span>
                          </td>
                          <td className={`py-2 px-2 font-semibold text-base text-green-700 ${getColorByMetric(p[m.key], m.key)} rounded`}>
                            {m.key === "profit"
                              ? <span className="font-mono font-bold text-green-600">{`₽${(p.profit / 1_000_000).toLocaleString("ru-RU", {maximumFractionDigits:0, minimumFractionDigits:0})}M`}</span>
                              : m.key === "sla"
                              ? <span className="font-mono">{p.sla + " дн."}</span>
                              : m.key === "deals"
                              ? <span className="font-mono">{p.deals}</span>
                              : m.key === "margin"
                              ? <span>{p.margin + " %"}</span>
                              : <span>{p[m.key]}</span>
                            }
                          </td>
                          <td className="py-2 px-2">{p.roi}</td>
                          <td className="py-2 px-2 text-center">
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
                              className="accent-primary scale-125 transition-all"
                              title="Выбрать для сравнения"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-xs text-muted-foreground px-3 mb-3 font-medium">Выберите 2–4 продукта для сравнения</div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        {/* Правая часть: сравнение или пример */}
        <div className="flex-1 min-w-0">
          {comparison.length < 2 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground min-h-[224px] pt-4">
              <div className="w-full flex flex-col md:flex-row gap-4 mb-4">
                {exampleProducts.map((p) => (
                  <Card key={p.id} className="flex-1 min-w-0 bg-white border border-slate-100 shadow-md rounded-2xl px-4 pt-4 pb-2">
                    <CardContent className="py-2">
                      <div className="flex items-center gap-2 font-semibold text-lg mb-2">
                        <Star className="w-5 h-5 text-blue-500" /> {p.name}
                      </div>
                      <div className="text-xs text-slate-400 mb-3">{p.type}</div>
                      <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[13px] leading-tight">
                        <span className="font-medium text-slate-600">Прибыль:</span>
                        <span className="font-mono text-green-700 font-semibold">{"₽" + (p.profit/1_000_000).toLocaleString("ru-RU",{maximumFractionDigits:0, minimumFractionDigits:0})}M</span>
                        <span className="font-medium text-slate-600">Маржа:</span>
                        <span>{p.margin}%</span>
                        <span className="font-medium text-slate-600">Клиентов:</span>
                        <span>{p.clients}</span>
                        <span className="font-medium text-slate-600">Сделок:</span>
                        <span>{p.deals}</span>
                        <span className="font-medium text-slate-600">ROI:</span>
                        <span>{p.roi}</span>
                        <span className="font-medium text-slate-600">SLA:</span>
                        <span>{p.sla} дн.</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <span className="text-base font-semibold text-slate-700 mb-2">Выберите минимум 2 продукта для сравнения</span>
              <span className="text-xs text-slate-400">(Пример сравнения)</span>
            </div>
          ) : (
            <Card className="mb-4 border border-blue-200 bg-blue-25 shadow-lg rounded-2xl">
              <CardContent className="py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                  {comparison.map((p) => (
                    <div key={p!.id} className="flex flex-col gap-2 border border-slate-200 rounded-xl p-4 bg-blue-50/60 shadow-md">
                      <div className="flex items-center gap-2 font-semibold text-xl">
                        <Star className="w-6 h-6 text-blue-500" /> <span className="font-bold">{p!.name}</span>
                      </div>
                      <div className="text-xs text-slate-400 mb-1">{p!.type}</div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm leading-tight">
                        <span className="font-medium text-slate-600">Прибыль:</span>
                        <span className="font-mono text-green-700 font-semibold">{p!.profit > 0 ? "+" : ""}{(p!.profit/1_000_000).toLocaleString("ru-RU",{maximumFractionDigits:1})}M</span>
                        <span className="font-medium text-slate-600">Маржа:</span>
                        <span>{p!.margin}%</span>
                        <span className="font-medium text-slate-600">Клиентов:</span>
                        <span>{p!.clients}</span>
                        <span className="font-medium text-slate-600">Сделок:</span>
                        <span>{p!.deals}</span>
                        <span className="font-medium text-slate-600">ROI:</span>
                        <span>{p!.roi}</span>
                        <span className="font-medium text-slate-600">SLA:</span>
                        <span>{p!.sla} дн.</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-medium text-sm text-blue-700">🔎 Сравнительный инсайт</span>
                  <span className="text-xs text-slate-700">{aiInsight || "Отметьте 2+ продукта и метрику — получите инсайт"}</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
