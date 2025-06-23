(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_176e81._.js", {

"[project]/src/__apis__/axios.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "mainUrl": (()=>mainUrl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const mainUrl = "http://127.0.0.1:8000";
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: mainUrl,
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/__apis__/careers.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "applicationSubmissionRequest": (()=>applicationSubmissionRequest),
    "vacanciesFetcher": (()=>vacanciesFetcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/__apis__/axios.js [app-client] (ecmascript)");
;
const vacanciesFetcher = async ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("vacancies/fetch-vacancies").then((response)=>response.data);
const applicationSubmissionRequest = async (requestData)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("vacancies/application-handler", requestData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).then((response)=>response.data);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/illustration_background.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// @mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
;
var _s = __turbopack_refresh__.signature();
;
;
// ----------------------------------------------------------------------
function BackgroundIllustration() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const PRIMARY_MAIN = theme.palette.primary.main;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "BG",
                    x1: "19.496%",
                    x2: "77.479%",
                    y1: "71.822%",
                    y2: "16.69%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: PRIMARY_MAIN
                        }, void 0, false, {
                            fileName: "[project]/src/assets/illustration_background.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: PRIMARY_MAIN,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/src/assets/illustration_background.js",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/assets/illustration_background.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/assets/illustration_background.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#BG)",
                fillRule: "nonzero",
                d: "M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/src/assets/illustration_background.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(BackgroundIllustration, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"]
    ];
});
_c = BackgroundIllustration;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(BackgroundIllustration);
var _c, _c1;
__turbopack_refresh__.register(_c, "BackgroundIllustration");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/assets/illustration_upload.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$illustration_background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/assets/illustration_background.js [app-client] (ecmascript)");
// @mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
// ----------------------------------------------------------------------
function UploadIllustration({ ...other }) {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const PRIMARY_DARK = theme.palette.primary.dark;
    const PRIMARY_DARKER = theme.palette.primary.darker;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            viewBox: "0 0 480 360",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$illustration_background$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "linearGradient-2",
                        x1: "30.113%",
                        x2: "30.113%",
                        y1: "0%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/assets/illustration_upload.js",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%"
                            }, void 0, false, {
                                fileName: "[project]/src/assets/illustration_upload.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/assets/illustration_upload.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M293.006 206.192c-2.248 2.672-4.676 2.628-6.123 2.251l.054-1.384s5.979-2.733 5.827-2.159c-.057.215.057.733.242 1.292zM309.393 209.217c-3.818 2.206-6.058-.38-6.578-1.112.32-.84.801-2.204.703-2.592-.144-.577 5.827 2.155 5.827 2.155l.048 1.549zM305.303 187.204s3.632-2.093 4.425-1.151c.792.942-4.425 1.151-4.425 1.151zM307.497 188.355s-.598.299.721.681c1.318.383-.721-.681-.721-.681zM285.532 182.599c-.123.036 3.022 2.123 5.862.395-.012 0-5.154-.61-5.862-.395zM291.239 186.591s-.861 1.692-2.625 1.943c-1.764.251 2.625-1.943 2.625-1.943zM302.785 190.262s4.138 6.578 3.346 8.129c-.793 1.552-3.346-8.129-3.346-8.129zM294.62 216.416c0 .368 0 .712-.036.996-.107 1.33-3.381.828-3.381.828-2.99.416-4.066-1.019-4.422-2.392a5.444 5.444 0 01-.164-1.363 5.606 5.606 0 01.054-.819v-.272a1.998 1.998 0 011.859.379c1.331 1.08 3.095.252 3.095.252s1.294.107 1.793.538c.281.242.745-.341 1.098-.897.021.359.054 1.007.074 1.701.024.356.03.714.03 1.049z",
                    opacity: "0.05"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M289.37 216.339s-.897.879-2.589-.479a5.444 5.444 0 01-.164-1.363c.864.658 2.466 1.842 2.753 1.842zM294.62 216.416a.67.67 0 01-.519.132.672.672 0 01-.452-.287c.348-.266.669-.566.956-.897.009.359.015.717.015 1.052zM301.637 217.032c0 .371 0 .715.033.996.108 1.333 3.382.828 3.382.828 2.989.419 4.066-1.017 4.421-2.392a5.728 5.728 0 00.111-2.182v-.272a2.024 2.024 0 00-1.862.379c-1.331 1.08-3.092.251-3.092.251s-1.294.111-1.794.542c-.281.242-.744-.341-1.094-.897a61.426 61.426 0 00-.078 1.701c-.024.35-.03.708-.027 1.046z",
                    opacity: "0.05"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M306.887 216.949s.897.879 2.587-.479c.112-.444.169-.901.167-1.36-.867.655-2.47 1.839-2.754 1.839zM301.637 217.032a.67.67 0 00.969-.155 6.35 6.35 0 01-.957-.897c-.009.356-.014.714-.012 1.052zM319.614 106.269c.063-.138.123-.275.18-.41.057-.134.077-.209.11-.317-.11.237-.206.48-.29.727z",
                    opacity: "0.05"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_DARKER,
                    fillRule: "nonzero",
                    d: "M157.592 279.461a4.114 4.114 0 01-.917-3.131l13.196-107.979 1.094-8.97a4.142 4.142 0 014.078-3.635l38.654-.257a4.135 4.135 0 004.108-4.249l-.015-.409a4.14 4.14 0 014.135-4.279h40.619a4.134 4.134 0 014.098 4.682 4.137 4.137 0 003.995 4.682l39.01.996a4.13 4.13 0 013.97 4.831l-19.502 113.909-.368 2.152a4.042 4.042 0 01-.598 1.543l-135.557.114z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    fillRule: "nonzero",
                    d: "M251.256817 123.296578L274.098317 123.296578 274.098317 200.823078 251.256817 200.823078z",
                    transform: "rotate(34.64 262.678 162.06)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFC107",
                    fillRule: "nonzero",
                    d: "M270.624591 129.857671L286.750291 129.857671 286.750291 145.983371 270.624591 145.983371z",
                    transform: "rotate(34.804 278.687 137.92)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFC107",
                    fillRule: "nonzero",
                    d: "M260.275579 145.813111L276.423079 145.813111 276.423079 161.960611 260.275579 161.960611z",
                    opacity: "0.5",
                    transform: "rotate(34.64 268.35 153.887)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFC107",
                    fillRule: "nonzero",
                    d: "M249.191579 161.852111L265.339079 161.852111 265.339079 177.999611 249.191579 177.999611z",
                    opacity: "0.3",
                    transform: "rotate(34.64 257.265 169.926)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    fillRule: "nonzero",
                    d: "M237.472537 121.334214L260.314037 121.334214 260.314037 198.567714 237.472537 198.567714z",
                    transform: "rotate(16.29 248.893 159.951)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M249.053192 123.761554L265.200692 123.761554 265.200692 139.909054 249.053192 139.909054z",
                    transform: "rotate(16.29 257.127 131.835)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M243.584192 142.473554L259.731692 142.473554 259.731692 158.621053 243.584192 158.621053z",
                    opacity: "0.5",
                    transform: "rotate(16.29 251.658 150.547)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M238.116192 161.182554L254.263692 161.182554 254.263692 177.330054 238.116192 177.330054z",
                    opacity: "0.3",
                    transform: "rotate(16.29 246.19 169.256)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    fillRule: "nonzero",
                    d: "M230.099192 121.641542L252.940692 121.641542 252.940692 198.875042 230.099192 198.875042z",
                    transform: "rotate(4.6 241.52 160.258)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#1890FF",
                    fillRule: "nonzero",
                    d: "M235.800489 122.985499L251.947989 122.985499 251.947989 139.132999 235.800489 139.132999z",
                    transform: "rotate(4.6 243.874 131.06)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#1890FF",
                    fillRule: "nonzero",
                    d: "M234.234488 142.413498L250.381988 142.413498 250.381988 158.560998 234.234488 158.560998z",
                    opacity: "0.5",
                    transform: "rotate(4.6 242.308 150.487)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#1890FF",
                    fillRule: "nonzero",
                    d: "M232.672488 161.846499L248.819988 161.846499 248.819988 177.993999 232.672488 177.993999z",
                    opacity: "0.3",
                    transform: "rotate(4.6 240.746 169.92)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    fillRule: "nonzero",
                    d: "M224.736657 123.384871L247.578157 123.384871 247.578157 200.618371 224.736657 200.618371z",
                    transform: "rotate(-2.61 236.157 162.002)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M226.751283 124.659968L242.898783 124.659968 242.898783 140.807468 226.751283 140.807468z",
                    transform: "rotate(-2.61 234.825 132.734)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M228.305601 143.479224L244.473301 143.479224 244.473301 159.646924 228.305601 159.646924z",
                    opacity: "0.5",
                    transform: "rotate(-2.862 236.39 151.563)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M228.525282 163.608968L244.672782 163.608968 244.672782 179.756468 228.525282 179.756468z",
                    opacity: "0.3",
                    transform: "rotate(-2.61 236.599 171.683)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#F4F6F8",
                    fillRule: "nonzero",
                    d: "M232.679 225.726l-20.294 7.851-29.661 11.466c-1.121-2.093-2.771-4.921-4.813-8.297-7.026-11.642-18.65-29.75-29.001-45.665-11.66-17.938-21.696-33.075-21.696-33.075l7.265-2.093 59.346-17.23 38.854 87.043z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#000",
                    fillRule: "nonzero",
                    d: "M232.679 225.726l-20.294 7.851a152.535 152.535 0 01-34.484 3.169c-7.026-11.642-18.65-29.75-29-45.665l-14.42-35.18 59.343-17.218 38.855 87.043z",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M247.777 220.841s-31.526 18.65-78.596 14.432l-37.525-91.486 17.984-3.091 62.168-10.677 35.279 89.043.69 1.779z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 191,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF4842",
                    fillRule: "nonzero",
                    d: "M247.075 219.074c-7.424.365-16.013.329-24.654-.702-9.351-1.101-18.757-3.367-26.82-7.523-6.742-3.471-12.506-7.247-17.532-11.776-13.074-11.759-21.164-28.579-28.429-58.365l62.168-10.677 35.267 89.043z",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 197,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    fillRule: "nonzero",
                    d: "M270.203 213.959s-23.239 4.55-46.894 1.749c-9.351-1.1-18.757-3.367-26.82-7.522-6.742-3.471-12.503-7.247-17.532-11.777-16.181-14.557-24.725-36.866-33.536-81.918 0 0 38.633 9.325 76.836-11.101-.012.015 12.865 80.373 47.946 110.569z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M165.405 131.03s31.416-1.776 40.187-8.548l1.331 4.276s-20.758 9.157-41.518 9.268v-4.996zM165.405 152.137s30.417-1.665 53.399-12.766l.777 1.776s-18.237 10.647-54.176 13.433v-2.443zM167.853 160.362s30.418-1.665 53.397-12.766l.777 1.776s-18.237 10.643-54.174 13.433v-2.443zM170.299 168.599s30.417-1.666 53.399-12.766l.774 1.775s-18.237 10.647-54.173 13.433v-2.442zM172.748 176.835s30.417-1.665 53.396-12.766l.777 1.776s-18.237 10.647-54.173 13.433v-2.443zM175.193 185.075s30.417-1.665 53.399-12.766l.774 1.776s-18.237 10.643-54.173 13.433v-2.443z",
                    opacity: "0.3"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 210,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M389.069 287.344s-12.641-.762-11.152 8.097c0 0-.299 1.563 1.124 2.275 0 0 .021-.658 1.295-.434.454.077.916.099 1.375.066a2.832 2.832 0 001.677-.694c.468-.409 3.555-1.468 4.936-7.274 0 0 1.023-1.267.981-1.593l-2.132.897s.73 1.54.156 2.816c0 0-.069-2.759-.479-2.691-.083 0-1.109.533-1.109.533s1.253 2.69.299 4.628c0 0 .359-3.304-.699-4.434l-1.495.876s1.465 2.768.472 5.029c0 0 .254-3.465-.789-4.817l-1.361 1.062s1.379 2.729.539 4.604c0 0-.111-4.036-.835-4.341 0 0-1.195 1.049-1.369 1.494 0 0 .942 1.98.356 3.026 0 0-.359-2.691-.652-2.691 0 0-1.196 1.794-1.309 2.99 0 0 .051-1.818 1.022-3.172a3.593 3.593 0 00-1.818.942s.186-1.262 2.111-1.37c0 0 .981-1.351 1.241-1.435 0 0-1.914-.158-3.074.356 0 0 1.023-1.196 3.427-.649l1.342-1.094s-2.52-.347-3.588.036c0 0 1.229-1.052 3.95-.299l1.462-.873s-2.147-.463-3.426-.299c0 0 1.348-.729 3.856.06l1.044-.47s-1.573-.299-2.033-.358c-.461-.06-.488-.174-.488-.174a5.426 5.426 0 012.957.329s2.222-.813 2.186-.954z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "380.363",
                    cy: "298.487",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "8.945",
                    ry: "1.513"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M394.956 258.102s-7.125-.43-6.279 4.565a1.218 1.218 0 00.631 1.283s.015-.371.733-.245c.255.042.515.054.774.036.349-.023.681-.159.945-.389.264-.23 2.003-.828 2.783-4.102 0 0 .577-.714.553-.897l-1.196.511s.41.87.087 1.591c0 0-.039-1.558-.269-1.522-.048 0-.625.299-.625.299s.706 1.495.173 2.61c0 0 .204-1.862-.394-2.502l-.846.496s.825 1.561.266 2.834c0 0 .143-1.955-.446-2.714l-.765.598s.774 1.539.299 2.595c0 0-.063-2.275-.469-2.446a4.75 4.75 0 00-.775.834s.532 1.118.204 1.707c0 0-.204-1.515-.368-1.521 0 0-.67 1.001-.739 1.689a3.671 3.671 0 01.577-1.794 2.007 2.007 0 00-1.025.532s.104-.711 1.196-.771c0 0 .553-.763.699-.81 0 0-1.079-.09-1.734.2 0 0 .577-.67 1.932-.365l.759-.619s-1.423-.194-2.024.021c0 0 .694-.598 2.227-.161l.826-.494a7.445 7.445 0 00-1.935-.164s.763-.413 2.174.033l.598-.263s-.897-.177-1.148-.203c-.252-.027-.275-.099-.275-.099a3.078 3.078 0 011.668.185s1.232-.46 1.208-.538z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "390.052",
                    cy: "264.383",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "5.044",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M352.896 262.437s-8.604-.52-7.588 5.51a1.47 1.47 0 00.763 1.549s0-.449.897-.299c.309.052.623.067.935.045a1.923 1.923 0 001.142-.473c.318-.279 2.419-.998 3.361-4.951 0 0 .697-.861.667-1.085l-1.468.622s.496 1.046.104 1.916c0 0-.048-1.877-.326-1.835-.056 0-.753.364-.753.364s.852 1.824.209 3.152c0 0 .245-2.249-.475-3.02l-1.023.598s.996 1.886.32 3.423c0 0 .174-2.359-.535-3.289l-.927.724s.939 1.857.365 3.133c0 0-.072-2.747-.565-2.954 0 0-.81.715-.933 1.008 0 0 .64 1.348.242 2.06 0 0-.245-1.83-.445-1.839 0 0-.804 1.214-.897 2.042.04-.768.28-1.512.697-2.159a2.427 2.427 0 00-1.235.643s.125-.858 1.435-.933c0 0 .667-.92.846-.974 0 0-1.303-.111-2.093.239 0 0 .694-.807 2.329-.44l.915-.747s-1.713-.233-2.442.024c0 0 .837-.715 2.69-.191l.996-.598s-1.462-.314-2.335-.201c0 0 .921-.496 2.625.042l.711-.32s-1.07-.209-1.384-.242c-.314-.033-.329-.119-.329-.119a3.69 3.69 0 012.012.221s1.519-.553 1.492-.646z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 233,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "346.97",
                    cy: "270.022",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "6.09",
                    ry: "1.028"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "51.026",
                    height: "91.312",
                    x: "303.926",
                    y: "69.211",
                    fill: "#FFF",
                    fillRule: "nonzero",
                    rx: "4.737",
                    transform: "rotate(-71.99 329.44 114.867)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "303.613",
                    cy: "103.507",
                    r: "9.376",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 252,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M344.582495 86.4883769L347.150665 86.4883769 347.150665 127.336977 344.582495 127.336977z",
                    opacity: "0.2",
                    transform: "rotate(-71.99 345.867 106.913)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M333.028401 99.6373982L335.596571 99.6373982 335.596571 120.445898 333.028401 120.445898z",
                    opacity: "0.2",
                    transform: "rotate(-71.99 334.312 110.042)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 262,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M337.109071 101.431004L339.677241 101.431004 339.677241 135.086304 337.109071 135.086304z",
                    opacity: "0.2",
                    transform: "rotate(-71.99 338.393 118.259)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 270,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M338.505494 105.174377L341.073664 105.174377 341.073664 146.022978 338.505494 146.022978z",
                    opacity: "0.2",
                    transform: "rotate(-71.99 339.79 125.599)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 278,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M348.060839 134.648161L353.026769 134.648161 353.026769 145.952261 348.060839 145.952261z",
                    opacity: "0.5",
                    transform: "rotate(-71.99 350.544 140.3)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 286,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "50.3",
                    height: "78.305",
                    x: "291.549",
                    y: "174.486",
                    fill: "#FFF",
                    fillRule: "nonzero",
                    rx: "4",
                    transform: "rotate(-57.265 316.7 213.638)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 294,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M278.038439 203.88874L292.269539 203.88874 292.269539 207.23723 278.038439 207.23723z",
                    transform: "rotate(-57.57 285.154 205.563)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 305,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M283.007935 199.201889L314.262535 199.201889 314.262535 202.272339 283.007935 202.272339z",
                    transform: "rotate(-57.57 298.635 200.737)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 312,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M288.543935 202.715889L319.798535 202.715889 319.798535 205.786339 288.543935 205.786339z",
                    transform: "rotate(-57.57 304.171 204.251)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 319,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M294.078936 206.235889L325.333536 206.235889 325.333536 209.306339 294.078936 209.306339z",
                    transform: "rotate(-57.57 309.706 207.771)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 326,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M299.879919 211.40702L331.090719 211.40702 331.090719 214.47316 299.879919 214.47316z",
                    transform: "rotate(-57.265 315.485 212.94)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#F4F6F8",
                    fillRule: "nonzero",
                    d: "M305.149936 213.268889L336.404536 213.268889 336.404536 216.339339 305.149936 216.339339z",
                    transform: "rotate(-57.57 320.777 214.804)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 340,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#F4F6F8",
                    fillRule: "nonzero",
                    d: "M310.685935 216.782889L341.940535 216.782889 341.940535 219.853339 310.685935 219.853339z",
                    transform: "rotate(-57.57 326.313 218.318)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 347,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#DFE3E8",
                    fillRule: "nonzero",
                    d: "M341.417983 210.406958L349.511163 210.406958 349.511163 218.500138 341.417983 218.500138z",
                    transform: "rotate(-57.57 345.465 214.454)"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 361,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_DARK,
                    fillRule: "nonzero",
                    d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z",
                    opacity: "0.243"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "url(#linearGradient-2)",
                    fillRule: "nonzero",
                    d: "M269.277 168.76l-45.767.493a3.127 3.127 0 00-3.094 3.125v3.782a3.127 3.127 0 01-3.05 3.124l-33.024.792a3.124 3.124 0 01-3.095-2.308l-1.551-5.701a3.124 3.124 0 00-3.053-2.308l-44.113.475a3.125 3.125 0 00-3.05 3.648l17.747 104.449a3.129 3.129 0 003.071 2.604l139.363.598a3.129 3.129 0 003.082-3.714l-20.366-106.521a3.125 3.125 0 00-3.1-2.538z",
                    opacity: "0.32"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 374,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "119.593",
                    cy: "258.664",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "4.846",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 381,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "101.03",
                    cy: "260.545",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "4.846",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "108.459",
                    cy: "265.905",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "3.444",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "89.193",
                    cy: "265.433",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1",
                    rx: "3.444",
                    ry: "1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M100.925 260.398s6.796-22.279-1.064-31.204c-5.881-6.676-12.557-5.877-15.547-5.052a5.528 5.528 0 00-3.564 2.963c-1.046 2.254-.858 5.913 6.521 10.186 12.35 7.151 13.119 16.96 13.119 16.96l.535 6.147z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 389,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M85.382 227.302s20.031 6.278 15.546 33.096M97.083 229.547s-2.76 1.86-1.88 4.655M87.39 231.203s1.687-1.716 3.741-.768M95.31 239.832s2.963-1.495 3.728.379M102.638 242.962s-2.224-.176-2.263.897"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M101.2 260.575s-7.961-16.193-10.147-15.846c-1.037.17-1.516 1.196-1.734 2.218a6.516 6.516 0 00.434 3.941c1.13 2.601 4.165 7.519 11.447 9.687z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 402,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M91.113 247.808s8.353 12.115 9.968 12.647"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 408,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M90.344 249.701L92.293 249.701"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 415,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M92.68 254.132L95.738 254.263"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 417,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M94.542 250.586L94.21 252.179"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M97.792 255.432L97.732 256.879"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 421,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M100.964 260.575s7.959-16.193 10.144-15.846c1.041.17 1.519 1.196 1.734 2.218a6.514 6.514 0 01-.433 3.941c-1.13 2.601-4.168 7.519-11.445 9.687z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 423,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M111.051 247.808s-8.371 12.115-9.97 12.647"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 429,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M111.82 249.701L109.871 249.701"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 436,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M109.485 254.132L106.426 254.263"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 438,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M107.622 250.586L107.954 252.179"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 440,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: PRIMARY_DARKER,
                    strokeLinecap: "round",
                    strokeWidth: "0.5",
                    d: "M104.372 255.432L104.432 256.879"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M87.295 264.357a1.375 1.375 0 01-.452-.685.599.599 0 01.317-.697c.3-.11.598.09.837.299.24.21.512.431.81.38a1.237 1.237 0 01-.382-1.16.47.47 0 01.105-.236c.161-.174.454-.099.648.039.598.43.787 1.264.79 2.018.03-.277.03-.555 0-.831a.853.853 0 01.334-.727.938.938 0 01.476-.114.988.988 0 01.774.222.767.767 0 01-.03.947c-.229.257-.5.474-.801.64a1.805 1.805 0 00-.571.547.399.399 0 00-.042.096h-1.74a4.826 4.826 0 01-1.073-.738zM117.626 257.833a1.355 1.355 0 01-.452-.682.599.599 0 01.314-.696c.299-.111.598.089.837.299.239.209.509.436.817.391a1.236 1.236 0 01-.386-1.157.472.472 0 01.107-.236c.162-.173.455-.099.649.036.613.433.787 1.268.79 2.021a4.008 4.008 0 000-.834.852.852 0 01.299-.736.955.955 0 01.475-.11.998.998 0 01.774.218.768.768 0 01-.033.951 2.996 2.996 0 01-.798.64 1.767 1.767 0 00-.571.544.499.499 0 00-.042.098h-1.701a4.78 4.78 0 01-1.079-.747zM107.518 264.357a1.406 1.406 0 01-.455-.685.6.6 0 01.317-.697c.299-.11.598.09.837.299.239.21.505.437.816.395a1.247 1.247 0 01-.385-1.16.472.472 0 01.107-.236c.162-.174.455-.099.649.039.613.43.783 1.264.789 2.018.03-.277.03-.555 0-.832a.855.855 0 01.314-.735.93.93 0 01.476-.114.988.988 0 01.774.222.764.764 0 01-.033.947 3.028 3.028 0 01-.798.64 1.798 1.798 0 00-.571.547.411.411 0 00-.042.096h-1.734c-.385-.2-.742-.45-1.061-.744z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 444,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "84.467",
                    cy: "87.003",
                    r: "6.467",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "395.425",
                    cy: "138.681",
                    r: "6.467",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 452,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "279.178",
                    cy: "66.467",
                    r: "6.467",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "97.4",
                    cy: "122.68",
                    r: "10.838",
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    opacity: "0.1"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_DARK,
                    fillRule: "nonzero",
                    d: "M206.029 209.911c-7.975 0-14.44 6.465-14.44 14.44s6.465 14.44 14.44 14.44 14.44-6.465 14.44-14.44-6.465-14.44-14.44-14.44z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 458,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_MAIN,
                    fillRule: "nonzero",
                    d: "M206.029 211.59c7.047 0 12.761 5.714 12.761 12.761 0 7.048-5.714 12.761-12.761 12.761-7.048 0-12.761-5.713-12.761-12.761.006-7.045 5.716-12.754 12.761-12.761",
                    opacity: "0.72"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 464,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: PRIMARY_DARK,
                    fillRule: "nonzero",
                    d: "M200.058 225.406l-.699-.681a.721.721 0 010-1.065l6.127-5.984a.753.753 0 01.546-.231c.206 0 .404.083.545.231l6.127 5.978a.733.733 0 010 1.065l-.699.682a.768.768 0 01-1.091 0l-3.622-3.727v8.843a.725.725 0 01-.219.523.76.76 0 01-.534.217h-1.009a.75.75 0 01-.759-.74v-8.832l-3.622 3.726a.768.768 0 01-1.091-.005z"
                }, void 0, false, {
                    fileName: "[project]/src/assets/illustration_upload.js",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/assets/illustration_upload.js",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/assets/illustration_upload.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(UploadIllustration, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"]
    ];
});
_c = UploadIllustration;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(UploadIllustration);
var _c, _c1;
__turbopack_refresh__.register(_c, "UploadIllustration");
__turbopack_refresh__.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/upload/UploadSingleFile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UploadSingleFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/isString.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-dropzone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'src/utils/formatNumber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$illustration_upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/assets/illustration_upload.js [app-client] (ecmascript)");
// material
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
// ----------------------------------------------------------------------
const DropZoneStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])("div")(({ theme })=>({
        outline: "none",
        display: "flex",
        overflow: "hidden",
        textAlign: "center",
        position: "relative",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(5, 0),
        borderRadius: theme.shape.borderRadius,
        transition: theme.transitions.create("padding"),
        backgroundColor: theme.palette.background.neutral,
        border: `1px dashed ${theme.palette.grey[500_32]}`,
        "&:hover": {
            opacity: 0.72,
            cursor: "pointer"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
            flexDirection: "row"
        }
    }));
