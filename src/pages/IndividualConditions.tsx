
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
    status: "🟢 Активно"
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
    status: "🟡 На пересогласовании"
  },
  {
    id: 3,
    client: "ООО “БизнесПро”",
    product: "Лицензия Pro",
    type: "Бонус",
    term: "8% при объёме >10M",
    endDate: "30.12.2025",
    deviation: "-5%",
    margin: "9%",
    status: "🔵 Архив"
  },
  {
    id: 4,
    client: "АО “Техносеть”",
    product: "API + AI Dashboard",
    type: "Пакет",
    term: "-20% на комплект",
    endDate: "30.06.2025",
    deviation: "-2%",
    margin: "11%",
    status: "🟢 Активно"
  },
  {
    id: 5,
    client: "ГК “ИнТех”",
    product: "Подписка на модуль P&L",
    type: "Отложенный платёж",
    term: "90 дней после внедрения",
    endDate: "15.08.2025",
    deviation: "0%",
    margin: "13%",
    status: "🟢 Активно"
  },
  {
    id: 6,
    client: "АО “Банк Глобус”",
    product: "SLA-контроль",
    type: "Скидка",
    term: "-12% на 12 мес.",
    endDate: "31.12.2025",
    deviation: "-6%",
    margin: "7%",
    status: "🟢 Активно"
  },
  {
    id: 7,
    client: "ООО “ЛогистПро”",
    product: "CRM-интеграция",
    type: "SLA-исключение",
    term: "SLA +24 ч",
    endDate: "01.11.2025",
    deviation: "-1%",
    margin: "15%",
    status: "🟢 Активно"
  },
  {
    id: 8,
    client: "АО “Энергосеть”",
    product: "SaaS Лицензия 3 года",
    type: "Отложенный платёж",
    term: "Через 60 дней после подписания",
    endDate: "01.03.2026",
    deviation: "0%",
    margin: "17%",
    status: "🟢 Активно"
  },
  {
    id: 9,
    client: "ООО “ФармСеть”",
    product: "Аналитика + API + SLA",
    type: "Пакет",
    term: "-25% от стандартной стоимости",
    endDate: "01.12.2025",
    deviation: "-10%",
    margin: "3%",
    status: "🟠 Критично"
  },
  {
    id: 10,
    client: "ООО “МедиаСкан”",
    product: "Модуль “Цифровизация”",
    type: "Рассрочка",
    term: "3 платежа × 1/3",
    endDate: "01.10.2025",
    deviation: "0%",
    margin: "16%",
    status: "🟢 Активно"
  },
  {
    id: 11,
    client: "АО “ДистрибСофт”",
    product: "SaaS-хаб",
    type: "Комиссия",
    term: "1.5% от оборота вместо тарифа",
    endDate: "31.03.2026",
    deviation: "-3%",
    margin: "12%",
    status: "🟢 Активно"
  },
  {
    id: 12,
    client: "АО “ГиперТех”",
    product: "Платформа интеграции",
    type: "MFC",
    term: "Синхронизация с минимальной ставкой",
    endDate: "01.01.2026",
    deviation: "-2%",
    margin: "10%",
    status: "🟢 Активно"
  },
  {
    id: 13,
    client: "ВТБ",
    product: "Калькулятор прибыли",
    type: "Совместная разработка",
    term: "0 ₽, co-dev",
    endDate: "30.06.2026",
    deviation: "0%",
    margin: "—",
    status: "🟢 Активно"
  },
  {
    id: 14,
    client: "ООО “РитейлХолдинг”",
    product: "CRM Dashboard",
    type: "Бонус",
    term: "5% на продление",
    endDate: "01.07.2025",
    deviation: "-1%",
    margin: "10%",
    status: "🟢 Активно"
  },
  {
    id: 15,
    client: "ПАО “ЛесТехно”",
    product: "SLA Basic",
    type: "SLA-исключение",
    term: "SLA 72ч вместо 24ч",
    endDate: "15.08.2025",
    deviation: "-2%",
    margin: "9%",
    status: "🟠 На пересогласовании"
  },
  {
    id: 16,
    client: "ООО “ФинИнтех”",
    product: "Сервис BI",
    type: "Скидка",
    term: "-10% персонально",
    endDate: "01.10.2025",
    deviation: "-4%",
    margin: "6%",
    status: "🟢 Активно"
  },
  {
    id: 17,
    client: "АО “СтройСкан”",
    product: "Платформа управления",
    type: "Комиссия",
    term: "2% от сделок >50 млн",
    endDate: "01.04.2026",
    deviation: "-3%",
    margin: "8%",
    status: "🟢 Активно"
  },
  {
    id: 18,
    client: "ГК “ДевСофт”",
    product: "Insight Pro",
    type: "Бонус",
    term: "10% при early renewal",
    endDate: "01.05.2026",
    deviation: "-1%",
    margin: "13%",
    status: "🟢 Активно"
  },
  {
    id: 19,
    client: "ООО “НейроЛинк”",
    product: "SLA + AI",
    type: "Пакет",
    term: "3 в 1 со скидкой 18%",
    endDate: "31.12.2025",
    deviation: "-6%",
    margin: "5%",
    status: "🔴 Риск"
  },
  {
    id: 20,
    client: "АО “ХимПром”",
    product: "API Suite",
    type: "Отложенный платёж",
    term: "Платёж через 45 дней",
    endDate: "01.01.2026",
    deviation: "0%",
    margin: "14%",
    status: "🟢 Активно"
  }
];

const IndividualConditions = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col gap-6 p-6 max-w-[1520px] mx-auto">
        {/* 1. Типы условий */}
        <ConditionTypeTiles />

        {/* 2. Краткая статистика */}
        <div>
          <ConditionSidebarWidgets />
        </div>

        {/* 3. Графики и отчётные виджеты */}
        <div>
          <ConditionAnalyticsWidgets />
        </div>

        {/* 4. Основная таблица */}
        <section className="flex-1 flex flex-col gap-5 mt-2">
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
