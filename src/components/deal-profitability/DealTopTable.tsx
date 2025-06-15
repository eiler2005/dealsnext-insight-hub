
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { dealProfitabilityData } from "@/data/mockData";

const getSortedDeals = () => {
  // Мокаем top-10 по прибыли и по убыточности (отдельно, здесь прибыль только положительная)
  const profitable = [...dealProfitabilityData]
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 5); // top-5 в плюс

  // В реальном кейсе — был бы расчет убытков, тут пример с "наименьшей прибылью"
  const unprofitable = [...dealProfitabilityData]
    .sort((a, b) => a.profit - b.profit)
    .slice(0, 5); // top-5 в минус (или наименьшая прибыль)

  return { profitable, unprofitable };
};

const DealTopTable = () => {
  const { profitable, unprofitable } = getSortedDeals();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">ТОП-5 прибыльных сделок</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left bg-muted">
                <th className="p-2">Клиент</th>
                <th className="p-2">Продукт</th>
                <th className="p-2 text-right">Прибыль</th>
                <th className="p-2 text-right">SLA</th>
                <th className="p-2">Менеджер</th>
              </tr>
            </thead>
            <tbody>
              {profitable.map((deal) => (
                <tr key={deal.id} className="odd:bg-background">
                  <td className="p-2">{deal.clientName}</td>
                  <td className="p-2">{deal.product}</td>
                  <td className="p-2 text-right text-green-700 font-bold">
                    {deal.profit.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 })}
                  </td>
                  <td className="p-2 text-right">{(Math.random() * 2 + 3).toFixed(1)}</td>
                  <td className="p-2">{deal.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">ТОП-5 убыточных/низкомаржинальных</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left bg-muted">
                <th className="p-2">Клиент</th>
                <th className="p-2">Продукт</th>
                <th className="p-2 text-right">Прибыль</th>
                <th className="p-2 text-right">SLA</th>
                <th className="p-2">Менеджер</th>
              </tr>
            </thead>
            <tbody>
              {unprofitable.map((deal) => (
                <tr key={deal.id} className="odd:bg-background">
                  <td className="p-2">{deal.clientName}</td>
                  <td className="p-2">{deal.product}</td>
                  <td className="p-2 text-right text-red-700 font-bold">
                    {deal.profit.toLocaleString("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 })}
                  </td>
                  <td className="p-2 text-right">{(Math.random() * 2 + 4.3).toFixed(1)}</td>
                  <td className="p-2">{deal.manager}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealTopTable;
