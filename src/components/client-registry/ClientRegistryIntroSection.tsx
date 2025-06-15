
import React from "react";

export default function ClientRegistryIntroSection() {
  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-indigo-100 via-blue-50 to-white dark:from-slate-800 dark:via-slate-900/70 dark:to-slate-950 border border-indigo-200 dark:border-slate-800 rounded-2xl shadow-md px-6 py-7 md:p-10 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl md:text-4xl">📇</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Раздел: <span className="text-indigo-700 dark:text-indigo-400">Реестр клиентов</span>
          </h1>
        </div>
        <p className="md:text-lg text-base text-slate-700 dark:text-slate-200 mb-2 font-medium">
          <b>Центральная точка управления всей клиентской базой компании:</b> не просто база данных, а <span className="text-indigo-700 dark:text-indigo-300 font-semibold">аналитический хаб</span>, сочетающий функции CRM, SLA-мониторинга и AI-оценки.
        </p>
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-4">
          <span className="font-semibold text-slate-700 dark:text-slate-100">Задача —</span> максимальная прозрачность по клиентам, управление статусом, историями и рисками. <br className="hidden md:block"/>
          Единое окно для анализа и действий по всей клиентской базе.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📁</span>
              <span className="font-semibold md:text-lg text-slate-800 dark:text-slate-100">Клиентский реестр</span>
            </div>
            <ul className="list-disc ml-7 space-y-1 text-slate-700 dark:text-slate-200 text-base md:text-[16px]">
              <li>Таблица клиентов: название, менеджер, статус, прибыль, сделки, SLA, индивидуальные условия</li>
              <li>Фильтры: менеджер, регион, отрасль, признаки риска</li>
              <li>Сортировка по прибыльности, активности, дате</li>
              <li>Открытие карточки по клику с подробностями, историей и AI-рекомендациями</li>
              <li>AI-метки: <span className="text-orange-500 mr-1 font-bold">🔥VIP</span> <span className="text-sky-700 font-bold">❄️Остывший</span> <span className="text-rose-600 font-bold">⚠️Риск</span></li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💡</span>
              <span className="font-semibold md:text-lg text-slate-800 dark:text-slate-100">Возможности и аналитика</span>
            </div>
            <ul className="list-disc ml-7 space-y-1 text-slate-700 dark:text-slate-200 text-base md:text-[16px]">
              <li>Графики по отраслям, регионам, стадиям жизненного цикла</li>
              <li>Карточки клиента: динамика, история взаимодействий, сделки, комментарии</li>
              <li>Экспорт отчётов и шаблоны для анализа</li>
              <li>Чат-заметки и уведомления о рисках/SLA-нарушениях</li>
              <li>Встраиваемый AI для раннего выявления ухода и повышения активности</li>
            </ul>
          </div>
        </div>
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-2 md:p-3 bg-white/70 dark:bg-slate-900/40 mb-3 overflow-x-auto">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Пример данных:</div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="py-1 px-2">Клиент</th>
                  <th className="py-1 px-2">Менеджер</th>
                  <th className="py-1 px-2">Прибыль</th>
                  <th className="py-1 px-2">Сделок</th>
                  <th className="py-1 px-2">SLA</th>
                  <th className="py-1 px-2">Последн. контакт</th>
                  <th className="py-1 px-2">Статус</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-indigo-800 dark:text-indigo-300 font-semibold">
                  <td className="py-1 px-2">ООО “ФинТехПлюс”</td>
                  <td className="py-1 px-2">И. Иванов</td>
                  <td className="py-1 px-2">₽1 250 000</td>
                  <td className="py-1 px-2">8</td>
                  <td className="py-1 px-2">92%</td>
                  <td className="py-1 px-2">2025-06-03</td>
                  <td className="py-1 px-2">Активный</td>
                </tr>
                <tr className="text-rose-700 dark:text-rose-400 font-semibold">
                  <td className="py-1 px-2">АО “ГлобалТорг”</td>
                  <td className="py-1 px-2">А. Смирнова</td>
                  <td className="py-1 px-2">₽420 000</td>
                  <td className="py-1 px-2">3</td>
                  <td className="py-1 px-2">76%</td>
                  <td className="py-1 px-2">2025-04-20</td>
                  <td className="py-1 px-2">Под риском</td>
                </tr>
                <tr className="text-slate-500 dark:text-slate-300">
                  <td className="py-1 px-2">ЗАО “СеверСтрой”</td>
                  <td className="py-1 px-2">Д. Гринев</td>
                  <td className="py-1 px-2">₽0</td>
                  <td className="py-1 px-2">0</td>
                  <td className="py-1 px-2">—</td>
                  <td className="py-1 px-2">2025-01-14</td>
                  <td className="py-1 px-2">Заморожен</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
          <span className="font-medium">MVP:</span> фильтрация, карточка клиента, AI-риски, отчёты по сегментам, мобильная версия.
        </div>
      </div>
    </section>
  );
}
