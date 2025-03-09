"use client"

import { useState } from "react";
import DraggableDiv from "./DraggableDiv";

const InfoCard = ({}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="rounded-4xl flex flex-col gap-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "
    onClick={()=>setVisible(!visible)}>
        <div className="rounded-2xl bg-stone-700 w-100 h-40  shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "></div>
        <h1 className="font-semibold text-stone-800">Project Heading</h1>
        <p className=" font-extrabold text-stone-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cumque, at id error, voluptas non ab vero quod consequuntur similique, quaerat nesciunt labore! Delectus hic iure earum corporis distinctio et!
        Nisi aliquam quod eius, maiores quos totam accusamus hic! Pariatur, nemo eaque, libero omnis est quae quia harum sunt mollitia explicabo, minima sit culpa nulla unde. Eligendi qui in earum.</p>
    <DraggableDiv visible={visible} closeFunction={()=>setVisible(!visible)}/>
    </div>
  );
};

export default InfoCard;