
import React from "react";

export default function DashboardIntroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-fuchsia-50 dark:from-slate-900 dark:to-slate-950 mb-6 rounded-xl border shadow-sm p-6 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">🗂 Реестр продуктов + Дашборд руководителя</h2>
      <p className="text-muted-foreground text-base mb-4">
        Раздел объединяет подробный реестр продуктов компании и дашборд руководителя для анализа эффективности линейки. 
        Это ядро работы с продуктовой информацией: от статуса продукта до его влияния на бизнес.
        <span className="block mt-1">
          Основная цель — обеспечить прозрачность, управляемость и стратегический рост за счёт эффективной работы с данными.
        </span>
      </p>
      <div className="grid gap-3 md:grid-cols-2 text-sm">
        <div>
          <div className="font-semibold mb-1">📁 Реестр продуктов</div>
          <ul className="list-disc ml-5 space-y-1">
            <li>Полная таблица по каждому продукту: название, тип, статус, доход, маржа, ROI, SLA</li>
            <li>Ответственные команды и менеджеры</li>
            <li>Фильтрация, сортировка, экспорт, добавление новых</li>
            <li>Кликабельные строки — открытие карточки продукта</li>
            <li>Метить продукт как “флагман”, “под угрозой”, “убыточный”</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-1">📊 Дашборд руководителя</div>
          <ul className="list-disc ml-5 space-y-1">
            <li>Ключевые метрики по линейке: прибыль, SLA, ROI, % убыточных</li>
            <li>Топ-продукты и антирейтинг по метрикам</li>
            <li>Графики: прибыль по категориям, SLA/ROI динамика</li>
            <li>AI-блоки: рекомендации, Зоны роста/риска</li>
            <li>Быстрые действия для стратегических решений</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
