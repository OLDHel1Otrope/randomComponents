import { KeyboardKey } from "./KeyboardKey";

export default function KeyboardGenerator() {
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

      { label: "Space", size: "space" },
      { label: "Alt", size: "normal" },
      { label: "Alt", size: "normal" },

      { label: "Alt", size: "wide" },
      { label: "Ctrl", size: "wide" },
    ],
  ];

  return (
    <div className="p-4 bg-stone-950 flex flex-col gap-1  rounded-lg shadow-2xl">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((key, keyIndex) => (
            <KeyboardKey key={keyIndex} label={key.label} size={key.size} />
          ))}
        </div>
      ))}
    </div>
  );
}
