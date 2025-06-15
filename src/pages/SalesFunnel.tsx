
import Header from "@/components/layout/Header";
import FunnelChartComponent from "@/components/sales-funnel/FunnelChart";
import { salesFunnelData } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SalesFunnel = () => (
  <>
    <Header />
    <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Воронка и процесс продаж</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Воронка продаж</CardTitle>
                    <CardDescription>Визуализация конверсии на каждом этапе</CardDescription>
                </CardHeader>
                <CardContent>
                    <FunnelChartComponent />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Данные воронки</CardTitle>
                    <CardDescription>Числовые показатели по этапам</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {salesFunnelData.map((stage) => (
                            <li key={stage.name} className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: stage.fill }}></span>
                                    <span>{stage.name}</span>
                                </div>
                                <span className="font-semibold">{stage.value}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    </div>
  </>
);
export default SalesFunnel;
