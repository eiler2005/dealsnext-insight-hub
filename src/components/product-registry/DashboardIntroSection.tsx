
import React from "react";

export default function DashboardIntroSection() {
  return (
    <section className="mb-8">
      <div className="bg-blue-50 dark:bg-slate-900/60 border border-blue-100 dark:border-slate-800 rounded-2xl shadow-md px-6 py-7 md:p-10 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl md:text-4xl">🗂</span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Реестр продуктов + Дашборд руководителя
          </h1>
        </div>
        <div className="md:text-lg text-base text-slate-600 dark:text-slate-200 mb-2 font-medium">
          Раздел объединяет подробный реестр продуктов компании и дашборд руководителя для анализа эффективности линейки. Это ядро работы с продуктовой информацией: от статуса продукта до его влияния на бизнес.
        </div>
        <div className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-6">
          <strong className="font-semibold text-slate-700 dark:text-slate-100">Основная цель —</strong> обеспечить прозрачность, управляемость и стратегический рост за счёт эффективной работы с данными.
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📁</span>
              <span className="font-semibold text-lg md:text-xl text-slate-800 dark:text-slate-100">Реестр продуктов</span>
            </div>
            <ul className="list-disc ml-7 space-y-1 text-slate-700 dark:text-slate-200 text-base md:text-[16px]">
              <li>Полная таблица по каждому продукту: название, тип, статус, доход, маржа, ROI, SLA</li>
              <li>Ответственные команды и менеджеры</li>
              <li>Фильтрация, сортировка, экспорт, добавление новых</li>
              <li>Кликабельные строки — открытие карточки продукта</li>
              <li>Метить продукт как “флагман”, “под угрозой”, “убыточный”</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📊</span>
              <span className="font-semibold text-lg md:text-xl text-slate-800 dark:text-slate-100">Дашборд руководителя</span>
            </div>
            <ul className="list-disc ml-7 space-y-1 text-slate-700 dark:text-slate-200 text-base md:text-[16px]">
              <li>Ключевые метрики по линейке: прибыль, SLA, ROI, % убыточных</li>
              <li>Топ-продукты и антирейтинг по метрикам</li>
              <li>Графики: прибыль по категориям, SLA/ROI динамика</li>
              <li>AI-блоки: рекомендации, Зоны роста/риска</li>
              <li>Быстрые действия для стратегических решений</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
