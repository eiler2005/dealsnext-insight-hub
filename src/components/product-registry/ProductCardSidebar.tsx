
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCardSidebar({ product, onClose }: {
  product: any;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div className="fixed top-0 right-0 max-w-md w-full h-full bg-background border-l shadow-lg z-50 flex flex-col animate-slide-in-right">
      <div className="flex items-center justify-between border-b p-4">
        <span className="font-bold text-lg">{product.name}</span>
        <Button size="icon" variant="ghost" onClick={onClose}>
          <X />
        </Button>
      </div>
      <div className="p-4 space-y-2 flex-1 overflow-y-auto text-sm">
        <div><span className="font-semibold">Тип:</span> {product.type}</div>
        <div><span className="font-semibold">Описание:</span> {product.description}</div>
        <div><span className="font-semibold">Прибыль:</span> {"₽" + (product.profit/1_000_000).toFixed(2) + "М"}</div>
        <div><span className="font-semibold">Маржа:</span> {product.margin}%</div>
        <div><span className="font-semibold">Клиентов:</span> {product.clients}</div>
        <div><span className="font-semibold">Сделок:</span> {product.deals}</div>
        <div><span className="font-semibold">SLA:</span> {product.sla}</div>
        <div><span className="font-semibold">ROI:</span> {product.roi}%</div>
        <div className="pt-4 text-muted-foreground/80">
          <span className="font-semibold">— Скоро тут:</span>
          <ul className="pl-5 list-disc">
            <li>История изменений условий</li>
            <li>Параметры тарификации и индивидуальные условия</li>
            <li>Активные клиенты и лайфтайм</li>
            <li>Комментарии, теги, заметки аналитиков</li>
            <li>Связь с разделами “Условия” и “Сделки”</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
