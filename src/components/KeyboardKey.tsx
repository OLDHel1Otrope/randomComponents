"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

  const keySizes = {
    "normal": "w-16 h-16",
    "function": "w-16 h-10",
    "function2": "w-20 h-10",
    "wide": "w-28 h-16",
    "wide2": "w-42 h-16",
    "wide3": "w-30 h-16",
    "wider": "w-38 h-16",
    "wider2": "w-47 h-16",
    "space": "w-96 h-16",
    "tall": "w-16 h-24",
  };

export function KeyboardKey({
  label = "A",
  size = "normal",
  setContent,
}: {
  label: string;
  size: string;
  setContent: Dispatch<SetStateAction<string>>;
}) {
  const [isPressed, setIsPressed] = useState(false);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
      if (event.key === "Backspace" && label == "Backspace") {
        setContent((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
        return;
      }

      // Handle normal key presses
      if (event.key.toUpperCase() === label.toUpperCase()) {
        setIsPressed(true);
        if (label.length > 1) return;
        if (event.key === " ") {
          event.preventDefault();
        }

        const key = label === " " ? " " : label.toLowerCase();
        setContent((prev) => prev + key);
        setDisplay(true);
      }
    };

    const handleKeyUp = (event: { key: string; }) => {
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
  }, [label, setContent]);

  return (
    <div
      className={`relative ${
        keySizes[size as keyof typeof keySizes]
      }  rounded-lg flex items-center justify-center border border-stone-900 p-1
        transition-transform duration-75 select-none
        ${
          isPressed
            ? "shadow-[inset_0px_0px_20px_rgba(25,25,25,0.9)] p-1.5 bg-stone-700"
            : !display
            ? "shadow-[inset_0px_0px_20px_rgba(0,0,0,0.3)] bg-stone-900"
            : "shadow-[inset_0px_0px_28px_rgba(0,0,0,0.9)] bg-stone-700"
        }`}
    >
      {display && (
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 w-full h-full rounded-lg p-2 text-stone-400 font-semibold flex items-center justify-center">
          {label}
        </div>
      )}
    </div>
  );
}
