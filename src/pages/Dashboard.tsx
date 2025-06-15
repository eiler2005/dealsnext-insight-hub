
import Header from "@/components/layout/Header";
import KpiCard from "@/components/dashboard/KpiCard";
import ProfitSlaChart from "@/components/dashboard/ProfitSlaChart";
import AiInsightCard from "@/components/dashboard/AiInsightCard";
import { kpiData, aiInsightsData } from "@/data/mockData";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi, index) => (
            <KpiCard key={kpi.title} {...kpi} />
          ))}
        </div>

        <div className="mt-6">
          <ProfitSlaChart />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">AI-инсайты</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aiInsightsData.map((insight, index) => (
              <AiInsightCard key={insight.title} {...insight} delay={`${0.3 + index * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
