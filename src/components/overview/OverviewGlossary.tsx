
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const TERMS = [
  { term: "SLA", desc: "Service Level Agreement. Соглашение об уровне обслуживания — контроль исполнения сделки по срокам и условиям." },
  { term: "P&L", desc: "Profit and Loss. Отчёт о прибылях и убытках — контроль прибыльности сделки/продукта." },
  { term: "ROI", desc: "Return on Investment. Возврат на инвестиции — оценка эффективности вложений." },
  { term: "UBP", desc: "Убыточная бизнес-практика. Сделка или практика, приносящая убытки компании." },
  { term: "MFC", desc: "Минимально-функциональный компонент или продукт." },
  { term: "Пакетное предложение", desc: "Комбинированное решение из нескольких продуктов или услуг для одного клиента." },
];

export default function OverviewGlossary() {
  return (
    <section className="flex flex-wrap gap-2 mt-2 mb-4">
      {TERMS.map((t) => (
        <Popover key={t.term}>
          <PopoverTrigger asChild>
            <button
              className="border px-2 py-0.5 rounded bg-white/10 text-xs font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              type="button"
            >
              {t.term}
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <span className="font-semibold">{t.term}</span>
            <div className="text-xs mt-1 text-muted-foreground">{t.desc}</div>
          </PopoverContent>
        </Popover>
      ))}
    </section>
  );
}
