"use client";

import { useRef, useState } from "react";
import Draggable from "react-draggable";

type IProps = {
  visible: boolean;
  closeFunction: () => void;
};

const DraggableDiv = ({ visible, closeFunction }: IProps) => {
  const nodeRef = useRef<HTMLDivElement>(null!);
  const [dblClick, setDblClick] = useState(false);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".drag-handle"
      position={dblClick ? { x: 0, y: 0 } : undefined}
    >
      <div
        ref={nodeRef}
        className={`fixed ${
          dblClick ? "w-full h-full" : "w-300 h-170"
        } bg-stone-300 shadow-2xl ${
          dblClick
            ? "top-0 left-0"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl outline-8"
        } flex outline-black/50 flex-col z-50 overflow-hidden ${
          visible ? "" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`drag-handle flex justify-between px-4 items-center bg-stone-900 p-2 ${
            dblClick ? "rounded-t-m" : "rounded-t-md"
          } cursor-move h-12 border-b-2 border-red-400`}
          onDoubleClick={() => setDblClick(!dblClick)}
        >
          <span className="font-semibold">
            <i>Projetc name</i>{" "}
            <i className="text-stone-700 font-extralight">
              {/* (double click to fullscreen) */}
            </i>
          </span>
          <div className="flex items-center justify-center w-6 h-6 rounded-4xl bg-red-600">
            <button className="text-stone-300 text-sm" onClick={closeFunction}>
              ✖
            </button>
          </div>
        </div>
        <div className="p-2  flex flex-col text-stone-900 gap-4 overflow-y-auto">
          <div className="flex flex-col items-center space-y-8 px-6 py-10">
            {/* Project Title */}
            <h1 className="font-bold text-stone-700 text-6xl tracking-tight">
              Transforming Ideas into Reality
            </h1>

            {/* Feature Showcase */}
            <div className="flex flex-row gap-6 w-full h-64 justify-center">
              {[
                "Feature One",
                "Feature Two",
                "Feature Three",
                "Feature Four",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-stone-700 w-64 h-64 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-center items-center hover:scale-112 transition-transform duration-300"
                >
                  <h2 className="text-white text-xl font-semibold">
                    {feature}
                  </h2>
                  <p className="text-gray-300 text-sm text-center mt-2">
                    A brief description of how this feature enhances the user
                    experience.
                  </p>
                </div>
              ))}
            </div>

            {/* Description Section */}
            <div className="font-extrabold text-stone-600 text-center max-w-5xl leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              voluptatem facere aliquam, a tenetur qui culpa explicabo expedita?
              Maiores accusamus aliquid consequatur perspiciatis amet iure earum
              minus pariatur. Facilis, non? Autem harum repudiandae omnis
              numquam excepturi nisi. Earum praesentium officia minus omnis,
              debitis quia repudiandae iure ipsam a aperiam nesciunt placeat
              ipsum? Officia tempora aliquam aperiam placeat, cumque impedit
              eius!
            </div>

            {/* Call to Action */}
            <div className="flex space-x-6">
              <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 shadow-md transition-all">
                Explore More
              </button>
              <button className="px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-900 shadow-md transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
