
import { dealProfitabilityData } from "@/data/mockData";

interface DealStageTableProps {
  stage?: string; // название этапа воронки
}

const stageToStatuses: Record<string, string[]> = {
  "Новые лиды": ["В работе", "Отменена", "Выполнена"],
  "Квалификация": ["В работе", "Выполнена"],
  "Предложение": ["В работе"],
  "Переговоры": ["В работе"],
  "Закрытие сделки": ["Выполнена", "Отменена"],
};

// Логика фильтрации по этапу: для демонстрации оставим простой маппинг по статусу сделки и этапу воронки
function filterDealsByStage(stage: string | undefined) {
  if (!stage) return [];
  // В реальном проекте нужен флаг этапа в объекте сделки, здесь — по статусу
  const statuses = stageToStatuses[stage] || [];
  return dealProfitabilityData.filter((deal) => statuses.includes(deal.status));
}

const DealStageTable = ({ stage }: DealStageTableProps) => {
  const deals = filterDealsByStage(stage);

  if (!stage) {
    return (
      <div className="text-muted-foreground text-sm py-6 text-center">
        Выберите этап воронки, чтобы увидеть соответствующие сделки.
      </div>
    );
  }

  if (deals.length === 0) {
    return (
      <div className="text-muted-foreground text-sm py-6 text-center">
        Нет сделок для выбранного этапа.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-xl text-xs">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 text-left">Клиент</th>
            <th className="p-2 text-left">Продукт</th>
            <th className="p-2 text-right">Сумма</th>
            <th className="p-2 text-right">Прибыль</th>
            <th className="p-2 text-center">Статус</th>
            <th className="p-2 text-left">Менеджер</th>
            <th className="p-2 text-left">Дата</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="odd:bg-background">
              <td className="p-2">{deal.clientName}</td>
              <td className="p-2">{deal.product}</td>
              <td className="p-2 text-right">{deal.amount.toLocaleString("ru-RU")}</td>
              <td className="p-2 text-right">{deal.profit.toLocaleString("ru-RU")}</td>
              <td className="p-2 text-center">{deal.status}</td>
              <td className="p-2">{deal.manager}</td>
              <td className="p-2">{deal.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealStageTable;
