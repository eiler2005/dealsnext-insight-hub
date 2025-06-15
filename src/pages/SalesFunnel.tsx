
import { useState } from "react";
import Header from "@/components/layout/Header";
import FunnelChartComponent from "@/components/sales-funnel/FunnelChart";
import DealStageTable from "@/components/sales-funnel/DealStageTable";
import { salesFunnelData } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const funnelProcessDescription = (
  <div className="mb-3 text-muted-foreground">
    Общий процесс продаж: <b>Новые лиды</b> → <b>Квалификация</b> → <b>Предложение</b> → <b>Переговоры</b> → <b>Закрытие сделки</b>
    <br />
    На каждом этапе видно общие числа и отдельные сделки.
  </div>
);

const SalesFunnel = () => {
  const [selectedStage, setSelectedStage] = useState<string | undefined>(undefined);

  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Воронка и процесс продаж</h1>
        {funnelProcessDescription}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Воронка продаж</CardTitle>
              <CardDescription>Визуализация этапов и числа сделок</CardDescription>
            </CardHeader>
            <CardContent>
              <FunnelChartComponent
                onStageSelect={setSelectedStage}
                selectedStage={selectedStage}
              />
              <div className="mt-4">
                <DealStageTable stage={selectedStage} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Данные по этапам</CardTitle>
              <CardDescription>Числовые показатели по этапам процесса</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {salesFunnelData.map((stage) => (
                  <li
                    key={stage.name}
                    className={`flex items-center justify-between cursor-pointer
                        rounded hover:bg-muted transition
                        ${selectedStage === stage.name ? "bg-accent font-bold" : ""}
                    `}
                    onClick={() => setSelectedStage(stage.name)}
                  >
                    <div className="flex items-center">
                      <span className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: stage.fill }}></span>
                      <span>{stage.name}</span>
                    </div>
                    <span className="font-semibold">{stage.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SalesFunnel;
