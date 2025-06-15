
import Header from "@/components/layout/Header";

const ProductRegistry = () => (
    <>
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
            <h1 className="text-2xl font-bold">Реестр продуктов</h1>
            <p className="mt-4 text-muted-foreground">Здесь будет реестр всех продуктов.</p>
        </div>
    </>
);
export default ProductRegistry;
