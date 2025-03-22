(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e3952ed5._.js", {

"[project]/src/components/DraggableDiv.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DraggableDiv = ({ visible, closeFunction })=>{
    _s();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dblClick, setDblClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: dblClick ? {
            x: 0,
            y: 0
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: `fixed ${dblClick ? "w-full h-full" : "w-300 h-170"} bg-stone-300 shadow-2xl ${dblClick ? "top-0 left-0" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl outline-8"} flex outline-black/50 flex-col z-50 overflow-hidden ${visible ? "" : "hidden"}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `drag-handle flex justify-between px-4 items-center bg-stone-900 p-2 ${dblClick ? "" : "rounded-t-md"}  h-12 border-b-2 border-red-400`,
                    onDoubleClick: ()=>setDblClick(!dblClick),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: [
                                "Draggable Window ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "text-stone-700 font-extralight",
                                    children: "(double click to fullscreen)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DraggableDiv.tsx",
                                    lineNumber: 32,
                                    columnNumber: 60
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DraggableDiv.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-4xl bg-red-500 hover:bg-red-800 transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-stone-300 text-sm",
                                onClick: closeFunction,
                                children: "✖"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DraggableDiv.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/DraggableDiv.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2  flex flex-col text-stone-900 gap-4 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-8 px-6 py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bold text-stone-700 text-4xl tracking-tight",
                                children: "Transforming Ideas into Reality"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6 w-full h-64 justify-center",
                                children: [
                                    "Feature One",
                                    "Feature Two",
                                    "Feature Three",
                                    "Feature Four"
                                ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-stone-700 w-64 h-64 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-center items-center hover:scale-112 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white text-xl font-semibold",
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm text-center mt-2",
                                                children: "A brief description of how this feature enhances the user experience."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/components/DraggableDiv.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold text-stone-600 text-center max-w-5xl leading-relaxed",
                                children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatem facere aliquam, a tenetur qui culpa explicabo expedita? Maiores accusamus aliquid consequatur perspiciatis amet iure earum minus pariatur. Facilis, non? Autem harum repudiandae omnis numquam excepturi nisi. Earum praesentium officia minus omnis, debitis quia repudiandae iure ipsam a aperiam nesciunt placeat ipsum? Officia tempora aliquam aperiam placeat, cumque impedit eius!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 shadow-md transition-all",
                                        children: "Explore More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DraggableDiv.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-900 shadow-md transition-all",
                                        children: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DraggableDiv.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DraggableDiv.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/DraggableDiv.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DraggableDiv.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/DraggableDiv.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_s(DraggableDiv, "JvS7v661A9ALxvPv8k1fDCGZO74=");
_c = DraggableDiv;
const __TURBOPACK__default__export__ = DraggableDiv;
var _c;
__turbopack_context__.k.register(_c, "DraggableDiv");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DraggableDiv.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const InfoCard = ({ size })=>{
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: size === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-4xl flex flex-col gap-2 p-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] hover:bg-stone-200 transition-all duration-500 text-stone-700",
            onClick: ()=>setVisible(!visible),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10"
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    visible: visible,
                    closeFunction: ()=>setVisible(!visible)
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/card.tsx",
            lineNumber: 12,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-4xl flex flex-col gap-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-2 hover:bg-stone-200 transition-all duration-500",
            onClick: ()=>setVisible(!visible),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10"
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-semibold text-stone-800",
                            children: "Terminatad"
                        }, void 0, false, {
                            fileName: "[project]/src/components/card.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-extrabold text-stone-600",
                            children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia cumque, at id error, voluptas non ab vero quod consequuntur similique, quaerat nesciunt labore! Delectus hic iure earum corporis distinctio et! Nisi aliquam quod eius, maiores quos totam accusamus hic! Pariatur, nemo eaque, libero omnis est quae quia harum sunt mollitia explicabo, minima sit culpa nulla unde. Eligendi qui in earum."
                        }, void 0, false, {
                            fileName: "[project]/src/components/card.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    visible: visible,
                    closeFunction: ()=>setVisible(!visible)
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/card.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this)
    }, void 0, false);
};
_s(InfoCard, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");
_c = InfoCard;
const __TURBOPACK__default__export__ = InfoCard;
var _c;
__turbopack_context__.k.register(_c, "InfoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/metroUI/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const GridComponent = ()=>{
    _s();
    const gridRows = 7;
    const gridCols = 13;
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cardTypes = [
        {
            className: "card-7x4",
            width: 7,
            height: 4,
            count: 1,
            data: "Portfolio",
            size: 4
        },
        {
            className: "card-3x3",
            width: 6,
            height: 2,
            count: 7,
            data: "High Tier weight carrying things",
            size: 2
        },
        {
            className: "card-2x2",
            width: 2,
            height: 2,
            count: 150,
            data: "Experiences",
            size: 2
        },
        {
            className: "card-2x2",
            width: 3,
            height: 1,
            count: 150,
            data: "Experiences",
            size: 1
        },
        {
            className: "card-1x1",
            width: 1,
            height: 1,
            count: 200,
            data: "general stuff",
            size: 1
        }
    ];
    const colors = [
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        },
        {
            primary: "#333333",
            secondary: true
        }
    ];
    const store = [];
    const isOccupied = (x, y, width, height)=>{
        return store.some((card)=>x < card.x + card.width && x + width > card.x && y < card.y + card.height && y + height > card.y);
    };
    const chooseRandomPosition = (width, height)=>{
        let x, y;
        let attempts = 200;
        do {
            x = Math.floor(Math.random() * (gridCols - width + 1));
            y = Math.floor(Math.random() * (gridRows - height + 1));
        }while (isOccupied(x, y, width, height) && --attempts > 0)
        return attempts > 0 ? {
            x,
            y
        } : null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GridComponent.useEffect": ()=>{
            const placeCards = {
                "GridComponent.useEffect.placeCards": async ()=>{
                    const newCards = [];
                    for (const { className, width, height, count, data, size } of cardTypes){
                        for(let i = 0; i < count; i++){
                            const position = chooseRandomPosition(width, height);
                            if (position) {
                                const chosenColor = colors[Math.floor(Math.random() * colors.length)];
                                store.push({
                                    ...position,
                                    width,
                                    height
                                });
                                newCards.push({
                                    className,
                                    ...position,
                                    width,
                                    height,
                                    data,
                                    color: chosenColor.primary,
                                    textColor: chosenColor.secondary ? "white" : "#282828",
                                    size: size
                                });
                                setCards([
                                    ...newCards
                                ]);
                            }
                        }
                    }
                }
            }["GridComponent.useEffect.placeCards"];
            placeCards();
        }
    }["GridComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen bg-stone-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2 bg-stone-900 w-full h-full place-content-center",
            style: {
                gridTemplateColumns: `repeat(${gridCols}, 100px)`,
                gridTemplateRows: `repeat(${gridRows}, 100px)`,
                display: "grid"
            },
            children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center overflow-hidden justify-center rounded-4xl",
                    style: {
                        gridColumn: `${card.x + 1} / span ${card.width}`,
                        gridRow: `${card.y + 1} / span ${card.height}`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        size: card.size
                    }, void 0, false, {
                        fileName: "[project]/src/app/metroUI/page.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/app/metroUI/page.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/metroUI/page.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/metroUI/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
_s(GridComponent, "M51NroWgc5aUEHiqsZiaQ+7WeWA=");
_c = GridComponent;
const __TURBOPACK__default__export__ = GridComponent;
var _c;
__turbopack_context__.k.register(_c, "GridComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}}),
"[project]/node_modules/react-is/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/react-is/cjs/react-is.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
var assign = Object.assign.bind(Object);
module.exports = assign;
module.exports.default = module.exports; //# sourceMappingURL=object-assign.js.map
}}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}}),
"[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
var assign = __turbopack_context__.r("[project]/node_modules/next/dist/build/polyfills/object-assign.js [app-client] (ecmascript)");
var ReactPropTypesSecret = __turbopack_context__.r("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-client] (ecmascript)");
var has = __turbopack_context__.r("[project]/node_modules/prop-types/lib/has.js [app-client] (ecmascript)");
var checkPropTypes = __turbopack_context__.r("[project]/node_modules/prop-types/checkPropTypes.js [app-client] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : ("TURBOPACK unreachable", undefined);
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}}),
"[project]/node_modules/prop-types/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_context__.r("[project]/node_modules/react-is/index.js [app-client] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_context__.r("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-client] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else {
    "TURBOPACK unreachable";
}
}}),
"[project]/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
"[project]/node_modules/react-draggable/build/cjs/utils/shims.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dontSetMe = dontSetMe;
exports.findInArray = findInArray;
exports.int = int;
exports.isFunction = isFunction;
exports.isNum = isNum;
// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/ , callback /*: Function*/ ) /*: any*/ {
    for(let i = 0, length = array.length; i < length; i++){
        if (callback.apply(callback, [
            array[i],
            i,
            array
        ])) return array[i];
    }
}
function isFunction(func /*: any*/ ) /*: boolean %checks*/ {
    // $FlowIgnore[method-unbinding]
    return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}
function isNum(num /*: any*/ ) /*: boolean %checks*/ {
    return typeof num === 'number' && !isNaN(num);
}
function int(a /*: string*/ ) /*: number*/ {
    return parseInt(a, 10);
}
function dontSetMe(props /*: Object*/ , propName /*: string*/ , componentName /*: string*/ ) /*: ?Error*/ {
    if (props[propName]) {
        return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
    }
}
}}),
"[project]/node_modules/react-draggable/build/cjs/utils/getPrefix.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
exports.getPrefix = getPrefix;
const prefixes = [
    'Moz',
    'Webkit',
    'O',
    'ms'
];
function getPrefix() /*: string*/ {
    var _window$document;
    let prop /*: string*/  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
    // Ensure we're running in an environment where there is actually a global
    // `window` obj
    if (typeof window === 'undefined') return '';
    // If we're in a pseudo-browser server-side environment, this access
    // path may not exist, so bail out if it doesn't.
    const style = (_window$document = window.document) === null || _window$document === void 0 || (_window$document = _window$document.documentElement) === null || _window$document === void 0 ? void 0 : _window$document.style;
    if (!style) return '';
    if (prop in style) return '';
    for(let i = 0; i < prefixes.length; i++){
        if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
    }
    return '';
}
function browserPrefixToKey(prop /*: string*/ , prefix /*: string*/ ) /*: string*/ {
    return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}
function browserPrefixToStyle(prop /*: string*/ , prefix /*: string*/ ) /*: string*/ {
    return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}
function kebabToTitleCase(str /*: string*/ ) /*: string*/ {
    let out = '';
    let shouldCapitalize = true;
    for(let i = 0; i < str.length; i++){
        if (shouldCapitalize) {
            out += str[i].toUpperCase();
            shouldCapitalize = false;
        } else if (str[i] === '-') {
            shouldCapitalize = true;
        } else {
            out += str[i];
        }
    }
    return out;
}
// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
var _default = exports.default = getPrefix();
}}),
"[project]/node_modules/react-draggable/build/cjs/utils/domFns.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addClassName = addClassName;
exports.addEvent = addEvent;
exports.addUserSelectStyles = addUserSelectStyles;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.getTranslation = getTranslation;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.offsetXYFromParent = offsetXYFromParent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.removeClassName = removeClassName;
exports.removeEvent = removeEvent;
exports.removeUserSelectStyles = removeUserSelectStyles;
var _shims = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/shims.js [app-client] (ecmascript)");
var _getPrefix = _interopRequireWildcard(__turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/getPrefix.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
/*:: import type {ControlPosition, PositionOffsetControlPosition, MouseTouchEvent} from './types';*/ let matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/ , selector /*: string*/ ) /*: boolean*/ {
    if (!matchesSelectorFunc) {
        matchesSelectorFunc = (0, _shims.findInArray)([
            'matches',
            'webkitMatchesSelector',
            'mozMatchesSelector',
            'msMatchesSelector',
            'oMatchesSelector'
        ], function(method) {
            // $FlowIgnore: Doesn't think elements are indexable
            return (0, _shims.isFunction)(el[method]);
        });
    }
    // Might not be found entirely (not an Element?) - in that case, bail
    // $FlowIgnore: Doesn't think elements are indexable
    if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;
    // $FlowIgnore: Doesn't think elements are indexable
    return el[matchesSelectorFunc](selector);
}
// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/ , selector /*: string*/ , baseNode /*: Node*/ ) /*: boolean*/ {
    let node = el;
    do {
        if (matchesSelector(node, selector)) return true;
        if (node === baseNode) return false;
        // $FlowIgnore[incompatible-type]
        node = node.parentNode;
    }while (node)
    return false;
}
function addEvent(el /*: ?Node*/ , event /*: string*/ , handler /*: Function*/ , inputOptions /*: Object*/ ) /*: void*/ {
    if (!el) return;
    const options = {
        capture: true,
        ...inputOptions
    };
    // $FlowIgnore[method-unbinding]
    if (el.addEventListener) {
        el.addEventListener(event, handler, options);
    } else if (el.attachEvent) {
        el.attachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = handler;
    }
}
function removeEvent(el /*: ?Node*/ , event /*: string*/ , handler /*: Function*/ , inputOptions /*: Object*/ ) /*: void*/ {
    if (!el) return;
    const options = {
        capture: true,
        ...inputOptions
    };
    // $FlowIgnore[method-unbinding]
    if (el.removeEventListener) {
        el.removeEventListener(event, handler, options);
    } else if (el.detachEvent) {
        el.detachEvent('on' + event, handler);
    } else {
        // $FlowIgnore: Doesn't think elements are indexable
        el['on' + event] = null;
    }
}
function outerHeight(node /*: HTMLElement*/ ) /*: number*/ {
    // This is deliberately excluding margin for our calculations, since we are using
    // offsetTop which is including margin. See getBoundPosition
    let height = node.clientHeight;
    const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
    height += (0, _shims.int)(computedStyle.borderTopWidth);
    height += (0, _shims.int)(computedStyle.borderBottomWidth);
    return height;
}
function outerWidth(node /*: HTMLElement*/ ) /*: number*/ {
    // This is deliberately excluding margin for our calculations, since we are using
    // offsetLeft which is including margin. See getBoundPosition
    let width = node.clientWidth;
    const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
    width += (0, _shims.int)(computedStyle.borderLeftWidth);
    width += (0, _shims.int)(computedStyle.borderRightWidth);
    return width;
}
function innerHeight(node /*: HTMLElement*/ ) /*: number*/ {
    let height = node.clientHeight;
    const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
    height -= (0, _shims.int)(computedStyle.paddingTop);
    height -= (0, _shims.int)(computedStyle.paddingBottom);
    return height;
}
function innerWidth(node /*: HTMLElement*/ ) /*: number*/ {
    let width = node.clientWidth;
    const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
    width -= (0, _shims.int)(computedStyle.paddingLeft);
    width -= (0, _shims.int)(computedStyle.paddingRight);
    return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/ // Get from offsetParent
function offsetXYFromParent(evt /*: EventWithOffset*/ , offsetParent /*: HTMLElement*/ , scale /*: number*/ ) /*: ControlPosition*/ {
    const isBody = offsetParent === offsetParent.ownerDocument.body;
    const offsetParentRect = isBody ? {
        left: 0,
        top: 0
    } : offsetParent.getBoundingClientRect();
    const x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
    const y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
    return {
        x,
        y
    };
}
function createCSSTransform(controlPos /*: ControlPosition*/ , positionOffset /*: PositionOffsetControlPosition*/ ) /*: Object*/ {
    const translation = getTranslation(controlPos, positionOffset, 'px');
    return {
        [(0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default)]: translation
    };
}
function createSVGTransform(controlPos /*: ControlPosition*/ , positionOffset /*: PositionOffsetControlPosition*/ ) /*: string*/ {
    const translation = getTranslation(controlPos, positionOffset, '');
    return translation;
}
function getTranslation(_ref /*:: */ , positionOffset /*: PositionOffsetControlPosition*/ , unitSuffix /*: string*/ ) /*: string*/ {
    let { x, y } /*: ControlPosition*/  = _ref /*: ControlPosition*/ ;
    let translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");
    if (positionOffset) {
        const defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
        const defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
        translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
    }
    return translation;
}
function getTouch(e /*: MouseTouchEvent*/ , identifier /*: number*/ ) /*: ?{clientX: number, clientY: number}*/ {
    return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, (t)=>identifier === t.identifier) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, (t)=>identifier === t.identifier);
}
function getTouchIdentifier(e /*: MouseTouchEvent*/ ) /*: ?number*/ {
    if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
    if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}
// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/ ) {
    if (!doc) return;
    let styleEl = doc.getElementById('react-draggable-style-el');
    if (!styleEl) {
        styleEl = doc.createElement('style');
        styleEl.type = 'text/css';
        styleEl.id = 'react-draggable-style-el';
        styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
        styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
        doc.getElementsByTagName('head')[0].appendChild(styleEl);
    }
    if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}
function removeUserSelectStyles(doc /*: ?Document*/ ) {
    if (!doc) return;
    try {
        if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
        // $FlowIgnore: IE
        if (doc.selection) {
            // $FlowIgnore: IE
            doc.selection.empty();
        } else {
            // Remove selection caused by scroll, unless it's a focused input
            // (we use doc.defaultView in case we're in an iframe)
            const selection = (doc.defaultView || window).getSelection();
            if (selection && selection.type !== 'Caret') {
                selection.removeAllRanges();
            }
        }
    } catch (e) {
    // probably IE
    }
}
function addClassName(el /*: HTMLElement*/ , className /*: string*/ ) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
            el.className += " ".concat(className);
        }
    }
}
function removeClassName(el /*: HTMLElement*/ , className /*: string*/ ) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
    }
}
}}),
"[project]/node_modules/react-draggable/build/cjs/utils/positionFns.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;
exports.getBoundPosition = getBoundPosition;
exports.getControlPosition = getControlPosition;
exports.snapToGrid = snapToGrid;
var _shims = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/shims.js [app-client] (ecmascript)");
var _domFns = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/domFns.js [app-client] (ecmascript)");
/*:: import type Draggable from '../Draggable';*/ /*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/ /*:: import type DraggableCore from '../DraggableCore';*/ function getBoundPosition(draggable /*: Draggable*/ , x /*: number*/ , y /*: number*/ ) /*: [number, number]*/ {
    // If no bounds, short-circuit and move on
    if (!draggable.props.bounds) return [
        x,
        y
    ];
    // Clone new bounds
    let { bounds } = draggable.props;
    bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
    const node = findDOMNode(draggable);
    if (typeof bounds === 'string') {
        const { ownerDocument } = node;
        const ownerWindow = ownerDocument.defaultView;
        let boundNode;
        if (bounds === 'parent') {
            boundNode = node.parentNode;
        } else {
            boundNode = ownerDocument.querySelector(bounds);
        }
        if (!(boundNode instanceof ownerWindow.HTMLElement)) {
            throw new Error('Bounds selector "' + bounds + '" could not find an element.');
        }
        const boundNodeEl /*: HTMLElement*/  = boundNode; // for Flow, can't seem to refine correctly
        const nodeStyle = ownerWindow.getComputedStyle(node);
        const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
        // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
        bounds = {
            left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
            top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
            right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
            bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
        };
    }
    // Keep x and y below right and bottom limits...
    if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
    if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
    // But above left and top limits.
    if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
    if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
    return [
        x,
        y
    ];
}
function snapToGrid(grid /*: [number, number]*/ , pendingX /*: number*/ , pendingY /*: number*/ ) /*: [number, number]*/ {
    const x = Math.round(pendingX / grid[0]) * grid[0];
    const y = Math.round(pendingY / grid[1]) * grid[1];
    return [
        x,
        y
    ];
}
function canDragX(draggable /*: Draggable*/ ) /*: boolean*/ {
    return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}
function canDragY(draggable /*: Draggable*/ ) /*: boolean*/ {
    return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}
// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/ , touchIdentifier /*: ?number*/ , draggableCore /*: DraggableCore*/ ) /*: ?ControlPosition*/ {
    const touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
    if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
    const node = findDOMNode(draggableCore);
    // User can provide an offsetParent if desired.
    const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
    return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
}
// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/ , x /*: number*/ , y /*: number*/ ) /*: DraggableData*/ {
    const isStart = !(0, _shims.isNum)(draggable.lastX);
    const node = findDOMNode(draggable);
    if (isStart) {
        // If this is our first move, use the x and y as last coords.
        return {
            node,
            deltaX: 0,
            deltaY: 0,
            lastX: x,
            lastY: y,
            x,
            y
        };
    } else {
        // Otherwise calculate proper values.
        return {
            node,
            deltaX: x - draggable.lastX,
            deltaY: y - draggable.lastY,
            lastX: draggable.lastX,
            lastY: draggable.lastY,
            x,
            y
        };
    }
}
// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/ , coreData /*: DraggableData*/ ) /*: DraggableData*/ {
    const scale = draggable.props.scale;
    return {
        node: coreData.node,
        x: draggable.state.x + coreData.deltaX / scale,
        y: draggable.state.y + coreData.deltaY / scale,
        deltaX: coreData.deltaX / scale,
        deltaY: coreData.deltaY / scale,
        lastX: draggable.state.x,
        lastY: draggable.state.y
    };
}
// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/ ) /*: Bounds*/ {
    return {
        left: bounds.left,
        top: bounds.top,
        right: bounds.right,
        bottom: bounds.bottom
    };
}
function findDOMNode(draggable /*: Draggable | DraggableCore*/ ) /*: HTMLElement*/ {
    const node = draggable.findDOMNode();
    if (!node) {
        throw new Error('<DraggableCore>: Unmounted during event!');
    }
    // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
    return node;
}
}}),
"[project]/node_modules/react-draggable/build/cjs/utils/log.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = log;
/*eslint no-console:0*/ function log() {
    if (undefined) console.log(...arguments);
}
}}),
"[project]/node_modules/react-draggable/build/cjs/DraggableCore.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)"));
var _reactDom = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
var _domFns = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/domFns.js [app-client] (ecmascript)");
var _positionFns = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/positionFns.js [app-client] (ecmascript)");
var _shims = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/shims.js [app-client] (ecmascript)");
var _log = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/log.js [app-client] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/ /*:: import type {Element as ReactElement} from 'react';*/ // Simple abstraction for dragging events names.
const eventsFor = {
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend'
    },
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup'
    }
};
// Default to mouse events.
let dragEventFor = eventsFor.mouse;
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/ /*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/ /*:: export type ControlPosition = {x: number, y: number};*/ /*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/ /*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/ /*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/ //
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
class DraggableCore extends React.Component /*:: <DraggableCoreProps>*/  {
    constructor(){
        super(...arguments);
        _defineProperty(this, "dragging", false);
        // Used while dragging to determine deltas.
        _defineProperty(this, "lastX", NaN);
        _defineProperty(this, "lastY", NaN);
        _defineProperty(this, "touchIdentifier", null);
        _defineProperty(this, "mounted", false);
        _defineProperty(this, "handleDragStart", (e)=>{
            // Make it possible to attach event handlers on top of this one.
            this.props.onMouseDown(e);
            // Only accept left-clicks.
            if (!this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
            // Get nodes. Be sure to grab relative document (could be iframed)
            const thisNode = this.findDOMNode();
            if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
                throw new Error('<DraggableCore> not mounted on DragStart!');
            }
            const { ownerDocument } = thisNode;
            // Short circuit if handle or cancel prop was provided and selector doesn't match.
            if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.cancel, thisNode)) {
                return;
            }
            // Prevent scrolling on mobile devices, like ipad/iphone.
            // Important that this is after handle/cancel.
            if (e.type === 'touchstart') e.preventDefault();
            // Set touch identifier in component state if this is a touch event. This allows us to
            // distinguish between individual touches on multitouch screens by identifying which
            // touchpoint was set to this element.
            const touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
            this.touchIdentifier = touchIdentifier;
            // Get the current drag point from the event. This is used as the offset.
            const position = (0, _positionFns.getControlPosition)(e, touchIdentifier, this);
            if (position == null) return; // not possible but satisfies flow
            const { x, y } = position;
            // Create an event object with all the data parents need to make a decision here.
            const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
            (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent);
            // Call event handler. If it returns explicit false, cancel.
            (0, _log.default)('calling', this.props.onStart);
            const shouldUpdate = this.props.onStart(e, coreEvent);
            if (shouldUpdate === false || this.mounted === false) return;
            // Add a style to the body to disable user-select. This prevents text from
            // being selected all over the page.
            if (this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);
            // Initiate dragging. Set the current x and y as offsets
            // so we know how much we've moved during the drag. This allows us
            // to drag elements around even if they have been moved, without issue.
            this.dragging = true;
            this.lastX = x;
            this.lastY = y;
            // Add events to the document directly so we catch when the user's mouse/touch moves outside of
            // this element. We use different events depending on whether or not we have detected that this
            // is a touch-capable device.
            (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
            (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
        });
        _defineProperty(this, "handleDrag", (e)=>{
            // Get the current drag point from the event. This is used as the offset.
            const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
            if (position == null) return;
            let { x, y } = position;
            // Snap to grid if prop has been provided
            if (Array.isArray(this.props.grid)) {
                let deltaX = x - this.lastX, deltaY = y - this.lastY;
                [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
                if (!deltaX && !deltaY) return; // skip useless drag
                x = this.lastX + deltaX, y = this.lastY + deltaY;
            }
            const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
            (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent);
            // Call event handler. If it returns explicit false, trigger end.
            const shouldUpdate = this.props.onDrag(e, coreEvent);
            if (shouldUpdate === false || this.mounted === false) {
                try {
                    // $FlowIgnore
                    this.handleDragStop(new MouseEvent('mouseup'));
                } catch (err) {
                    // Old browsers
                    const event = document.createEvent('MouseEvents');
                    // I see why this insanity was deprecated
                    // $FlowIgnore
                    event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    this.handleDragStop(event);
                }
                return;
            }
            this.lastX = x;
            this.lastY = y;
        });
        _defineProperty(this, "handleDragStop", (e)=>{
            if (!this.dragging) return;
            const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
            if (position == null) return;
            let { x, y } = position;
            // Snap to grid if prop has been provided
            if (Array.isArray(this.props.grid)) {
                let deltaX = x - this.lastX || 0;
                let deltaY = y - this.lastY || 0;
                [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
                x = this.lastX + deltaX, y = this.lastY + deltaY;
            }
            const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
            // Call event handler
            const shouldContinue = this.props.onStop(e, coreEvent);
            if (shouldContinue === false || this.mounted === false) return false;
            const thisNode = this.findDOMNode();
            if (thisNode) {
                // Remove user-select hack
                if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
            }
            (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent);
            // Reset the el.
            this.dragging = false;
            this.lastX = NaN;
            this.lastY = NaN;
            if (thisNode) {
                // Remove event handlers
                (0, _log.default)('DraggableCore: Removing handlers');
                (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
                (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
            }
        });
        _defineProperty(this, "onMouseDown", (e)=>{
            dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
            return this.handleDragStart(e);
        });
        _defineProperty(this, "onMouseUp", (e)=>{
            dragEventFor = eventsFor.mouse;
            return this.handleDragStop(e);
        });
        // Same as onMouseDown (start drag), but now consider this a touch device.
        _defineProperty(this, "onTouchStart", (e)=>{
            // We're on a touch device now, so change the event handlers
            dragEventFor = eventsFor.touch;
            return this.handleDragStart(e);
        });
        _defineProperty(this, "onTouchEnd", (e)=>{
            // We're on a touch device now, so change the event handlers
            dragEventFor = eventsFor.touch;
            return this.handleDragStop(e);
        });
    }
    componentDidMount() {
        this.mounted = true;
        // Touch handlers must be added with {passive: false} to be cancelable.
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        const thisNode = this.findDOMNode();
        if (thisNode) {
            (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
                passive: false
            });
        }
    }
    componentWillUnmount() {
        this.mounted = false;
        // Remove any leftover event handlers. Remove both touch and mouse handlers in case
        // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
        const thisNode = this.findDOMNode();
        if (thisNode) {
            const { ownerDocument } = thisNode;
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
            (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
            (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
                passive: false
            });
            if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
        }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() /*: ?HTMLElement*/ {
        var _this$props, _this$props2;
        return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.nodeRef) === null || _this$props2 === void 0 ? void 0 : _this$props2.current : _reactDom.default.findDOMNode(this);
    }
    render() /*: React.Element<any>*/ {
        // Reuse the child provided
        // This makes it flexible to use whatever element is wanted (div, ul, etc)
        return /*#__PURE__*/ React.cloneElement(React.Children.only(this.props.children), {
            // Note: mouseMove handler is attached to document so it will still function
            // when the user drags quickly and leaves the bounds of the element.
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            // onTouchStart is added on `componentDidMount` so they can be added with
            // {passive: false}, which allows it to cancel. See
            // https://developers.google.com/web/updates/2017/01/scrolling-intervention
            onTouchEnd: this.onTouchEnd
        });
    }
}
exports.default = DraggableCore;
_defineProperty(DraggableCore, "displayName", 'DraggableCore');
_defineProperty(DraggableCore, "propTypes", {
    /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */ allowAnyClick: _propTypes.default.bool,
    children: _propTypes.default.node.isRequired,
    /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */ disabled: _propTypes.default.bool,
    /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */ enableUserSelectHack: _propTypes.default.bool,
    /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */ offsetParent: function(props /*: DraggableCoreProps*/ , propName /*: $Keys<DraggableCoreProps>*/ ) {
        if (props[propName] && props[propName].nodeType !== 1) {
            throw new Error('Draggable\'s offsetParent must be a DOM Node.');
        }
    },
    /**
   * `grid` specifies the x and y that dragging should snap to.
   */ grid: _propTypes.default.arrayOf(_propTypes.default.number),
    /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */ handle: _propTypes.default.string,
    /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */ cancel: _propTypes.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */ nodeRef: _propTypes.default.object,
    /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */ onStart: _propTypes.default.func,
    /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */ onDrag: _propTypes.default.func,
    /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */ onStop: _propTypes.default.func,
    /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */ onMouseDown: _propTypes.default.func,
    /**
   * `scale`, if set, applies scaling while dragging an element
   */ scale: _propTypes.default.number,
    /**
   * These properties should be defined on the child, not here.
   */ className: _shims.dontSetMe,
    style: _shims.dontSetMe,
    transform: _shims.dontSetMe
});
_defineProperty(DraggableCore, "defaultProps", {
    allowAnyClick: false,
    // by default only accept left click
    disabled: false,
    enableUserSelectHack: true,
    onStart: function() {},
    onDrag: function() {},
    onStop: function() {},
    onMouseDown: function() {},
    scale: 1
});
}}),
"[project]/node_modules/react-draggable/build/cjs/Draggable.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DraggableCore", {
    enumerable: true,
    get: function() {
        return _DraggableCore.default;
    }
});
exports.default = void 0;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
var _propTypes = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)"));
var _reactDom = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
var _clsx = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/clsx/dist/clsx.m.js [app-client] (ecmascript)"));
var _domFns = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/domFns.js [app-client] (ecmascript)");
var _positionFns = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/positionFns.js [app-client] (ecmascript)");
var _shims = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/shims.js [app-client] (ecmascript)");
var _DraggableCore = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/DraggableCore.js [app-client] (ecmascript)"));
var _log = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/utils/log.js [app-client] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _extends() {
    _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined);
    return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
} /*:: import type {ControlPosition, PositionOffsetControlPosition, DraggableCoreProps, DraggableCoreDefaultProps} from './DraggableCore';*/ 
/*:: import type {Bounds, DraggableEventHandler} from './utils/types';*/ /*:: import type {Element as ReactElement} from 'react';*/ /*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean,
  prevPropsPosition: ?ControlPosition,
};*/ /*:: export type DraggableDefaultProps = {
  ...DraggableCoreDefaultProps,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: Bounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  scale: number,
};*/ /*:: export type DraggableProps = {
  ...DraggableCoreProps,
  ...DraggableDefaultProps,
  positionOffset: PositionOffsetControlPosition,
  position: ControlPosition,
};*/ //
// Define <Draggable>
//
class Draggable extends React.Component /*:: <DraggableProps, DraggableState>*/  {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(_ref /*:: */ , _ref2 /*:: */ ) /*: ?Partial<DraggableState>*/ {
        let { position } /*: DraggableProps*/  = _ref /*: DraggableProps*/ ;
        let { prevPropsPosition } /*: DraggableState*/  = _ref2 /*: DraggableState*/ ;
        // Set x/y if a new position is provided in props that is different than the previous.
        if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
            (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
                position,
                prevPropsPosition
            });
            return {
                x: position.x,
                y: position.y,
                prevPropsPosition: {
                    ...position
                }
            };
        }
        return null;
    }
    constructor(props /*: DraggableProps*/ ){
        super(props);
        _defineProperty(this, "onDragStart", (e, coreData)=>{
            (0, _log.default)('Draggable: onDragStart: %j', coreData);
            // Short-circuit if user's callback killed it.
            const shouldStart = this.props.onStart(e, (0, _positionFns.createDraggableData)(this, coreData));
            // Kills start event on core as well, so move handlers are never bound.
            if (shouldStart === false) return false;
            this.setState({
                dragging: true,
                dragged: true
            });
        });
        _defineProperty(this, "onDrag", (e, coreData)=>{
            if (!this.state.dragging) return false;
            (0, _log.default)('Draggable: onDrag: %j', coreData);
            const uiData = (0, _positionFns.createDraggableData)(this, coreData);
            const newState = {
                x: uiData.x,
                y: uiData.y,
                slackX: 0,
                slackY: 0
            };
            // Keep within bounds.
            if (this.props.bounds) {
                // Save original x and y.
                const { x, y } = newState;
                // Add slack to the values used to calculate bound position. This will ensure that if
                // we start removing slack, the element won't react to it right away until it's been
                // completely removed.
                newState.x += this.state.slackX;
                newState.y += this.state.slackY;
                // Get bound position. This will ceil/floor the x and y within the boundaries.
                const [newStateX, newStateY] = (0, _positionFns.getBoundPosition)(this, newState.x, newState.y);
                newState.x = newStateX;
                newState.y = newStateY;
                // Recalculate slack by noting how much was shaved by the boundPosition handler.
                newState.slackX = this.state.slackX + (x - newState.x);
                newState.slackY = this.state.slackY + (y - newState.y);
                // Update the event we fire to reflect what really happened after bounds took effect.
                uiData.x = newState.x;
                uiData.y = newState.y;
                uiData.deltaX = newState.x - this.state.x;
                uiData.deltaY = newState.y - this.state.y;
            }
            // Short-circuit if user's callback killed it.
            const shouldUpdate = this.props.onDrag(e, uiData);
            if (shouldUpdate === false) return false;
            this.setState(newState);
        });
        _defineProperty(this, "onDragStop", (e, coreData)=>{
            if (!this.state.dragging) return false;
            // Short-circuit if user's callback killed it.
            const shouldContinue = this.props.onStop(e, (0, _positionFns.createDraggableData)(this, coreData));
            if (shouldContinue === false) return false;
            (0, _log.default)('Draggable: onDragStop: %j', coreData);
            const newState /*: Partial<DraggableState>*/  = {
                dragging: false,
                slackX: 0,
                slackY: 0
            };
            // If this is a controlled component, the result of this operation will be to
            // revert back to the old position. We expect a handler on `onDragStop`, at the least.
            const controlled = Boolean(this.props.position);
            if (controlled) {
                const { x, y } = this.props.position;
                newState.x = x;
                newState.y = y;
            }
            this.setState(newState);
        });
        this.state = {
            // Whether or not we are currently dragging.
            dragging: false,
            // Whether or not we have been dragged before.
            dragged: false,
            // Current transform x and y.
            x: props.position ? props.position.x : props.defaultPosition.x,
            y: props.position ? props.position.y : props.defaultPosition.y,
            prevPropsPosition: {
                ...props.position
            },
            // Used for compensating for out-of-bounds drags
            slackX: 0,
            slackY: 0,
            // Can only determine if SVG after mounting
            isElementSVG: false
        };
        if (props.position && !(props.onDrag || props.onStop)) {
            // eslint-disable-next-line no-console
            console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
        }
    }
    componentDidMount() {
        // Check to see if the element passed is an instanceof SVGElement
        if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
            this.setState({
                isElementSVG: true
            });
        }
    }
    componentWillUnmount() {
        this.setState({
            dragging: false
        }); // prevents invariant if unmounted while dragging
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() /*: ?HTMLElement*/ {
        var _this$props$nodeRef$c, _this$props;
        return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 || (_this$props = _this$props.nodeRef) === null || _this$props === void 0 ? void 0 : _this$props.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
    render() /*: ReactElement<any>*/ {
        const { axis, bounds, children, defaultPosition, defaultClassName, defaultClassNameDragging, defaultClassNameDragged, position, positionOffset, scale, ...draggableCoreProps } = this.props;
        let style = {};
        let svgTransform = null;
        // If this is controlled, we don't want to move it - unless it's dragging.
        const controlled = Boolean(position);
        const draggable = !controlled || this.state.dragging;
        const validPosition = position || defaultPosition;
        const transformOpts = {
            // Set left if horizontal drag is enabled
            x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
            // Set top if vertical drag is enabled
            y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
        };
        // If this element was SVG, we use the `transform` attribute.
        if (this.state.isElementSVG) {
            svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
        } else {
            // Add a CSS transform to move the element around. This allows us to move the element around
            // without worrying about whether or not it is relatively or absolutely positioned.
            // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
            // has a clean slate.
            style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
        }
        // Mark with class while dragging
        const className = (0, _clsx.default)(children.props.className || '', defaultClassName, {
            [defaultClassNameDragging]: this.state.dragging,
            [defaultClassNameDragged]: this.state.dragged
        });
        // Reuse the child provided
        // This makes it flexible to use whatever element is wanted (div, ul, etc)
        return /*#__PURE__*/ React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
            onStart: this.onDragStart,
            onDrag: this.onDrag,
            onStop: this.onDragStop
        }), /*#__PURE__*/ React.cloneElement(React.Children.only(children), {
            className: className,
            style: {
                ...children.props.style,
                ...style
            },
            transform: svgTransform
        }));
    }
}
exports.default = Draggable;
_defineProperty(Draggable, "displayName", 'Draggable');
_defineProperty(Draggable, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ..._DraggableCore.default.propTypes,
    /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */ axis: _propTypes.default.oneOf([
        'both',
        'x',
        'y',
        'none'
    ]),
    /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */ bounds: _propTypes.default.oneOfType([
        _propTypes.default.shape({
            left: _propTypes.default.number,
            right: _propTypes.default.number,
            top: _propTypes.default.number,
            bottom: _propTypes.default.number
        }),
        _propTypes.default.string,
        _propTypes.default.oneOf([
            false
        ])
    ]),
    defaultClassName: _propTypes.default.string,
    defaultClassNameDragging: _propTypes.default.string,
    defaultClassNameDragged: _propTypes.default.string,
    /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */ defaultPosition: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
    }),
    positionOffset: _propTypes.default.shape({
        x: _propTypes.default.oneOfType([
            _propTypes.default.number,
            _propTypes.default.string
        ]),
        y: _propTypes.default.oneOfType([
            _propTypes.default.number,
            _propTypes.default.string
        ])
    }),
    /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */ position: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
    }),
    /**
   * These properties should be defined on the child, not here.
   */ className: _shims.dontSetMe,
    style: _shims.dontSetMe,
    transform: _shims.dontSetMe
});
_defineProperty(Draggable, "defaultProps", {
    ..._DraggableCore.default.defaultProps,
    axis: 'both',
    bounds: false,
    defaultClassName: 'react-draggable',
    defaultClassNameDragging: 'react-draggable-dragging',
    defaultClassNameDragged: 'react-draggable-dragged',
    defaultPosition: {
        x: 0,
        y: 0
    },
    scale: 1
});
}}),
"[project]/node_modules/react-draggable/build/cjs/cjs.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
const { default: Draggable, DraggableCore } = __turbopack_context__.r("[project]/node_modules/react-draggable/build/cjs/Draggable.js [app-client] (ecmascript)");
// Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;
}}),
}]);

//# sourceMappingURL=_e3952ed5._.js.map