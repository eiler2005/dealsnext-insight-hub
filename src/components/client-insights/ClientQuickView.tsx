
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Client } from "@/data/mockData";

type Props = {
  client?: Client;
  onClose: () => void;
};

export default function ClientQuickView({ client, onClose }: Props) {
  if (!client) return <div className="hidden md:block md:w-1/3 lg:w-1/4 p-4"></div>;

  return (
    <div className="fixed md:static top-0 right-0 z-30 w-full md:w-1/3 lg:w-1/4 h-full bg-background border-l shadow-lg p-4 overflow-y-auto">
      <button onClick={onClose} className="absolute top-2 right-4 text-gray-400 hover:text-gray-800 text-2xl">&times;</button>
      <Card>
        <CardTitle className="p-4 text-xl">{client.name}</CardTitle>
        <CardContent>
          <div className="space-y-2">
            <div><b>Отрасль:</b> {client.industry}</div>
            <div><b>Активность:</b> {client.activity}</div>
            <div><b>Общая прибыль:</b> ₽{client.profit.toLocaleString("ru-RU")}</div>
            <div><b>Продукты:</b> {client.products.join(", ")}</div>
            <div><b>Инд. условия:</b> {client.customTerms ? "Да" : "Нет"}</div>
            <div><b>SLA средний:</b> {client.sla} дней</div>
            <div><b>Менеджер:</b> {client.manager}</div>
            <div><b>Комментарий:</b> {client.comments}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
