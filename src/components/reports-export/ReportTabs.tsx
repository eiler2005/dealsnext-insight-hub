
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function ReportTabs({ value, onChange }: Props) {
  return (
    <Tabs value={value} className="mb-4">
      <TabsList>
        <TabsTrigger value="deals" onClick={() => onChange("deals")}>
          По сделкам
        </TabsTrigger>
        <TabsTrigger value="clients" onClick={() => onChange("clients")}>
          По клиентам
        </TabsTrigger>
        <TabsTrigger value="products" onClick={() => onChange("products")}>
          По продуктам
        </TabsTrigger>
        <TabsTrigger value="managers" onClick={() => onChange("managers")}>
          По менеджерам
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
