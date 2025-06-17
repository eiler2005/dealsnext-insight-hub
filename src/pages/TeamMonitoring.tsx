
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import TeamKpiCards from "@/components/team-monitoring/TeamKpiCards";
import TeamMembersTable from "@/components/team-monitoring/TeamMembersTable";
import TeamFilters from "@/components/team-monitoring/TeamFilters";
import TasksDistributionChart from "@/components/team-monitoring/TasksDistributionChart";
import TasksList from "@/components/team-monitoring/TasksList";
import { teamMembersData, tasksData, teamKpiData } from "@/data/mockData";

const TeamMonitoring = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [filteredMembers, setFilteredMembers] = useState(teamMembersData);
  const [filteredTasks, setFilteredTasks] = useState(tasksData);

  const handleFiltersChange = (filters: any) => {
    let filtered = teamMembersData;
    
    if (filters.department && filters.department !== "all") {
      filtered = filtered.filter(member => member.department === filters.department);
    }

    if (filters.workload && filters.workload !== "all") {
      filtered = filtered.filter(member => member.workloadLevel === filters.workload);
    }

    setFilteredMembers(filtered);
  };

  const handleMemberSelect = (memberId: string) => {
    setSelectedMember(memberId);
    const memberTasks = tasksData.filter(task => task.assigneeId === memberId);
    setFilteredTasks(memberTasks);
  };

  const selectedMemberData = teamMembersData.find(member => member.id === selectedMember);

  return (
    <>
      <Header />
      <div className="flex-1 p-6 pt-2 overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Мониторинг команды</h1>
        </div>

        {/* KPI Cards */}
        <TeamKpiCards data={teamKpiData} />

        {/* Filters */}
        <TeamFilters onFiltersChange={handleFiltersChange} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Team Members */}
          <div className="lg:col-span-2">
            <TeamMembersTable 
              members={filteredMembers} 
              onMemberSelect={handleMemberSelect}
              selectedMember={selectedMember}
            />
          </div>

          {/* Tasks Distribution Chart */}
          <div>
            <TasksDistributionChart members={filteredMembers} />
          </div>
        </div>

        {/* Selected Member Tasks */}
        {selectedMember && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Задачи сотрудника: {selectedMemberData?.name}
            </h2>
            <TasksList tasks={filteredTasks} />
          </div>
        )}
      </div>
    </>
  );
};

export default TeamMonitoring;
