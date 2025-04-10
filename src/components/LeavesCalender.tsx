import React from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function LeavesCalender({ month, year }: { month: number; year: number }) {
  const firstDay = new Date(year, month, 1);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const adjustedDaysInMonth = [...daysInMonth];
  if (isLeap) adjustedDaysInMonth[1] = 29;

  let calendarBegin = 1;
  let previousMonthEnded = false;
  let daysInPreviousMonth = 0;

  if (firstDay.getDay() !== 1) {
    daysInPreviousMonth = adjustedDaysInMonth[(month - 1 + 12) % 12];
    calendarBegin = daysInPreviousMonth - ((firstDay.getDay() + 6) % 7) + 1;
  } else {
    previousMonthEnded = true;
  }

  let newMonthBegins = false;
  const calendarDays = [];

  for (let i = 0; i < 35; i++) {
    calendarDays.push({
      label: calendarBegin,
      isCurrentMonth: previousMonthEnded && !newMonthBegins,
    });

    if (!previousMonthEnded) {
      if (calendarBegin < daysInPreviousMonth) {
        calendarBegin++;
      } else {
        previousMonthEnded = true;
        calendarBegin = 1;
      }
    } else {
      if (calendarBegin < adjustedDaysInMonth[month]) {
        calendarBegin++;
      } else {
        calendarBegin = 1;
        newMonthBegins = true;
      }
    }
  }

  const monthLabel = firstDay.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-br from-stone-800/80 to-stone-900/80 rounded-3xl p-6 border border-stone-700/30 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-lg max-w-2xl w-full text-stone-300 h-200">
      {" "}
      {/* increased height */}
      <div className="text-center mb-6">
        <div className="flex flex-row gap-1 font-semibold">
          {/* <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300">
            Leaves for
          </h1> */}
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-300">
            {monthLabel}
          </h2>
          <div className="ml-auto bg-stone-800 rounded-md hover:bg-stone-600 w-8 h-8 flex items-center justify-center">
            <ChevronLeft size={16} />
          </div>
          <div className="bg-stone-800 rounded-md  hover:bg-stone-600 w-8 h-8 flex items-center justify-center">
            <ChevronRight size={16} />
          </div>
          <div className="bg-stone-800 rounded-md  hover:bg-stone-600 w-8 h-8 flex items-center justify-center">
            <Maximize2 size={16} />
          </div>
        </div>
        <div className="grid grid-cols-7 mt-4 text-stone-500 text-sm">
          {dayNames.map((day, idx) => (
            <div key={idx} className="text-center">
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-[1px]">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`flex justify-center text-sm transition-all p-1 h-32 ${
              day.isCurrentMonth
                ? "bg-stone-700/40 text-stone-100 hover:bg-stone-600/50"
                : "text-stone-500"
            }`}
          >
            {day.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeavesCalender;
