"use client";
import React, { useEffect } from "react";

const CountdownTimer = () => {
  useEffect(() => {
    setInterval(() => {
      console.log("Hello!");
    }, 2000);
  }, []);
  const percentRemaining = 10;
  return (
    <div className="w-full h-screen bg-stone-900 flex items-center justify-center p-2">
      <div className="flex flex-col items-center gap-8 p-2 rounded-4xl bg-gradient-to-br from-stone-800/80 to-stone-900/80 shadow-[inset_0px_0px_15px_rgba(0,0,0,0.5)] backdrop-blur-lg border border-stone-700/30 group hover:shadow-[inset_0px_0px_20px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="w-full rounded-4xl h-6 bg-gradient-to-r from-emerald-300 to-lime-200">
          {" "}
        </div>

        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
          Countdown Timer
        </h1>
        <p className="text-lg text-stone-400">Time remaining</p>
        <div className="grid grid-cols-4 gap-6 text-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-3xl bg-stone-800/50 border border-stone-700/30 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.4)]"
            >
              <span className="text-5xl font-semibold text-white">00</span>
              <span className="mt-2 text-sm uppercase tracking-wide text-stone-400">
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full h-2 rounded-full bg-stone-700/40 overflow-hidden mt-4">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-lime-400 transition-all duration-500 ease-in-out rounded"
            style={{ width: `${percentRemaining}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
