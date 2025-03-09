"use client";

import { useRef, useState } from "react";
import Draggable from "react-draggable";

const DraggableDiv = ({ visible, closeFunction }) => {
  const nodeRef = useRef(null);
  const [dblClick, setDblClick] = useState(false);

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle">
      <div
        ref={nodeRef}
        className={`fixed ${
          dblClick ? "w-full h-full" : "w-240 h-130"
        } bg-stone-300 shadow-2xl ${
          dblClick ? " top-0 left-0" : "rounded-3xl outline-8"
        } flex   outline-black/50 flex-col z-50 overflow-hidden ${
          visible ? "" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`drag-handle flex justify-between px-4 items-center bg-stone-900 p-2 ${
            dblClick ? "" : "rounded-t-md"
          } cursor-move h-12 border-b-2 border-red-400`}
          onDoubleClick={() => setDblClick(!dblClick)}
        >
          <span className="font-semibold">Draggable Window</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-4xl bg-red-600">
            <button className="text-stone-300 text-sm" onClick={closeFunction}>
              ✖
            </button>
          </div>
        </div>
        <div className="p-4 text-gray-700 flex-col">
          this is where the details of the particullar skill/project will be
          displayed
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
