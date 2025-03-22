"use client";
import TextGenerator from "@/components/TextGenerator";
// import  router from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
const samples = ["sample text"];
const IntroComponent = () => {
  const [text, setText] = useState(samples[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) =>
        samples[(samples.indexOf(prev.trim()) + 1) % samples.length].padEnd(
          10,
          " "
        )
      );
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" flex flex-col gap-8 bg-stone-900 w-screen h-full pt-50 px-120">
      <div>
        <TextGenerator data="hello" size={"small"} />
      </div>
      <TextGenerator data={text} size={"large"} />
      <Link href="/integrated" className="  bg-[#050505] cursor-pointer ">
        <div className="px-3 py-3">
          <TextGenerator data="explore" size={"small"} />
        </div>
        <div className="w-full h-0.5 bg-stone-400"></div>
      </Link>
    </div>
  );
};
export default IntroComponent;
