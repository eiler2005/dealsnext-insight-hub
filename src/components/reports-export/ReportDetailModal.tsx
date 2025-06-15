
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

interface Props {
  open: boolean;
  row: any;
  onClose: () => void;
  type: "deal" | "manager";
}

export default function ReportDetailModal({ open, row, onClose, type }: Props) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {type === "deal"
              ? `Детализация сделки: ${row?.client ?? ""}`
              : `Детализация по менеджеру: ${row?.manager ?? ""}`}
          </SheetTitle>
          <SheetDescription>
            {type === "deal" ? (
              <ul className="mt-2 text-sm space-y-1">
                <li><b>Продукт:</b> {row?.product}</li>
                <li><b>Прибыль:</b> {row?.profit}</li>
                <li><b>Дата:</b> {row?.date}</li>
                <li><b>Статус:</b> {row?.status}</li>
                <li><b>SLA:</b> {row?.sla}</li>
                <li className="mt-2 italic text-xs text-muted-foreground">* В этой области может быть график, история действий и рекомендации...</li>
              </ul>
            ) : (
              <ul className="mt-2 text-sm space-y-1">
                <li><b>Кол-во сделок:</b> {row?.deals}</li>
                <li><b>Средняя прибыль:</b> {row?.profit}</li>
                <li><b>SLA-нарушения:</b> {row?.slaIssues}</li>
                <li><b>Последняя активность:</b> {row?.lastActive}</li>
                <li className="mt-2 italic text-xs text-muted-foreground">* Здесь может быть подробная аналитика, сравнения, и персональные комментарии.</li>
              </ul>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
