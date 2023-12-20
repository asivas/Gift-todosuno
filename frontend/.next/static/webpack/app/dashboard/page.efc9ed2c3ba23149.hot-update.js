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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n/* harmony import */ var _sideBar_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sideBar/sidebar.css */ \"(app-pages-browser)/./src/components/sideBar/sidebar.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst InactiveUsers = ()=>{\n    _s();\n    const { inactiveUsers, activarUsuario, desactivarUsuario, dataCuadro, dataUser, cuadroIdHijo, traerCuadroPadre, hijoIzq, cambiarEstadoComplete, hijoDer, createCuadros, deleteUser, legend } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext)();\n    const [ascender, setAscender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showList, setShowList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [usuariosInactivos, setUsuariosInactivos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inactiveUsers.filter((user)=>{\n        var _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo_builders2;\n        const username = user.username;\n        // Verifica si alguna de las propiedades existe antes de comparar\n        return username && (username === ((_dataCuadro_lado_derecho_builders1 = dataCuadro.lado_derecho.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username) || username === ((_dataCuadro_lado_derecho_builders2 = dataCuadro.lado_derecho.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username) || username === ((_dataCuadro_lado_izquierdo_builders1 = dataCuadro.lado_izquierdo.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username) || username === ((_dataCuadro_lado_izquierdo_builders2 = dataCuadro.lado_izquierdo.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username));\n    }));\n    const [usuarioActivado, setUsuarioActivado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const completar_cuadro_refer = ()=>{\n        traerCuadroPadre();\n        cambiarEstadoComplete();\n        setShowButton(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        cuadroIdHijo();\n        // Verificar si se activó un usuario recientemente\n        if (usuarioActivado) {\n            // Actualizar la lista de usuarios inactivos eliminando el usuario activado\n            setUsuariosInactivos((prevUsuarios)=>prevUsuarios.filter((user)=>user._id !== usuarioActivado._id));\n            // Manejar la lógica después de activar al usuario\n            handlePostActivarUsuario(usuarioActivado);\n            // Reiniciar el estado de usuario activado\n            setUsuarioActivado(null);\n        }\n    }, [\n        usuarioActivado\n    ]);\n    const handlePostActivarUsuario = (usuario)=>{\n        console.log(\"usuario activado\", usuario);\n        activarUsuario(usuario.username);\n    };\n    const handleActivarUsuario = (usuario)=>{\n        // Actualizar el estado de usuario activado\n        setUsuarioActivado(usuario);\n        setShowList(false);\n        createNewCuadro();\n        // Verificar si alguna propiedad en dataCuadro está vacía\n        const propiedades = Object.keys(dataCuadro);\n        for (const propiedad of propiedades){\n            if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === \"\") {\n                console.log(\"esta vacia\");\n                return;\n            }\n        }\n        if (!dataCuadro.lado_derecho.builders1 || !dataCuadro.lado_derecho.builders2 || !dataCuadro.lado_izquierdo.builders1 || !dataCuadro.lado_izquierdo.builders2) {\n            // console.log(\"No se encuentran las propiedades builder\", dataCuadro);\n            return;\n        }\n        // Si todas las propiedades tienen valores, dispara la función\n        setAscender(true);\n    };\n    const createNewCuadro = ()=>{\n        let lado;\n        let builder;\n        let userHijo;\n        if (dataCuadro.lado_derecho.builders1 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder1\");\n        } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder2\");\n        } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder1\");\n        } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder2\");\n        } else {\n            return console.log(\"Todas las propiedades est\\xe1n vac\\xedas\");\n        }\n        // Supongamos que createCuadros también devuelve información\n        createCuadros(lado, builder, userHijo);\n    };\n    const ascenderNivel = async ()=>{\n        const username = dataUser.username;\n        const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/subirNivel\"), {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username\n            })\n        });\n        if (dataUser.username !== pablo || dataUser.username !== nelson || dataUser.username !== escro) {\n            console.log(\"desactivar usuario\");\n            desactivarUsuario(dataUser.username);\n        }\n    // deleteCuadro();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard__top\",\n        children: [\n            legend && usuariosInactivos && usuariosInactivos.length > 0 ? showList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: usuariosInactivos.map((usuario)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"acceptPay\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Recibir regalo de:\"\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 178,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: usuario.email\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 179,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>handleActivarUsuario(usuario),\n                                        style: {\n                                            backgroundColor: \"rgb(8 143 8)\",\n                                            borderColor: \"rgb(8 143 8)\"\n                                        },\n                                        children: \"Aceptar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 181,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>{\n                                            deleteUser(usuario);\n                                            setShowList(false);\n                                        },\n                                        style: {\n                                            backgroundColor: \"red\",\n                                            borderColor: \"red\"\n                                        },\n                                        children: \"Borrar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 184,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 180,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, usuario._id, true, {\n                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                        lineNumber: 177,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 175,\n                columnNumber: 10\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"noPays\",\n                children: \"No se encuentran solicitudes\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 191,\n                columnNumber: 23\n            }, undefined),\n            showButton && dataUser.complete === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: completar_cuadro_refer,\n                children: \"Agregar a cuadro padre\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 195,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 197,\n                columnNumber: 11\n            }, undefined),\n            ascender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: ascenderNivel,\n                children: \"Ascender de nivel\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 200,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 202,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n        lineNumber: 172,\n        columnNumber: 7\n    }, undefined);\n};\n_s(InactiveUsers, \"knBcdP8Z+WwG759LfOIMLD0qayI=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext\n    ];\n});\n_c = InactiveUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InactiveUsers); /* git: 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 */ \nvar _c;\n$RefreshReg$(_c, \"InactiveUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luYWN0aXZlVXNlcnMvaW5hY3RpdmVVc2Vycy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDUztBQUM1QjtBQUVoQyxNQUFNSSxnQkFBZ0I7O0lBQ2xCLE1BQU0sRUFDSkMsYUFBYSxFQUNiQyxjQUFjLEVBQ2RDLGlCQUFpQixFQUNqQkMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsZ0JBQWdCLEVBQ2hCQyxPQUFPLEVBQ1BDLHFCQUFxQixFQUNyQkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLFVBQVUsRUFDVkMsTUFBTSxFQUNQLEdBQUdkLGtFQUFhQTtJQUVqQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3VCLG1CQUFtQkMscUJBQXFCLEdBQUd4QiwrQ0FBUUEsQ0FDeERJLGNBQWNxQixNQUFNLENBQUMsQ0FBQ0M7WUFPSG5CLG9DQUNBQSxvQ0FDQUEsc0NBQ0FBO1FBVGpCLE1BQU1vQixXQUFXRCxLQUFLQyxRQUFRO1FBRTlCLGlFQUFpRTtRQUNqRSxPQUNFQSxZQUVFQSxDQUFBQSxlQUFhcEIscUNBQUFBLFdBQVdxQixZQUFZLENBQUNDLFNBQVMsY0FBakN0Qix5REFBQUEsbUNBQW1Db0IsUUFBUSxLQUN4REEsZUFBYXBCLHFDQUFBQSxXQUFXcUIsWUFBWSxDQUFDRSxTQUFTLGNBQWpDdkIseURBQUFBLG1DQUFtQ29CLFFBQVEsS0FDeERBLGVBQWFwQix1Q0FBQUEsV0FBV3dCLGNBQWMsQ0FBQ0YsU0FBUyxjQUFuQ3RCLDJEQUFBQSxxQ0FBcUNvQixRQUFRLEtBQzFEQSxlQUFhcEIsdUNBQUFBLFdBQVd3QixjQUFjLENBQUNELFNBQVMs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QWU7Ozs7OzBDQUVyRCw4REFBQ29COzs7Ozs7Ozs7OztBQUdUO0dBdk1JcEU7O1FBZUVELDhEQUFhQTs7O0tBZmZDO0FBeU1KLCtEQUFlQSxhQUFhQSxFQUFDLENBRTdCLGlEQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9pbmFjdGl2ZVVzZXJzL2luYWN0aXZlVXNlcnMuanN4P2RiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBpQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L2FwaUNvbnRleHRcIjtcbmltcG9ydCBcIi4uL3NpZGVCYXIvc2lkZWJhci5jc3NcIjtcblxuY29uc3QgSW5hY3RpdmVVc2VycyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpbmFjdGl2ZVVzZXJzLFxuICAgICAgYWN0aXZhclVzdWFyaW8sXG4gICAgICBkZXNhY3RpdmFyVXN1YXJpbyxcbiAgICAgIGRhdGFDdWFkcm8sXG4gICAgICBkYXRhVXNlcixcbiAgICAgIGN1YWRyb0lkSGlqbyxcbiAgICAgIHRyYWVyQ3VhZHJvUGFkcmUsXG4gICAgICBoaWpvSXpxLFxuICAgICAgY2FtYmlhckVzdGFkb0NvbXBsZXRlLFxuICAgICAgaGlqb0RlcixcbiAgICAgIGNyZWF0ZUN1YWRyb3MsXG4gICAgICBkZWxldGVVc2VyLFxuICAgICAgbGVnZW5kXG4gICAgfSA9IHVzZUFwaUNvbnRleHQoKTtcbiAgICBcbiAgICBjb25zdCBbYXNjZW5kZXIsIHNldEFzY2VuZGVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzaG93TGlzdCwgc2V0U2hvd0xpc3RdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3VzdWFyaW9zSW5hY3Rpdm9zLCBzZXRVc3Vhcmlvc0luYWN0aXZvc10gPSB1c2VTdGF0ZShcbiAgICAgIGluYWN0aXZlVXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICBcbiAgICAgICAgLy8gVmVyaWZpY2Egc2kgYWxndW5hIGRlIGxhcyBwcm9waWVkYWRlcyBleGlzdGUgYW50ZXMgZGUgY29tcGFyYXJcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB1c2VybmFtZSAmJlxuICAgICAgICAgIChcbiAgICAgICAgICAgIHVzZXJuYW1lID09PSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczE/LnVzZXJuYW1lIHx8XG4gICAgICAgICAgICB1c2VybmFtZSA9PT0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMxPy51c2VybmFtZSB8fFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyPy51c2VybmFtZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBjb25zdCBbdXN1YXJpb0FjdGl2YWRvLCBzZXRVc3VhcmlvQWN0aXZhZG9dID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAgIGNvbnN0IGNvbXBsZXRhcl9jdWFkcm9fcmVmZXIgPSAoKSA9PiB7XG4gICAgICB0cmFlckN1YWRyb1BhZHJlKCk7XG4gICAgICBjYW1iaWFyRXN0YWRvQ29tcGxldGUoKTtcbiAgICAgIHNldFNob3dCdXR0b24oZmFsc2UpO1xuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgY3VhZHJvSWRIaWpvKCk7XG4gICAgICAvLyBWZXJpZmljYXIgc2kgc2UgYWN0aXbDsyB1biB1c3VhcmlvIHJlY2llbnRlbWVudGVcbiAgICAgIGlmICh1c3VhcmlvQWN0aXZhZG8pIHtcbiAgICAgICAgLy8gQWN0dWFsaXphciBsYSBsaXN0YSBkZSB1c3VhcmlvcyBpbmFjdGl2b3MgZWxpbWluYW5kbyBlbCB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9zSW5hY3Rpdm9zKChwcmV2VXN1YXJpb3MpID0+XG4gICAgICAgICAgcHJldlVzdWFyaW9zLmZpbHRlcigodXNlcikgPT4gdXNlci5faWQgIT09IHVzdWFyaW9BY3RpdmFkby5faWQpXG4gICAgICAgICk7XG4gIFxuICAgICAgICAvLyBNYW5lamFyIGxhIGzDs2dpY2EgZGVzcHXDqXMgZGUgYWN0aXZhciBhbCB1c3VhcmlvXG4gICAgICAgIGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyh1c3VhcmlvQWN0aXZhZG8pO1xuICBcbiAgICAgICAgLy8gUmVpbmljaWFyIGVsIGVzdGFkbyBkZSB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICAgIHNldFVzdWFyaW9BY3RpdmFkbyhudWxsKTtcbiAgICAgIH1cbiAgICB9LCBbdXN1YXJpb0FjdGl2YWRvXSk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyA9ICh1c3VhcmlvKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInVzdWFyaW8gYWN0aXZhZG9cIiwgdXN1YXJpbyk7XG4gICAgICBhY3RpdmFyVXN1YXJpbyh1c3VhcmlvLnVzZXJuYW1lKTtcbiAgXG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlQWN0aXZhclVzdWFyaW8gPSAodXN1YXJpbykgPT4ge1xuICAgICAgLy8gQWN0dWFsaXphciBlbCBlc3RhZG8gZGUgdXN1YXJpbyBhY3RpdmFkb1xuICAgICAgc2V0VXN1YXJpb0FjdGl2YWRvKHVzdWFyaW8pO1xuICAgICAgc2V0U2hvd0xpc3QoZmFsc2UpO1xuXG4gICAgICBjcmVhdGVOZXdDdWFkcm8oKTtcbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2FyIHNpIGFsZ3VuYSBwcm9waWVkYWQgZW4gZGF0YUN1YWRybyBlc3TDoSB2YWPDrWFcbiAgICAgIGNvbnN0IHByb3BpZWRhZGVzID0gT2JqZWN0LmtleXMoZGF0YUN1YWRybyk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BpZWRhZCBvZiBwcm9waWVkYWRlcykge1xuICAgICAgICBpZiAoZGF0YUN1YWRyb1twcm9waWVkYWRdID09PSBudWxsIHx8IGRhdGFDdWFkcm9bcHJvcGllZGFkXSA9PT0gXCJcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXN0YSB2YWNpYVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICBpZiAoXG4gICAgICAgICFkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczEgfHxcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMiB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczEgfHxcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyXG4gICAgICApIHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vIHNlIGVuY3VlbnRyYW4gbGFzIHByb3BpZWRhZGVzIGJ1aWxkZXJcIiwgZGF0YUN1YWRybyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2kgdG9kYXMgbGFzIHByb3BpZWRhZGVzIHRpZW5lbiB2YWxvcmVzLCBkaXNwYXJhIGxhIGZ1bmNpw7NuXG4gICBcbiAgICBzZXRBc2NlbmRlcih0cnVlKTtcblxuXG4gICAgfTtcbiAgXG5cbiAgICBjb25zdCBjcmVhdGVOZXdDdWFkcm8gPSAoKSA9PiB7XG4gICAgICBsZXQgbGFkbztcbiAgICAgIGxldCBidWlsZGVyO1xuICAgICAgbGV0IHVzZXJIaWpvO1xuICAgIFxuICAgICAgaWYgKGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMSAmJiAhaGlqb0Rlcikge1xuICAgICAgICBsYWRvID0gJ2RlcmVjaG8nO1xuICAgICAgICBidWlsZGVyID0gJ2J1aWxkZXJzMSc7XG4gICAgICAgIHVzZXJIaWpvID0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uZ3VpZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGEgcHJvcGllZGFkIHBlcnRlbmVjZSBhbCBsYWRvIGRlcmVjaG8sIGJ1aWxkZXIxXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczIgJiYgIWhpam9EZXIpIHtcbiAgICAgICAgbGFkbyA9ICdkZXJlY2hvJztcbiAgICAgICAgYnVpbGRlciA9ICdidWlsZGVyczInO1xuICAgICAgICB1c2VySGlqbyA9IGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBkZXJlY2hvLCBidWlsZGVyMlwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczEgJiYgIWhpam9JenEpIHtcbiAgICAgICAgbGFkbyA9ICdpenF1aWVyZG8nO1xuICAgICAgICBidWlsZGVyID0gJ2J1aWxkZXJzMSc7XG4gICAgICAgIHVzZXJIaWpvID0gZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5ndWlkZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSBwcm9waWVkYWQgcGVydGVuZWNlIGFsIGxhZG8gaXpxdWllcmRvLCBidWlsZGVyMVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczIgJiYgIWhpam9JenEpIHtcbiAgICAgICAgbGFkbyA9ICdpenF1aWVyZG8nO1xuICAgICAgICBidWlsZGVyID0gJ2J1aWxkZXJzMic7XG4gICAgICAgIHVzZXJIaWpvID0gZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5ndWlkZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSBwcm9waWVkYWQgcGVydGVuZWNlIGFsIGxhZG8gaXpxdWllcmRvLCBidWlsZGVyMlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIlRvZGFzIGxhcyBwcm9waWVkYWRlcyBlc3TDoW4gdmFjw61hc1wiKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIFN1cG9uZ2Ftb3MgcXVlIGNyZWF0ZUN1YWRyb3MgdGFtYmnDqW4gZGV2dWVsdmUgaW5mb3JtYWNpw7NuXG4gICAgICBjcmVhdGVDdWFkcm9zKGxhZG8sIGJ1aWxkZXIsIHVzZXJIaWpvKTtcbiAgICBcbiAgICBcbiAgICB9O1xuICAgIFxuXG4gICAgY29uc3QgYXNjZW5kZXJOaXZlbCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhVXNlci51c2VybmFtZTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL3N1YmlyTml2ZWxgLCAgLy8gQWp1c3RhIGxhIHJ1dGEgc2Vnw7puIHR1IGNvbmZpZ3VyYWNpw7NuXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pLFxuICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIGlmIChkYXRhVXNlci51c2VybmFtZSAhPT0gcGFibG8gfHwgZGF0YVVzZXIudXNlcm5hbWUgIT09IG5lbHNvbiB8fCBkYXRhVXNlci51c2VybmFtZSAhPT0gZXNjcm8gKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVzYWN0aXZhciB1c3VhcmlvXCIpXG4gICAgICAgIGRlc2FjdGl2YXJVc3VhcmlvKGRhdGFVc2VyLnVzZXJuYW1lKTtcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgIC8vIGRlbGV0ZUN1YWRybygpO1xuICAgIH1cblxuICAgIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRfX3RvcFwiPlxuICAgICAge2xlZ2VuZCAmJiB1c3Vhcmlvc0luYWN0aXZvcyAmJiB1c3Vhcmlvc0luYWN0aXZvcy5sZW5ndGggPiAwID8gKFxuICAgICAgICBzaG93TGlzdCAmJiAoXG4gICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dXN1YXJpb3NJbmFjdGl2b3MubWFwKCh1c3VhcmlvKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3VzdWFyaW8uX2lkfSBjbGFzc05hbWU9J2FjY2VwdFBheSc+XG4gICAgICAgICAgICAgIDxwPlJlY2liaXIgcmVnYWxvIGRlOjwvcD5cbiAgICAgICAgICAgICAgPHNwYW4+e3VzdWFyaW8uZW1haWx9PC9zcGFuPiBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuUGF5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQWN0aXZhclVzdWFyaW8odXN1YXJpbyl9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmdiKDggMTQzIDgpXCIsIGJvcmRlckNvbG9yOlwicmdiKDggMTQzIDgpXCJ9fT5cbiAgICAgICAgICAgICAgICAgIEFjZXB0YXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blBheVwiIG9uQ2xpY2s9eygpID0+IHtkZWxldGVVc2VyKHVzdWFyaW8pO3NldFNob3dMaXN0KGZhbHNlKTt9fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJlZFwiLCBib3JkZXJDb2xvcjpcInJlZFwifX0+XG4gICAgICAgICAgICAgICAgICBCb3JyYXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPiApKSA6ICA8cCBjbGFzc05hbWU9J25vUGF5cyc+Tm8gc2UgZW5jdWVudHJhbiBzb2xpY2l0dWRlczwvcD4gfVxuICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB7c2hvd0J1dHRvbiAmJiBkYXRhVXNlci5jb21wbGV0ZSA9PT0gdHJ1ZSA/IFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZFRvUmVmZXJcIiBvbkNsaWNrPXtjb21wbGV0YXJfY3VhZHJvX3JlZmVyfT5BZ3JlZ2FyIGEgY3VhZHJvIHBhZHJlPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgOiA8cD48L3A+IH1cblxuICAgICAgICB7YXNjZW5kZXIgPyBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRUb1JlZmVyXCIgb25DbGljaz17YXNjZW5kZXJOaXZlbH0+QXNjZW5kZXIgZGUgbml2ZWw8L2J1dHRvbj5cbiAgICAgIFxuICAgICAgICA6IDxwPjwvcD4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEluYWN0aXZlVXNlcnM7XG5cbiAgLyogZ2l0OiBnaHBfaGdZc3d2R0RwNEN4MUdDQlIzSXVQVXhLcnFBaVZPMUxzUjJ5ICovXG5cblxuXG4gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VBcGlDb250ZXh0IiwiSW5hY3RpdmVVc2VycyIsImluYWN0aXZlVXNlcnMiLCJhY3RpdmFyVXN1YXJpbyIsImRlc2FjdGl2YXJVc3VhcmlvIiwiZGF0YUN1YWRybyIsImRhdGFVc2VyIiwiY3VhZHJvSWRIaWpvIiwidHJhZXJDdWFkcm9QYWRyZSIsImhpam9JenEiLCJjYW1iaWFyRXN0YWRvQ29tcGxldGUiLCJoaWpvRGVyIiwiY3JlYXRlQ3VhZHJvcyIsImRlbGV0ZVVzZXIiLCJsZWdlbmQiLCJhc2NlbmRlciIsInNldEFzY2VuZGVyIiwic2hvd0xpc3QiLCJzZXRTaG93TGlzdCIsInNob3dCdXR0b24iLCJzZXRTaG93QnV0dG9uIiwidXN1YXJpb3NJbmFjdGl2b3MiLCJzZXRVc3Vhcmlvc0luYWN0aXZvcyIsImZpbHRlciIsInVzZXIiLCJ1c2VybmFtZSIsImxhZG9fZGVyZWNobyIsImJ1aWxkZXJzMSIsImJ1aWxkZXJzMiIsImxhZG9faXpxdWllcmRvIiwidXN1YXJpb0FjdGl2YWRvIiwic2V0VXN1YXJpb0FjdGl2YWRvIiwiY29tcGxldGFyX2N1YWRyb19yZWZlciIsInByZXZVc3VhcmlvcyIsIl9pZCIsImhhbmRsZVBvc3RBY3RpdmFyVXN1YXJpbyIsInVzdWFyaW8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQWN0aXZhclVzdWFyaW8iLCJjcmVhdGVOZXdDdWFkcm8iLCJwcm9waWVkYWRlcyIsIk9iamVjdCIsImtleXMiLCJwcm9waWVkYWQiLCJsYWRvIiwiYnVpbGRlciIsInVzZXJIaWpvIiwiZ3VpZGUiLCJhc2NlbmRlck5pdmVsIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWJsbyIsIm5lbHNvbiIsImVzY3JvIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJsaSIsInAiLCJzcGFuIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImNvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx\n"));

/***/ })

});