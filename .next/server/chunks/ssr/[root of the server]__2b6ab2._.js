module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/theme/palette.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "darkPalette": (()=>darkPalette),
    "lightPalette": (()=>lightPalette)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
;
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
    500_8: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.08),
    500_12: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.12),
    500_16: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.16),
    500_24: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.24),
    500_32: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.32),
    500_48: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.48),
    500_56: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.56),
    500_80: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])("#919EAB", 0.8)
};
const SUCCESS = {
    lighter: "#E9FCD4",
    light: "#AAF27F",
    main: "#54D62C",
    dark: "#229A16",
    darker: "#08660D"
};
const WARNING = {
    lighter: "#FFF7CD",
    light: "#FFE16A",
    main: "#FFC107",
    dark: "#B78103",
    darker: "#7A4F01"
};
const ERROR = {
    lighter: "#FFE7D9",
    light: "#FFA48D",
    main: "#FF4842",
    dark: "#B72136",
    darker: "#7A0C2E"
};
const lightPalette = {
    mode: "light",
    primary: {
        main: "#FE7FA7",
        light: "#FFAAC5",
        dark: "#C45A7B",
        contrastText: "#FFFFFF"
    },
    secondary: {
        main: "#939598",
        light: "#B4B6B9",
        dark: "#6D6E71",
        contrastText: "#FFFFFF"
    },
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    background: {
        default: "#FFFFFF",
        paper: "#F7F7F7"
    },
    text: {
        primary: "#1F1F1F",
        secondary: "#6D6E71"
    }
};
const darkPalette = {
    mode: "dark",
    primary: {
        main: "#FE7FA7",
        light: "#FFAAC5",
        dark: "#C45A7B",
        contrastText: "#1F1F1F"
    },
    secondary: {
        main: "#939598",
        light: "#B4B6B9",
        dark: "#6D6E71",
        contrastText: "#1F1F1F"
    },
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    background: {
        default: "#121212",
        paper: "#1E1E1E"
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#B4B6B9"
    }
};
;
}}),
"[project]/src/theme/typography.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const typography = {
    fontFamily: "'Somar', Arial, sans-serif",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    "@font-face": [
        {
            fontFamily: "Somar",
            src: `
          url('/fonts/ArbFONTS-Somar-Black.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Bold.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Black.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-ExtraBold.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Light.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Medium.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Regular.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-SemiBold.otf') format('opentype'),
          url('/fonts/ArbFONTS-Somar-Thin.otf') format('opentype'),
                `,
            fontWeight: "normal",
            fontStyle: "normal"
        }
    ],
    h1: {
        fontSize: "2.5rem",
        fontWeight: 800,
        lineHeight: 1.3,
        letterSpacing: "-0.02em"
    },
    h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.35,
        letterSpacing: "-0.015em"
    },
    h3: {
        fontSize: "1.75rem",
        fontWeight: 700,
        lineHeight: 1.4,
        letterSpacing: "-0.01em"
    },
    h4: {
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.45,
        letterSpacing: "-0.005em"
    },
    h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: "0em"
    },
    h6: {
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: 1.55,
        letterSpacing: "0.005em"
    },
    subtitle1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "0.01em"
    },
    subtitle2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.57,
        letterSpacing: "0.01em"
    },
    body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: "0.015em"
    },
    body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.57,
        letterSpacing: "0.02em"
    },
    button: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.75,
        textTransform: "none",
        letterSpacing: "0.01em"
    },
    caption: {
        fontSize: "0.75rem",
        fontWeight: 400,
        lineHeight: 1.66,
        letterSpacing: "0.02em"
    },
    overline: {
        fontSize: "0.625rem",
        fontWeight: 400,
        lineHeight: 2.5,
        textTransform: "uppercase",
        letterSpacing: "0.1em"
    }
};
const __TURBOPACK__default__export__ = typography;
}}),
"[project]/src/theme/button.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const button = (theme)=>({
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "24px",
                    padding: "8px 24px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: theme.transitions.create([
                        "background-color",
                        "box-shadow"
                    ], {
                        duration: theme.transitions.duration.short
                    })
                },
                contained: {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    "&:hover": {
                        backgroundColor: theme.palette.primary.light
                    }
                },
                outlined: {
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                        borderColor: theme.palette.primary.light,
                        backgroundColor: theme.palette.action.hover
                    }
                },
                text: {
                    color: theme.palette.primary.main,
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    });
const __TURBOPACK__default__export__ = button;
}}),
"[project]/src/theme/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
//
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/theme/palette.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/theme/typography.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/theme/button.js [app-ssr] (ecmascript)");
// @Mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <locals> <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript) <export default as CssBaseline>");
"use client";
;
;
;
;
;
;
// ----------------------------------------------------------------------------------------------------
function ThemeProvider({ children }) {
    const palette = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lightPalette"];
    const baseTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        palette,
        typography: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
        ...baseTheme,
        components: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$theme$2f$button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseTheme)
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: theme,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                fileName: "[project]/src/theme/index.js",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/theme/index.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ThemeProvider;
}}),
"[project]/src/components/Logo.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// @mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
// framer-motion
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// ----------------------------------------------------------------------------------------------------------
function Logo({ props }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 215.36 60.65",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
            id: "Layer_2",
            "data-name": "Layer 2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                id: "Layer_1-2",
                "data-name": "Layer 1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M7.23,17.83c-3.08.46-5.43-1.08-6.78-4.27S.7,3.81,4.34,2.15C7.5.72,10.86-.16,14.35.8c4.14,1.14,8.24,2.44,12.36,3.65,1.17.35,2.37.6,3.56.9-.06.18-.07.36-.12.37-3.35.72-3.5.85-3.51,4.29q0,16.67,0,33.32c0,.31,0,.62.08,1.18l9.06,1.06c5.25.62,10.52.92,15.72-.2,3.11-.67,6.25-1.44,8.34-4-1.76-1.54-3.79-2.84-5.15-4.65A27.3,27.3,0,0,1,52,31.2,38.17,38.17,0,0,1,50.06,37c-2.51,5.1-8.88,6.35-13.79,2.77-1.82-1.33-2.11-3.62-2.12-5.82,0-5.33,0-10.66,0-16,0-3.38,0-3.38-3.26-4.06,2.49-.88,5.68.42,7.3-2.8,0,.62.08,1.24.08,1.86,0,6.72,0,13.43,0,20.15a16.13,16.13,0,0,0,.3,3.54c1,4.33,5.46,5.61,8.69,2.45A12.5,12.5,0,0,0,51,30.28c.15-5.14,0-10.29.1-15.43.05-2.49-1.72-2.15-3.23-2.68h7c0,5.56.13,11.2,0,16.83a12.07,12.07,0,0,0,4.37,10.12c1.11.94,2.81,1.26,4.28,1.69a14.19,14.19,0,0,0,9.89-1,6.33,6.33,0,0,0,3.71-5.51c.2-2.35-1.12-3.82-3-4.74a48.14,48.14,0,0,0-5.68-2.29c-4.78-1.64-9-6.16-5.61-11.75,1.91-3.15,5.91-5,10.78-3.51a23.8,23.8,0,0,1,4.56,2.47.79.79,0,0,1,.36.57c0,2.35,0,4.69-.16,7.07-.18-1.25-.3-2.52-.56-3.76a7,7,0,0,0-11.38-4.05c-1.65,1.38-1.71,5.91.1,7,2.13,1.29,4.46,2.24,6.7,3.34,1.35.66,2.74,1.26,4,2a7.51,7.51,0,0,1,3,8.71c-1.41,4.44-5.08,5.9-9,6.51a34.62,34.62,0,0,1-8.74-.17,2.76,2.76,0,0,0-2.77.78c-5.44,5.85-12.29,7.56-20,6.42-3.39-.51-6.72-1.45-10.09-2.15-.9-.19-1.83-.25-3-.4,0,5-3.76,7.55-6.58,10.61-2.27,2.48-5.55,3.23-8.83,3.6A1.53,1.53,0,0,1,10,60C8.68,58,7.39,55.83,6.09,53.69a6.11,6.11,0,0,1,.84-7,5.2,5.2,0,0,1,6.87-.1,5.69,5.69,0,0,1,1,1.47c2.31-1.24,4.55-2.37,6.69-3.66a2.34,2.34,0,0,0,.61-1.74c0-9.29,0-18.57,0-27.86,0-5.45.25-6,4.86-9.51C21.27,4.27,15.91,3.21,10.52,2.37a9.15,9.15,0,0,0-3.87.57C1.83,4.44-.46,9,1.57,13.63,2,14.69,4,15.12,5.2,15.83l2.41,1.38Zm7,34.53a10,10,0,0,0-.12-1.42,3.67,3.67,0,0,0-3.17-3A3.37,3.37,0,0,0,8.15,49.1a3.42,3.42,0,0,0,.61,4.1A33.35,33.35,0,0,1,12,58.1c5.93-.28,11.25-6.46,9.92-11.91-.83.22-1.89.2-2.45.72C17.6,48.62,16,50.53,14.25,52.36Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M147.18,37.78a10.48,10.48,0,0,1-2.62,1.46c-1.57.36-3,.74-3.2,2.59s1.15,2.74,2.68,3.37c4.19,1.72,8.64,1.42,13,1.45a104.84,104.84,0,0,0,12.49-.95A11.89,11.89,0,0,0,173,44.26a2.1,2.1,0,0,0,1-2.87,2.94,2.94,0,0,0-2.2-1.18c-5.06-.32-10.15-.3-15.19-.8-3.72-.36-6.65-2.14-7.41-6.32-.09-.49-1-1-1.59-1.22-4.29-1.46-6.93-4.31-7.63-8.84a9.1,9.1,0,0,1,4.21-8.9c5.12-3.14,10.4-3.21,15.86-1.12l.87.31c.05,0,.12,0-.07,0,.5-2.08.57-4.25,1.52-5.91,2.5-4.39,6.51-6.4,11.58-6.16,2.22.1,3.05,1.12,2.73,3.28-.22,1.42-.52,2.82-.82,4.38a26,26,0,0,1-4.93-1.39A3.27,3.27,0,0,1,169.44,5c0-.66,1.34-1.29,2.14-1.84.4-.28.93-.37,1.31-.77-3.39-.33-5.93,1.36-8,3.7a14.26,14.26,0,0,0-2.52,4.67,4.24,4.24,0,0,0,1.21,4.62,9.08,9.08,0,0,1-.3,12.8,14.73,14.73,0,0,1-10.92,4.49c-.61,0-1.23,0-2.12,0a3.89,3.89,0,0,0,3.67,2.87c2.29.29,4.62.27,6.92.47,3.42.3,6.83.62,10.23,1.05,2.48.31,3.71,2,3.94,4.34A5.43,5.43,0,0,1,172.31,47c-5.94,3.57-12.38,3.66-18.94,3.13a22.76,22.76,0,0,1-10.79-3.49,5.27,5.27,0,0,1-2.05-6.12c1.25-2.76,3.64-4,6.29-3.38ZM162.1,22.35c-.13-6.26-3.13-9.2-9.12-9.62-5.56-.4-9.38,3.07-9.47,8.25-.09,5.34,4.78,10.91,9.48,10.61S162.16,28.7,162.1,22.35Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M92,0V12.68l10.64-1.81c3.76-.63,7.52-1.36,11.3-1.85A19.18,19.18,0,0,1,128,12.42a23,23,0,0,0,2.27,1.3l-.7.8a3.3,3.3,0,0,1-.82-.21A19.49,19.49,0,0,0,118.45,12c-8.72.61-17.43,1.45-26.32,2.22v5.36c0,5.39,0,10.78,0,16.18,0,3.82,2.26,5.42,6.06,4.74a5.79,5.79,0,0,0,5.13-5.92c0-2.78-2.18-5.08-5.33-5.66-1.1-.2-2.07-.44-2.27-1.78,4.39-.75,8,2,8.05,6.33a11.53,11.53,0,0,1-.81,5.22c-1.28,2.58-5.54,3.7-8.87,2.8-3.89-1-5.56-3.25-5.59-7.58,0-5.89,0-11.79,0-17.68v-2.1c-1.74,0-3.29.06-4.83,0-.42,0-.82-.5-1.23-.76.41-.25.84-.73,1.23-.7,2.86.23,5.35-.46,6.65-3.18a15.76,15.76,0,0,0,1.13-4.85,38.68,38.68,0,0,0,0-4.57Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M209.81.73V16.89c0,5.15,0,10.29,0,15.43a25.73,25.73,0,0,1-.35,3.92c-.33,2.21.46,3.68,2.15,3.84,2.48.23,3.14-.41,3.19-3.11v-.85a3.44,3.44,0,0,1-.08,3.92,4.64,4.64,0,0,1-5.1,1.43,5.25,5.25,0,0,1-3.55-5c.07-10,0-20.07,0-30.11,0-2.69,0-2.69-2.74-2.92a1.16,1.16,0,0,1-.67-.34C205.06,2.54,207.94,3.39,209.81.73Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M183.76,14.39c2.47-.51,4.23-1.58,5.08-3.93V20.77c.63-1.61,1-2.86,1.58-4,1.27-2.44,2.93-4.58,5.83-5.08a5.62,5.62,0,0,1,3.43.38,3.13,3.13,0,0,1,1.21,2.53c0,.58-1.47,1.68-1.86,1.52-.81-.34-1.37-1.33-2-2.1-.16-.2-.08-.58-.12-.92A5.06,5.06,0,0,0,192.29,16a28.23,28.23,0,0,0-2.6,8.11,136.4,136.4,0,0,0-.22,13.72c0,2.58.49,3,3.16,3a3.26,3.26,0,0,1,1.82.38h-13c4.33-1.13,4.31-1.13,4.31-5.41q0-9.12,0-18.25C185.8,16.08,185.85,14.67,183.76,14.39Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M126.45,36.42,122,35.11l.12-.6c-.85.38-1.67.82-2.54,1.14-2.75,1-5.45,0-6.38-2.27-.82-2,.58-4.91,3-6,1.53-.72,3-1.49,4.61-2.08s1.35-1.73,1.19-2.92c-.19-1.35-.55-2.63-2.1-3a1.6,1.6,0,0,0-2.13,1.29,12.38,12.38,0,0,1-.29,1.84,3.92,3.92,0,0,1-1.08,1.59c-.17.15-1.07-.19-1.22-.5a2.39,2.39,0,0,1-.24-1.88c1.68-2.75,5.1-4.26,8.29-1.95a5.72,5.72,0,0,1,2.49,5.3c-.1,2.25-.08,4.52,0,6.77A43.26,43.26,0,0,0,126.45,36.42ZM122,25.56c-3.88.87-5.75,3.77-4.76,7.14a2.48,2.48,0,0,0,2.81,1.91c.71-.1,1.81-1,1.86-1.59C122.15,30.56,122,28.07,122,25.56Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.text.primary,
                        stroke: theme.palette.text.primary,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            fillOpacity: {
                                delay: 2,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M180.25,32.5H169.5l-.06-.23c.29-.12.6-.36.88-.33,2.15.21,2.65-.92,2.61-2.83-.07-4.07,0-8.14,0-12.21,0-2.65,0-2.65-2.71-2.75-.25,0-.49-.06-1.09-.13,2.52-1.17,5.95.56,7.37-2.93v4.56c0,4.26,0,8.52,0,12.78,0,3.18,0,3.17,3.1,3.53a4.23,4.23,0,0,1,.68.17Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        fill: theme.palette.primary.main,
                        stroke: theme.palette.primary.main,
                        strokeWidth: "1",
                        initial: {
                            pathLength: 0,
                            fillOpacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            fillOpacity: 1
                        },
                        transition: {
                            duration: 2,
                            ease: "easeInOut",
                            delay: 2,
                            fillOpacity: {
                                delay: 3,
                                duration: 2,
                                ease: "easeInOut"
                            }
                        },
                        d: "M143.18,9.52l-.34-1.32.41-.18,1.19,2.65c1.57.14,2.21-.78,1.95-2.57l1.28.13V9.64a5.48,5.48,0,0,0,1.08-.25c1.54-.72,1.87.57,2.79,1.61-7.19-.32-11.21,3-12.27,9.84-1.69-1.3-1.65-1.31-.72-3.11.15-.3-.24-.9-.43-1.34a16.86,16.86,0,0,1-.91-2.1c0-.11.87-.46,1.34-.7l.23.6-1.12.25c1.09,1.47,1.83,1.33,2.85-.48-2.46-1-2.62-1.43-1.68-4.06a4.89,4.89,0,0,0,0-1.58C140.59,7.5,141.74,8.63,143.18,9.52Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Logo.js",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Logo.js",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Logo.js",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Logo.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Logo;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/Header/HeaderLinks.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// next
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// @iconify
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@iconify/react/dist/iconify.js [app-ssr] (ecmascript)");
// @Mui
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/useTheme.js [app-ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
"use client";
;
;
;
;
;
;
// --------------------------------------------------------------------------------
function HeaderLinks({ links }) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$useTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [hovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        state: false,
        index: null
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
        direction: "row",
        alignItems: "center",
        gap: 3,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: links.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                gap: 1,
                direction: "row",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$iconify$2f$react$2f$dist$2f$iconify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        style: {
                            color: hovered && _.href !== location ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alpha"])(theme.palette.text.primary, 0.5) : theme.palette.primary.main,
                            opacity: hovered || _.href === location ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out"
                        },
                        icon: "fa6-solid:chess-queen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/HeaderLinks.js",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        sx: {
                            textDecoration: "none",
                            color: location === _.href ? "primary.main" : "text.primary",
                            fontWeight: 600
                        },
                        component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        href: _.href,
                        variant: "subtitle1",
                        children: _.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/HeaderLinks.js",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/Header/HeaderLinks.js",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Header/HeaderLinks.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderLinks;
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__2b6ab2._.js.map