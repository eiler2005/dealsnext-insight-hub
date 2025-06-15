
import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import ClientFilters from "@/components/client-insights/ClientFilters";
import ClientKpiCards from "@/components/client-insights/ClientKpiCards";
import ClientsTable from "@/components/client-insights/ClientsTable";
import ClientQuickView from "@/components/client-insights/ClientQuickView";
import { clientsData, Client } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const initialFilters = {
  industry: "Все",
  profitRange: [0, 50000000],
  region: "",
  activity: "Все",
  sla: "",
  search: "",
};

const filterClients = (clients: Client[], filters: typeof initialFilters) => {
  return clients.filter(client => {
    const matchesIndustry =
      filters.industry === "Все" || client.industry === filters.industry;
    const matchesRegion =
      !filters.region || client.region.includes(filters.region);
    const matchesProfit =
      client.profit >= filters.profitRange[0] && client.profit <= filters.profitRange[1];
    const matchesSLA = !filters.sla || client.sla <= filters.sla;
    const matchesSearch =
      !filters.search ||
      client.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      client.manager.toLowerCase().includes(filters.search.toLowerCase());
    return (
      matchesIndustry &&
      matchesRegion &&
      matchesProfit &&
      matchesSLA &&
      matchesSearch
    );
  });
};

const ClientInsights = () => {
  const [filters, setFilters] = useState(initialFilters);
  const filteredClients = useMemo(
    () => filterClients(clientsData, filters),
    [filters]
  );
  const [selected, setSelected] = useState<Client | undefined>(undefined);

  return (
    <>
      <Header />
      <div className="flex-1 p-4 md:p-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-3">👥 Инсайты по клиентам</h1>
          <ClientFilters filters={filters} setFilters={setFilters} />
          <ClientKpiCards />
          <div className="flex justify-between mb-2 mt-4">
            <div className="text-base font-medium">Каталог клиентов</div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Экспорт .xlsx
            </Button>
          </div>
          <ClientsTable clients={filteredClients} onSelect={setSelected} />
        </div>
        <ClientQuickView client={selected} onClose={() => setSelected(undefined)} />
      </div>
    </>
  );
};

export default ClientInsights;
