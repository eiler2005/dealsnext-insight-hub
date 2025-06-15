
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// Мок-данные для графиков:
const lossData = [
  { name: "Скидки", value: 2500 },
  { name: "Бонусы", value: 1000 },
  { name: "SLA-отступления", value: 500 },
  { name: "Рассрочки", value: 700 },
];

const topLossData = [
  { name: "АО “ФармГрупп”", value: 1400 },
  { name: "ООО “ЛайтБанк”", value: 1200 },
  { name: "ГК “ИнТех”", value: 900 },
  { name: "ООО “ЭкоТех”", value: 720 },
  { name: "АО “ЛогистПро”", value: 450 }
];

// Pie chart for client ratio
const clientTypesPie = [
  { name: "Стандартные", value: 7, color: "#34d399" },
  { name: "Индивидуальные", value: 3, color: "#4f46e5" }
];

export default function ConditionAnalyticsWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
      {/* Диаграмма убытков */}
      <div className="flex flex-col h-full rounded-2xl border shadow-lg bg-white px-7 py-6">
        <div className="text-lg font-semibold mb-2 text-slate-800">Диаграмма убытков</div>
        <span className="text-xs font-bold mb-2 uppercase text-slate-300">от нестандартных условий</span>
        <div className="w-full h-[120px] mt-1 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={lossData} dataKey="value" outerRadius={50} innerRadius={30} label>
                {lossData.map((d, i) => (
                  <Cell key={d.name} fill={["#f87171", "#facc15", "#38bdf8", "#7c3aed"][i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2 text-xs justify-center mt-1">
          {lossData.map((d, i) => (
            <span key={d.name} className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded" style={{ background: ["#f87171", "#facc15", "#38bdf8", "#7c3aed"][i] }} />
              {d.name}
            </span>
          ))}
        </div>
      </div>

      {/* Топ-10 самых убыточных условий */}
      <div className="flex flex-col h-full rounded-2xl border shadow-lg bg-white px-7 py-6">
        <div className="text-lg font-semibold mb-2 text-slate-800">Топ-10 самых убыточных условий</div>
        <span className="text-xs font-bold mb-2 uppercase text-slate-300">за квартал</span>
        <div className="w-full h-[120px] mt-1 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topLossData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Bar dataKey="value" fill="#f87171" radius={[7, 7, 0, 0]} />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-center mt-1 text-xs gap-0.5">
          {topLossData.map((d, i) => (
            <span key={d.name} className="flex items-center gap-2">
              <span className="font-bold text-slate-500">{i + 1}.</span> {d.name}
              <span className="ml-3 text-rose-500 font-mono font-bold">{d.value} тыс ₽</span>
            </span>
          ))}
        </div>
      </div>

      {/* Доля клиентов */}
      <div className="flex flex-col h-full rounded-2xl border shadow-lg bg-white px-7 py-6">
        <div className="text-lg font-semibold mb-2 text-slate-800">Доля клиентов</div>
        <span className="text-xs font-bold mb-2 uppercase text-slate-300">по условиям</span>
        <div className="w-full h-[120px] mt-1 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={clientTypesPie} dataKey="value" outerRadius={45} innerRadius={25}>
                {clientTypesPie.map((d, i) => <Cell key={d.name} fill={d.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-2 text-xs justify-center mt-1">
          {clientTypesPie.map(d => (
            <span key={d.name} className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded" style={{ background: d.color }} />
              {d.name}
            </span>
          ))}
        </div>
      </div>

      {/* Среднее время согласования */}
      <div className="flex flex-col h-full rounded-2xl border shadow-lg bg-white px-7 py-6">
        <div className="text-lg font-semibold mb-2 text-slate-800">Среднее время согласования</div>
        <span className="text-xs font-bold mb-2 uppercase text-slate-300">за последний квартал</span>
        <div className="flex-1 flex flex-col justify-center items-center mb-2">
          <div className="text-4xl font-extrabold text-blue-600 my-2">2.5 дн.</div>
        </div>
        <div className="text-xs text-slate-500 text-center">Включая активные и завершённые условия</div>
      </div>
    </div>
  );
}
