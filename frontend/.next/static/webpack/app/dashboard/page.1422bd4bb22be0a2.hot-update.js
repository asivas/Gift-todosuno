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

/***/ "(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx":
/*!********************************************************!*\
  !*** ./src/components/inactiveUsers/inactiveUsers.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n/* harmony import */ var _sideBar_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sideBar/sidebar.css */ \"(app-pages-browser)/./src/components/sideBar/sidebar.css\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst InactiveUsers = ()=>{\n    _s();\n    const { inactiveUsers, activarUsuario, desactivarUsuario, dataCuadro, dataUser, cuadroIdHijo, traerCuadroPadre, hijoIzq, cambiarEstadoComplete, hijoDer, createCuadros, deleteUser, deleteCuadro, legend } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext)();\n    const [ascender, setAscender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showList, setShowList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [usuariosInactivos, setUsuariosInactivos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inactiveUsers.filter((user)=>{\n        var _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo_builders2;\n        const username = user.username;\n        // Verifica si alguna de las propiedades existe antes de comparar\n        return username && (username === ((_dataCuadro_lado_derecho_builders1 = dataCuadro.lado_derecho.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username) || username === ((_dataCuadro_lado_derecho_builders2 = dataCuadro.lado_derecho.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username) || username === ((_dataCuadro_lado_izquierdo_builders1 = dataCuadro.lado_izquierdo.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username) || username === ((_dataCuadro_lado_izquierdo_builders2 = dataCuadro.lado_izquierdo.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username));\n    }));\n    const [usuarioActivado, setUsuarioActivado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const completar_cuadro_refer = ()=>{\n        traerCuadroPadre();\n        cambiarEstadoComplete();\n        setShowButton(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        cuadroIdHijo();\n        // Verificar si se activó un usuario recientemente\n        if (usuarioActivado) {\n            // Actualizar la lista de usuarios inactivos eliminando el usuario activado\n            setUsuariosInactivos((prevUsuarios)=>prevUsuarios.filter((user)=>user._id !== usuarioActivado._id));\n            // Manejar la lógica después de activar al usuario\n            handlePostActivarUsuario(usuarioActivado);\n            // Reiniciar el estado de usuario activado\n            setUsuarioActivado(null);\n        }\n    }, [\n        usuarioActivado\n    ]);\n    const handlePostActivarUsuario = (usuario)=>{\n        console.log(\"usuario activado\", usuario);\n        activarUsuario(usuario.username);\n    };\n    const handleActivarUsuario = (usuario)=>{\n        // Actualizar el estado de usuario activado\n        setUsuarioActivado(usuario);\n        setShowList(false);\n        createNewCuadro();\n        // Verificar si alguna propiedad en dataCuadro está vacía\n        const propiedades = Object.keys(dataCuadro);\n        for (const propiedad of propiedades){\n            if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === \"\") {\n                console.log(\"esta vacia\");\n                return;\n            }\n        }\n        if (!dataCuadro.lado_derecho.builders1 || !dataCuadro.lado_derecho.builders2 || !dataCuadro.lado_izquierdo.builders1 || !dataCuadro.lado_izquierdo.builders2) {\n            // console.log(\"No se encuentran las propiedades builder\", dataCuadro);\n            return;\n        }\n        // Si todas las propiedades tienen valores, dispara la función\n        setAscender(true);\n    };\n    const createNewCuadro = ()=>{\n        let lado;\n        let builder;\n        let userHijo;\n        console.log(dataCuadro);\n        console.log(hijoDer);\n        console.log(hijoIzq);\n        if (dataCuadro.lado_derecho.builders1 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder1\");\n        } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder2\");\n        } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder1\");\n        } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder2\");\n        } else {\n            return console.log(\"Todas las propiedades est\\xe1n vac\\xedas\");\n        }\n        // Supongamos que createCuadros también devuelve información\n        createCuadros(lado, builder, userHijo);\n    };\n    const ascenderNivel = async ()=>{\n        succesLevel();\n        if (dataUser.username !== \"Pablo\" && dataUser.username !== \"Nelson\" && dataUser.username !== \"Escro\") {\n            console.log(\"desactivar usuario\");\n            desactivarUsuario(dataUser.username);\n        }\n        succesLevel();\n        deleteCuadro();\n        const username = dataUser.username;\n        const res = await fetch(\"\".concat(\"https://gift-backend.vercel.app/\", \"user/subirNivel\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username\n            })\n        });\n    };\n    const succesLevel = ()=>{\n        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n            icon: \"success\",\n            title: \"Subiste de nivel\",\n            html: \"\\n        Porfavor actualiza la pagina para ver tus cambios\\n      \",\n            showConfirmButton: true\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard__top\",\n        children: [\n            legend && usuariosInactivos && usuariosInactivos.length > 0 ? showList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: usuariosInactivos.map((usuario)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"acceptPay\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Recibir regalo de:\"\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 199,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: usuario.email\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 200,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>handleActivarUsuario(usuario),\n                                        style: {\n                                            backgroundColor: \"rgb(8 143 8)\",\n                                            borderColor: \"rgb(8 143 8)\"\n                                        },\n                                        children: \"Aceptar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 202,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>{\n                                            deleteUser(usuario);\n                                            setShowList(false);\n                                        },\n                                        style: {\n                                            backgroundColor: \"red\",\n                                            borderColor: \"red\"\n                                        },\n                                        children: \"Borrar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 205,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 201,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, usuario._id, true, {\n                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                        lineNumber: 198,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 196,\n                columnNumber: 10\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"noPays\",\n                children: \"No se encuentran solicitudes\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 212,\n                columnNumber: 23\n            }, undefined),\n            showButton && dataUser.complete === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: completar_cuadro_refer,\n                children: \"Agregar a cuadro padre\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 216,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 218,\n                columnNumber: 11\n            }, undefined),\n            ascender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: ascenderNivel,\n                children: \"Ascender de nivel\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 221,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 223,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n        lineNumber: 193,\n        columnNumber: 7\n    }, undefined);\n};\n_s(InactiveUsers, \"PrdqRkfD6JtiVNnI8xtC7qhJjD8=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext\n    ];\n});\n_c = InactiveUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InactiveUsers); /* git: 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 */ \nvar _c;\n$RefreshReg$(_c, \"InactiveUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luYWN0aXZlVXNlcnMvaW5hY3RpdmVVc2Vycy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNTO0FBQzVCO0FBQ0Q7QUFHL0IsTUFBTUssZ0JBQWdCOztJQUdsQixNQUFNLEVBQ0pDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxpQkFBaUIsRUFDakJDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQkMsT0FBTyxFQUNQQyxxQkFBcUIsRUFDckJDLE9BQU8sRUFDUEMsYUFBYSxFQUNiQyxVQUFVLEVBQ1ZDLFlBQVksRUFDWkMsTUFBTSxFQUNQLEdBQUdoQixrRUFBYUE7SUFFakIsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDdUIsWUFBWUMsY0FBYyxHQUFHeEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDeUIsbUJBQW1CQyxxQkFBcUIsR0FBRzFCLCtDQUFRQSxDQUN4REssY0FBY3NCLE1BQU0sQ0FBQyxDQUFDQztZQU9IcEIsb0NBQ0FBLG9DQUNBQSxzQ0FDQUE7UUFUakIsTUFBTXFCLFdBQVdELEtBQUtDLFFBQVE7UUFFOUIsaUVBQWlFO1FBQ2pFLE9BQ0VBLFlBRUVBLENBQUFBLGVBQWFyQixxQ0FBQUEsV0FBV3NCLFlBQVksQ0FBQ0MsU0FBUyxjQUFqQ3ZCLHlEQUFBQSxtQ0FBbUNxQixRQUFRLEtBQ3hEQSxlQUFhckIscUNBQUFBLFdBQVdzQixZQUFZLENBQUNFLFNBQVMsY0FBakN4Qix5REFBQUEsbUNBQW1DcUIsUUFBUSxLQUN4REEsZUFBYXJCLHVDQUFBQSxXQUFXeUIsY0FBYyxDQUFDRixTQUFTLGNBQW5DdkIsMkRBQUFBLHFDQUFxQ3FCLFFBQVEsS0FDMURBLGVBQWFyQix1Q0FBQUEsV0FB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Y1osOERBQUNzQztnQkFBRUwsV0FBVTswQkFBUzs7Ozs7O1lBR25DaEQsY0FBY2QsU0FBUzJFLFFBQVEsS0FBSyxxQkFDckMsOERBQUNMO2dCQUFPUixXQUFVO2dCQUFhUyxTQUFTNUM7MEJBQXdCOzs7OzswQ0FFOUQsOERBQUN3Qzs7Ozs7WUFFRnpELHlCQUNELDhEQUFDNEQ7Z0JBQU9SLFdBQVU7Z0JBQWFTLFNBQVMzQjswQkFBZTs7Ozs7MENBRXJELDhEQUFDdUI7Ozs7Ozs7Ozs7O0FBR1Q7R0ExTkl4RTs7UUFrQkVGLDhEQUFhQTs7O0tBbEJmRTtBQTROSiwrREFBZUEsYUFBYUEsRUFBQyxDQUU3QixpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaW5hY3RpdmVVc2Vycy9pbmFjdGl2ZVVzZXJzLmpzeD9kYmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwaUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9hcGlDb250ZXh0XCI7XG5pbXBvcnQgXCIuLi9zaWRlQmFyL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcblxuXG5jb25zdCBJbmFjdGl2ZVVzZXJzID0gKCkgPT4ge1xuXG4gIFxuICAgIGNvbnN0IHtcbiAgICAgIGluYWN0aXZlVXNlcnMsXG4gICAgICBhY3RpdmFyVXN1YXJpbyxcbiAgICAgIGRlc2FjdGl2YXJVc3VhcmlvLFxuICAgICAgZGF0YUN1YWRybyxcbiAgICAgIGRhdGFVc2VyLFxuICAgICAgY3VhZHJvSWRIaWpvLFxuICAgICAgdHJhZXJDdWFkcm9QYWRyZSxcbiAgICAgIGhpam9JenEsXG4gICAgICBjYW1iaWFyRXN0YWRvQ29tcGxldGUsXG4gICAgICBoaWpvRGVyLFxuICAgICAgY3JlYXRlQ3VhZHJvcyxcbiAgICAgIGRlbGV0ZVVzZXIsXG4gICAgICBkZWxldGVDdWFkcm8sXG4gICAgICBsZWdlbmRcbiAgICB9ID0gdXNlQXBpQ29udGV4dCgpO1xuICAgIFxuICAgIGNvbnN0IFthc2NlbmRlciwgc2V0QXNjZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzaG93TGlzdCwgc2V0U2hvd0xpc3RdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3VzdWFyaW9zSW5hY3Rpdm9zLCBzZXRVc3Vhcmlvc0luYWN0aXZvc10gPSB1c2VTdGF0ZShcbiAgICAgIGluYWN0aXZlVXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICBcbiAgICAgICAgLy8gVmVyaWZpY2Egc2kgYWxndW5hIGRlIGxhcyBwcm9waWVkYWRlcyBleGlzdGUgYW50ZXMgZGUgY29tcGFyYXJcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB1c2VybmFtZSAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgIHVzZXJuYW1lID09PSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczE/LnVzZXJuYW1lIHx8XG4gICAgICAgICAgICB1c2VybmFtZSA9PT0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMxPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyPy51c2VybmFtZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBbdXN1YXJpb0FjdGl2YWRvLCBzZXRVc3VhcmlvQWN0aXZhZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAgIGNvbnN0IGNvbXBsZXRhcl9jdWFkcm9fcmVmZXIgPSAoKSA9PiB7XG4gICAgICB0cmFlckN1YWRyb1BhZHJlKCk7XG4gICAgICBjYW1iaWFyRXN0YWRvQ29tcGxldGUoKTtcbiAgICAgIHNldFNob3dCdXR0b24oZmFsc2UpO1xuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgY3VhZHJvSWRIaWpvKCk7XG4gICAgICAvLyBWZXJpZmljYXIgc2kgc2UgYWN0aXbDsyB1biB1c3VhcmlvIHJlY2llbnRlbWVudGVcbiAgICAgIGlmICh1c3VhcmlvQWN0aXZhZG8pIHtcbiAgICAgICAgLy8gQWN0dWFsaXphciBsYSBsaXN0YSBkZSB1c3VhcmlvcyBpbmFjdGl2b3MgZWxpbWluYW5kbyBlbCB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9zSW5hY3Rpdm9zKChwcmV2VXN1YXJpb3MpID0+XG4gICAgICAgICAgcHJldlVzdWFyaW9zLmZpbHRlcigodXNlcikgPT4gdXNlci5faWQgIT09IHVzdWFyaW9BY3RpdmFkby5faWQpXG4gICAgICAgICk7XG4gIFxuICAgICAgICAvLyBNYW5lamFyIGxhIGzDs2dpY2EgZGVzcHXDqXMgZGUgYWN0aXZhciBhbCB1c3VhcmlvXG4gICAgICAgIGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyh1c3VhcmlvQWN0aXZhZG8pO1xuICBcbiAgICAgICAgLy8gUmVpbmljaWFyIGVsIGVzdGFkbyBkZSB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9BY3RpdmFkbyhudWxsKTtcbiAgICAgIH1cbiAgICB9LCBbdXN1YXJpb0FjdGl2YWRvXSk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyA9ICh1c3VhcmlvKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzdWFyaW8gYWN0aXZhZG9cIiwgdXN1YXJpbyk7XG4gICAgIGFjdGl2YXJVc3VhcmlvKHVzdWFyaW8udXNlcm5hbWUpO1xuICBcbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVBY3RpdmFyVXN1YXJpbyA9ICh1c3VhcmlvKSA9PiB7XG4gICAgICAvLyBBY3R1YWxpemFyIGVsIGVzdGFkbyBkZSB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICBzZXRVc3VhcmlvQWN0aXZhZG8odXN1YXJpbyk7XG4gICAgICBzZXRTaG93TGlzdChmYWxzZSk7XG5cbiAgICAgIGNyZWF0ZU5ld0N1YWRybygpO1xuICAgICAgXG4gICAgICAvLyBWZXJpZmljYXIgc2kgYWxndW5hIHByb3BpZWRhZCBlbiBkYXRhQ3VhZHJvIGVzdMOhIHZhY8OtYVxuICAgICAgY29uc3QgcHJvcGllZGFkZXMgPSBPYmplY3Qua2V5cyhkYXRhQ3VhZHJvKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGllZGFkIG9mIHByb3BpZWRhZGVzKSB7XG4gICAgICAgIGlmIChkYXRhQ3VhZHJvW3Byb3BpZWRhZF0gPT09IG51bGwgfHwgZGF0YUN1YWRyb1twcm9waWVkYWRdID09PSBcIlwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlc3RhIHZhY2lhXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmIChcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMSB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyIHx8XG4gICAgICAgICFkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMSB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczJcbiAgICAgICkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gc2UgZW5jdWVudHJhbiBsYXMgcHJvcGllZGFkZXMgYnVpbGRlclwiLCBkYXRhQ3VhZHJvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gU2kgdG9kYXMgbGFzIHByb3BpZWRhZGVzIHRpZW5lbiB2YWxvcmVzLCBkaXNwYXJhIGxhIGZ1bmNpw7NuXG4gICAgc2V0QXNjZW5kZXIodHJ1ZSk7XG5cblxuICAgIH07XG4gIFxuXG4gICAgY29uc3QgY3JlYXRlTmV3Q3VhZHJvID0gKCkgPT4ge1xuICAgICAgbGV0IGxhZG87XG4gICAgICBsZXQgYnVpbGRlcjtcbiAgICAgIGxldCB1c2VySGlqbztcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nIChkYXRhQ3VhZHJvKSBcbiAgICAgIGNvbnNvbGUubG9nKGhpam9EZXIpXG4gICAgICBjb25zb2xlLmxvZyhoaWpvSXpxKVxuXG4gICAgICBpZiAoZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMxICYmICFoaWpvRGVyKSB7XG4gICAgICAgIGxhZG8gPSAnZGVyZWNobyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMxJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5ndWlkZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSBwcm9waWVkYWQgcGVydGVuZWNlIGFsIGxhZG8gZGVyZWNobywgYnVpbGRlcjFcIik7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMiAmJiAhaGlqb0Rlcikge1xuICAgICAgICBsYWRvID0gJ2RlcmVjaG8nO1xuICAgICAgICBidWlsZGVyID0gJ2J1aWxkZXJzMic7XG4gICAgICAgIHVzZXJIaWpvID0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uZ3VpZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGEgcHJvcGllZGFkIHBlcnRlbmVjZSBhbCBsYWRvIGRlcmVjaG8sIGJ1aWxkZXIyXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMSAmJiAhaGlqb0l6cSkge1xuICAgICAgICBsYWRvID0gJ2l6cXVpZXJkbyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMxJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBpenF1aWVyZG8sIGJ1aWxkZXIxXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMiAmJiAhaGlqb0l6cSkge1xuICAgICAgICBsYWRvID0gJ2l6cXVpZXJkbyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMyJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBpenF1aWVyZG8sIGJ1aWxkZXIyXCIpO1xuICAgICAgfSBcbiAgICAgIFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlRvZGFzIGxhcyBwcm9waWVkYWRlcyBlc3TDoW4gdmFjw61hc1wiKTtcbiAgICAgIH0gXG5cbiAgICBcbiAgICAgIC8vIFN1cG9uZ2Ftb3MgcXVlIGNyZWF0ZUN1YWRyb3MgdGFtYmnDqW4gZGV2dWVsdmUgaW5mb3JtYWNpw7NuXG4gICAgICBjcmVhdGVDdWFkcm9zKGxhZG8sIGJ1aWxkZXIsIHVzZXJIaWpvKTtcbiAgICBcbiAgICBcbiAgICB9O1xuICAgIFxuXG4gICAgY29uc3QgYXNjZW5kZXJOaXZlbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHN1Y2Nlc0xldmVsKCk7XG4gICAgICBpZiAoZGF0YVVzZXIudXNlcm5hbWUgIT09IFwiUGFibG9cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJOZWxzb25cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJFc2Nyb1wiICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc2FjdGl2YXIgdXN1YXJpb1wiKVxuICAgICAgICBkZXNhY3RpdmFyVXN1YXJpbyhkYXRhVXNlci51c2VybmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHN1Y2Nlc0xldmVsKCk7XG4gICAgICBkZWxldGVDdWFkcm8oKTtcblxuICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhVXNlci51c2VybmFtZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL3N1YmlyTml2ZWxgLCAgLy8gQWp1c3RhIGxhIHJ1dGEgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pLFxuICAgICAgICB9XG4gICAgICApOyBcblxuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc0xldmVsID0gKCkgPT4ge1xuICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgIHRpdGxlOiBcIlN1YmlzdGUgZGUgbml2ZWxcIixcbiAgICAgICAgaHRtbDogYFxuICAgICAgICBQb3JmYXZvciBhY3R1YWxpemEgbGEgcGFnaW5hIHBhcmEgdmVyIHR1cyBjYW1iaW9zXG4gICAgICBgLFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkX190b3BcIj5cbiAgICAgIHtsZWdlbmQgJiYgdXN1YXJpb3NJbmFjdGl2b3MgJiYgdXN1YXJpb3NJbmFjdGl2b3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgc2hvd0xpc3QgJiYgKFxuICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3VzdWFyaW9zSW5hY3Rpdm9zLm1hcCgodXN1YXJpbykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1c3VhcmlvLl9pZH0gY2xhc3NOYW1lPSdhY2NlcHRQYXknPlxuICAgICAgICAgICAgICA8cD5SZWNpYmlyIHJlZ2FsbyBkZTo8L3A+XG4gICAgICAgICAgICAgIDxzcGFuPnt1c3VhcmlvLmVtYWlsfTwvc3Bhbj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blBheVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2YXJVc3VhcmlvKHVzdWFyaW8pfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJnYig4IDE0MyA4KVwiLCBib3JkZXJDb2xvcjpcInJnYig4IDE0MyA4KVwifX0+XG4gICAgICAgICAgICAgICAgICBBY2VwdGFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5QYXlcIiBvbkNsaWNrPXsoKSA9PiB7ZGVsZXRlVXNlcih1c3VhcmlvKTtzZXRTaG93TGlzdChmYWxzZSk7fX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIiwgYm9yZGVyQ29sb3I6XCJyZWRcIn19PlxuICAgICAgICAgICAgICAgICAgQm9ycmFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD4gKSkgOiAgPHAgY2xhc3NOYW1lPSdub1BheXMnPk5vIHNlIGVuY3VlbnRyYW4gc29saWNpdHVkZXM8L3A+IH1cbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAge3Nob3dCdXR0b24gJiYgZGF0YVVzZXIuY29tcGxldGUgPT09IHRydWUgPyBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRUb1JlZmVyXCIgb25DbGljaz17Y29tcGxldGFyX2N1YWRyb19yZWZlcn0+QWdyZWdhciBhIGN1YWRybyBwYWRyZTwvYnV0dG9uPlxuICAgICAgXG4gICAgICAgIDogPHA+PC9wPiB9XG5cbiAgICAgICAge2FzY2VuZGVyID8gXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkVG9SZWZlclwiIG9uQ2xpY2s9e2FzY2VuZGVyTml2ZWx9PkFzY2VuZGVyIGRlIG5pdmVsPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgOiA8cD48L3A+IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbmFjdGl2ZVVzZXJzO1xuXG4gIC8qIGdpdDogZ2hwX2hnWXN3dkdEcDRDeDFHQ0JSM0l1UFV4S3JxQWlWTzFMc1IyeSAqL1xuXG5cblxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXBpQ29udGV4dCIsIlN3YWwiLCJJbmFjdGl2ZVVzZXJzIiwiaW5hY3RpdmVVc2VycyIsImFjdGl2YXJVc3VhcmlvIiwiZGVzYWN0aXZhclVzdWFyaW8iLCJkYXRhQ3VhZHJvIiwiZGF0YVVzZXIiLCJjdWFkcm9JZEhpam8iLCJ0cmFlckN1YWRyb1BhZHJlIiwiaGlqb0l6cSIsImNhbWJpYXJFc3RhZG9Db21wbGV0ZSIsImhpam9EZXIiLCJjcmVhdGVDdWFkcm9zIiwiZGVsZXRlVXNlciIsImRlbGV0ZUN1YWRybyIsImxlZ2VuZCIsImFzY2VuZGVyIiwic2V0QXNjZW5kZXIiLCJzaG93TGlzdCIsInNldFNob3dMaXN0Iiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJ1c3Vhcmlvc0luYWN0aXZvcyIsInNldFVzdWFyaW9zSW5hY3Rpdm9zIiwiZmlsdGVyIiwidXNlciIsInVzZXJuYW1lIiwibGFkb19kZXJlY2hvIiwiYnVpbGRlcnMxIiwiYnVpbGRlcnMyIiwibGFkb19penF1aWVyZG8iLCJ1c3VhcmlvQWN0aXZhZG8iLCJzZXRVc3VhcmlvQWN0aXZhZG8iLCJjb21wbGV0YXJfY3VhZHJvX3JlZmVyIiwicHJldlVzdWFyaW9zIiwiX2lkIiwiaGFuZGxlUG9zdEFjdGl2YXJVc3VhcmlvIiwidXN1YXJpbyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBY3RpdmFyVXN1YXJpbyIsImNyZWF0ZU5ld0N1YWRybyIsInByb3BpZWRhZGVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BpZWRhZCIsImxhZG8iLCJidWlsZGVyIiwidXNlckhpam8iLCJndWlkZSIsImFzY2VuZGVyTml2ZWwiLCJzdWNjZXNMZXZlbCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQUNLRU5EIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImh0bWwiLCJzaG93Q29uZmlybUJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInVsIiwibWFwIiwibGkiLCJwIiwic3BhbiIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJjb21wbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx\n"));

/***/ })

});