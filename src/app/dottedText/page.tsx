"use client";
import TextGenerator from "@/components/TextGenerator";
// import  router from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
const samples = [
  "its","lights out","and away","we","go"
];
const DottedText = () => {
  const [text, setText] = useState(samples[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prev=>samples[(samples.indexOf(prev.trim())+1)%samples.length].padEnd(10, " "));
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" flex flex-col gap-8 bg-black w-screen h-screen p-50">
      <div>
        <TextGenerator data="utkarsh pathak       " size={"small"} />
      </div>
      <TextGenerator data={text} size={"large"} />
      <Link href="/metroUI" className=" pt-3 bg-[#050505] cursor-pointer ">
        <TextGenerator data="explore" size={"small"} />
        <div className="w-full h-0.5 bg-red-800 mt-4"></div>
      </Link>
    </div>
  );
};
export default DottedText;
