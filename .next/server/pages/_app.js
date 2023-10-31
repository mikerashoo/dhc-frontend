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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/styles/main.scss */ \"./app/styles/main.scss\");\n/* harmony import */ var _app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/globals.css */ \"./css/globals.css\");\n/* harmony import */ var _css_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/context/loading */ \"./app/context/loading.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/context/auth */ \"./app/context/auth.ts\");\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_3__.useLoading)();\n    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isAuth, setIsAuth] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (localStorage.getItem(\"user\")) {\n            setIsAuth(true);\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/login\");\n            setIsAuth(false);\n        }\n    }, []);\n    //   useEffect(() => {\n    //     setIsLoading(false);\n    //     // const Token = LocalStorageHandler.getUserToken();\n    //     // if (Token) {\n    //     //   AuthService.getCurrentUser()\n    //     //     .then((res) => {})\n    //     //     .catch((err) => {\n    //     //       LocalStorageHandler.clearUserToken();\n    //     //       router.push(\"/login\");\n    //     //     });\n    //     // }\n    //     // if (router.pathname == \"/login\") {\n    //     //   setIsAuth(false);\n    //     //   router.push(\"/login\");\n    //     // }\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_context_loading__WEBPACK_IMPORTED_MODULE_3__.LoadingContext.Provider, {\n        value: {\n            isLoading,\n            setIsLoading\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_context_auth__WEBPACK_IMPORTED_MODULE_6__.AuthContext.Provider, {\n            value: {\n                userInfo,\n                isAuth,\n                setIsAuth\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mikiasbirhanu/projects/Packarma-Projects/dhc-main/pages/_app.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nconst getServerSideProps = async (context)=>{\n    return {\n        props: {\n            cookies: context.req.cookies ?? \"\"\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTDtBQUd3QztBQUN4QjtBQUNJO0FBSUM7QUFFakQsU0FBU08sTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQy9DLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxhQUFZLEVBQUUsR0FBR1YsZ0VBQVVBO0lBQzlDLE1BQU0sRUFBRVcsT0FBTSxFQUFFLEdBQUdQLHNEQUFTQTtJQUM1QixNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSWUsYUFBYUMsT0FBTyxDQUFDLFNBQVM7WUFDOUJKLFVBQVUsSUFBSTtRQUNsQixPQUFPO1lBQ0hWLHVEQUFXLENBQUM7WUFDWlUsVUFBVSxLQUFLO1FBQ25CLENBQUM7SUFDTCxHQUFHLEVBQUU7SUFFTCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJEQUEyRDtJQUMzRCxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IscURBQXFEO0lBQ3JELHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDRDQUE0QztJQUM1Qyw2QkFBNkI7SUFDN0Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBRVoscUJBQ0ksOERBQUNkLHlFQUF1QjtRQUFDcUIsT0FBTztZQUFFWDtZQUFXQztRQUFhO2tCQUN0RCw0RUFBQ0wsbUVBQW9CO1lBQ2pCZSxPQUFPO2dCQUNITjtnQkFDQUY7Z0JBQ0FDO1lBQ0o7c0JBRUEsNEVBQUNOO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFDQSxpRUFBZUYsS0FBS0EsRUFBQztBQUVkLE1BQU1lLHFCQUF5QyxPQUFPQyxVQUFZO0lBQ3JFLE9BQU87UUFDSEMsT0FBTztZQUNIQyxTQUFTRixRQUFRRyxHQUFHLENBQUNELE9BQU8sSUFBSTtRQUNwQztJQUNKO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nyb2Nvcy10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vYXBwL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcIi4uL2Nzcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IExvYWRpbmdDb250ZXh0LCB1c2VMb2FkaW5nIH0gZnJvbSBcIi4uL2FwcC9jb250ZXh0L2xvYWRpbmdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZUhhbmRsZXIgfSBmcm9tIFwiLi4vYXBwL3V0aWxzL2xvY2FsU3RvcmFnZUhhbmRsZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwcC9zZXJ2aWNlcy9BdXRoU2VydmljZVwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiQC9hcHAvY29udGV4dC9hdXRoXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIH0gPSB1c2VMb2FkaW5nKCk7XG4gICAgY29uc3QgeyBsb2NhbGUgfSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc0F1dGgsIHNldElzQXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xuICAgICAgICAgICAgc2V0SXNBdXRoKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICAgICAgICBzZXRJc0F1dGgoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIC8vICAgICAvLyBjb25zdCBUb2tlbiA9IExvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0VXNlclRva2VuKCk7XG4gICAgLy8gICAgIC8vIGlmIChUb2tlbikge1xuICAgIC8vICAgICAvLyAgIEF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKClcbiAgICAvLyAgICAgLy8gICAgIC50aGVuKChyZXMpID0+IHt9KVxuICAgIC8vICAgICAvLyAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAvLyAgICAgLy8gICAgICAgTG9jYWxTdG9yYWdlSGFuZGxlci5jbGVhclVzZXJUb2tlbigpO1xuICAgIC8vICAgICAvLyAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAvLyAgICAgLy8gICAgIH0pO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIC8vIGlmIChyb3V0ZXIucGF0aG5hbWUgPT0gXCIvbG9naW5cIikge1xuICAgIC8vICAgICAvLyAgIHNldElzQXV0aChmYWxzZSk7XG4gICAgLy8gICAgIC8vICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9fT5cbiAgICAgICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICAgICAgICAgICAgICBpc0F1dGgsXG4gICAgICAgICAgICAgICAgICAgIHNldElzQXV0aCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvTG9hZGluZ0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb29raWVzOiBjb250ZXh0LnJlcS5jb29raWVzID8/IFwiXCIsXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiTG9hZGluZ0NvbnRleHQiLCJ1c2VMb2FkaW5nIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJBdXRoQ29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibG9jYWxlIiwiaXNBdXRoIiwic2V0SXNBdXRoIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsImNvb2tpZXMiLCJyZXEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./app/styles/main.scss":
/*!******************************!*\
  !*** ./app/styles/main.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./css/globals.css":
/*!*************************!*\
  !*** ./css/globals.css ***!
  \*************************/
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