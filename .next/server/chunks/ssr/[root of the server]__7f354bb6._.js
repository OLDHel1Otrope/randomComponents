module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/metroUI/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const GridComponent = ()=>{
    const gridRows = 7;
    const gridCols = 13;
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const cardTypes = [
        {
            className: "card-7x4",
            width: 7,
            height: 4,
            count: 1,
            data: "Portfolio"
        },
        {
            className: "card-3x3",
            width: 6,
            height: 2,
            count: 7,
            data: "High Tier weight carrying things"
        },
        {
            className: "card-2x2",
            width: 2,
            height: 2,
            count: 150,
            data: "Experiences"
        },
        {
            className: "card-2x2",
            width: 3,
            height: 1,
            count: 150,
            data: "Experiences"
        },
        {
            className: "card-1x1",
            width: 1,
            height: 1,
            count: 200,
            data: "general stuff"
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
            for (const { className, width, height, count, data } of cardTypes){
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
                            textColor: chosenColor.secondary ? "white" : "#282828"
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
            className: "grid gap-2 bg-stone-900 p-0 w-full h-full place-content-center",
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
                    }
                }, index, false, {
                    fileName: "[project]/src/app/metroUI/page.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/metroUI/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/metroUI/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GridComponent;
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7f354bb6._.js.map