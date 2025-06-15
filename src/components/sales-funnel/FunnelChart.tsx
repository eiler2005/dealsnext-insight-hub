
import {
  FunnelChart,
  Funnel,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { salesFunnelData } from "@/data/mockData";

interface FunnelChartComponentProps {
  onStageSelect?: (stageName: string) => void;
  selectedStage?: string;
}

const FunnelChartComponent = ({
  onStageSelect,
  selectedStage,
}: FunnelChartComponentProps) => {
  // Обработчик клика для сегмента воронки
  const handleSegmentClick = (data: any) => {
    if (onStageSelect && data?.name) {
      onStageSelect(data.name);
    }
  };

  return (
    <div
      style={{ width: "100%", minHeight: 400 }}
      className="rounded-lg bg-white border mb-2 pt-3 pb-2 px-2 flex flex-col items-center"
    >
      <div className="w-full" style={{ height: 340 }}>
        <ResponsiveContainer>
          <FunnelChart>
            <Tooltip />
            <Funnel
              dataKey="value"
              data={salesFunnelData}
              isAnimationActive
              onClick={handleSegmentClick}
            >
              <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
              <LabelList position="center" fill="#fff" stroke="none" dataKey="value" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full flex flex-col items-center justify-center mb-2">
        <div className="text-xs text-muted-foreground mt-1 mb-0.5 select-none">
          Кликните по этапу, чтобы увидеть сделки
        </div>
        {selectedStage && (
          <div className="text-sm font-medium mt-1">
            Выбран этап: <span className="text-primary">{selectedStage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FunnelChartComponent;
