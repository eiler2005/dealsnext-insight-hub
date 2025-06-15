
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
  // Исправляем обработчик onClick под требования Recharts/Funnel
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip />
          <Funnel
            dataKey="value"
            data={salesFunnelData}
            isAnimationActive
            onClick={(_, payload) => {
              // payload - объект данных (stage), если есть onStageSelect
              if (onStageSelect && payload?.name) {
                onStageSelect(payload.name);
              }
            }}
          >
            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            <LabelList position="center" fill="#fff" stroke="none" dataKey="value" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
      <div className="text-center text-xs mt-2 text-muted-foreground">
        Кликните по этапу, чтобы увидеть сделки
      </div>
      {selectedStage && (
        <div className="text-center text-sm font-medium mt-1">
          Выбран этап: <span className="text-primary">{selectedStage}</span>
        </div>
      )}
    </div>
  );
};

export default FunnelChartComponent;
