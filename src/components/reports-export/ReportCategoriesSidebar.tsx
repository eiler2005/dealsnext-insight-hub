
interface Props {
  category: string;
  setCategory: (c: string) => void;
}
const categories = [
  { key: "deals", title: "По сделкам" },
  { key: "managers", title: "По менеджерам" },
  { key: "clients", title: "По клиентам" },
  { key: "products", title: "По продуктам" },
];

export default function ReportCategoriesSidebar({ category, setCategory }: Props) {
  return (
    <aside className="w-full sm:w-56 mb-4 sm:mb-0 sm:border-r border-border pr-4 flex flex-row sm:flex-col gap-2 sm:gap-0">
      {categories.map(cat => (
        <button
          key={cat.key}
          className={`w-full text-left px-4 py-2 rounded hover:bg-accent transition ${
            category === cat.key ? "bg-accent font-bold" : ""
          }`}
          onClick={() => setCategory(cat.key)}
        >
          {cat.title}
        </button>
      ))}
    </aside>
  );
}
