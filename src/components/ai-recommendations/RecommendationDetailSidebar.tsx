
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";

type Props = {
  open: boolean;
  onClose: () => void;
  data: {
    type: string;
    description: string;
    potential: string;
    date: string;
    detailsText: string;
    history?: Array<{ date: string; event: string }>;
    comment?: string;
  } | null;
  onComment: (c: string) => void;
};

export const RecommendationDetailSidebar: React.FC<Props> = ({
  open,
  onClose,
  data,
  onComment,
}) => {
  const [comment, setComment] = useState(data?.comment || "");

  React.useEffect(() => {
    setComment(data?.comment || "");
  }, [data]);

  if (!data) return null;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>{data.type}</SheetTitle>
          <SheetDescription>{data.description}</SheetDescription>
        </SheetHeader>
        <div className="text-md mt-5">
          <strong>Потенциал:</strong> {data.potential}
        </div>
        <div className="mt-1 text-sm text-muted-foreground mb-4">{data.date}</div>
        <div className="py-2">{data.detailsText}</div>
        {data.history && (
          <div className="mt-4">
            <span className="font-semibold text-sm mb-2 block">История:</span>
            <Table>
              <TableBody>
                {data.history.map((h, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="w-28">{h.date}</TableCell>
                    <TableCell>{h.event}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        <div className="mt-6">
          <label className="block text-xs font-semibold text-muted-foreground mb-1">
            Комментарий
          </label>
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Добавить свой комментарий..."
          />
          <Button className="mt-2 w-full" onClick={() => onComment(comment)}>
            Сохранить комментарий
          </Button>
        </div>
        <SheetFooter>
          <Button variant="outline" className="mt-8 w-full" onClick={onClose}>
            Закрыть
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