_c = DropZoneStyle;
// ----------------------------------------------------------------------
UploadSingleFile.propTypes = {
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
};
function UploadSingleFile({ error, file, title, sx, ...other }) {
    _s();
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        multiple: false,
        ...other
    });
    const ShowRejectionItems = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
            variant: "outlined",
            sx: {
                py: 1,
                px: 2,
                mt: 3,
                borderColor: "error.light",
                bgcolor: (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.error.main, 0.08)
            },
            children: fileRejections.map(({ file, errors })=>{
                const { path, size } = file;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        my: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            noWrap: true,
                            children: [
                                path,
                                " - ",
                                fData(size)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadSingleFile.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        errors.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                component: "p",
                                children: [
                                    "- ",
                                    e.message
                                ]
                            }, e.code, true, {
                                fileName: "[project]/src/components/upload/UploadSingleFile.js",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this))
                    ]
                }, path, true, {
                    fileName: "[project]/src/components/upload/UploadSingleFile.js",
                    lineNumber: 69,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/upload/UploadSingleFile.js",
            lineNumber: 56,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: "100%",
            ...sx
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZoneStyle, {
                ...getRootProps(),
                sx: {
                    ...isDragActive && {
                        opacity: 0.72
                    },
                    ...(isDragReject || error) && {
                        color: "error.main",
                        borderColor: "error.light",
                        bgcolor: "error.lighter"
                    },
                    ...file && {
                        padding: "12% 0"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ...getInputProps()
                    }, void 0, false, {
                        fileName: "[project]/src/components/upload/UploadSingleFile.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$illustration_upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadIllustration"], {
                        sx: {
                            width: 220
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/upload/UploadSingleFile.js",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            p: 3,
                            ml: {
                                md: 2
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                gutterBottom: true,
                                variant: "h5",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/upload/UploadSingleFile.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                sx: {
                                    color: "text.secondary"
                                },
                                children: [
                                    "Drop files here or click ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                        variant: "body2",
                                        component: "span",
                                        sx: {
                                            color: "primary.main",
                                            textDecoration: "underline"
                                        },
                                        children: "browse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/upload/UploadSingleFile.js",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    " thorough your machine"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/upload/UploadSingleFile.js",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/upload/UploadSingleFile.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "img",
                        alt: "file preview",
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file) ? file : file.preview,
                        sx: {
                            top: 8,
                            borderRadius: 1,
                            objectFit: "cover",
                            position: "absolute",
                            width: "calc(100% - 16px)",
                            height: "calc(100% - 16px)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/upload/UploadSingleFile.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/upload/UploadSingleFile.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            fileRejections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShowRejectionItems, {}, void 0, false, {
                fileName: "[project]/src/components/upload/UploadSingleFile.js",
                lineNumber: 137,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/upload/UploadSingleFile.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(UploadSingleFile, "ihZS2qj41cuG6u4mwvXxh87sdt4=", false, function() {
    return [
        useDropzone
    ];
});
_c1 = UploadSingleFile;
var _c, _c1;
__turbopack_refresh__.register(_c, "DropZoneStyle");
__turbopack_refresh__.register(_c1, "UploadSingleFile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/upload/UploadAvatar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UploadAvatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/isString.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@iconify/react/dist/iconify.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-dropzone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'src/utils/formatNumber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// material
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prop-types/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
// ----------------------------------------------------------------------
const RootStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])("div")(({ theme })=>({
        width: 144,
        height: 144,
        margin: "auto",
        borderRadius: "50%",
        padding: theme.spacing(1),
        border: `1px dashed ${theme.palette.grey[500_32]}`
    }));
_c = RootStyle;
const DropZoneStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])("div")({
    zIndex: 0,
    width: "100%",
    height: "100%",
    outline: "none",
    display: "flex",
    overflow: "hidden",
    borderRadius: "50%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
        width: "100%",
        height: "100%"
    },
    "&:hover": {
        cursor: "pointer",
        "& .placeholder": {
            zIndex: 9
        }
    }
});
_c1 = DropZoneStyle;
const PlaceholderStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])("div")(({ theme })=>({
        display: "flex",
        position: "absolute",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.neutral,
        transition: theme.transitions.create("opacity", {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter
        }),
        "&:hover": {
            opacity: 0.72
        }
    }));
_c2 = PlaceholderStyle;
// ----------------------------------------------------------------------
UploadAvatar.propTypes = {
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bool,
    file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].oneOfType([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].string,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
    ]),
    caption: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].node,
    sx: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].object
};
function UploadAvatar({ error, file, caption, sx, ...other }) {
    _s();
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        multiple: false,
        ...other
    });
    const ShowRejectionItems = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
            variant: "outlined",
            sx: {
                py: 1,
                px: 2,
                my: 2,
                borderColor: "error.light",
                bgcolor: (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.error.main, 0.08)
            },
            children: fileRejections.map(({ file, errors })=>{
                const { path, size } = file;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        my: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "subtitle2",
                            noWrap: true,
                            children: [
                                path,
                                " - ",
                                fData(size)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadAvatar.js",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        errors.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                component: "p",
                                children: [
                                    "- ",
                                    e.message
                                ]
                            }, e.code, true, {
                                fileName: "[project]/src/components/upload/UploadAvatar.js",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this))
                    ]
                }, path, true, {
                    fileName: "[project]/src/components/upload/UploadAvatar.js",
                    lineNumber: 92,
                    columnNumber: 11
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/upload/UploadAvatar.js",
            lineNumber: 79,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RootStyle, {
                sx: sx,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZoneStyle, {
                    ...getRootProps(),
                    sx: {
                        ...isDragActive && {
                            opacity: 0.72
                        },
                        ...(isDragReject || error) && {
                            color: "error.main",
                            borderColor: "error.light",
                            bgcolor: "error.lighter"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ...getInputProps()
                        }, void 0, false, {
                            fileName: "[project]/src/components/upload/UploadAvatar.js",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "img",
                            alt: "avatar",
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$isString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file) ? file : file.preview,
                            sx: {
                                zIndex: 8,
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/upload/UploadAvatar.js",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceholderStyle, {
                            className: "placeholder",
                            sx: {
                                ...file && {
                                    opacity: 0,
                                    color: "common.white",
                                    bgcolor: "grey.900",
                                    "&:hover": {
                                        opacity: 0.72
                                    }
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"],
                                    icon: "material-symbols:add-a-photo",
                                    sx: {
                                        width: 24,
                                        height: 24,
                                        mb: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadAvatar.js",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    children: file ? "Update photo" : "Upload photo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/upload/UploadAvatar.js",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/upload/UploadAvatar.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/upload/UploadAvatar.js",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/upload/UploadAvatar.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            caption,
            fileRejections.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShowRejectionItems, {}, void 0, false, {
                fileName: "[project]/src/components/upload/UploadAvatar.js",
                lineNumber: 157,
                columnNumber: 37
            }, this)
        ]
    }, void 0, true);
}
_s(UploadAvatar, "ihZS2qj41cuG6u4mwvXxh87sdt4=", false, function() {
    return [
        useDropzone
    ];
});
_c3 = UploadAvatar;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "RootStyle");
__turbopack_refresh__.register(_c1, "DropZoneStyle");
__turbopack_refresh__.register(_c2, "PlaceholderStyle");
__turbopack_refresh__.register(_c3, "UploadAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/upload/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/upload/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadSingleFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/upload/UploadSingleFile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadAvatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/upload/UploadAvatar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/components/upload/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/src/components/upload/UploadSingleFile.js [app-client] (ecmascript) <export default as UploadSingleFile>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UploadSingleFile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadSingleFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadSingleFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/upload/UploadSingleFile.js [app-client] (ecmascript)");
}}),
"[project]/src/components/JobApplicationPopUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// yup
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
// __apis__
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/__apis__/careers.js [app-client] (ecmascript)");
// stores
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/useAlertStore.js [app-client] (ecmascript)");
// components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Iconify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/components/upload/index.js [app-client] (ecmascript) <module evaluation>");
// formik
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/formik/dist/formik.esm.js [app-client] (ecmascript)");
// mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Grid/Grid.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadSingleFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadSingleFile$3e$__ = __turbopack_import__("[project]/src/components/upload/UploadSingleFile.js [app-client] (ecmascript) <export default as UploadSingleFile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/x-date-pickers/esm/LocalizationProvider/LocalizationProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDateFns$2f$AdapterDateFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/x-date-pickers/esm/AdapterDateFns/AdapterDateFns.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/x-date-pickers/esm/DatePicker/DatePicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
function JobApplicationPopUp({ isTriggered, closeHandler, jobId }) {
    _s();
    const { triggerAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [personalImage, setPersonalImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cv, setCv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const formik = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"])({
        initialValues: {
            vacancyId: "",
            name: "",
            nationality: "",
            dateOfBirth: null,
            placeOfBirth: "",
            militaryServiceStatus: "",
            maritalStatus: "",
            governmentId: "",
            address: "",
            mobileNumber: "",
            homeTelephone: "",
            email: "",
            secondarySchool: "",
            university: "",
            graduationGrade: "",
            graduationYear: "",
            graduationProject: "",
            image: null,
            cv: null
        },
        validationSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.object().shape({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Name is required"),
            nationality: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Nationality is required"),
            dateOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Date of birth is required"),
            placeOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Place of birth is required"),
            militaryServiceStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Military service status is required"),
            maritalStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Marital status is required"),
            governmentId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Government ID is required"),
            address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Address is required"),
            mobileNumber: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Mobile number is required"),
            homeTelephone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Home telephone is required"),
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().email("Invalid email").required("Email is required"),
            secondarySchool: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Secondary school is required"),
            university: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("University is required"),
            graduationGrade: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Graduation grade is required"),
            graduationYear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Graduation year is required"),
            graduationProject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.string().required("Graduation project title is required"),
            image: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.mixed().required("Image is required"),
            cv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.mixed().required("CV is required")
        }),
        onSubmit: {
            "JobApplicationPopUp.useFormik[formik]": async (values, { resetForm })=>{
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applicationSubmissionRequest"])(values).then({
                    "JobApplicationPopUp.useFormik[formik]": (response)=>{
                        triggerAlert({
                            triggered: true,
                            type: "success",
                            message: "Application submitted successfully"
                        });
                    //   resetForm();
                    //   closeHandler();
                    }
                }["JobApplicationPopUp.useFormik[formik]"]).catch({
                    "JobApplicationPopUp.useFormik[formik]": (error)=>{
                        console.log("Error while trying to submit", error.response);
                        triggerAlert({
                            triggered: true,
                            type: "error",
                            message: "Something wrong happened, try again later"
                        });
                    }
                }["JobApplicationPopUp.useFormik[formik]"]);
            }
        }["JobApplicationPopUp.useFormik[formik]"]
    });
    const { errors, dirty, touched, handleSubmit, isSubmitting, getFieldProps, values, setFieldValue } = formik;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobApplicationPopUp.useEffect": ()=>{
            if (jobId) {
                setFieldValue("vacancyId", jobId);
            }
        }
    }["JobApplicationPopUp.useEffect"], [
        jobId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: isTriggered,
        onClose: closeHandler,
        maxWidth: "md",
        fullWidth: true,
        sx: {
            "& .MuiPaper-root": {
                borderRadius: 7
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "h3",
                                children: "Job Application"
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$upload$2f$UploadSingleFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadSingleFile$3e$__["UploadSingleFile"], {}, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Name",
                                name: "name",
                                ...getFieldProps("name"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.name && errors.name),
                                helperText: touched.name && errors.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Nationality",
                                name: "nationality",
                                ...getFieldProps("nationality"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.nationality && errors.nationality),
                                helperText: touched.nationality && errors.nationality
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$LocalizationProvider$2f$LocalizationProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalizationProvider"], {
                                dateAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$AdapterDateFns$2f$AdapterDateFns$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdapterDateFns"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$date$2d$pickers$2f$esm$2f$DatePicker$2f$DatePicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatePicker"], {
                                    label: "Date of Birth",
                                    value: formik.values.dateOfBirth || null,
                                    onChange: (newValue)=>{
                                        formik.setFieldValue("dateOfBirth", newValue);
                                    },
                                    slotProps: {
                                        textField: {
                                            name: "dateOfBirth",
                                            fullWidth: true,
                                            error: Boolean(formik.touched.dateOfBirth && formik.errors.dateOfBirth),
                                            helperText: formik.touched.dateOfBirth && formik.errors.dateOfBirth,
                                            InputProps: {
                                                sx: {
                                                    borderRadius: 5
                                                }
                                            }
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/JobApplicationPopUp.js",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Place of Birth",
                                name: "placeOfBirth",
                                ...getFieldProps("placeOfBirth"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.placeOfBirth && errors.placeOfBirth),
                                helperText: touched.placeOfBirth && errors.placeOfBirth
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                select: true,
                                fullWidth: true,
                                label: "Military Service Status",
                                name: "militaryServiceStatus",
                                ...getFieldProps("militaryServiceStatus"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.militaryServiceStatus && errors.militaryServiceStatus),
                                helperText: touched.militaryServiceStatus && errors.militaryServiceStatus,
                                children: [
                                    "completed",
                                    "exempted",
                                    "postponed",
                                    "not_applicable"
                                ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: status,
                                        children: status.replace("_", " ").replace(/^\w/, (c)=>c.toUpperCase())
                                    }, status, false, {
                                        fileName: "[project]/src/components/JobApplicationPopUp.js",
                                        lineNumber: 222,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                select: true,
                                fullWidth: true,
                                label: "Marital Status",
                                name: "maritalStatus",
                                ...getFieldProps("maritalStatus"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.maritalStatus && errors.maritalStatus),
                                helperText: touched.maritalStatus && errors.maritalStatus,
                                children: [
                                    "single",
                                    "married",
                                    "divorced",
                                    "widowed"
                                ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                        value: status,
                                        children: status[0].toUpperCase() + status.slice(1)
                                    }, status, false, {
                                        fileName: "[project]/src/components/JobApplicationPopUp.js",
                                        lineNumber: 245,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Government ID",
                                name: "governmentId",
                                ...getFieldProps("governmentId"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.governmentId && errors.governmentId),
                                helperText: touched.governmentId && errors.governmentId
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                multiline: true,
                                minRows: 3,
                                label: "Address",
                                name: "address",
                                ...getFieldProps("address"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.address && errors.address),
                                helperText: touched.address && errors.address
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Mobile Number",
                                name: "mobileNumber",
                                ...getFieldProps("mobileNumber"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.mobileNumber && errors.mobileNumber),
                                helperText: touched.mobileNumber && errors.mobileNumber
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Home Telephone",
                                name: "homeTelephone",
                                ...getFieldProps("homeTelephone"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.homeTelephone && errors.homeTelephone),
                                helperText: touched.homeTelephone && errors.homeTelephone
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Email",
                                name: "email",
                                ...getFieldProps("email"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.email && errors.email),
                                helperText: touched.email && errors.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Secondary School",
                                name: "secondarySchool",
                                ...getFieldProps("secondarySchool"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.secondarySchool && errors.secondarySchool),
                                helperText: touched.secondarySchool && errors.secondarySchool
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "University",
                                name: "university",
                                ...getFieldProps("university"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.university && errors.university),
                                helperText: touched.university && errors.university
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Graduation Grade",
                                name: "graduationGrade",
                                ...getFieldProps("graduationGrade"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.graduationGrade && errors.graduationGrade),
                                helperText: touched.graduationGrade && errors.graduationGrade
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 344,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Graduation Year",
                                name: "graduationYear",
                                ...getFieldProps("graduationYear"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.graduationYear && errors.graduationYear),
                                helperText: touched.graduationYear && errors.graduationYear
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 12,
                                md: 6
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                label: "Graduation Project Title",
                                name: "graduationProject",
                                ...getFieldProps("graduationProject"),
                                InputProps: {
                                    sx: {
                                        borderRadius: 5
                                    }
                                },
                                error: Boolean(touched.graduationProject && errors.graduationProject),
                                helperText: touched.graduationProject && errors.graduationProject
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplicationPopUp.js",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/JobApplicationPopUp.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/JobApplicationPopUp.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "outlined",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplicationPopUp.js",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        disabled: !dirty,
                        loading: isSubmitting,
                        onClick: handleSubmit,
                        endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Iconify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            icon: "picon:send"
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplicationPopUp.js",
                            lineNumber: 392,
                            columnNumber: 20
                        }, void 0),
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplicationPopUp.js",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplicationPopUp.js",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/JobApplicationPopUp.js",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(JobApplicationPopUp, "WcttwZErxsWPkvpVLAFq3CpALSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$formik$2f$dist$2f$formik$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormik"]
    ];
});
_c = JobApplicationPopUp;
const __TURBOPACK__default__export__ = JobApplicationPopUp;
var _c;
__turbopack_refresh__.register(_c, "JobApplicationPopUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/careers/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// react
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// __apis__
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/__apis__/careers.js [app-client] (ecmascript)");
// stores
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/useAlertStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JobApplicationPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/JobApplicationPopUp.js [app-client] (ecmascript)");
// mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function page() {
    _s();
    const { triggerAlert } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [vacancies, setVacancies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [popUp, triggerPopUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [jobId, setJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchVacancies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "page.useCallback[fetchVacancies]": async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$_$5f$apis_$5f2f$careers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vacanciesFetcher"])().then({
                "page.useCallback[fetchVacancies]": (response)=>{
                    setVacancies(response);
                }
            }["page.useCallback[fetchVacancies]"]).catch({
                "page.useCallback[fetchVacancies]": (error)=>{
                    triggerAlert({
                        triggered: true,
                        type: "error",
                        message: "Error loading vacancies"
                    });
                }
            }["page.useCallback[fetchVacancies]"]);
        }
    }["page.useCallback[fetchVacancies]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "page.useEffect": ()=>{
            fetchVacancies();
        }
    }["page.useEffect"], []);
    console.log("vvv", vacancies);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        sx: {
            mt: 25
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h3",
                sx: {
                    mb: 2
                },
                children: "Available Vacancies"
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                gap: 3,
                children: vacancies.map((vacancy, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                        gap: 1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    color: "primary.main",
                                    wordBreak: "break-word"
                                },
                                variant: "h4",
                                children: vacancy.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/careers/page.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    color: "primary.main",
                                    wordBreak: "break-word"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Job description: "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/careers/page.js",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    vacancy.description
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/careers/page.js",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                sx: {
                                    color: "primary.main",
                                    wordBreak: "break-word"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: "bold"
                                        },
                                        children: "Job requirements:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/careers/page.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            marginTop: 4,
                                            paddingLeft: 20
                                        },
                                        children: vacancy.requirements?.split("•").filter((item)=>item.trim() !== "").map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: item.trim()
                                            }, index, false, {
                                                fileName: "[project]/src/app/careers/page.js",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/careers/page.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/careers/page.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                sx: {
                                    mt: 2
                                },
                                onClick: ()=>{
                                    setJobId(vacancy.id);
                                    triggerPopUp(true);
                                },
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/src/app/careers/page.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                sx: {
                                    my: 1,
                                    border: 1,
                                    color: "grey.400",
                                    borderRadius: 100
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/careers/page.js",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/careers/page.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.js",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JobApplicationPopUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isTriggered: popUp,
                closeHandler: ()=>{
                    triggerPopUp(false);
                },
                jobId: jobId
            }, void 0, false, {
                fileName: "[project]/src/app/careers/page.js",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/careers/page.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(page, "CvQjjj84hszOhgACeLbZQShoqWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAlertStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/careers/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_176e81._.js.map