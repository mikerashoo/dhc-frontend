/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/context/auth.ts":
/*!*****************************!*\
  !*** ./app/context/auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst useAuthContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AuthContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udGV4dC9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFFekMsTUFBTUUsY0FBY0Ysb0RBQWFBLENBQU0sSUFBSSxFQUFDO0FBRTVDLE1BQU1HLGlCQUFpQixJQUFNO0lBQ2xDLE9BQU9GLGlEQUFVQSxDQUFDQztBQUNwQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JvY29zLXRlbXBsYXRlLy4vYXBwL2NvbnRleHQvYXV0aC50cz9lMDYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aENvbnRleHQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/context/auth.ts\n");

/***/ }),

/***/ "./app/context/loading.ts":
/*!********************************!*\
  !*** ./app/context/loading.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadingContext\": () => (/* binding */ LoadingContext),\n/* harmony export */   \"useLoading\": () => (/* binding */ useLoading),\n/* harmony export */   \"useLoadingContext\": () => (/* binding */ useLoadingContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useLoading = ()=>{\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const start = ()=>setIsLoading(false);\n        const end = ()=>setIsLoading(false);\n        router.events.on(\"routeChangeStart\", start);\n        router.events.on(\"routeChangeComplete\", end);\n        router.events.on(\"routeChangeError\", end);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", start);\n            router.events.off(\"routeChangeComplete\", end);\n            router.events.off(\"routeChangeError\", end);\n        };\n    }, []);\n    return {\n        isLoading,\n        setIsLoading\n    };\n};\nconst LoadingContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\nconst useLoadingContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LoadingContext);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udGV4dC9sb2FkaW5nLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUU7QUFDL0I7QUFFL0IsTUFBTUssYUFBYSxJQUFNO0lBQzlCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU1LLFNBQVNKLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLFFBQVEsSUFBTUYsYUFBYSxLQUFLO1FBQ3RDLE1BQU1HLE1BQU0sSUFBTUgsYUFBYSxLQUFLO1FBRXBDQyxPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JIO1FBQ3JDRCxPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJGO1FBQ3hDRixPQUFPRyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxvQkFBb0JGO1FBRXJDLE9BQU8sSUFBTTtZQUNYRixPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JKO1lBQ3RDRCxPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyx1QkFBdUJIO1lBQ3pDRixPQUFPRyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JIO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBR0wsT0FBTztRQUFDSjtRQUFXQztJQUFZO0FBQ2pDLEVBQUM7QUFFTSxNQUFNTyxpQkFBaUJkLG9EQUFhQSxDQUFNLElBQUksRUFBQztBQUUvQyxNQUFNZSxvQkFBb0IsSUFBTTtJQUNyQyxPQUFPZCxpREFBVUEsQ0FBQ2E7QUFDcEIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nyb2Nvcy10ZW1wbGF0ZS8uL2FwcC9jb250ZXh0L2xvYWRpbmcudHM/MTYzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgdXNlTG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdGFydCA9ICgpID0+IHNldElzTG9hZGluZyhmYWxzZSlcbiAgICBjb25zdCBlbmQgPSAoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpXG5cbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydClcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBlbmQpXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgZW5kKVxuICAgIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnQpXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgZW5kKVxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGVuZClcbiAgICB9XG4gIH0sIFtdKVxuXG5cbiAgcmV0dXJuIHtpc0xvYWRpbmcsIHNldElzTG9hZGluZ31cbn1cblxuZXhwb3J0IGNvbnN0IExvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KG51bGwpXG5cbmV4cG9ydCBjb25zdCB1c2VMb2FkaW5nQ29udGV4dCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoTG9hZGluZ0NvbnRleHQpXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZUxvYWRpbmciLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJzdGFydCIsImVuZCIsImV2ZW50cyIsIm9uIiwib2ZmIiwiTG9hZGluZ0NvbnRleHQiLCJ1c2VMb2FkaW5nQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/context/loading.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/styles/main.scss */ \"./app/styles/main.scss\");\n/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/context/loading */ \"./app/context/loading.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/context/auth */ \"./app/context/auth.ts\");\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_2__.useLoading)();\n    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [isAuth, setIsAuth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (localStorage.getItem(\"user\")) {\n            setIsAuth(true);\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/login\");\n            setIsAuth(false);\n        }\n    }, []);\n    //   useEffect(() => {\n    //     setIsLoading(false);\n    //     // const Token = LocalStorageHandler.getUserToken();\n    //     // if (Token) {\n    //     //   AuthService.getCurrentUser()\n    //     //     .then((res) => {})\n    //     //     .catch((err) => {\n    //     //       LocalStorageHandler.clearUserToken();\n    //     //       router.push(\"/login\");\n    //     //     });\n    //     // }\n    //     // if (router.pathname == \"/login\") {\n    //     //   setIsAuth(false);\n    //     //   router.push(\"/login\");\n    //     // }\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_context_loading__WEBPACK_IMPORTED_MODULE_2__.LoadingContext.Provider, {\n        value: {\n            isLoading,\n            setIsLoading\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_context_auth__WEBPACK_IMPORTED_MODULE_5__.AuthContext.Provider, {\n            value: {\n                userInfo,\n                isAuth,\n                setIsAuth\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nconst getServerSideProps = async (context)=>{\n    return {\n        props: {\n            cookies: context.req.cookies ?? \"\"\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBR21DO0FBQ3hCO0FBQ0k7QUFJQztBQUVqRCxTQUFTTyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDakQsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGFBQVksRUFBRSxHQUFHVixnRUFBVUE7SUFDOUMsTUFBTSxFQUFFVyxPQUFNLEVBQUUsR0FBR1Asc0RBQVNBO0lBQzVCLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1ksVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUE7SUFFeENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJZSxhQUFhQyxPQUFPLENBQUMsU0FBUztZQUNoQ0osVUFBVSxJQUFJO1FBQ2hCLE9BQU87WUFDTFYsdURBQVcsQ0FBQztZQUNaVSxVQUFVLEtBQUs7UUFDakIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkRBQTJEO0lBQzNELHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFlBQVk7SUFFWixxQkFDRSw4REFBQ2QseUVBQXVCO1FBQUNxQixPQUFPO1lBQUVYO1lBQVdDO1FBQWE7a0JBQ3hELDRFQUFDTCxtRUFBb0I7WUFDbkJlLE9BQU87Z0JBQ0xOO2dCQUNBRjtnQkFDQUM7WUFDRjtzQkFFQSw0RUFBQ047Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztBQUNBLGlFQUFlRixLQUFLQSxFQUFDO0FBRWQsTUFBTWUscUJBQXlDLE9BQU9DLFVBQVk7SUFDdkUsT0FBTztRQUNMQyxPQUFPO1lBQ0xDLFNBQVNGLFFBQVFHLEdBQUcsQ0FBQ0QsT0FBTyxJQUFJO1FBQ2xDO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JvY29zLXRlbXBsYXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9hcHAvc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IExvYWRpbmdDb250ZXh0LCB1c2VMb2FkaW5nIH0gZnJvbSBcIi4uL2FwcC9jb250ZXh0L2xvYWRpbmdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZUhhbmRsZXIgfSBmcm9tIFwiLi4vYXBwL3V0aWxzL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwcC9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dC9hdXRoXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9ID0gdXNlTG9hZGluZygpO1xuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc0F1dGgsIHNldElzQXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcbiAgICAgIHNldElzQXV0aCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICBzZXRJc0F1dGgoZmFsc2UpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICAvLyBjb25zdCBUb2tlbiA9IExvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0VXNlclRva2VuKCk7XG4gIC8vICAgICAvLyBpZiAoVG9rZW4pIHtcbiAgLy8gICAgIC8vICAgQXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoKVxuICAvLyAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHt9KVxuICAvLyAgICAgLy8gICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICAvLyAgICAgICBMb2NhbFN0b3JhZ2VIYW5kbGVyLmNsZWFyVXNlclRva2VuKCk7XG4gIC8vICAgICAvLyAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgLy8gICAgIC8vICAgICB9KTtcbiAgLy8gICAgIC8vIH1cbiAgLy8gICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT0gXCIvbG9naW5cIikge1xuICAvLyAgICAgLy8gICBzZXRJc0F1dGgoZmFsc2UpO1xuICAvLyAgICAgLy8gICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgLy8gICAgIC8vIH1cbiAgLy8gICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TG9hZGluZ0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgfX0+XG4gICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICB1c2VySW5mbyxcbiAgICAgICAgICBpc0F1dGgsXG4gICAgICAgICAgc2V0SXNBdXRoLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvTG9hZGluZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29va2llczogY29udGV4dC5yZXEuY29va2llcyA/PyBcIlwiLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkxvYWRpbmdDb250ZXh0IiwidXNlTG9hZGluZyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwiQXV0aENvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxvY2FsZSIsImlzQXV0aCIsInNldElzQXV0aCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJjb29raWVzIiwicmVxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./app/styles/main.scss":
/*!******************************!*\
  !*** ./app/styles/main.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();