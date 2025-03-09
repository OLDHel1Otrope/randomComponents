"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

const DraggableDiv = ({ visible, closeFunction }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle">
      <div
        ref={nodeRef}
        className={`fixed w-240 h-130 bg-stone-300 shadow-2xl rounded-3xl flex outline outline-8 outline-black/50 flex-col z-50 overflow-hidden ${
          visible ? "" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`drag-handle flex justify-between px-4 items-center bg-stone-900 p-2 rounded-t-md cursor-move h-12 `}
        >
          <span className="font-semibold">Draggable Window</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-4xl bg-red-600">
            <button className="text-stone-300 text-sm" onClick={closeFunction}>
              ✖
            </button>
          </div>
        </div>
        <div className="p-4 text-gray-700">
          this is where the details of the particullar skill/project will be
          displayed{" "}
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
