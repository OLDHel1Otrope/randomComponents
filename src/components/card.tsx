"use client";

import { useState } from "react";
import DraggableDiv from "./DraggableDiv";

const InfoCard = ({ size }: { size: number }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {size === 1 ? (
        <div
          className="rounded-4xl flex flex-col gap-2 p-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] hover:bg-stone-200 transition-all duration-500 text-stone-700"
          onClick={() => setVisible(!visible)}
        >
          <div className="rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10">
            {/* j */}
          </div>
          <DraggableDiv
            visible={visible}
            closeFunction={() => setVisible(!visible)}
          />
        </div>
      ) : (
        <div
          className="rounded-4xl flex flex-col gap-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-2 hover:bg-stone-200 transition-all duration-500"
          onClick={() => setVisible(!visible)}
        >
          <div className="rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10"></div>
          <div>
            <h1 className="font-semibold text-stone-800">ProjectTitle</h1>
            <p className="font-extrabold text-stone-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              cumque, at id error, voluptas non ab vero quod consequuntur
              similique, quaerat nesciunt labore! Delectus hic iure earum
              corporis distinctio et! Nisi aliquam quod eius, maiores quos totam
              accusamus hic! Pariatur, nemo eaque, libero omnis est quae quia
              harum sunt mollitia explicabo, minima sit culpa nulla unde.
              Eligendi qui in earum.
            </p>
          </div>

          <DraggableDiv
            visible={visible}
            closeFunction={() => setVisible(!visible)}
          />
        </div>
      )}
    </>
  );
};

export default InfoCard;
