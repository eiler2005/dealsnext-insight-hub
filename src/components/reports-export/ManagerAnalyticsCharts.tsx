
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer, Cell,
} from "recharts";

// Демо-данные для диаграмм
const managerStatData = [
  { name: "Иванов И.И.", profit: 9.7, deals: 6, sla: 3.7 },
  { name: "Петров П.П.", profit: 5.3, deals: 4, sla: 4.5 },
  { name: "Сидорова А.В.", profit: 4.8, deals: 3, sla: 3.1 },
];

const avgProfitData = managerStatData.map(m => ({
  name: m.name,
  avgProfit: +(m.profit / m.deals).toFixed(2),
}));

const dealsOverTime = [
  { month: "Янв", deals: 2 },
  { month: "Фев", deals: 3 },
  { month: "Мар", deals: 4 },
  { month: "Апр", deals: 5 },
  { month: "Май", deals: 6 },
  { month: "Июн", deals: 7 },
];

const slaViolations = [
  { name: "Иванов И.И.", violations: 1 },
  { name: "Петров П.П.", violations: 2 },
  { name: "Сидорова А.В.", violations: 0 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function ManagerAnalyticsCharts() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      {/* Топ менеджеров по прибыли */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Топ менеджеров по прибыли</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={managerStatData} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" млн ₽"/>
                <Tooltip formatter={(v: number) => `${v} млн ₽`} />
                <Legend />
                <Bar dataKey="profit" fill={COLORS[0]}>
                  {managerStatData.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Топ менеджеров по SLA */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Лучшие по SLA (меньше — лучше)</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={managerStatData} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" дня" />
                <Tooltip formatter={(v: number) => `${v} дня`} />
                <Legend />
                <Bar dataKey="sla" fill="#00C49F">
                  {managerStatData.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[(idx+1) % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Топ менеджеров по количеству сделок */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Топ менеджеров по количеству сделок</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={managerStatData} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(v: number) => `${v} сделок`} />
                <Legend />
                <Bar dataKey="deals" fill="#FFBB28">
                  {managerStatData.map((entry, idx) => (
                    <Cell key={entry.name} fill={COLORS[(idx+2) % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Средняя прибыль по сделке */}
      <Card>
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Средняя прибыль по сделке</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={avgProfitData} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit=" млн ₽"/>
                <Tooltip formatter={(v: number) => `${v} млн ₽`} />
                <Legend />
                <Bar dataKey="avgProfit" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Динамика объёма сделок во времени */}
      <Card className="md:col-span-2">
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Динамика объёма сделок по месяцам</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dealsOverTime} margin={{ top: 12, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(v: number) => `${v} сделок`} />
                <Legend />
                <Line type="monotone" dataKey="deals" stroke="#0088FE" strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      {/* Карта нарушений SLA */}
      <Card className="md:col-span-2">
        <CardHeader className="flex-row items-center gap-2 pb-2">
          <CardTitle className="text-base">Карта нарушений SLA по менеджерам</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={slaViolations} margin={{ top: 4, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip formatter={(v: number) => `${v} наруш.`} />
                <Legend />
                <Bar dataKey="violations" fill="#d11e36" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
