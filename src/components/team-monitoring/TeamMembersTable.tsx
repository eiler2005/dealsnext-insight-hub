
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Circle, User } from "lucide-react";
import type { TeamMember } from "@/data/mockData";

interface TeamMembersTableProps {
  members: TeamMember[];
  onMemberSelect: (memberId: string) => void;
  selectedMember: string | null;
}

const getWorkloadColor = (level: string) => {
  switch (level) {
    case "Низкая":
      return "bg-green-100 text-green-800 border-green-200";
    case "Средняя":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Высокая":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Перегрузка":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const TeamMembersTable = ({ members, onMemberSelect, selectedMember }: TeamMembersTableProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Команда</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                selectedMember === member.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
              }`}
              onClick={() => onMemberSelect(member.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      member.isOnline ? "bg-green-500" : "bg-gray-400"
                    }`} />
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.position} • {member.department}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {member.assignedTasks} задач
                    </div>
                    <div className="text-sm text-gray-500">
                      {member.pendingTasks} ожидает
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {member.completionRate}%
                    </div>
                    <div className="text-sm text-gray-500">
                      выполнение
                    </div>
                  </div>

                  <Badge variant="outline" className={getWorkloadColor(member.workloadLevel)}>
                    {member.workloadLevel}
                  </Badge>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Среднее время: {member.avgTaskTime}ч
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onMemberSelect(member.id);
                  }}
                >
                  Посмотреть задачи
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMembersTable;
