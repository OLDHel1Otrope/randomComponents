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
        <div className="p-4  flex flex-col text-stone-900 gap-4 overflow-y-auto">
          <h1 className="font-semibold text-stone-700 text-6xl">Project Heading</h1>
          <div className="flex flex-row gap-4 overflow-none">
            <div className="rounded-2xl bg-stone-400 w-60 h-60  shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "></div>
            <div className="rounded-2xl bg-stone-400 w-60 h-60  shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "></div>
            <div className="rounded-2xl bg-stone-400 w-60 h-60  shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "></div>
            <div className="rounded-2xl bg-stone-400 w-60 h-60  shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10 "></div>
          </div>
          <div className="font-extrabold text-stone-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            distinctio numquam esse ducimus, eos suscipit nemo explicabo
            pariatur magnam voluptatum saepe quod voluptates libero voluptatem
            beatae veritatis, ut sit magni. Nostrum minima sapiente quae
            laboriosam, accusantium quidem mollitia recusandae nam quaerat quos
            accusamus et ratione nihil fugiat architecto asperiores sunt commodi
            pariatur minus dolorem odit, consequatur ducimus debitis? Ea,
            mollitia! Atque quisquam repellat eos nihil magni, aliquam sit ullam
            necessitatibus nulla hic, soluta a exercitationem. Aperiam omnis,
            dolorem et numquam consequuntur officia eaque cumque animi neque
            laborum dolor deserunt illum. Velit ipsam enim ad. Consequatur,
            fugit. Repudiandae libero hic tempora eaque quas sit reiciendis
            reprehenderit quos, dolor velit nihil iusto autem consequuntur
            expedita officiis porro doloribus culpa quibusdam doloremque dolore.
            Nesciunt amet, rem inventore quis, libero nostrum, vel aliquam velit
            officiis impedit expedita odit necessitatibus. Nostrum rerum
            perferendis vitae consequuntur quam quod reiciendis quisquam
            perspiciatis, aliquid deserunt quasi, hic aspernatur.
          </div>
          <div className="flex space-x-4">
            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View More
            </button> */}
            <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
              Go to Page
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
