import Header from "@/components/layout/Header";
import { useState } from "react";
import ReportRoleSwitcher from "@/components/reports-export/ReportRoleSwitcher";
import ReportFilters from "@/components/reports-export/ReportFilters";
import ReportCategoriesSidebar from "@/components/reports-export/ReportCategoriesSidebar";
import ReportMetricsCards from "@/components/reports-export/ReportMetricsCards";
import ReportProfitChart from "@/components/reports-export/ReportProfitChart";
import ReportTable from "@/components/reports-export/ReportTable";
import { toast } from "@/hooks/use-toast";
import ReportTabs from "@/components/reports-export/ReportTabs";
import ReportClientsSection from "@/components/reports-export/ReportClientsSection";

const initialTemplate = "by-deals";
const initialCategory = "deals";
const initialTab = "deals"; // вместо категории — таб
const initialPeriod = "2025-06";

const ReportsExport = () => {
  const [role, setRole] = useState<"manager" | "director">("manager");
  const [template, setTemplate] = useState("by-deals");
  const [tab, setTab] = useState(initialTab); // tabs: "deals", "clients", "products", "managers"
  const [period, setPeriod] = useState(initialPeriod);

  const handleExport = () => {
    toast({
      title: "Экспорт",
      description: "Экспорт отчёта пока не реализован (заглушка)!",
    });
  };

  return (
    <>
      <Header />
      <div className="p-2 md:p-6 flex flex-col gap-4 md:gap-6 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h1 className="text-2xl font-bold mb-2">Отчёты и экспорт</h1>
          <ReportRoleSwitcher role={role} setRole={setRole} />
        </div>
        <ReportFilters
          template={template}
          setTemplate={setTemplate}
          period={period}
          setPeriod={setPeriod}
          onExport={handleExport}
        />
        <ReportTabs value={tab} onChange={setTab} />
        <div>
          {tab === "deals" && (
            <div className="flex-1 flex flex-col gap-6">
              <ReportMetricsCards role={role} />
              <ReportProfitChart />
              {/* Старую таблицу показываем для сделок */}
              <ReportTable category="deals" role={role} />
            </div>
          )}
          {tab === "clients" && (
            <ReportClientsSection />
          )}
          {tab === "products" && (
            <div className="bg-card p-6 rounded-lg shadow text-center text-muted-foreground">Вкладка "По продуктам" (шаблон — реализовать в следующих итерациях)</div>
          )}
          {tab === "managers" && (
            <div className="bg-card p-6 rounded-lg shadow text-center text-muted-foreground">Вкладка "По менеджерам" (шаблон — реализовать в следующих итерациях)</div>
          )}
        </div>
      </div>
    </>
  );
};
export default ReportsExport;
