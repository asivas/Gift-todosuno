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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_apiContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/apiContext */ \"(app-pages-browser)/./context/apiContext.js\");\n/* harmony import */ var _sideBar_sidebar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sideBar/sidebar.css */ \"(app-pages-browser)/./src/components/sideBar/sidebar.css\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ \"(app-pages-browser)/./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst InactiveUsers = ()=>{\n    _s();\n    const { inactiveUsers, activarUsuario, desactivarUsuario, dataCuadro, dataUser, cuadroIdHijo, traerCuadroPadre, hijoIzq, cambiarEstadoComplete, hijoDer, createCuadros, deleteUser, legend } = (0,_context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext)();\n    const [ascender, setAscender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showList, setShowList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [usuariosInactivos, setUsuariosInactivos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(inactiveUsers.filter((user)=>{\n        var _dataCuadro_lado_derecho_builders1, _dataCuadro_lado_derecho_builders2, _dataCuadro_lado_izquierdo_builders1, _dataCuadro_lado_izquierdo_builders2;\n        const username = user.username;\n        // Verifica si alguna de las propiedades existe antes de comparar\n        return username && (username === ((_dataCuadro_lado_derecho_builders1 = dataCuadro.lado_derecho.builders1) === null || _dataCuadro_lado_derecho_builders1 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders1.username) || username === ((_dataCuadro_lado_derecho_builders2 = dataCuadro.lado_derecho.builders2) === null || _dataCuadro_lado_derecho_builders2 === void 0 ? void 0 : _dataCuadro_lado_derecho_builders2.username) || username === ((_dataCuadro_lado_izquierdo_builders1 = dataCuadro.lado_izquierdo.builders1) === null || _dataCuadro_lado_izquierdo_builders1 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders1.username) || username === ((_dataCuadro_lado_izquierdo_builders2 = dataCuadro.lado_izquierdo.builders2) === null || _dataCuadro_lado_izquierdo_builders2 === void 0 ? void 0 : _dataCuadro_lado_izquierdo_builders2.username));\n    }));\n    const [usuarioActivado, setUsuarioActivado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const completar_cuadro_refer = ()=>{\n        traerCuadroPadre();\n        cambiarEstadoComplete();\n        setShowButton(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        cuadroIdHijo();\n        // Verificar si se activó un usuario recientemente\n        if (usuarioActivado) {\n            // Actualizar la lista de usuarios inactivos eliminando el usuario activado\n            setUsuariosInactivos((prevUsuarios)=>prevUsuarios.filter((user)=>user._id !== usuarioActivado._id));\n            // Manejar la lógica después de activar al usuario\n            handlePostActivarUsuario(usuarioActivado);\n            // Reiniciar el estado de usuario activado\n            setUsuarioActivado(null);\n        }\n    }, [\n        usuarioActivado\n    ]);\n    const handlePostActivarUsuario = (usuario)=>{\n        console.log(\"usuario activado\", usuario);\n        activarUsuario(usuario.username);\n    };\n    const handleActivarUsuario = (usuario)=>{\n        // Actualizar el estado de usuario activado\n        setUsuarioActivado(usuario);\n        setShowList(false);\n        createNewCuadro();\n        // Verificar si alguna propiedad en dataCuadro está vacía\n        const propiedades = Object.keys(dataCuadro);\n        for (const propiedad of propiedades){\n            if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === \"\") {\n                console.log(\"esta vacia\");\n                return;\n            }\n        }\n        if (!dataCuadro.lado_derecho.builders1 || !dataCuadro.lado_derecho.builders2 || !dataCuadro.lado_izquierdo.builders1 || !dataCuadro.lado_izquierdo.builders2) {\n            // console.log(\"No se encuentran las propiedades builder\", dataCuadro);\n            return;\n        }\n        // Si todas las propiedades tienen valores, dispara la función\n        setAscender(true);\n    };\n    const createNewCuadro = ()=>{\n        let lado;\n        let builder;\n        let userHijo;\n        console.log(dataCuadro);\n        if (dataCuadro.lado_derecho.builders1 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder1\");\n        } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {\n            lado = \"derecho\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_derecho.guide;\n            console.log(\"La propiedad pertenece al lado derecho, builder2\");\n        } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders1\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder1\");\n        } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {\n            lado = \"izquierdo\";\n            builder = \"builders2\";\n            userHijo = dataCuadro.lado_izquierdo.guide;\n            console.log(\"La propiedad pertenece al lado izquierdo, builder2\");\n        } else {\n            return console.log(\"Todas las propiedades est\\xe1n vac\\xedas\");\n        }\n        // Supongamos que createCuadros también devuelve información\n        createCuadros(lado, builder, userHijo);\n    };\n    const ascenderNivel = async ()=>{\n        succesLevel();\n    /* if (dataUser.username !== \"pablo\" && dataUser.username !== \"nelson\" && dataUser.username !== \"escro\" ) {\n        console.log(\"desactivar usuario\")\n        desactivarUsuario(dataUser.username);\n      }\n\n      succesLevel();\n\n      const username = dataUser.username;\n      const res = await fetch(\n        `${process.env.NEXT_PUBLIC_API_BACKEND}user/subirNivel`,  // Ajusta la ruta según tu configuración\n        {\n          method: \"PUT\",\n          headers: {\n            \"Content-Type\": \"application/json\",\n          },\n          body: JSON.stringify({ username }),\n        }\n      ); \n\n\n     // deleteCuadro();*/ };\n    const succesLevel = ()=>{\n        MySweetAlert.fire({\n            title: \"<strong>Subiste de nivel</strong>\",\n            icon: \"succes\",\n            html: \" actualiza la pagina para ver los cambios\",\n            showCloseButton: true,\n            focusConfirm: false,\n            confirmButtonText: '\\n        <i class=\"fa fa-thumbs-up\"></i> OK\\n      '\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dashboard__top\",\n        children: [\n            legend && usuariosInactivos && usuariosInactivos.length > 0 ? showList && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: usuariosInactivos.map((usuario)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"acceptPay\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Recibir regalo de:\"\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 201,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: usuario.email\n                            }, void 0, false, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 202,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>handleActivarUsuario(usuario),\n                                        style: {\n                                            backgroundColor: \"rgb(8 143 8)\",\n                                            borderColor: \"rgb(8 143 8)\"\n                                        },\n                                        children: \"Aceptar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 204,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btnPay\",\n                                        onClick: ()=>{\n                                            deleteUser(usuario);\n                                            setShowList(false);\n                                        },\n                                        style: {\n                                            backgroundColor: \"red\",\n                                            borderColor: \"red\"\n                                        },\n                                        children: \"Borrar\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                        lineNumber: 207,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                                lineNumber: 203,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, usuario._id, true, {\n                        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                        lineNumber: 200,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 198,\n                columnNumber: 10\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"noPays\",\n                children: \"No se encuentran solicitudes\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 214,\n                columnNumber: 23\n            }, undefined),\n            showButton && dataUser.complete === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: completar_cuadro_refer,\n                children: \"Agregar a cuadro padre\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 218,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 220,\n                columnNumber: 11\n            }, undefined),\n            ascender ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"addToRefer\",\n                onClick: ascenderNivel,\n                children: \"Ascender de nivel\"\n            }, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 223,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n                lineNumber: 225,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/src/components/inactiveUsers/inactiveUsers.jsx\",\n        lineNumber: 195,\n        columnNumber: 7\n    }, undefined);\n};\n_s(InactiveUsers, \"knBcdP8Z+WwG759LfOIMLD0qayI=\", false, function() {\n    return [\n        _context_apiContext__WEBPACK_IMPORTED_MODULE_2__.useApiContext\n    ];\n});\n_c = InactiveUsers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InactiveUsers); /* git: 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 */ \nvar _c;\n$RefreshReg$(_c, \"InactiveUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2luYWN0aXZlVXNlcnMvaW5hY3RpdmVVc2Vycy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNTO0FBQzVCO0FBQ0Q7QUFHL0IsTUFBTUssZ0JBQWdCOztJQUdsQixNQUFNLEVBQ0pDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxpQkFBaUIsRUFDakJDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQkMsT0FBTyxFQUNQQyxxQkFBcUIsRUFDckJDLE9BQU8sRUFDUEMsYUFBYSxFQUNiQyxVQUFVLEVBQ1ZDLE1BQU0sRUFDUCxHQUFHZixrRUFBYUE7SUFFakIsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDc0IsWUFBWUMsY0FBYyxHQUFHdkIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDd0IsbUJBQW1CQyxxQkFBcUIsR0FBR3pCLCtDQUFRQSxDQUN4REssY0FBY3FCLE1BQU0sQ0FBQyxDQUFDQztZQU9IbkIsb0NBQ0FBLG9DQUNBQSxzQ0FDQUE7UUFUakIsTUFBTW9CLFdBQVdELEtBQUtDLFFBQVE7UUFFOUIsaUVBQWlFO1FBQ2pFLE9BQ0VBLFlBRUVBLENBQUFBLGVBQWFwQixxQ0FBQUEsV0FBV3FCLFlBQVksQ0FBQ0MsU0FBUyxjQUFqQ3RCLHlEQUFBQSxtQ0FBbUNvQixRQUFRLEtBQ3hEQSxlQUFhcEIscUNBQUFBLFdBQVdxQixZQUFZLENBQUNFLFNBQVMsY0FBakN2Qix5REFBQUEsbUNBQW1Db0IsUUFBUSxLQUN4REEsZUFBYXBCLHVDQUFBQSxXQUFXd0IsY0FBYyxDQUFDRixTQUFTLGNBQW5DdEIsMkRBQUFBLHFDQUFxQ29CLFFBQVEsS0FDMURBLGVBQWFwQix1Q0FBQUEsV0FBV3dCLGNBQWMsQ0FB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dHMvaW5hY3RpdmVVc2Vycy9pbmFjdGl2ZVVzZXJzLmpzeD9kYmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwaUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9hcGlDb250ZXh0XCI7XG5pbXBvcnQgXCIuLi9zaWRlQmFyL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcblxuXG5jb25zdCBJbmFjdGl2ZVVzZXJzID0gKCkgPT4ge1xuXG4gIFxuICAgIGNvbnN0IHtcbiAgICAgIGluYWN0aXZlVXNlcnMsXG4gICAgICBhY3RpdmFyVXN1YXJpbyxcbiAgICAgIGRlc2FjdGl2YXJVc3VhcmlvLFxuICAgICAgZGF0YUN1YWRybyxcbiAgICAgIGRhdGFVc2VyLFxuICAgICAgY3VhZHJvSWRIaWpvLFxuICAgICAgdHJhZXJDdWFkcm9QYWRyZSxcbiAgICAgIGhpam9JenEsXG4gICAgICBjYW1iaWFyRXN0YWRvQ29tcGxldGUsXG4gICAgICBoaWpvRGVyLFxuICAgICAgY3JlYXRlQ3VhZHJvcyxcbiAgICAgIGRlbGV0ZVVzZXIsXG4gICAgICBsZWdlbmRcbiAgICB9ID0gdXNlQXBpQ29udGV4dCgpO1xuICAgIFxuICAgIGNvbnN0IFthc2NlbmRlciwgc2V0QXNjZW5kZXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3Nob3dMaXN0LCBzZXRTaG93TGlzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2hvd0J1dHRvbiwgc2V0U2hvd0J1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbdXN1YXJpb3NJbmFjdGl2b3MsIHNldFVzdWFyaW9zSW5hY3Rpdm9zXSA9IHVzZVN0YXRlKFxuICAgICAgaW5hY3RpdmVVc2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lO1xuICAgIFxuICAgICAgICAvLyBWZXJpZmljYSBzaSBhbGd1bmEgZGUgbGFzIHByb3BpZWRhZGVzIGV4aXN0ZSBhbnRlcyBkZSBjb21wYXJhclxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHVzZXJuYW1lICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgdXNlcm5hbWUgPT09IGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMT8udXNlcm5hbWUgfHxcbiAgICAgICAgICAgIHVzZXJuYW1lID09PSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczI/LnVzZXJuYW1lIHx8XG4gICAgICAgICAgICB1c2VybmFtZSA9PT0gZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczE/LnVzZXJuYW1lIHx8XG4gICAgICAgICAgICB1c2VybmFtZSA9PT0gZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczI/LnVzZXJuYW1lXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICAgIGNvbnN0IFt1c3VhcmlvQWN0aXZhZG8sIHNldFVzdWFyaW9BY3RpdmFkb10gPSB1c2VTdGF0ZShudWxsKTtcbiAgXG4gICAgY29uc3QgY29tcGxldGFyX2N1YWRyb19yZWZlciA9ICgpID0+IHtcbiAgICAgIHRyYWVyQ3VhZHJvUGFkcmUoKTtcbiAgICAgIGNhbWJpYXJFc3RhZG9Db21wbGV0ZSgpO1xuICAgICAgc2V0U2hvd0J1dHRvbihmYWxzZSk7XG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICBjdWFkcm9JZEhpam8oKTtcbiAgICAgIC8vIFZlcmlmaWNhciBzaSBzZSBhY3RpdsOzIHVuIHVzdWFyaW8gcmVjaWVudGVtZW50ZVxuICAgICAgaWYgKHVzdWFyaW9BY3RpdmFkbykge1xuICAgICAgICAvLyBBY3R1YWxpemFyIGxhIGxpc3RhIGRlIHVzdWFyaW9zIGluYWN0aXZvcyBlbGltaW5hbmRvIGVsIHVzdWFyaW8gYWN0aXZhZG9cbiAgICAgICAgc2V0VXN1YXJpb3NJbmFjdGl2b3MoKHByZXZVc3VhcmlvcykgPT5cbiAgICAgICAgICBwcmV2VXN1YXJpb3MuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLl9pZCAhPT0gdXN1YXJpb0FjdGl2YWRvLl9pZClcbiAgICAgICAgKTtcbiAgXG4gICAgICAgIC8vIE1hbmVqYXIgbGEgbMOzZ2ljYSBkZXNwdcOpcyBkZSBhY3RpdmFyIGFsIHVzdWFyaW9cbiAgICAgICAgaGFuZGxlUG9zdEFjdGl2YXJVc3VhcmlvKHVzdWFyaW9BY3RpdmFkbyk7XG4gIFxuICAgICAgICAvLyBSZWluaWNpYXIgZWwgZXN0YWRvIGRlIHVzdWFyaW8gYWN0aXZhZG9cbiAgICAgICAgc2V0VXN1YXJpb0FjdGl2YWRvKG51bGwpO1xuICAgICAgfVxuICAgIH0sIFt1c3VhcmlvQWN0aXZhZG9dKTtcbiAgXG4gICAgY29uc3QgaGFuZGxlUG9zdEFjdGl2YXJVc3VhcmlvID0gKHVzdWFyaW8pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwidXN1YXJpbyBhY3RpdmFkb1wiLCB1c3VhcmlvKTtcbiAgICAgIGFjdGl2YXJVc3VhcmlvKHVzdWFyaW8udXNlcm5hbWUpO1xuICBcbiAgICB9O1xuICBcbiAgICBjb25zdCBoYW5kbGVBY3RpdmFyVXN1YXJpbyA9ICh1c3VhcmlvKSA9PiB7XG4gICAgICAvLyBBY3R1YWxpemFyIGVsIGVzdGFkbyBkZSB1c3VhcmlvIGFjdGl2YWRvXG4gICAgICBzZXRVc3VhcmlvQWN0aXZhZG8odXN1YXJpbyk7XG4gICAgICBzZXRTaG93TGlzdChmYWxzZSk7XG5cbiAgICAgIGNyZWF0ZU5ld0N1YWRybygpO1xuICAgICAgXG4gICAgICAvLyBWZXJpZmljYXIgc2kgYWxndW5hIHByb3BpZWRhZCBlbiBkYXRhQ3VhZHJvIGVzdMOhIHZhY8OtYVxuICAgICAgY29uc3QgcHJvcGllZGFkZXMgPSBPYmplY3Qua2V5cyhkYXRhQ3VhZHJvKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGllZGFkIG9mIHByb3BpZWRhZGVzKSB7XG4gICAgICAgIGlmIChkYXRhQ3VhZHJvW3Byb3BpZWRhZF0gPT09IG51bGwgfHwgZGF0YUN1YWRyb1twcm9waWVkYWRdID09PSBcIlwiKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlc3RhIHZhY2lhXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGlmIChcbiAgICAgICAgIWRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmJ1aWxkZXJzMSB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyIHx8XG4gICAgICAgICFkYXRhQ3VhZHJvLmxhZG9faXpxdWllcmRvLmJ1aWxkZXJzMSB8fFxuICAgICAgICAhZGF0YUN1YWRyby5sYWRvX2l6cXVpZXJkby5idWlsZGVyczJcbiAgICAgICkge1xuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gc2UgZW5jdWVudHJhbiBsYXMgcHJvcGllZGFkZXMgYnVpbGRlclwiLCBkYXRhQ3VhZHJvKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaSB0b2RhcyBsYXMgcHJvcGllZGFkZXMgdGllbmVuIHZhbG9yZXMsIGRpc3BhcmEgbGEgZnVuY2nDs25cbiAgIFxuICAgIHNldEFzY2VuZGVyKHRydWUpO1xuXG5cbiAgICB9O1xuICBcblxuICAgIGNvbnN0IGNyZWF0ZU5ld0N1YWRybyA9ICgpID0+IHtcbiAgICAgIGxldCBsYWRvO1xuICAgICAgbGV0IGJ1aWxkZXI7XG4gICAgICBsZXQgdXNlckhpam87XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyAoZGF0YUN1YWRybykgXG4gICAgICBcbiAgICAgIGlmIChkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5idWlsZGVyczEgJiYgIWhpam9EZXIpIHtcbiAgICAgICAgbGFkbyA9ICdkZXJlY2hvJztcbiAgICAgICAgYnVpbGRlciA9ICdidWlsZGVyczEnO1xuICAgICAgICB1c2VySGlqbyA9IGRhdGFDdWFkcm8ubGFkb19kZXJlY2hvLmd1aWRlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHByb3BpZWRhZCBwZXJ0ZW5lY2UgYWwgbGFkbyBkZXJlY2hvLCBidWlsZGVyMVwiKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uYnVpbGRlcnMyICYmICFoaWpvRGVyKSB7XG4gICAgICAgIGxhZG8gPSAnZGVyZWNobyc7XG4gICAgICAgIGJ1aWxkZXIgPSAnYnVpbGRlcnMyJztcbiAgICAgICAgdXNlckhpam8gPSBkYXRhQ3VhZHJvLmxhZG9fZGVyZWNoby5ndWlkZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJMYSBwcm9waWVkYWQgcGVydGVuZWNlIGFsIGxhZG8gZGVyZWNobywgYnVpbGRlcjJcIik7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMxICYmICFoaWpvSXpxKSB7XG4gICAgICAgIGxhZG8gPSAnaXpxdWllcmRvJztcbiAgICAgICAgYnVpbGRlciA9ICdidWlsZGVyczEnO1xuICAgICAgICB1c2VySGlqbyA9IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uZ3VpZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGEgcHJvcGllZGFkIHBlcnRlbmVjZSBhbCBsYWRvIGl6cXVpZXJkbywgYnVpbGRlcjFcIik7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uYnVpbGRlcnMyICYmICFoaWpvSXpxKSB7XG4gICAgICAgIGxhZG8gPSAnaXpxdWllcmRvJztcbiAgICAgICAgYnVpbGRlciA9ICdidWlsZGVyczInO1xuICAgICAgICB1c2VySGlqbyA9IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uZ3VpZGU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGEgcHJvcGllZGFkIHBlcnRlbmVjZSBhbCBsYWRvIGl6cXVpZXJkbywgYnVpbGRlcjJcIik7XG4gICAgICB9IFxuICAgICAgXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiVG9kYXMgbGFzIHByb3BpZWRhZGVzIGVzdMOhbiB2YWPDrWFzXCIpO1xuICAgICAgfVxuXG4gICAgXG4gICAgICAvLyBTdXBvbmdhbW9zIHF1ZSBjcmVhdGVDdWFkcm9zIHRhbWJpw6luIGRldnVlbHZlIGluZm9ybWFjacOzblxuICAgICAgY3JlYXRlQ3VhZHJvcyhsYWRvLCBidWlsZGVyLCB1c2VySGlqbyk7XG4gICAgXG4gICAgXG4gICAgfTtcbiAgICBcblxuICAgIGNvbnN0IGFzY2VuZGVyTml2ZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICBzdWNjZXNMZXZlbCgpO1xuICAgICAvKiBpZiAoZGF0YVVzZXIudXNlcm5hbWUgIT09IFwicGFibG9cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJuZWxzb25cIiAmJiBkYXRhVXNlci51c2VybmFtZSAhPT0gXCJlc2Nyb1wiICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlc2FjdGl2YXIgdXN1YXJpb1wiKVxuICAgICAgICBkZXNhY3RpdmFyVXN1YXJpbyhkYXRhVXNlci51c2VybmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHN1Y2Nlc0xldmVsKCk7XG5cbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YVVzZXIudXNlcm5hbWU7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkR9dXNlci9zdWJpck5pdmVsYCwgIC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biB0dSBjb25maWd1cmFjacOzblxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSB9KSxcbiAgICAgICAgfVxuICAgICAgKTsgXG5cblxuICAgICAvLyBkZWxldGVDdWFkcm8oKTsqL1xuICAgIH1cblxuICAgIGNvbnN0IHN1Y2Nlc0xldmVsID0gKCkgPT4ge1xuICAgICAgTXlTd2VldEFsZXJ0LmZpcmUoe1xuICAgICAgICB0aXRsZTogXCI8c3Ryb25nPlN1YmlzdGUgZGUgbml2ZWw8L3N0cm9uZz5cIixcbiAgICAgIGljb246IFwic3VjY2VzXCIsXG4gICAgICBodG1sOiBgIGFjdHVhbGl6YSBsYSBwYWdpbmEgcGFyYSB2ZXIgbG9zIGNhbWJpb3NgLFxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxuICAgICAgZm9jdXNDb25maXJtOiBmYWxzZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBgXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPiBPS1xuICAgICAgYFxuICAgIH0pO1xuICAgIH1cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkX190b3BcIj5cbiAgICAgIHtsZWdlbmQgJiYgdXN1YXJpb3NJbmFjdGl2b3MgJiYgdXN1YXJpb3NJbmFjdGl2b3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgc2hvd0xpc3QgJiYgKFxuICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3VzdWFyaW9zSW5hY3Rpdm9zLm1hcCgodXN1YXJpbykgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXt1c3VhcmlvLl9pZH0gY2xhc3NOYW1lPSdhY2NlcHRQYXknPlxuICAgICAgICAgICAgICA8cD5SZWNpYmlyIHJlZ2FsbyBkZTo8L3A+XG4gICAgICAgICAgICAgIDxzcGFuPnt1c3VhcmlvLmVtYWlsfTwvc3Bhbj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25zJz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blBheVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFjdGl2YXJVc3VhcmlvKHVzdWFyaW8pfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcInJnYig4IDE0MyA4KVwiLCBib3JkZXJDb2xvcjpcInJnYig4IDE0MyA4KVwifX0+XG4gICAgICAgICAgICAgICAgICBBY2VwdGFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5QYXlcIiBvbkNsaWNrPXsoKSA9PiB7ZGVsZXRlVXNlcih1c3VhcmlvKTtzZXRTaG93TGlzdChmYWxzZSk7fX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIiwgYm9yZGVyQ29sb3I6XCJyZWRcIn19PlxuICAgICAgICAgICAgICAgICAgQm9ycmFyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD4gKSkgOiAgPHAgY2xhc3NOYW1lPSdub1BheXMnPk5vIHNlIGVuY3VlbnRyYW4gc29saWNpdHVkZXM8L3A+IH1cbiAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAge3Nob3dCdXR0b24gJiYgZGF0YVVzZXIuY29tcGxldGUgPT09IHRydWUgPyBcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGRUb1JlZmVyXCIgb25DbGljaz17Y29tcGxldGFyX2N1YWRyb19yZWZlcn0+QWdyZWdhciBhIGN1YWRybyBwYWRyZTwvYnV0dG9uPlxuICAgICAgXG4gICAgICAgIDogPHA+PC9wPiB9XG5cbiAgICAgICAge2FzY2VuZGVyID8gXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkVG9SZWZlclwiIG9uQ2xpY2s9e2FzY2VuZGVyTml2ZWx9PkFzY2VuZGVyIGRlIG5pdmVsPC9idXR0b24+XG4gICAgICBcbiAgICAgICAgOiA8cD48L3A+IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG4gIFxuICBleHBvcnQgZGVmYXVsdCBJbmFjdGl2ZVVzZXJzO1xuXG4gIC8qIGdpdDogZ2hwX2hnWXN3dkdEcDRDeDFHQ0JSM0l1UFV4S3JxQWlWTzFMc1IyeSAqL1xuXG5cblxuICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQXBpQ29udGV4dCIsIlN3YWwiLCJJbmFjdGl2ZVVzZXJzIiwiaW5hY3RpdmVVc2VycyIsImFjdGl2YXJVc3VhcmlvIiwiZGVzYWN0aXZhclVzdWFyaW8iLCJkYXRhQ3VhZHJvIiwiZGF0YVVzZXIiLCJjdWFkcm9JZEhpam8iLCJ0cmFlckN1YWRyb1BhZHJlIiwiaGlqb0l6cSIsImNhbWJpYXJFc3RhZG9Db21wbGV0ZSIsImhpam9EZXIiLCJjcmVhdGVDdWFkcm9zIiwiZGVsZXRlVXNlciIsImxlZ2VuZCIsImFzY2VuZGVyIiwic2V0QXNjZW5kZXIiLCJzaG93TGlzdCIsInNldFNob3dMaXN0Iiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJ1c3Vhcmlvc0luYWN0aXZvcyIsInNldFVzdWFyaW9zSW5hY3Rpdm9zIiwiZmlsdGVyIiwidXNlciIsInVzZXJuYW1lIiwibGFkb19kZXJlY2hvIiwiYnVpbGRlcnMxIiwiYnVpbGRlcnMyIiwibGFkb19penF1aWVyZG8iLCJ1c3VhcmlvQWN0aXZhZG8iLCJzZXRVc3VhcmlvQWN0aXZhZG8iLCJjb21wbGV0YXJfY3VhZHJvX3JlZmVyIiwicHJldlVzdWFyaW9zIiwiX2lkIiwiaGFuZGxlUG9zdEFjdGl2YXJVc3VhcmlvIiwidXN1YXJpbyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVBY3RpdmFyVXN1YXJpbyIsImNyZWF0ZU5ld0N1YWRybyIsInByb3BpZWRhZGVzIiwiT2JqZWN0Iiwia2V5cyIsInByb3BpZWRhZCIsImxhZG8iLCJidWlsZGVyIiwidXNlckhpam8iLCJndWlkZSIsImFzY2VuZGVyTml2ZWwiLCJzdWNjZXNMZXZlbCIsIk15U3dlZXRBbGVydCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJodG1sIiwic2hvd0Nsb3NlQnV0dG9uIiwiZm9jdXNDb25maXJtIiwiY29uZmlybUJ1dHRvblRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImxpIiwicCIsInNwYW4iLCJlbWFpbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/inactiveUsers/inactiveUsers.jsx\n"));

/***/ })

});