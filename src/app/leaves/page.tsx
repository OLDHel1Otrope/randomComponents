"use client";
import LeavesCalender from "@/components/LeavesCalender";
import DashboardHeader from "@/components/DashboardHeader";
import PendingApprovals from "@/components/PendingApprovals";
import Contacts from "@/components/Contacts";

function App() {
  const today = new Date();
  return (
    <div className="min-h-screen flex flex-col md:flex-row pt-4 justify-center bg-stone-950 px-10 pl-20 gap-4">
      <div className="flex flex-col w-full gap-4">
        <DashboardHeader userName="Utkarsh" />
        <PendingApprovals
          approvals={[
            {
              name: "Aditi Sharma",
              designation: "UI Designer",
              type: "WFH",
              from: "2025-04-12",
              to: "2025-04-14",
            },
            {
              name: "Rohan Verma",
              designation: "Backend Developer",
              type: "Leave",
              from: "2025-04-15",
              to: "2025-04-17",
            },
            {
              name: "Rohan Verma",
              designation: "Backend Developer",
              type: "Leave",
              from: "2025-04-15",
              to: "2025-04-17",
            },
            // {
            //   name: "Rohan Verma",
            //   designation: "Backend Developer",
            //   type: "Leave",
            //   from: "2025-04-15",
            //   to: "2025-04-17",
            // },
            // Add more to test scroll
          ]}
        />
        <Contacts/>
      </div>
      <div className="flex flex-col w-full">
        <LeavesCalender month={today.getMonth()} year={today.getFullYear()} />
      </div>
    </div>
  );
}

export default App;
