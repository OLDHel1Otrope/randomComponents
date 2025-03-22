(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0105f9ca._.js", {

"[project]/src/components/WordGenerator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid grid-cols-5 grid-rows-7 overflow-hidden 
        ${size == "small" ? "gap-1" : "gap-2"}
      `,
        onClick: onClick,
        children: gridItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = Letter;
const __TURBOPACK__default__export__ = Letter;
var _c;
__turbopack_context__.k.register(_c, "Letter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TextGenerator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WordGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WordGenerator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TextGenerator = ({ data, size })=>{
    _s();
    const [word, setWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.split(""));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextGenerator.useEffect": ()=>{
            setWord(data.split(""));
        }
    }["TextGenerator.useEffect"], [
        data
    ]);
    const handleClick = (index)=>{
        setWord((prev)=>prev.map((letter, i)=>i === index ? String.fromCharCode((letter.charCodeAt(0) - 97 + 1) % 26 + 97) : letter));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: word.map((letter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WordGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(TextGenerator, "vST6Ibo3m3f/9ynvzm1dijuLJF8=");
_c = TextGenerator;
const __TURBOPACK__default__export__ = TextGenerator;
var _c;
__turbopack_context__.k.register(_c, "TextGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/GridComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const GridComponent = ()=>{
    _s();
    const gridRows = 7;
    const gridCols = 9;
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
                    }
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
_s(GridComponent, "M51NroWgc5aUEHiqsZiaQ+7WeWA=");
_c = GridComponent;
const __TURBOPACK__default__export__ = GridComponent;
var _c;
__turbopack_context__.k.register(_c, "GridComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/IntroComponent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TextGenerator.tsx [app-client] (ecmascript)");
// import  router from "next/router";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const samples = [
    "sample text"
];
const IntroComponent = ()=>{
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(samples[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroComponent.useEffect": ()=>{
            const interval = setInterval({
                "IntroComponent.useEffect.interval": ()=>{
                    setText({
                        "IntroComponent.useEffect.interval": (prev)=>samples[(samples.indexOf(prev.trim()) + 1) % samples.length].padEnd(10, " ")
                    }["IntroComponent.useEffect.interval"]);
                }
            }["IntroComponent.useEffect.interval"], 400);
            return ({
                "IntroComponent.useEffect": ()=>clearInterval(interval)
            })["IntroComponent.useEffect"];
        }
    }["IntroComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " flex flex-col gap-8 bg-stone-900 w-screen h-full pt-50 px-120",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: text,
                size: "large"
            }, void 0, false, {
                fileName: "[project]/src/components/IntroComponent.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/integrated",
                className: "  bg-[#050505] cursor-pointer ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TextGenerator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(IntroComponent, "5dsUsOyC4gThXzUQ9WPEU8WBaVM=");
_c = IntroComponent;
const __TURBOPACK__default__export__ = IntroComponent;
var _c;
__turbopack_context__.k.register(_c, "IntroComponent");
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
}]);

//# sourceMappingURL=_0105f9ca._.js.map