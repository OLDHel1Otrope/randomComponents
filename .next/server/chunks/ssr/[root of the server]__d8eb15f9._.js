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
            1,
            3,
            5,
            9,
            11,
            13,
            17,
            21,
            23,
            25,
            29,
            33,
            35
        ],
        B: [
            0,
            1,
            2,
            5,
            10,
            11,
            12,
            15,
            20,
            21,
            22,
            25,
            30,
            31,
            32
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
            5,
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
            11,
            12,
            15,
            20,
            25
        ],
        G: [
            1,
            2,
            3,
            5,
            10,
            13,
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
        H: [
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
            28,
            29,
            30
        ],
        K: [
            0,
            4,
            5,
            8,
            10,
            13,
            15,
            18,
            20,
            23,
            25,
            29,
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
            9,
            10,
            12,
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
            5,
            10,
            11,
            12,
            15,
            20,
            25
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
            18,
            19,
            22,
            24,
            25,
            29,
            30,
            31,
            32
        ],
        R: [
            0,
            1,
            2,
            5,
            10,
            11,
            12,
            15,
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
            29,
            30,
            31,
            32
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
            22,
            24,
            28
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
            16,
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
            8,
            12,
            16,
            20,
            24,
            28,
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
        className: `grid grid-cols-5 grid-rows-7 ${size == "small" ? "gap-1" : "gap-2"}`,
        onClick: onClick,
        children: gridItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex ${size == "small" ? "w-1 h-1" : "w-4 h-4"} items-center justify-center rounded-3xl font-bold transition-colors ${charPixelMap[normalizedLetter]?.includes(item - 1) ? "bg-white" : ""}`
            }, `${normalizedLetter}-${item}`, false, {
                fileName: "[project]/src/components/WordGenerator.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/WordGenerator.tsx",
        lineNumber: 55,
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
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/TextGenerator.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TextGenerator;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d8eb15f9._.js.map