
import Header from "@/components/layout/Header";
import DealsTable from "@/components/deal-profitability/DealsTable";

const DealProfitability = () => (
  <>
    <Header />
    <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Прибыльность сделок</h1>
        <DealsTable />
    </div>
  </>
);
export default DealProfitability;
