
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * Этот компонент больше не sidebar, а верхняя визуальная панель из карточек с key-метриками.
 * Используется на /individual-conditions как верхний summary- и статус-блок.
 */

const pieData = [
  { name: "С риском", value: 3, color: "#F87171" },
  { name: "Пересогласование", value: 2, color: "#FACC15" },
  { name: "Без риска", value: 5, color: "#4ADE80" }
];

export default function ConditionSidebarWidgets() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      {/* Кол-во условий */}
      <div className="bg-white border rounded-2xl shadow flex flex-col items-center py-6 px-2">
        <div className="text-4xl font-extrabold mb-1 text-blue-600">10</div>
        <div className="text-sm text-slate-500">Всего условий</div>
      </div>
      {/* Доля условий с риском */}
      <div className="bg-white border rounded-2xl shadow flex flex-col justify-center items-center py-5">
        <div className="w-[110px] h-[110px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={32}
                outerRadius={52}
                stroke="none"
              >
                {pieData.map((d, i) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-1 pt-1">
          {pieData.map(d => (
            <div key={d.name} className="flex items-center gap-2 text-xs">
              <span className="inline-block w-3 h-3 rounded" style={{ background: d.color }} /> {d.name}
            </div>
          ))}
        </div>
      </div>
      {/* На пересогласование */}
      <div className="bg-white border rounded-2xl shadow flex flex-col justify-center px-2 py-5">
        <div className="font-bold mb-0.5 text-[1.03rem] text-amber-600">На пересогласовании</div>
        <div className="text-xs text-slate-600 font-medium">2 условия требуют повторного утверждения</div>
      </div>
      {/* AI-инсайт */}
      <div className="bg-white border rounded-2xl shadow flex flex-col justify-center p-4 border-l-4 border-blue-500/80 relative">
        <div className="text-xs text-blue-600 font-bold mb-2 uppercase">AI-ИНСАЙТ</div>
        <div className="text-sm text-slate-800">
          Условие “-15% скидка ЛайтБанк” снижает ожидаемую маржу до 4% — требуется одобрение руководителя!
        </div>
      </div>
    </div>
  );
}
