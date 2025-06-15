
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {/* Диаграмма убытков */}
      <div className="bg-white rounded-2xl border shadow p-5 flex flex-col items-center">
        <span className="text-xs font-bold mb-2 uppercase text-slate-400">Диаграмма убытков</span>
        <div className="w-full h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={lossData} dataKey="value" outerRadius={55} innerRadius={32} label>
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
      <div className="bg-white rounded-2xl border shadow p-5 flex flex-col items-center">
        <span className="text-xs font-bold mb-2 uppercase text-slate-400">Топ-10 убыточных</span>
        <div className="w-full h-[120px]">
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
              <span className="font-bold text-slate-600">{i + 1}.</span> {d.name}
              <span className="ml-3 text-rose-500 font-mono font-bold">{d.value} тыс ₽</span>
            </span>
          ))}
        </div>
      </div>

      {/* Доля клиентов */}
      <div className="bg-white rounded-2xl border shadow p-5 flex flex-col items-center">
        <span className="text-xs font-bold mb-2 uppercase text-slate-400">Клиенты по условиям</span>
        <div className="w-full h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={clientTypesPie} dataKey="value" outerRadius={50} innerRadius={32}>
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
      <div className="bg-white rounded-2xl border shadow p-5 flex flex-col items-center">
        <span className="text-xs font-bold mb-2 uppercase text-slate-400">Среднее время согласования</span>
        <div className="text-3xl font-extrabold text-blue-600 my-5">2.5 дн.</div>
        <div className="text-xs text-slate-500">За последние 3 месяца</div>
      </div>
    </div>
  );
}
