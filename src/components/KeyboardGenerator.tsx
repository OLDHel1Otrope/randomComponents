"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { KeyboardKey } from "./KeyboardKey";

const calculateWpm = (content: string,setWpm:Dispatch<SetStateAction<number>>, time:number) => {
  const words = content.trim().split(/\s+/).length;
  setWpm(Math.round((words / 30) * 60));
};
export default function KeyboardGenerator() {
  const [content, setContent] = useState("");
  const [wpm, setWpm] = useState<number>(0);
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
      calculateWpm(content,setWpm, time);
      return () => clearInterval(timer);
    } else if (time === 0) {
      setIsRunning(false);
    }
  }, [isRunning, time, content]);

  const handleTyping = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const resetTest = () => {
    setContent("");
    setWpm(0);
    setTime(30);
    setIsRunning(false);
  };

  const rows = [
    [
      { label: "Esc", size: "function" },
      { label: "F1", size: "function" },
      { label: "F2", size: "function" },
      { label: "F3", size: "function" },
      { label: "F4", size: "function" },
      { label: "F5", size: "function" },
      { label: "F6", size: "function" },
      { label: "F7", size: "function" },
      { label: "F8", size: "function" },
      { label: "F9", size: "function" },
      { label: "F10", size: "function" },
      { label: "F11", size: "function" },
      { label: "F12", size: "function" },
      { label: "insert", size: "function2" },
      { label: "delete", size: "function2" },
    ],
    [
      { label: "~", size: "normal" },
      { label: "1", size: "normal" },
      { label: "2", size: "normal" },
      { label: "3", size: "normal" },
      { label: "4", size: "normal" },
      { label: "5", size: "normal" },
      { label: "6", size: "normal" },
      { label: "7", size: "normal" },
      { label: "8", size: "normal" },
      { label: "9", size: "normal" },
      { label: "0", size: "normal" },
      { label: "-", size: "normal" },
      { label: "=", size: "normal" },
      { label: "Backspace", size: "wide2" },
    ],
    [
      { label: "Tab", size: "wide" },
      { label: "Q", size: "normal" },
      { label: "W", size: "normal" },
      { label: "E", size: "normal" },
      { label: "R", size: "normal" },
      { label: "T", size: "normal" },
      { label: "Y", size: "normal" },
      { label: "U", size: "normal" },
      { label: "I", size: "normal" },
      { label: "O", size: "normal" },
      { label: "P", size: "normal" },
      { label: "[", size: "normal" },
      { label: "]", size: "normal" },
      { label: "\\", size: "wide3" },
    ],
    [
      { label: "Caps Lock", size: "wider" },
      { label: "A", size: "normal" },
      { label: "S", size: "normal" },
      { label: "D", size: "normal" },
      { label: "F", size: "normal" },
      { label: "G", size: "normal" },
      { label: "H", size: "normal" },
      { label: "J", size: "normal" },
      { label: "K", size: "normal" },
      { label: "L", size: "normal" },
      { label: ";", size: "normal" },
      { label: "'", size: "normal" },
      { label: "Enter", size: "wider" },
    ],
    [
      { label: "Shift", size: "wider2" },
      { label: "Z", size: "normal" },
      { label: "X", size: "normal" },
      { label: "C", size: "normal" },
      { label: "V", size: "normal" },
      { label: "B", size: "normal" },
      { label: "N", size: "normal" },
      { label: "M", size: "normal" },
      { label: ",", size: "normal" },
      { label: ".", size: "normal" },
      { label: "/", size: "normal" },
      { label: "Shift", size: "wider2" },
    ],
    [
      { label: "Ctrl", size: "wide" },
      { label: "Alt", size: "normal" },
      { label: "Alt", size: "normal" },
      { label: "Alt", size: "normal" },

      { label: " ", size: "space" },
      { label: "Alt", size: "normal" },
      { label: "Alt", size: "normal" },

      { label: "Alt", size: "wide" },
      { label: "Ctrl", size: "wide" },
    ],
  ];

  return (
    <div className="py-20 flex flex-col gap-4">
      <div className="font-mono w-full h-100 flex flex-col bg-stone-900 text-stone-200 p-4 rounded-lg shadow-lg">
        <div className="flex gap-2 justify-between items-center border-b border-stone-700 pb-2 mb-2 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-stone-300">WPM:</span>
            <span className="text-stone-400">{wpm ?? "--"}</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-bold text-lg text-stone-300">Time:</span>
            <span className="text-stone-400">{time}s</span>
          </div>
          <div
            className="flex items-center gap-2 bg-stone-800 p-2 rounded-md cursor-pointer"
            onClick={resetTest}
          >
            <span className="text-stone-400 px-4">Clear</span>
          </div>
        </div>

        <textarea
          className="flex-1 text-lg font-semibold tracking-wide text-stone-300 leading-relaxed bg-transparent resize-none outline-none border-none w-full h-auto break-words break-all whitespace-normal"
          value={content}
          placeholder="Start typing..."
          onChange={() => handleTyping()}
          disabled={time === 0}
        />
      </div>

      <div className="p-4 bg-stone-950 flex flex-col gap-1 rounded-lg shadow-2xl outline-2 outline-stone-900">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {row.map((key, keyIndex) => (
              <KeyboardKey
                key={keyIndex}
                label={key.label}
                size={key.size}
                setContent={setContent}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
