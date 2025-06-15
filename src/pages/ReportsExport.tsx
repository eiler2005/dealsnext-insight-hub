
import Header from "@/components/layout/Header";
import { useState } from "react";
import ReportRoleSwitcher from "@/components/reports-export/ReportRoleSwitcher";
import ReportFilters from "@/components/reports-export/ReportFilters";
import ReportCategoriesSidebar from "@/components/reports-export/ReportCategoriesSidebar";
import ReportMetricsCards from "@/components/reports-export/ReportMetricsCards";
import ReportProfitChart from "@/components/reports-export/ReportProfitChart";
import ReportTable from "@/components/reports-export/ReportTable";
import { toast } from "@/hooks/use-toast";

const initialTemplate = "by-deals";
const initialCategory = "deals";
const initialPeriod = "2025-06";

const ReportsExport = () => {
  const [role, setRole] = useState<"manager" | "director">("manager");
  const [template, setTemplate] = useState(initialTemplate);
  const [category, setCategory] = useState(initialCategory);
  const [period, setPeriod] = useState(initialPeriod);

  const handleExport = () => {
    toast({
      title: "Экспорт",
      description: "Экспорт отчёта пока не реализован (заглушка)!",
    });
  };

  // При смене шаблона авто-выбор категории
  const handleTemplateChange = (tpl: string) => {
    setTemplate(tpl);
    setCategory(tpl === "by-managers" ? "managers" : "deals");
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
          setTemplate={handleTemplateChange}
          period={period}
          setPeriod={setPeriod}
          onExport={handleExport}
        />
        <div className="flex flex-col sm:flex-row gap-4">
          <ReportCategoriesSidebar category={category} setCategory={setCategory} />
          <div className="flex-1 flex flex-col gap-6">
            <ReportMetricsCards role={role} />
            <ReportProfitChart />
            <ReportTable category={category} role={role} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReportsExport;
