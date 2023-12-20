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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n/* harmony import */ var _sideBar_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sideBar/sidebar.css */ \"(app-pages-browser)/./src/components/sideBar/sidebar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst InactiveUsers = ()=>{\n    _s();\n    const { inactiveUsers, activarUsuario, desactivarUsuario, dataCuadro, dataUser, cuadroIdHijo, traerCuadroPadre, hijoIzq, cambiarEstadoComplete, hijoDer, createCuadros, deleteUser, legend } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext)();\n    const [ascender, setAscender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showList, setShowList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [usuariosInactivos, setUsuariosInactivos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inactiveUsers.filter((user)=>{\n        var _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo_builders2;\n        const username = user.username;\n        // Verifica si alguna de las propiedades existe antes de comparar\n        return username && (username === ((_dataCuadro_lado_derecho_builders1 = dataCuadro.lado_derecho.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username) || username === ((_dataCuadro_lado_derecho_builders2 = dataCuadro.lado_derecho.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username) || username === ((_dataCuadro_lado_izquierdo_builders1 = dataCuadro.lado_izquierdo.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username) || username === ((_dataCuadro_lado_izquierdo_builders2 = dataCuadro.lado_izquierdo.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username));\n    }));\n    const [usuarioActivado, setUsuarioActivado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const completar_cuadro_refer = ()=>{\n        traerCuadroPadre();\n        cambiarEstadoComplete();\n        setShowButton(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        cuadroIdHijo();\n        // Verificar si se activó un usuario recientemente\n        if (usuarioActivado) {\n            // Actualizar la lista de usuarios inactivos eliminando el usuario activado\n            setUsuariosInactivos((prevUsuarios)=>prevUsuarios.filter((user)=>user._id !== usuarioActivado._id));\n            // Manejar la lógica después de activar al usuario\n            handlePostActivarUsuario(usuarioActivado);\n            // Reiniciar el estado de usuario activado\n            setUsuarioActivado(null);\n        }\n    }, [\n        usuarioActivado\n    ]);\n    const handlePostActivarUsuario = (usuario)=>{\n        console.log(\"usuario activado\", usuario);\n        activarUsuario(usuario.username);\n    };\n    const handleActivarUsuario = (usuario)=>{\n        // Actualizar el estado de usuario activado\n        setUsuarioActivado(usuario);\n        setShowList(false);\n        createNewCuadro();\n        // Verificar si alguna propiedad en dataCuadro está vacía\n        const propiedades = Object.keys(dataCuadro);\n        for (const propiedad of propiedades){\n            if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === \"\") {\n                console.log(\"esta vacia\");\n                return;\n            }\n        }\n        if (!dataCuadro.lado_derecho.builders1 || !dataCuadro.lado_derecho.builders2 || !dataCuadro.lado_izquierdo.builders1 || !dataCuadro.lado_izquierdo.builders2) {\n            // console.log(\"No se encuentran las propiedades builder\", dataCuadro);\n            return;\n        }\n        // Si todas las propiedades tienen valores, dispara la función\n        setAscender(true);\n    };\n    const createNewCuadro = ()=>{\n        let lado;\n        let builder;\n        let userHijo;\n        console.log(dataCuadro);\n        if (dataCuadro.lado_derecho.builders1 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder1\");\n        } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder2\");\n        } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder1\");\n        } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder2\");\n        } else {\n            return console.log(\"Todas las propiedades est\\xe1n vac\\xedas\");\n        }\n        // Supongamos que createCuadros también devuelve información\n        createCuadros(lado, builder, userHijo);\n    };\n    const ascenderNivel = async ()=>{\n        if (dataUser.username !== \"pablo\" && dataUser.username !== \"nelson\" && dataUser.username !== \"escro\") {\n            console.log(\"desactivar usuario\");\n            desactivarUsuario(dataUser.username);\n        }\n        const username = dataUser.username;\n        const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/subirNivel\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username\n            })\n        });\n    // deleteCuadro();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard__top\",\n        children: [\n            legend && usuariosInactivos && usuariosInactivos.length > 0 ? showList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: usuariosInactivos.map((usuario)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"acceptPay\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Recibir regalo de:\"\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 179,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: usuario.email\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 180,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>handleActivarUsuario(usuario),\n                                        style: {\n                                            backgroundColor: \"rgb(8 143 8)\",\n                                            borderColor: \"rgb(8 143 8)\"\n                                        },\n                                        children: \"Aceptar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 182,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>{\n                                            deleteUser(usuario);\n                                            setShowList(false);\n                                        },\n                                        style: {\n                                            backgroundColor: \"red\",\n                                            borderColor: \"red\"\n                                        },\n                                        children: \"Borrar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 185,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 181,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, usuario._id, true, {\n                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                        lineNumber: 178,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 176,\n                columnNumber: 10\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"noPays\",\n                children: \"No se encuentran solicitudes\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 192,\n                columnNumber: 23\n            }, undefined),\n            showButton && dataUser.complete === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: completar_cuadro_refer,\n                children: \"Agregar a cuadro padre\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 196,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 198,\n                columnNumber: 11\n            }, undefined),\n            ascender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: ascenderNivel,\n                children: \"Ascender de nivel\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 201,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 203,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n        lineNumber: 173,\n        columnNumber: 7\n    }, undefined);\n};\n_s(InactiveUsers, \"knBcdP8Z+WwG759LfOIMLD0qayI=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext\n    ];\n});\n_c = InactiveUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InactiveUsers); /* git: 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 */ \nvar _c;\n$RefreshReg$(_c, \"InactiveUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luYWN0aXZlVXNlcnMvaW5hY3RpdmVVc2Vycy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDUztBQUM1QjtBQUVoQyxNQUFNSSxnQkFBZ0I7O0lBQ2xCLE1BQU0sRUFDSkMsYUFBYSxFQUNiQyxjQUFjLEVBQ2RDLGlCQUFpQixFQUNqQkMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsZ0JBQWdCLEVBQ2hCQyxPQUFPLEVBQ1BDLHFCQUFxQixFQUNyQkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLFVBQVUsRUFDVkMsTUFBTSxFQUNQLEdBQUdkLGtFQUFhQTtJQUVqQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3VCLG1CQUFtQkMscUJBQXFCLEdBQUd4QiwrQ0FBUUEsQ0FDeERJLGNBQWNxQixNQUFNLENBQUMsQ0FBQ0M7WUFPSG5CLG9DQUNBQSxvQ0FDQUEsc0NBQ0FBO1FBVGpCLE1BQU1vQixXQUFXRCxLQUFLQyxRQUFRO1FBRTlCLGlFQUFpRTtRQUNqRSxPQUNFQSxZQUVFQSxDQUFBQSxlQUFhcEIscUNBQUFBLFdBQVdxQixZQUFZLENBQUNDLFNBQVMsY0FBakN0Qix5REFBQUEsbUNBQW1Db0IsUUFBUSxLQUN4REEsZUFBYXBCLHFDQUFBQSxXQUFXcUIsWUFBWSxDQUFDRSxTQUFTLGNBQWpDdkIseURBQUFBLG1DQUFtQ29CLFFBQVEsS0FDeERBLGVBQWFwQix1Q0FBQUEsV0FBV3dCLGNBQWMsQ0FBQ0YsU0FBUyxjQUFuQ3RCLDJEQUFBQSxxQ0FBcUNvQixRQUFRLEtBQzFEQSxlQUFhcEIsdUNBQUFBLFdBQVd3QixjQUFjLENBQUNELFNBQVMs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QUFhUyxTQUFTckI7MEJBQWU7Ozs7OzBDQUVyRCw4REFBQ2lCOzs7Ozs7Ozs7OztBQUdUO0dBeE1JakU7O1FBZUVELDhEQUFhQTs7O0tBZmZDO0FBME1KLCtEQUFlQSxhQUFhQSxFQUFDLENBRTdCLGlEQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbmFjdGl2ZVVzZXJzL2luYWN0aXZlVXNlcnMuanN4P2RiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBpQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2FwaUNvbnRleHRcIjtcbmltcG9ydCBcIi4uL3NpZGVCYXIvc2lkZWJhci5jc3NcIjtcblxuY29uc3QgSW5hY3RpdmVVc2VycyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbmFjdGl2ZVVzZXJzLFxuICAgICAgYWN0aXZhclVzdWFyaW8sXG4gICAgICBkZXNhY3RpdmFyVXN1YXJpbyxcbiAgICAgIGRhdGFDdWFkcm8sXG4gICAgICBkYXRhVXNlcixcbiAgICAgIGN1YWRyb0lkSGlqbyxcbiAgICAgIHRyYWVyQ3VhZHJvUGFkcmUsXG4gICAgICBoaWpvSXpxLFxuICAgICAgY2FtYmlhckVzdGFkb0NvbXBsZXRlLFxuICAgICAgaGlqb0RlcixcbiAgICAgIGNyZWF0ZUN1YWRyb3MsXG4gICAgICBkZWxldGVVc2VyLFxuICAgICAgbGVnZW5kXG4gICAgfSA9IHVzZUFwaUNvbnRleHQoKTtcbiAgICBcbiAgICBjb25zdCBbYXNjZW5kZXIsIHNldEFzY2VuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzaG93TGlzdCwgc2V0U2hvd0xpc3RdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3VzdWFyaW9zSW5hY3Rpdm9zLCBzZXRVc3Vhcmlvc0luYWN0aXZvc10gPSB1c2VTdGF0ZShcbiAgICAgIGluYWN0aXZlVXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICBcbiAgICAgICAgLy8gVmVyaWZpY2Egc2kgYWxndW5hIGRlIGxhcyBwcm9waWVkYWRlcyBleGlzdGUgYW50ZXMgZGUgY29tcGFyYXJcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB1c2VybmFtZSAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgIHVzZXJuYW1lID09PSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczE/LnVzZXJuYW1lIHx8XG4gICAgICAgICAgICB1c2VybmFtZSA9PT0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMxPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyPy51c2VybmFtZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBbdXN1YXJpb0FjdGl2YWRvLCBzZXRVc3VhcmlvQWN0aXZhZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAgIGNvbnN0IGNvbXBsZXRhcl9jdWFkcm9fcmVmZXIgPSAoKSA9PiB7XG4gICAgICB0cmFlckN1YWRyb1BhZHJlKCk7XG4gICAgICBjYW1iaWFyRXN0YWRvQ29tcGxldGUoKTtcbiAgICAgIHNldFNob3dCdXR0b24oZmFsc2UpO1xuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgY3VhZHJvSWRIaWpvKCk7XG4gICAgICAvLyBWZXJpZmljYXIgc2kgc2UgYWN0aXbDsyB1biB1c3VhcmlvIHJlY2llbnRlbWVudGVcbiAgICAgIGlmICh1c3VhcmlvQWN0aXZhZG8pIHtcbiAgICAgICAgLy8gQWN0dWFsaXphciBsYSBsaXN0YSBkZSB1c3VhcmlvcyBpbmFjdGl2b3MgZWxpbWluYW5kbyBlbCB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9zSW5hY3Rpdm9zKChwcmV2VXN1YXJpb3MpID0+XG4gICAgICAgICAgcHJldlVzdWFyaW9zLmZpbHRlcigodXNlcikgPT4gdXNlci5faWQgIT09IHVzdWFyaW9BY3RpdmFkby5faWQpXG4gICAgICAgICk7XG4gIFxuICAgICAgICAvLyBNYW5lamFyIGxhIGzDs2dpY2EgZGVzcHXDqXMgZGUgYWN0aXZhciBhbCB1c3VhcmlvXG4gICAgICAgIGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyh1c3VhcmlvQWN0aXZhZG8pO1xuICBcbiAgICAgICAgLy8gUmVpbmljaWFyIGVsIGVzdGFkbyBkZSB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9BY3RpdmFkbyhudWxsKTtcbiAgICAgIH1cbiAgICB9LCBbdXN1YXJpb0FjdGl2YWRvXSk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyA9ICh1c3VhcmlvKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzdWFyaW8gYWN0aXZhZG9cIiwgdXN1YXJpbyk7XG4gICAgICBhY3RpdmFyVXN1YXJpbyh1c3VhcmlvLnVzZXJuYW1lKTtcbiAgXG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlQWN0aXZhclVzdWFyaW8gPSAodXN1YXJpbykgPT4ge1xuICAgICAgLy8gQWN0dWFsaXphciBlbCBlc3RhZG8gZGUgdXN1YXJpbyBhY3RpdmFkb1xuICAgICAgc2V0VXN1YXJpb0FjdGl2YWRvKHVzdWFyaW8pO1xuICAgICAgc2V0U2hvd0xpc3QoZmFsc2UpO1xuXG4gICAgICBjcmVhdGVOZXdDdWFkcm8oKTtcbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2FyIHNpIGFsZ3VuYSBwcm9waWVkYWQgZW4gZGF0YUN1YWRybyBlc3TDoSB2YWPDrWFcbiAgICAgIGNvbnN0IHByb3BpZWRhZGVzID0gT2JqZWN0LmtleXMoZGF0YUN1YWRybyk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BpZWRhZCBvZiBwcm9waWVkYWRlcykge1xuICAgICAgICBpZiAoZGF0YUN1YWRyb1twcm9waWVkYWRdID09PSBudWxsIHx8IGRhdGFDdWFkcm9bcHJvcGllZGFkXSA9PT0gXCJcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXN0YSB2YWNpYVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpZiAoXG4gICAgICAgICFkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczEgfHxcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMiB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczEgfHxcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyXG4gICAgICApIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vIHNlIGVuY3VlbnRyYW4gbGFzIHByb3BpZWRhZGVzIGJ1aWxkZXJcIiwgZGF0YUN1YWRybyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2kgdG9kYXMgbGFzIHByb3BpZWRhZGVzIHRpZW5lbiB2YWxvcmVzLCBkaXNwYXJhIGxhIGZ1bmNpw7NuXG4gICBcbiAgICBzZXRBc2NlbmRlcih0cnVlKTtcblxuXG4gICAgfTtcbiAgXG5cbiAgICBjb25zdCBjcmVhdGVOZXdDdWFkcm8gPSAoKSA9PiB7XG4gICAgICBsZXQgbGFkbztcbiAgICAgIGxldCBidWlsZGVyO1xuICAgICAgbGV0IHVzZXJIaWpvO1xuICAgIFxuICAgICAgY29uc29sZS5sb2cgKGRhdGFDdWFkcm8pXG4gICAgICBpZiAoZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMxICYmICFoaWpvRGVyKSB7XG4gICAgICAgIGxhZG8gPSAnZGVyZWNobyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMxJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5ndWlkZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSBwcm9waWVkYWQgcGVydGVuZWNlIGFsIGxhZG8gZGVyZWNobywgYnVpbGRlcjFcIik7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMiAmJiAhaGlqb0Rlcikge1xuICAgICAgICBsYWRvID0gJ2RlcmVjaG8nO1xuICAgICAgICBidWlsZGVyID0gJ2J1aWxkZXJzMic7XG4gICAgICAgIHVzZXJIaWpvID0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uZ3VpZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGEgcHJvcGllZGFkIHBlcnRlbmVjZSBhbCBsYWRvIGRlcmVjaG8sIGJ1aWxkZXIyXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMSAmJiAhaGlqb0l6cSkge1xuICAgICAgICBsYWRvID0gJ2l6cXVpZXJkbyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMxJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBpenF1aWVyZG8sIGJ1aWxkZXIxXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMiAmJiAhaGlqb0l6cSkge1xuICAgICAgICBsYWRvID0gJ2l6cXVpZXJkbyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMyJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBpenF1aWVyZG8sIGJ1aWxkZXIyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVG9kYXMgbGFzIHByb3BpZWRhZGVzIGVzdMOhbiB2YWPDrWFzXCIpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gU3Vwb25nYW1vcyBxdWUgY3JlYXRlQ3VhZHJvcyB0YW1iacOpbiBkZXZ1ZWx2ZSBpbmZvcm1hY2nDs25cbiAgICAgIGNyZWF0ZUN1YWRyb3MobGFkbywgYnVpbGRlciwgdXNlckhpam8pO1xuICAgIFxuICAgIFxuICAgIH07XG4gICAgXG5cbiAgICBjb25zdCBhc2NlbmRlck5pdmVsID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICBpZiAoZGF0YVVzZXIudXNlcm5hbWUgIT09IFwicGFibG9cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJuZWxzb25cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJlc2Nyb1wiICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc2FjdGl2YXIgdXN1YXJpb1wiKVxuICAgICAgICBkZXNhY3RpdmFyVXN1YXJpbyhkYXRhVXNlci51c2VybmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YVVzZXIudXNlcm5hbWU7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkR9dXNlci9zdWJpck5pdmVsYCwgIC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biB0dSBjb25maWd1cmFjacOzblxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSB9KSxcbiAgICAgICAgfVxuICAgICAgKTsgXG5cblxuICAgICAvLyBkZWxldGVDdWFkcm8oKTtcbiAgICB9XG5cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkX190b3BcIj5cbiAgICAgIHtsZWdlbmQgJiYgdXN1YXJpb3NJbmFjdGl2b3MgJiYgdXN1YXJpb3NJbmFjdGl2b3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgc2hvd0xpc3QgJiYgKFxuICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3VzdWFyaW9zSW5hY3Rpdm9zLm1hcCgodXN1YXJpbykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1c3VhcmlvLl9pZH0gY2xhc3NOYW1lPSdhY2NlcHRQYXknPlxuICAgICAgICAgICAgICA8cD5SZWNpYmlyIHJlZ2FsbyBkZTo8L3A+XG4gICAgICAgICAgICAgIDxzcGFuPnt1c3VhcmlvLmVtYWlsfTwvc3Bhbj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blBheVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2YXJVc3VhcmlvKHVzdWFyaW8pfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJnYig4IDE0MyA4KVwiLCBib3JkZXJDb2xvcjpcInJnYig4IDE0MyA4KVwifX0+XG4gICAgICAgICAgICAgICAgICBBY2VwdGFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5QYXlcIiBvbkNsaWNrPXsoKSA9PiB7ZGVsZXRlVXNlcih1c3VhcmlvKTtzZXRTaG93TGlzdChmYWxzZSk7fX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIiwgYm9yZGVyQ29sb3I6XCJyZWRcIn19PlxuICAgICAgICAgICAgICAgICAgQm9ycmFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD4gKSkgOiAgPHAgY2xhc3NOYW1lPSdub1BheXMnPk5vIHNlIGVuY3VlbnRyYW4gc29saWNpdHVkZXM8L3A+IH1cbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAge3Nob3dCdXR0b24gJiYgZGF0YVVzZXIuY29tcGxldGUgPT09IHRydWUgPyBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRUb1JlZmVyXCIgb25DbGljaz17Y29tcGxldGFyX2N1YWRyb19yZWZlcn0+QWdyZWdhciBhIGN1YWRybyBwYWRyZTwvYnV0dG9uPlxuICAgICAgXG4gICAgICAgIDogPHA+PC9wPiB9XG5cbiAgICAgICAge2FzY2VuZGVyID8gXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkVG9SZWZlclwiIG9uQ2xpY2s9e2FzY2VuZGVyTml2ZWx9PkFzY2VuZGVyIGRlIG5pdmVsPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgOiA8cD48L3A+IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbmFjdGl2ZVVzZXJzO1xuXG4gIC8qIGdpdDogZ2hwX2hnWXN3dkdEcDRDeDFHQ0JSM0l1UFV4S3JxQWlWTzFMc1IyeSAqL1xuXG5cblxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXBpQ29udGV4dCIsIkluYWN0aXZlVXNlcnMiLCJpbmFjdGl2ZVVzZXJzIiwiYWN0aXZhclVzdWFyaW8iLCJkZXNhY3RpdmFyVXN1YXJpbyIsImRhdGFDdWFkcm8iLCJkYXRhVXNlciIsImN1YWRyb0lkSGlqbyIsInRyYWVyQ3VhZHJvUGFkcmUiLCJoaWpvSXpxIiwiY2FtYmlhckVzdGFkb0NvbXBsZXRlIiwiaGlqb0RlciIsImNyZWF0ZUN1YWRyb3MiLCJkZWxldGVVc2VyIiwibGVnZW5kIiwiYXNjZW5kZXIiLCJzZXRBc2NlbmRlciIsInNob3dMaXN0Iiwic2V0U2hvd0xpc3QiLCJzaG93QnV0dG9uIiwic2V0U2hvd0J1dHRvbiIsInVzdWFyaW9zSW5hY3Rpdm9zIiwic2V0VXN1YXJpb3NJbmFjdGl2b3MiLCJmaWx0ZXIiLCJ1c2VyIiwidXNlcm5hbWUiLCJsYWRvX2RlcmVjaG8iLCJidWlsZGVyczEiLCJidWlsZGVyczIiLCJsYWRvX2l6cXVpZXJkbyIsInVzdWFyaW9BY3RpdmFkbyIsInNldFVzdWFyaW9BY3RpdmFkbyIsImNvbXBsZXRhcl9jdWFkcm9fcmVmZXIiLCJwcmV2VXN1YXJpb3MiLCJfaWQiLCJoYW5kbGVQb3N0QWN0aXZhclVzdWFyaW8iLCJ1c3VhcmlvIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFjdGl2YXJVc3VhcmlvIiwiY3JlYXRlTmV3Q3VhZHJvIiwicHJvcGllZGFkZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvcGllZGFkIiwibGFkbyIsImJ1aWxkZXIiLCJ1c2VySGlqbyIsImd1aWRlIiwiYXNjZW5kZXJOaXZlbCIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQUNLRU5EIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJsaSIsInAiLCJzcGFuIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx\n"));

/***/ })

});