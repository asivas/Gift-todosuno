"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/mandala/mandala.jsx":
/*!********************************************!*\
  !*** ./src/components/mandala/mandala.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userPoint_userPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userPoint/userPoint */ \"(app-pages-browser)/./src/components/userPoint/userPoint.jsx\");\n/* harmony import */ var _mandala_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mandala.css */ \"(app-pages-browser)/./src/components/mandala/mandala.css\");\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Mandala = ()=>{\n    var _dataCuadro, _dataCuadro_lado_derecho, _dataCuadro1, _dataCuadro_lado_izquierdo, _dataCuadro2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo1, _dataCuadro3, _dataCuadro_lado_izquierdo_builders2, _dataCuadro_lado_izquierdo2, _dataCuadro4, _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho1, _dataCuadro5, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_derecho2, _dataCuadro6;\n    _s();\n    const { dataUser, dataCuadro } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_4__.useApiContext)();\n    // Define las coordenadas para cada punto\n    const puntos = [\n        {\n            x: 28,\n            y: 50,\n            propiedadUsuario: (_dataCuadro = dataCuadro) === null || _dataCuadro === void 0 ? void 0 : _dataCuadro.legend,\n            active: true\n        },\n        {\n            x: 85,\n            y: 74,\n            propiedadUsuario: (_dataCuadro1 = dataCuadro) === null || _dataCuadro1 === void 0 ? void 0 : (_dataCuadro_lado_derecho = _dataCuadro1.lado_derecho) === null || _dataCuadro_lado_derecho === void 0 ? void 0 : _dataCuadro_lado_derecho.guide,\n            active: true\n        },\n        {\n            x: -29,\n            y: 74,\n            propiedadUsuario: (_dataCuadro2 = dataCuadro) === null || _dataCuadro2 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo = _dataCuadro2.lado_izquierdo) === null || _dataCuadro_lado_izquierdo === void 0 ? void 0 : _dataCuadro_lado_izquierdo.guide,\n            active: true\n        },\n        {\n            x: -59,\n            y: 34,\n            propiedadUsuario: (_dataCuadro3 = dataCuadro) === null || _dataCuadro3 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo1 = _dataCuadro3.lado_izquierdo) === null || _dataCuadro_lado_izquierdo1 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders1 = _dataCuadro_lado_izquierdo1.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username,\n            active: true\n        },\n        {\n            x: -59,\n            y: 114,\n            propiedadUsuario: (_dataCuadro4 = dataCuadro) === null || _dataCuadro4 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo2 = _dataCuadro4.lado_izquierdo) === null || _dataCuadro_lado_izquierdo2 === void 0 ? void 0 : (_dataCuadro_lado_izquierdo_builders2 = _dataCuadro_lado_izquierdo2.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 34,\n            propiedadUsuario: (_dataCuadro5 = dataCuadro) === null || _dataCuadro5 === void 0 ? void 0 : (_dataCuadro_lado_derecho1 = _dataCuadro5.lado_derecho) === null || _dataCuadro_lado_derecho1 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders1 = _dataCuadro_lado_derecho1.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username,\n            active: true\n        },\n        {\n            x: 115,\n            y: 114,\n            propiedadUsuario: (_dataCuadro6 = dataCuadro) === null || _dataCuadro6 === void 0 ? void 0 : (_dataCuadro_lado_derecho2 = _dataCuadro6.lado_derecho) === null || _dataCuadro_lado_derecho2 === void 0 ? void 0 : (_dataCuadro_lado_derecho_builders2 = _dataCuadro_lado_derecho2.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username,\n            active: false\n        }\n    ];\n    var _coordenada_propiedadUsuario;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mandala-container\",\n        children: dataCuadro && dataCuadro.lado_izquierdo && puntos.map((coordenada, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_userPoint_userPoint__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                x: coordenada.x,\n                y: coordenada.y,\n                active: coordenada.active,\n                propiedadUsuario: (_coordenada_propiedadUsuario = coordenada.propiedadUsuario) !== null && _coordenada_propiedadUsuario !== void 0 ? _coordenada_propiedadUsuario : \"\"\n            }, index, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/mandala/mandala.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/mandala/mandala.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Mandala, \"4T7rFiuWeLe8W+EIJis5owJfQ/8=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_4__.useApiContext\n    ];\n});\n_c = Mandala;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mandala);\nvar _c;\n$RefreshReg$(_c, \"Mandala\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21hbmRhbGEvbWFuZGFsYS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3FCO0FBQ3hCO0FBQ3NDO0FBRzVELE1BQU1HLFVBQVU7UUFNd0JDLGFBQ0FBLDBCQUFBQSxjQUNDQSw0QkFBQUEsY0FDQUEsc0NBQUFBLDZCQUFBQSxjQUNDQSxzQ0FBQUEsNkJBQUFBLGNBQ0RBLG9DQUFBQSwyQkFBQUEsY0FDQ0Esb0NBQUFBLDJCQUFBQTs7SUFWdEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVELFVBQVUsRUFBRSxHQUFHRixrRUFBYUE7SUFFN0MseUNBQXlDO0lBQzVDLE1BQU1JLFNBQVM7UUFDWDtZQUFFQyxHQUFHO1lBQUlDLEdBQUc7WUFBSUMsZ0JBQWdCLEdBQUVMLGNBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBWU0sTUFBTTtZQUFFQyxRQUFRO1FBQUs7UUFDbkU7WUFBRUosR0FBRztZQUFJQyxHQUFHO1lBQUlDLGdCQUFnQixHQUFFTCxlQUFBQSx3QkFBQUEsb0NBQUFBLDJCQUFBQSxhQUFZUSxZQUFZLGNBQXhCUiwrQ0FBQUEseUJBQTBCUyxLQUFLO1lBQUVGLFFBQVE7UUFBSztRQUNoRjtZQUFFSixHQUFHLENBQUM7WUFBSUMsR0FBRztZQUFJQyxnQkFBZ0IsR0FBRUwsZUFBQUEsd0JBQUFBLG9DQUFBQSw2QkFBQUEsYUFBWVUsY0FBYyxjQUExQlYsaURBQUFBLDJCQUE0QlMsS0FBSztZQUFFRixRQUFRO1FBQUs7UUFDbkY7WUFBRUosR0FBRyxDQUFDO1lBQUlDLEdBQUc7WUFBSUMsZ0JBQWdCLEdBQUVMLGVBQUFBLHdCQUFBQSxvQ0FBQUEsOEJBQUFBLGFBQVlVLGNBQWMsY0FBMUJWLG1EQUFBQSx1Q0FBQUEsNEJBQTRCVyxTQUFTLGNBQXJDWCwyREFBQUEscUNBQXVDWSxRQUFRO1lBQUVMLFFBQVE7UUFBSztRQUNqRztZQUFFSixHQUFHLENBQUM7WUFBSUMsR0FBRztZQUFLQyxnQkFBZ0IsR0FBRUwsZUFBQUEsd0JBQUFBLG9DQUFBQSw4QkFBQUEsYUFBWVUsY0FBYyxjQUExQlYsbURBQUFBLHVDQUFBQSw0QkFBNEJhLFNBQVMsY0FBckNiLDJEQUFBQSxxQ0FBdUNZLFFBQVE7WUFBRUwsUUFBUTtRQUFLO1FBQ2xHO1lBQUVKLEdBQUc7WUFBS0MsR0FBRztZQUFJQyxnQkFBZ0IsR0FBRUwsZUFBQUEsd0JBQUFBLG9DQUFBQSw0QkFBQUEsYUFBWVEsWUFBWSxjQUF4QlIsaURBQUFBLHFDQUFBQSwwQkFBMEJXLFNBQVMsY0FBbkNYLHlEQUFBQSxtQ0FBcUNZLFFBQVE7WUFBRUwsUUFBUTtRQUFLO1FBQy9GO1lBQUVKLEdBQUc7WUFBS0MsR0FBRztZQUFLQyxnQkFBZ0IsR0FBRUwsZUFBQUEsd0JBQUFBLG9DQUFBQSw0QkFBQUEsYUFBWVEsWUFBWSxjQUF4QlIsaURBQUFBLHFDQUFBQSwwQkFBMEJhLFNBQVMsY0FBbkNiLHlEQUFBQSxtQ0FBcUNZLFFBQVE7WUFBRUwsUUFBUTtRQUFNO0tBRXBHO1FBWXlCTztJQVR6QixxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDZGhCLGNBQWNBLFdBQVdVLGNBQWMsSUFDdENSLE9BQU9lLEdBQUcsQ0FBQyxDQUFDSCxZQUFZSSxzQkFDdEIsOERBQUNyQiw0REFBU0E7Z0JBRVJNLEdBQUdXLFdBQVdYLENBQUM7Z0JBQ2ZDLEdBQUdVLFdBQVdWLENBQUM7Z0JBQ2ZHLFFBQVFPLFdBQVdQLE1BQU07Z0JBQ3pCRixrQkFBa0JTLENBQUFBLCtCQUFBQSxXQUFXVCxnQkFBZ0IsY0FBM0JTLDBDQUFBQSwrQkFBK0I7ZUFKNUNJOzs7Ozs7Ozs7O0FBVWY7R0FoQ01uQjs7UUFFK0JELDhEQUFhQTs7O0tBRjVDQztBQWtDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9tYW5kYWxhL21hbmRhbGEuanN4PzhiMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFVzZXJQb2ludCBmcm9tIFwiLi4vdXNlclBvaW50L3VzZXJQb2ludFwiXG5pbXBvcnQgXCIuL21hbmRhbGEuY3NzXCJcbmltcG9ydCB7IHVzZUFwaUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9hcGlDb250ZXh0XCI7XG5cblxuY29uc3QgTWFuZGFsYSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHsgZGF0YVVzZXIsIGRhdGFDdWFkcm8gfSA9IHVzZUFwaUNvbnRleHQoKTtcblxuICAgICAvLyBEZWZpbmUgbGFzIGNvb3JkZW5hZGFzIHBhcmEgY2FkYSBwdW50b1xuICBjb25zdCBwdW50b3MgPSBbXG4gICAgICB7IHg6IDI4LCB5OiA1MCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGVnZW5kLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogODUsIHk6IDc0LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2RlcmVjaG8/Lmd1aWRlLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogLTI5LCB5OiA3NCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19penF1aWVyZG8/Lmd1aWRlLCBhY3RpdmU6IHRydWUgfSxcbiAgICAgIHsgeDogLTU5LCB5OiAzNCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19penF1aWVyZG8/LmJ1aWxkZXJzMT8udXNlcm5hbWUsIGFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgeyB4OiAtNTksIHk6IDExNCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19penF1aWVyZG8/LmJ1aWxkZXJzMj8udXNlcm5hbWUsIGFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgeyB4OiAxMTUsIHk6IDM0LCBwcm9waWVkYWRVc3VhcmlvOiBkYXRhQ3VhZHJvPy5sYWRvX2RlcmVjaG8/LmJ1aWxkZXJzMT8udXNlcm5hbWUsIGFjdGl2ZTogdHJ1ZSB9LFxuICAgICAgeyB4OiAxMTUsIHk6IDExNCwgcHJvcGllZGFkVXN1YXJpbzogZGF0YUN1YWRybz8ubGFkb19kZXJlY2hvPy5idWlsZGVyczI/LnVzZXJuYW1lLCBhY3RpdmU6IGZhbHNlIH0sXG4gICAgICAvLyAuLi4gQWdyZWdhIG3DoXMgY29vcmRlbmFkYXMgc2Vnw7puIHR1IGRpc2XDsW9cbiAgXTtcbiAgXG5cbiAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYW5kYWxhLWNvbnRhaW5lclwiPlxuICAgIHtkYXRhQ3VhZHJvICYmIGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8gJiZcbiAgICAgIHB1bnRvcy5tYXAoKGNvb3JkZW5hZGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxVc2VyUG9pbnRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIHg9e2Nvb3JkZW5hZGEueH1cbiAgICAgICAgICB5PXtjb29yZGVuYWRhLnl9XG4gICAgICAgICAgYWN0aXZlPXtjb29yZGVuYWRhLmFjdGl2ZX1cbiAgICAgICAgICBwcm9waWVkYWRVc3VhcmlvPXtjb29yZGVuYWRhLnByb3BpZWRhZFVzdWFyaW8gPz8gXCJcIn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5kYWxhIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXNlclBvaW50IiwidXNlQXBpQ29udGV4dCIsIk1hbmRhbGEiLCJkYXRhQ3VhZHJvIiwiZGF0YVVzZXIiLCJwdW50b3MiLCJ4IiwieSIsInByb3BpZWRhZFVzdWFyaW8iLCJsZWdlbmQiLCJhY3RpdmUiLCJsYWRvX2RlcmVjaG8iLCJndWlkZSIsImxhZG9faXpxdWllcmRvIiwiYnVpbGRlcnMxIiwidXNlcm5hbWUiLCJidWlsZGVyczIiLCJjb29yZGVuYWRhIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/mandala/mandala.jsx\n"));

/***/ })

});