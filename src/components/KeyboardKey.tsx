"use client";
import { useState, useEffect } from "react";

export function KeyboardKey({ label = "A", size = "normal" }) {
  const [isPressed, setIsPressed] = useState(false);

  const keySizes = {
    normal: "w-16 h-16",
    function: "w-16 h-10",
    function2: "w-20 h-10",

    wide: "w-28 h-16",
    wide2: "w-42 h-16",
    wide3: "w-30 h-16",
    wider: "w-38 h-16",
    wider2: "w-47 h-16",
    space: "w-96 h-16",
    tall: "w-16 h-24",
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === label.toUpperCase()) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key.toUpperCase() === label.toUpperCase()) {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [label]);

  return (
    <div
      className={`relative ${
        keySizes[size]
      } bg-stone-700 rounded-lg flex items-center justify-center border border-stone-900 p-1
        transition-transform duration-75 select-none
        ${
          isPressed
            ? "shadow-[inset_0px_0px_20px_rgba(25,25,25,0.9)] p-1.5"
            : "shadow-[inset_0px_0px_28px_rgba(0,0,0,0.9)]"
        }`}
    >
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 w-full h-full rounded-lg p-2 text-stone-400 font-semibold flex items-center justify-center">
        {label}
      </div>
    </div>
  );
}
