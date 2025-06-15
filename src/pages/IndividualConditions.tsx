import Header from "@/components/layout/Header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConditionSidebarWidgets from "@/components/individual-conditions/ConditionSidebarWidgets";
import ConditionDetailModal from "@/components/individual-conditions/ConditionDetailModal";
import ConditionTypeTiles from "@/components/individual-conditions/ConditionTypeTiles";
import ConditionAnalyticsWidgets from "@/components/individual-conditions/ConditionAnalyticsWidgets";
import { FilePlus, FileText } from "lucide-react";

// Мок-данные
const conditions = [
  {
    id: 1,
    client: "ООО “ЛайтБанк”",
    product: "Insight + SLA Premium",
    type: "Скидка",
    term: "-15%",
    endDate: "01.01.2026",
    deviation: "-9%",
    margin: "4%",
    status: "Активно"
  },
  {
    id: 2,
    client: "АО “ФармГрупп”",
    product: "Подписка API 24 мес",
    type: "Рассрочка",
    term: "4 платежа / 6 мес",
    endDate: "10.09.2025",
    deviation: "0%",
    margin: "14%",
    status: "На пересогласовании"
  },
  {
    id: 3,
    client: "ООО “БизнесПро”",
    product: "Лицензия Pro",
    type: "Бонус",
    term: "8% при объёме >10М",
    endDate: "30.12.2025",
    deviation: "-5%",
    margin: "9%",
    status: "Архив"
  }
];

const IndividualConditions = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col gap-4 p-6 max-w-[1520px] mx-auto">
        {/* ВИДИМЫЙ ВЕРХ — первый row: типы условий */}
        <ConditionTypeTiles />

        {/* Вторая строка — key метрики & summary */}
        <ConditionSidebarWidgets />

        {/* Третья строка — аналитические виджеты графиков */}
        <ConditionAnalyticsWidgets />

        {/* Основной блок */}
        <section className="flex-1 flex flex-col gap-5 mt-4">
          {/* Верхняя панель с фильтрами и кнопками */}
          <div className="bg-white/90 rounded-2xl p-4 border shadow flex flex-col md:flex-row gap-4 md:items-end justify-between sticky top-0 z-10">
            <div className="flex gap-3 flex-wrap">
              <input type="search" placeholder="Поиск по клиенту/продукту" className="border px-3 py-2 rounded-md w-52 text-sm" />
              <select className="border px-3 py-2 rounded-md text-sm" defaultValue="">
                <option value="">Тип</option>
                <option value="discount">Скидка</option>
                <option value="installment">Рассрочка</option>
                <option value="bonus">Бонус</option>
                <option value="sladelay">SLA-отступление</option>
              </select>
              <select className="border px-3 py-2 rounded-md text-sm" defaultValue="">
                <option value="">Статус</option>
                <option value="active">Активно</option>
                <option value="review">На пересогласовании</option>
                <option value="archive">Архив</option>
              </select>
              <input type="date" className="border px-3 py-2 rounded-md text-sm" />
              <input type="number" min={-100} max={100} className="border px-3 py-2 rounded-md w-24 text-sm" placeholder="Мин. маржа" />
              <input type="number" min={-100} max={100} className="border px-3 py-2 rounded-md w-24 text-sm" placeholder="Отклонение" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <FileText className="w-4 h-4" /> Экспорт
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <FilePlus className="w-4 h-4" /> Добавить условие
              </Button>
              <Button variant="default" className="flex items-center gap-2">
                Проверить маржинальность
              </Button>
            </div>
          </div>
          {/* Таблица условий */}
          <div className="flex-1 mt-2 overflow-auto animate-fade-in">
            <table className="w-full min-w-[900px] border-separate border-spacing-y-2">
              <thead>
                <tr className="rounded-xl bg-slate-100 text-base text-slate-700 font-bold sticky top-0 z-0">
                  <th className="rounded-l-xl px-4 py-3">Клиент</th>
                  <th className="px-4 py-3">Продукт</th>
                  <th className="px-4 py-3">Тип</th>
                  <th className="px-4 py-3">Условие</th>
                  <th className="px-4 py-3">Дата окончания</th>
                  <th className="px-4 py-3">Отклонение</th>
                  <th className="px-4 py-3">Маржа</th>
                  <th className="px-4 py-3">Статус</th>
                  <th className="rounded-r-xl px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {conditions.map((cond) => (
                  <tr
                    key={cond.id}
                    className="bg-white border shadow rounded-xl hover:scale-[1.01] hover:shadow-lg transition-all cursor-pointer"
                  >
                    <td className="px-4 py-3 font-semibold">{cond.client}</td>
                    <td className="px-4 py-3">{cond.product}</td>
                    <td className="px-4 py-3">{cond.type}</td>
                    <td className="px-4 py-3">{cond.term}</td>
                    <td className="px-4 py-3">{cond.endDate}</td>
                    <td className="px-4 py-3">
                      <span className={`${+cond.deviation.replace('%','') < 0 ? "text-rose-600 font-bold" : "text-slate-800"}`}>
                        {cond.deviation}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`${+cond.margin.replace('%','') < 7 ? "text-rose-600 font-bold" : "text-green-600 font-bold"}`}>
                        {cond.margin}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={
                        cond.status === "Активно"
                          ? "px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded"
                          : cond.status === "На пересогласовании"
                          ? "px-2 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded"
                          : "px-2 py-1 text-xs font-semibold bg-slate-100 text-slate-600 rounded"
                      }>
                        {cond.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Button size="sm" variant="outline" onClick={() => setSelected(cond.id)}>
                        Подробнее
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Боковые виджеты */}
        <aside className="hidden lg:flex flex-col gap-4 w-[340px] shrink-0 max-h-[90vh]">
          <ConditionSidebarWidgets />
        </aside>
      </div>
      <ConditionDetailModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        condition={conditions.find((c) => c.id === selected) || null}
      />
    </>
  );
};

export default IndividualConditions;
