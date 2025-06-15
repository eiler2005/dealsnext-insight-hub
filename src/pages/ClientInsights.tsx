
import Header from "@/components/layout/Header";

const ClientInsights = () => (
    <>
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold">Инсайты по клиентам</h1>
            <p className="mt-4 text-muted-foreground">Здесь будет подробная аналитика по клиентам.</p>
        </div>
    </>
);
export default ClientInsights;
