
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

import { BadgeCheck, AlertTriangle } from "lucide-react";

export default function ConditionDetailModal({
  open,
  onClose,
  condition,
}: {
  open: boolean;
  onClose: () => void;
  condition: any | null;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            Индивидуальное условие &mdash; {condition?.client}
          </DialogTitle>
        </DialogHeader>
        {condition ? (
          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Продукт:</span> {condition.product}
            </div>
            <div className="flex gap-3 text-sm">
              <div>
                <span className="font-semibold">Тип:</span> {condition.type}
              </div>
              <div>
                <span className="font-semibold">Условие:</span> {condition.term}
              </div>
              <div>
                <span className="font-semibold">Период:</span> {condition.endDate}
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <div>
                <span className="font-semibold">Маржа:</span>{" "}
                <span className={+condition.margin.replace('%','') < 7 ? "text-rose-600 font-bold" : "text-green-600 font-bold"}>{condition.margin}</span>
              </div>
              <div>
                <span className="font-semibold">Отклонение:</span>{" "}
                <span className={+condition.deviation.replace('%','') < 0 ? "text-rose-600 font-bold" : ""}>{condition.deviation}</span>
              </div>
              <div>
                <span className="font-semibold">Статус:</span>{" "}
                {condition.status === "Активно" && (
                  <span className="inline-flex items-center gap-1 text-green-700 font-semibold">
                    <BadgeCheck className="w-4 h-4" /> {condition.status}
                  </span>
                )}
                {condition.status === "На пересогласовании" && (
                  <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
                    <AlertTriangle className="w-4 h-4" /> {condition.status}
                  </span>
                )}
                {condition.status === "Архив" && (
                  <span className="inline-flex items-center gap-1 text-slate-500 font-semibold">
                    Архив
                  </span>
                )}
              </div>
            </div>
            <div className="text-xs text-muted-foreground pt-3">
              <span className="font-semibold text-indigo-700">AI-комментарий: </span>
              “Маржа ниже допустимого значения, требуется эскалация руководителю. Ожидаемый риск — снижение прибыли на 9%.”
            </div>
            <div className="border-t pt-3 mt-4 text-xs">
              <div className="text-slate-500">Связанные сделки и продукты:</div>
              <ul className="list-disc ml-5">
                <li>Контракт #ЗC274 (от 15.05.2025, сумма 7 млн ₽)</li>
              </ul>
            </div>
            <div className="border-t pt-3 mt-4 text-xs text-slate-400">
              <div>История изменений: 10.05.2025 — создано, 16.05.2025 — маржа обновлена</div>
            </div>
          </div>
        ) : (
          <DialogDescription>Нет данных по условию.</DialogDescription>
        )}
        <DialogClose asChild>
          <button className="absolute top-2 right-2 text-xl text-muted-foreground">&times;</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
