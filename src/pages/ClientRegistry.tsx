
import Header from "@/components/layout/Header";
import ClientRegistryFilters from "@/components/client-registry/ClientRegistryFilters";
import ClientRegistryTable from "@/components/client-registry/ClientRegistryTable";

const ClientRegistry = () => (
  <>
    <Header />
    <div className="flex-1 p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-end gap-2">
          <span>📇</span>Реестр клиентов
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          Центральная точка управления клиентской базой, аналитический хаб для прозрачности, управления статусами и выявления рисков по каждому клиенту.
        </p>
      </div>
      <ClientRegistryFilters />
      <ClientRegistryTable />
    </div>
  </>
);

export default ClientRegistry;
