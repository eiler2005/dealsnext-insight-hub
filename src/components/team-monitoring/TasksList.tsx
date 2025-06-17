
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, AlertTriangle, CheckCircle, PlayCircle,
  MoreHorizontal, Calendar, Flag
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Task } from "@/data/mockData";

interface TasksListProps {
  tasks: Task[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Новая":
      return <PlayCircle className="w-4 h-4 text-blue-500" />;
    case "В работе":
      return <Clock className="w-4 h-4 text-orange-500" />;
    case "Просроченная":
      return <AlertTriangle className="w-4 h-4 text-red-500" />;
    case "Завершена":
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    default:
      return <Clock className="w-4 h-4 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Новая":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "В работе":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Просроченная":
      return "bg-red-100 text-red-800 border-red-200";
    case "Завершена":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Низкий":
      return "bg-gray-100 text-gray-800 border-gray-200";
    case "Средний":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Высокий":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Критический":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const TasksList = ({ tasks }: TasksListProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Задачи</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(task.status)}
                    <h3 className="font-medium text-gray-900">{task.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>{task.type}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>до {formatDate(task.deadline)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flag className="w-4 h-4" />
                      <span>Сделка: {task.dealId}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>

                  {task.comments && (
                    <p className="text-sm text-gray-600 mt-2 italic">
                      {task.comments}
                    </p>
                  )}
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Переназначить</DropdownMenuItem>
                    <DropdownMenuItem>Изменить приоритет</DropdownMenuItem>
                    <DropdownMenuItem>Продлить срок</DropdownMenuItem>
                    <DropdownMenuItem>Добавить комментарий</DropdownMenuItem>
                    <DropdownMenuItem>Отметить выполненной</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Задачи не найдены
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksList;
