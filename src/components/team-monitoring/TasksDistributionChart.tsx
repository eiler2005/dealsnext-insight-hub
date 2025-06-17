
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import type { TeamMember } from "@/data/mockData";

interface TasksDistributionChartProps {
  members: TeamMember[];
}

const TasksDistributionChart = ({ members }: TasksDistributionChartProps) => {
  const chartData = members.map(member => ({
    name: member.name.split(" ")[0] + " " + member.name.split(" ")[1][0] + ".",
    tasks: member.assignedTasks,
    pending: member.pendingTasks,
    workload: member.workloadLevel
  }));

  const getBarColor = (workload: string) => {
    switch (workload) {
      case "Низкая":
        return "#10b981";
      case "Средняя":
        return "#3b82f6";
      case "Высокая":
        return "#f59e0b";
      case "Перегрузка":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Распределение задач</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasks" name="Всего задач">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.workload)} />
              ))}
            </Bar>
            <Bar 
              dataKey="pending" 
              fill="#f87171"
              name="Ожидает выполнения"
            />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Низкая нагрузка</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Средняя</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>Высокая</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Перегрузка</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksDistributionChart;
