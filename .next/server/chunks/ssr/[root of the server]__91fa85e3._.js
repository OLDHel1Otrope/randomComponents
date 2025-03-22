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
        className: `grid grid-cols-5 grid-rows-7 overflow-hidden ${size == "small" ? "gap-1" : "gap-2"}`,
        onClick: onClick,
        children: gridItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex ${size == "small" ? "w-1 h-1" : "w-4 h-4"} rounded-3xl text-sm ${charPixelMap[normalizedLetter]?.includes(item - 1) ? "bg-[radial-gradient(circle,_rgba(255,20,20,1)_0%,_rgba(100,0,0,1)_70%)]" : "bg-[#050505]"}`
            }, `${normalizedLetter}-${item}`, false, {
                fileName: "[project]/src/components/WordGenerator.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/WordGenerator.tsx",
        lineNumber: 57,
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
        className: "flex items-center gap-8",
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
"[project]/src/app/dottedText/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    "its",
    "lights out",
    "and away",
    "we",
    "go"
];
const DottedText = ()=>{
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(samples[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setText((prev)=>samples[(samples.indexOf(prev.trim()) + 1) % samples.length].padEnd(10, " "));
        }, 400);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex flex-col gap-8 bg-black w-screen h-screen p-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    data: "utkarsh pathak       ",
                    size: "small"
                }, void 0, false, {
                    fileName: "[project]/src/app/dottedText/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dottedText/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: text,
                size: "large"
            }, void 0, false, {
                fileName: "[project]/src/app/dottedText/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/metroUI",
                className: " pt-3 bg-[#050505] cursor-pointer ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        data: "explore",
                        size: "small"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dottedText/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-0.5 bg-red-800 mt-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dottedText/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dottedText/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dottedText/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DottedText;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__91fa85e3._.js.map