
import Header from "@/components/layout/Header";

const ClientRegistry = () => (
    <>
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold">Реестр клиентов</h1>
            <p className="mt-4 text-muted-foreground">Здесь будет реестр всех клиентов.</p>
        </div>
    </>
);
export default ClientRegistry;
