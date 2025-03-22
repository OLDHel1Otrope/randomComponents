"use client";
import { useEffect, useState } from "react";
import Letter from "./WordGenerator";

const TextGenerator = ({ data,size }: { data: string,size:string }) => {
  const [word, setWord] = useState(data.split(""));
  useEffect(() => {
    setWord(data.split(""));
  }, [data]); 
  const handleClick = (index: number) => {
    setWord((prev) =>
      prev.map((letter, i) =>
        i === index
          ? String.fromCharCode(((letter.charCodeAt(0) - 97 + 1) % 26) + 97)
          : letter
      )
    );
  };
  return (
    <div className="flex items-center gap-4">
      {word.map((letter, index) => (
        <Letter
          key={`${letter}-${index}`}
          letter={letter}
          size={size}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
export default TextGenerator;
