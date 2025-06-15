
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { salesFunnelData } from '@/data/mockData';

const FunnelChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
            <FunnelChart>
            <Tooltip />
            <Funnel
                dataKey="value"
                data={salesFunnelData}
                isAnimationActive
            >
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                <LabelList position="center" fill="#fff" stroke="none" dataKey="value" />
            </Funnel>
            </FunnelChart>
        </ResponsiveContainer>
    </div>
  );
};

export default FunnelChartComponent;
