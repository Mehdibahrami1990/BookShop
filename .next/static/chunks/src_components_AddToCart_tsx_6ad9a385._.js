(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AddToCart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShoppingCartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ShoppingCartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const AddToCart = (param)=>{
    let { id } = param;
    _s();
    const { totalItems, handleIncraseProductQty, getProductQuantity, handleDecraseProductQty, handleRemoveProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShoppingCartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShoppingCartContext"])();
    console.log(totalItems);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDecraseProductQty(parseInt(id)),
                        className: "px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer",
                        children: [
                            " ",
                            "-"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddToCart.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-4",
                        children: getProductQuantity(parseInt(id))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddToCart.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleIncraseProductQty(parseInt(id)),
                        className: "px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddToCart.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddToCart.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handleRemoveProduct(parseInt(id)),
                className: "bg-red-500 text-white rounded-2xl px-4 py-2 mt-2 cursor-pointer",
                children: "Remove"
            }, void 0, false, {
                fileName: "[project]/src/components/AddToCart.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AddToCart.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddToCart, "D/+xwglDZS53AbkduX+Ejk4we7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ShoppingCartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShoppingCartContext"]
    ];
});
_c = AddToCart;
const __TURBOPACK__default__export__ = AddToCart;
var _c;
__turbopack_context__.k.register(_c, "AddToCart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_AddToCart_tsx_6ad9a385._.js.map