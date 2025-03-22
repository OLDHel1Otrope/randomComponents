module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/components/WordGenerator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const Letter = ({ letter, onClick, size })=>{
    const charPixelMap = {
        A: [
            2,
            6,
            8,
            10,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            24,
            25,
            29,
            30,
            34
        ],
        B: [
            0,
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            16,
            17,
            18,
            20,
            24,
            25,
            29,
            30,
            31,
            32,
            33
        ],
        C: [
            1,
            2,
            3,
            4,
            5,
            10,
            15,
            20,
            25,
            31,
            32,
            33,
            34
        ],
        D: [
            0,
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            24,
            25,
            29,
            30,
            31,
            32,
            33
        ],
        E: [
            0,
            1,
            2,
            3,
            4,
            5,
            10,
            16,
            17,
            15,
            20,
            25,
            30,
            31,
            32,
            33,
            34
        ],
        F: [
            0,
            1,
            2,
            3,
            4,
            5,
            10,
            15,
            16,
            17,
            20,
            25,
            30
        ],
        G: [
            1,
            2,
            3,
            5,
            10,
            15,
            18,
            19,
            20,
            24,
            25,
            29,
            31,
            32,
            33
        ],
        H: [
            0,
            4,
            5,
            9,
            10,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            24,
            25,
            29,
            30,
            34
        ],
        I: [
            1,
            2,
            3,
            7,
            12,
            17,
            22,
            27,
            31,
            32,
            33
        ],
        J: [
            2,
            3,
            4,
            9,
            14,
            19,
            24,
            25,
            29,
            31,
            32,
            33
        ],
        K: [
            0,
            4,
            5,
            8,
            10,
            12,
            15,
            16,
            20,
            22,
            25,
            28,
            30,
            34
        ],
        L: [
            0,
            5,
            10,
            15,
            20,
            25,
            30,
            31,
            32,
            33,
            34
        ],
        M: [
            0,
            4,
            5,
            6,
            8,
            9,
            10,
            12,
            14,
            15,
            19,
            20,
            24,
            25,
            29,
            30,
            34
        ],
        N: [
            0,
            4,
            5,
            6,
            9,
            10,
            12,
            14,
            15,
            18,
            20,
            24,
            25,
            29,
            30,
            34
        ],
        O: [
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            24,
            25,
            29,
            31,
            32,
            33
        ],
        P: [
            0,
            1,
            2,
            3,
            5,
            9,
            14,
            10,
            15,
            16,
            17,
            18,
            20,
            25,
            30
        ],
        Q: [
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            22,
            24,
            25,
            28,
            29,
            30,
            31,
            32,
            33
        ],
        R: [
            0,
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            16,
            17,
            18,
            20,
            23,
            25,
            29,
            30,
            34
        ],
        S: [
            1,
            2,
            3,
            4,
            5,
            10,
            15,
            16,
            17,
            18,
            19,
            24,
            29,
            30,
            31,
            32,
            33
        ],
        T: [
            0,
            1,
            2,
            3,
            4,
            7,
            12,
            17,
            22,
            27,
            32
        ],
        U: [
            0,
            4,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            24,
            25,
            29,
            31,
            32,
            33
        ],
        V: [
            0,
            4,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            24,
            26,
            28,
            32
        ],
        W: [
            0,
            4,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            22,
            24,
            25,
            26,
            28,
            29,
            30,
            34
        ],
        X: [
            0,
            4,
            5,
            9,
            11,
            13,
            21,
            23,
            25,
            17,
            29,
            30,
            34
        ],
        Y: [
            0,
            4,
            6,
            8,
            12,
            17,
            22,
            27,
            32
        ],
        Z: [
            0,
            1,
            2,
            3,
            4,
            9,
            13,
            17,
            21,
            25,
            30,
            31,
            32,
            33,
            34
        ],
        "?": [
            0,
            1,
            2,
            3,
            9,
            14,
            17,
            18,
            21,
            31
        ],
        "0": [
            1,
            2,
            3,
            5,
            9,
            10,
            14,
            15,
            19,
            20,
            24,
            25,
            29,
            30,
            31,
            32
        ],
        "1": [
            2,
            7,
            12,
            17,
            22,
            27,
            31,
            32,
            33
        ],
        "2": [
            1,
            2,
            3,
            5,
            9,
            10,
            12,
            16,
            20,
            24,
            29,
            30,
            31,
            32
        ],
        "3": [
            1,
            2,
            3,
            5,
            9,
            10,
            12,
            14,
            19,
            24,
            29,
            30,
            31,
            32
        ],
        "4": [
            0,
            4,
            6,
            8,
            12,
            16,
            20,
            21,
            22,
            23,
            24
        ],
        "5": [
            0,
            1,
            2,
            3,
            5,
            10,
            11,
            12,
            14,
            19,
            24,
            29,
            30,
            31
        ],
        "6": [
            1,
            2,
            3,
            5,
            10,
            11,
            12,
            14,
            19,
            20,
            24,
            25,
            29,
            30,
            31
        ],
        "7": [
            0,
            1,
            2,
            3,
            4,
            8,
            12,
            16,
            21,
            26
        ],
        "8": [
            1,
            2,
            3,
            5,
            9,
            10,
            11,
            12,
            14,
            19,
            20,
            24,
            25,
            29,
            30,
            31
        ],
        "9": [
            1,
            2,
            3,
            5,
            9,
            10,
            11,
            12,
            14,
            19,
            24,
            29,
            30,
            31
        ]
    };
    const normalizedLetter = letter.toUpperCase();
    const gridItems = Array.from({
        length: 35
    }, (_, i)=>i + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid grid-cols-5 grid-rows-7 overflow-hidden 
        ${size == "small" ? "gap-1" : "gap-2"}
      `,
        onClick: onClick,
        children: gridItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex ${size == "small" ? "w-1 h-1" : "w-2 h-2"} rounded-sm text-sm ${charPixelMap[normalizedLetter]?.includes(item - 1) ? "bg-[radial-gradient(circle,_rgba(220,220,220,1)_0%,_rgba(180,180,180,1)_70%)]" : "bg-stone-950"}`
            }, `${normalizedLetter}-${item}`, false, {
                fileName: "[project]/src/components/WordGenerator.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/WordGenerator.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Letter;
}}),
"[project]/src/components/TextGenerator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WordGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WordGenerator.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const TextGenerator = ({ data, size })=>{
    const [word, setWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(data.split(""));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setWord(data.split(""));
    }, [
        data
    ]);
    const handleClick = (index)=>{
        setWord((prev)=>prev.map((letter, i)=>i === index ? String.fromCharCode((letter.charCodeAt(0) - 97 + 1) % 26 + 97) : letter));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: word.map((letter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WordGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                letter: letter,
                size: size,
                onClick: ()=>handleClick(index)
            }, `${letter}-${index}`, false, {
                fileName: "[project]/src/components/TextGenerator.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TextGenerator.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TextGenerator;
}}),
"[project]/src/components/DraggableDiv.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-draggable/build/cjs/cjs.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const DraggableDiv = ({ visible, closeFunction })=>{
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dblClick, setDblClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$draggable$2f$build$2f$cjs$2f$cjs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        nodeRef: nodeRef,
        handle: ".drag-handle",
        position: dblClick ? {
            x: 0,
            y: 0
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: nodeRef,
            className: `fixed ${dblClick ? "w-full h-full" : "w-300 h-170"} bg-stone-300 shadow-2xl ${dblClick ? "top-0 left-0" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl outline-8"} flex outline-black/50 flex-col z-50 overflow-hidden ${visible ? "" : "hidden"}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `drag-handle flex justify-between px-4 items-center bg-stone-900 p-2 ${dblClick ? "" : "rounded-t-md"} cursor-move h-12 border-b-2 border-red-400`,
                    onDoubleClick: ()=>setDblClick(!dblClick),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: [
                                "Draggable Window ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-4xl bg-red-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2  flex flex-col text-stone-900 gap-4 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center space-y-8 px-6 py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-bold text-stone-700 text-6xl tracking-tight",
                                children: "Transforming Ideas into Reality"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row gap-6 w-full h-64 justify-center",
                                children: [
                                    "Feature One",
                                    "Feature Two",
                                    "Feature Three",
                                    "Feature Four"
                                ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-stone-700 w-64 h-64 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-center items-center hover:scale-112 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-white text-xl font-semibold",
                                                children: feature
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-extrabold text-stone-600 text-center max-w-5xl leading-relaxed",
                                children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat voluptatem facere aliquam, a tenetur qui culpa explicabo expedita? Maiores accusamus aliquid consequatur perspiciatis amet iure earum minus pariatur. Facilis, non? Autem harum repudiandae omnis numquam excepturi nisi. Earum praesentium officia minus omnis, debitis quia repudiandae iure ipsam a aperiam nesciunt placeat ipsum? Officia tempora aliquam aperiam placeat, cumque impedit eius!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DraggableDiv.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 shadow-md transition-all",
                                        children: "Explore More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DraggableDiv.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = DraggableDiv;
}}),
"[project]/src/components/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DraggableDiv.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const InfoCard = ({ size })=>{
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: size === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-4xl flex flex-col gap-2 p-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] hover:bg-stone-200 transition-all duration-500 text-stone-700",
            onClick: ()=>setVisible(!visible),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10",
                    children: "j"
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-4xl flex flex-col gap-2 bg-stone-300 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-2 hover:bg-stone-200 transition-all duration-500",
            onClick: ()=>setVisible(!visible),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-stone-700 w-full h-full shadow-[inset_0px_0px_8px_rgba(0,0,0,0.4)] p-10"
                }, void 0, false, {
                    fileName: "[project]/src/components/card.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-semibold text-stone-800",
                            children: "ProjectTitle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/card.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DraggableDiv$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = InfoCard;
}}),
"[project]/src/components/GridComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const GridComponent = ()=>{
    const gridRows = 7;
    const gridCols = 9;
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const cardTypes = [
        {
            className: "card-7x4",
            width: 5,
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const placeCards = async ()=>{
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
        };
        placeCards();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen bg-stone-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2 bg-stone-900 w-full h-full place-content-center",
            style: {
                gridTemplateColumns: `repeat(${gridCols}, 100px)`,
                gridTemplateRows: `repeat(${gridRows}, 100px)`,
                display: "grid"
            },
            children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center overflow-hidden justify-center rounded-4xl",
                    style: {
                        gridColumn: `${card.x + 1} / span ${card.width}`,
                        gridRow: `${card.y + 1} / span ${card.height}`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: card.size
                    }, void 0, false, {
                        fileName: "[project]/src/components/GridComponent.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/GridComponent.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/GridComponent.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GridComponent.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GridComponent;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/IntroComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextGenerator.tsx [app-ssr] (ecmascript)");
// import  router from "next/router";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const samples = [
    "sample text"
];
const IntroComponent = ()=>{
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(samples[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setText((prev)=>samples[(samples.indexOf(prev.trim()) + 1) % samples.length].padEnd(10, " "));
        }, 400);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex flex-col gap-8 bg-stone-900 w-screen h-full pt-50 px-120",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    data: "hello",
                    size: "small"
                }, void 0, false, {
                    fileName: "[project]/src/components/IntroComponent.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/IntroComponent.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: text,
                size: "large"
            }, void 0, false, {
                fileName: "[project]/src/components/IntroComponent.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/integrated",
                className: "  bg-[#050505] cursor-pointer ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: "explore",
                            size: "small"
                        }, void 0, false, {
                            fileName: "[project]/src/components/IntroComponent.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/IntroComponent.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-0.5 bg-stone-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/IntroComponent.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/IntroComponent.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/IntroComponent.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = IntroComponent;
}}),
"[project]/src/components/KeyboardKey.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeyboardKey": (()=>KeyboardKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function KeyboardKey({ label = "A", size = "normal" }) {
    const [isPressed, setIsPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const keySizes = {
        normal: "w-16 h-16",
        wide: "w-28 h-16",
        space: "w-64 h-16",
        tall: "w-16 h-24"
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key.toUpperCase() === label.toUpperCase()) {
                setIsPressed(true);
            }
        };
        const handleKeyUp = (event)=>{
            if (event.key.toUpperCase() === label.toUpperCase()) {
                setIsPressed(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [
        label
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${keySizes[size]} bg-stone-700 rounded-lg flex items-center justify-center border border-stone-900 p-1
        transition-transform duration-75 select-none
        ${isPressed ? "shadow-[inset_0px_0px_20px_rgba(0,0,0,0.9)] translate-y-1" : "shadow-[inset_0px_0px_28px_rgba(0,0,0,0.9)]"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-stone-900 to-stone-800 w-full h-full rounded-lg p-2 text-stone-400 font-semibold flex items-center justify-center",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/KeyboardKey.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/KeyboardKey.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__b3b9eacc._.js.map