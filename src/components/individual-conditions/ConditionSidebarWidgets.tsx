
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "С риском", value: 3, color: "#F87171" },
  { name: "Пересогласование", value: 2, color: "#FACC15" },
  { name: "Без риска", value: 5, color: "#4ADE80" }
];

export default function ConditionSidebarWidgets() {
  return (
    <div className="flex flex-col gap-4">
      {/* Кол-во условий */}
      <div className="bg-white border rounded-xl shadow p-4 flex flex-col items-center">
        <div className="text-3xl font-bold mb-2 text-primary">10</div>
        <div className="text-sm text-slate-500">Всего условий</div>
      </div>
      {/* Доля условий с риском */}
      <div className="bg-white border rounded-xl shadow px-2 py-4 flex flex-col items-center">
        <div className="w-[130px] h-[130px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={36}
                outerRadius={60}
                stroke="none"
              >
                {pieData.map((d, i) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-1 pt-2">
          {pieData.map(d => (
            <div key={d.name} className="flex items-center gap-2 text-xs">
              <span className="inline-block w-3 h-3 rounded" style={{ background: d.color }} /> {d.name}
            </div>
          ))}
        </div>
      </div>
      {/* На пересогласование */}
      <div className="bg-white border rounded-xl shadow p-4 flex flex-col items-start">
        <div className="font-semibold mb-1 text-amber-600">На пересогласовании</div>
        <div className="text-xs text-slate-600">2 условия требуют повторного утверждения</div>
      </div>
      {/* AI-инсайт */}
      <div className="bg-white border-l-4 border-primary/80 rounded-xl shadow p-4 flex flex-col">
        <div className="text-xs text-primary font-bold mb-2 uppercase">AI-инсайт</div>
        <div className="text-sm text-slate-700">
          Условие “-15% скидка ЛайтБанк” снижает ожидаемую маржу до 4% — требуется одобрение руководителя!
        </div>
      </div>
    </div>
  );
}
