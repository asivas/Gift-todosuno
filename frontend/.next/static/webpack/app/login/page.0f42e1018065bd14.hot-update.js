"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./context/apiContext.js":
/*!*******************************!*\
  !*** ./context/apiContext.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiProvider: function() { return /* binding */ ApiProvider; },\n/* harmony export */   useApiContext: function() { return /* binding */ useApiContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ useApiContext,ApiProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst ApiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useApiContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ApiContext);\n};\n_s(useApiContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst ApiProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [dataUser, setDataUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [dataUsers, setDataUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [dataCuadro, setDataCuadro] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [inactiveUsers, setInactiveUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [reset, setReset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"token\"));\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Nuevo estado de carga\n    const [legend, setLegend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hijoDer, setHijoDer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hijoIzq, setHijoIzq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const deleteCuadro = async ()=>{\n        try {\n            if (dataCuadro._id) {\n                console.error(\"El cuadro no existe\");\n                return;\n            }\n            // Llamar a tu función activar usuario\n            const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/delete\"), {\n                method: \"DELETE\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dataCuadro\n                })\n            });\n            const json = await res.json();\n            console.log(\"cuadro borrado:\", dataCuadro._id);\n        } catch (error) {\n            console.error(\"Error al agregar el campo:\", error);\n        }\n    };\n    const deleteUser = async (username)=>{\n        try {\n            if (!username) {\n                console.error(\"El nombre de usuario no puede estar vac\\xedo\");\n                return;\n            }\n            const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/deleteUser\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username\n                })\n            });\n            if (res.status === 205) {\n                // La solicitud fue exitosa, puedes realizar alguna acción aquí si es necesario\n                console.log(\"Usuario borrado exitosamente:\", username);\n            } else {\n                // La solicitud no fue exitosa, puedes manejar el error aquí\n                console.error(\"Error al borrar usuario:\", username, res.statusText);\n            }\n        } catch (error) {\n            console.error(\"Error al realizar la solicitud:\", error);\n        }\n    };\n    const activarUsuario = async (username)=>{\n        try {\n            if (!username) {\n                console.error(\"El nombre de usuario no puede estar vac\\xedo\");\n                return;\n            }\n            // Llamar a tu función activar usuario\n            const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/activarUsuario\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username\n                })\n            });\n            const json = await res.json();\n            console.log(\"username del api\", username);\n        } catch (error) {\n            console.error(\"Error al agregar el campo:\", error);\n        }\n    };\n    const desactivarUsuario = async (username)=>{\n        try {\n            if (!username) {\n                console.error(\"El nombre de usuario no puede estar vac\\xedo\");\n                return;\n            }\n            // Llamar a tu función activar usuario\n            const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/desactivarUsuario\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username\n                })\n            });\n            const json = await res.json();\n            console.log(\"username del api\", username);\n        } catch (error) {\n            console.error(\"Error al agregar el campo:\", error);\n        }\n    };\n    const cambiarEstadoComplete = async ()=>{\n        const user = dataUser.username;\n        const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/cambiarEstadoComplete\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                user\n            })\n        });\n        console.log(\"apretando\");\n    };\n    const traerCuadroPadre = async ()=>{\n        const padre = dataUser.referral_father;\n        const hijo = dataUser.username;\n        const nieto = dataUser.referidos[1];\n        const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/traerCuadroPadre\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                padre,\n                hijo,\n                nieto\n            })\n        });\n        console.log(\"funcion padre activada\");\n    };\n    const cuadroIdHijo = async ()=>{\n        const hijoDer1 = dataCuadro.lado_derecho.guide;\n        const hijoIzq1 = dataCuadro.lado_izquierdo.guide;\n        if (hijoDer1) {\n            const res1 = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/cuadroHijo/\").concat(hijoDer1), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const json1 = await res1.json();\n            if (json1 === null) {\n                console.log(\"tenemos el mismo cuadro id\");\n            //console.log(hijoDer)\n            } else {\n                // console.log(\"no tenemos el mismo cuadro id\")\n                setHijoDer(true);\n            }\n        }\n        if (hijoIzq1) {\n            const res2 = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/cuadroHijo/\").concat(hijoIzq1), {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const json2 = await res2.json();\n            if (json2 === null) {\n                console.log(\"tenemos el mismo cuadro id\");\n            // console.log(hijoIzq)\n            } else {\n                // console.log(\"no tenemos el mismo cuadro id\")\n                setHijoIzq(true);\n            }\n        }\n    };\n    const createCuadros = async (prop1, prop2, userHijo)=>{\n        try {\n            if (!dataCuadro) {\n                console.error(\"no hay cuadro con data\");\n                return;\n            }\n            // Llamar a tu función activar usuario\n            const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/createCuadros\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    dataCuadro,\n                    prop1,\n                    prop2,\n                    userHijo\n                })\n            });\n            //  console.log(\"data del cuadro API\", json); \n            console.log(\"la prop llega bien\", prop1, prop2, userHijo);\n        // const json = await res.json();\n        } catch (error) {\n            console.error(\"Error al enviar dataCuadro:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                setLoading(true);\n                const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/data\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                const json = await res.json();\n                setDataUser(json);\n                // Verificar si cuadro_id no es null antes de hacer la segunda solicitud\n                if (json.cuadro_id !== null) {\n                    const res2 = await fetch(\"\".concat(\"http://localhost:4000/\", \"cuadro/\").concat(json.cuadro_id));\n                    const json2 = await res2.json();\n                    setDataCuadro(json2);\n                    if (json.username === json2.legend) {\n                        setLegend(true);\n                    }\n                }\n            } catch (error) {\n                console.error(\"Error fetching private data:\", error);\n            } finally{\n                setLoading(false); // Indicar que los datos se han cargado\n            }\n        };\n        const fetchUsers = async ()=>{\n            try {\n                setLoading(true);\n                const res = await fetch(\"\".concat(\"http://localhost:4000/\", \"user/users\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                const json = await res.json();\n                setDataUsers(json);\n                const inactiveUsersList = json.filter((user)=>user.active !== true);\n                setInactiveUsers(inactiveUsersList);\n            } catch (error) {\n                console.error(\"Error fetching private data:\", error);\n            }\n        };\n        fetchData();\n        fetchUsers();\n    }, [\n        token,\n        reset\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ApiContext.Provider, {\n        value: {\n            dataUser,\n            dataCuadro,\n            setToken,\n            setReset,\n            loading,\n            inactiveUsers,\n            activarUsuario,\n            desactivarUsuario,\n            legend,\n            setLegend,\n            deleteCuadro,\n            deleteUser,\n            traerCuadroPadre,\n            cuadroIdHijo,\n            hijoDer,\n            hijoIzq,\n            cambiarEstadoComplete,\n            createCuadros\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/sofia/Documentos/Gift/frontend/context/apiContext.js\",\n        lineNumber: 321,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ApiProvider, \"OHOsFm/6krHuusbxG0TTyR8PoB4=\");\n_c = ApiProvider;\nvar _c;\n$RefreshReg$(_c, \"ApiProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvYXBpQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM4RTtBQUM5QztBQUVoQyxNQUFNTSwyQkFBYUwsb0RBQWFBO0FBRXpCLE1BQU1NLGdCQUFnQjs7SUFDM0IsT0FBT0wsaURBQVVBLENBQUNJO0FBQ3BCLEVBQUU7R0FGV0M7QUFJTixNQUFNQyxjQUFjO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUV0QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBRSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNnQixPQUFPQyxTQUFTLEdBQUdqQiwrQ0FBUUEsQ0FBQ0MsaURBQU9BLENBQUNpQixHQUFHLENBQUM7SUFDL0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQyxPQUFPLHdCQUF3QjtJQUN0RSxNQUFNLENBQUNxQixRQUFRQyxVQUFVLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUN1QixTQUFTQyxXQUFXLEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN5QixTQUFTQyxXQUFXLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQVF2QyxNQUFNMkIsZUFBZTtRQUNuQixJQUFJO1lBQ0YsSUFBSWpCLFdBQVdrQixHQUFHLEVBQUU7Z0JBQ2xCQyxRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUNBLHNDQUFzQztZQUN0QyxNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLEdBQXVDLE9BQXBDQyx3QkFBbUMsRUFBQyxrQkFDdkM7Z0JBQ0VHLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFOUI7Z0JBQVc7WUFDcEM7WUFFRixNQUFNK0IsT0FBTyxNQUFNVixJQUFJVSxJQUFJO1lBQzNCWixRQUFRYSxHQUFHLENBQUMsbUJBQW1CaEMsV0FBV2tCLEdBQUc7UUFDL0MsRUFBRSxPQUFPRSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBQ0Y7SUFFQSxNQUFNYSxhQUFhLE9BQU9DO1FBQ3hCLElBQUk7WUFDRixJQUFJLENBQUNBLFVBQVU7Z0JBQ2JmLFFBQVFDLEtBQUssQ0FBQztnQkFDZDtZQUNGO1lBQ0EsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUF1QyxPQUFwQ0Msd0JBQW1DLEVBQUMsb0JBQ3ZDO2dCQUNFRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUk7Z0JBQVM7WUFDbEM7WUFHRixJQUFJYixJQUFJYyxNQUFNLEtBQUssS0FBSztnQkFDdEIsK0VBQStFO2dCQUMvRWhCLFFBQVFhLEdBQUcsQ0FBQyxpQ0FBaUNFO1lBQy9DLE9BQU87Z0JBQ0wsNERBQTREO2dCQUM1RGYsUUFBUUMsS0FBSyxDQUFDLDRCQUEyQmMsVUFBVWIsSUFBSWUsVUFBVTtZQUNuRTtRQUNGLEVBQUUsT0FBT2hCLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDbkQ7SUFDRjtJQUVBLE1BQU1pQixpQkFBaUIsT0FBT0g7UUFDNUIsSUFBSTtZQUNGLElBQUksQ0FBQ0EsVUFBVTtnQkFDYmYsUUFBUUMsS0FBSyxDQUFDO2dCQUNkO1lBQ0Y7WUFDQSxzQ0FBc0M7WUFDdEMsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixHQUF1QyxPQUFwQ0Msd0JBQW1DLEVBQUMsd0JBQ3ZDO2dCQUNFRyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRUk7Z0JBQVM7WUFDbEM7WUFFRixNQUFNSCxPQUFPLE1BQU1WLElBQUlVLElBQUk7WUFDM0JaLFFBQVFhLEdBQUcsQ0FBQyxvQkFBb0JFO1FBQ2xDLEVBQUUsT0FBT2QsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMsOEJBQThCQTtRQUM5QztJQUNGO0lBRUEsTUFBTWtCLG9CQUFvQixPQUFPSjtRQUMvQixJQUFJO1lBQ0YsSUFBSSxDQUFDQSxVQUFVO2dCQUNiZixRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUNBLHNDQUFzQztZQUN0QyxNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLEdBQXVDLE9BQXBDQyx3QkFBbUMsRUFBQywyQkFDdkM7Z0JBQ0VHLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFSTtnQkFBUztZQUNsQztZQUVGLE1BQU1ILE9BQU8sTUFBTVYsSUFBSVUsSUFBSTtZQUMzQlosUUFBUWEsR0FBRyxDQUFDLG9CQUFvQkU7UUFDbEMsRUFBRSxPQUFPZCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJBO1FBQzlDO0lBQ0Y7SUFHQSxNQUFNbUIsd0JBQXdCO1FBRTVCLE1BQU1DLE9BQU81QyxTQUFTc0MsUUFBUTtRQUM5QixNQUFNYixNQUFNLE1BQU1DLE1BQ2xCLEdBQXVDLE9BQXBDQyx3QkFBbUMsRUFBQywrQkFDdkM7WUFDRUcsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVVO1lBQUs7UUFFOUI7UUFFQXJCLFFBQVFhLEdBQUcsQ0FBQztJQUVkO0lBRUEsTUFBTVMsbUJBQW1CO1FBRXZCLE1BQU1DLFFBQVE5QyxTQUFTK0MsZUFBZTtRQUN0QyxNQUFNQyxPQUFPaEQsU0FBU3NDLFFBQVE7UUFDOUIsTUFBTVcsUUFBUWpELFNBQVNrRCxTQUFTLENBQUMsRUFBRTtRQUNuQyxNQUFNekIsTUFBTSxNQUFNQyxNQUVoQixHQUF1QyxPQUFwQ0Msd0JBQW1DLEVBQUMsNEJBQ3ZDO1lBQ0VHLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFWTtnQkFBT0U7Z0JBQU1DO1lBQU07UUFFNUM7UUFFRjFCLFFBQVFhLEdBQUcsQ0FBQztJQUNkO0lBR0EsTUFBTWUsZUFBZTtRQUVuQixNQUFNQyxXQUFXaEQsV0FBV2lELFlBQVksQ0FBQ0MsS0FBSztRQUM5QyxNQUFNQyxXQUFXbkQsV0FBV29ELGNBQWMsQ0FBQ0YsS0FBSztRQUVoRCxJQUFJRixVQUFVO1lBQ1osTUFBTUssT0FBTyxNQUFNL0IsTUFFakIsR0FBMkQwQixPQUF4RHpCLHdCQUFtQyxFQUFDLHNCQUE2QixPQUFUeUIsV0FDM0Q7Z0JBQ0V0QixRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVGLE1BQU0yQixRQUFRLE1BQU1ELEtBQUt0QixJQUFJO1lBQzdCLElBQUl1QixVQUFVLE1BQU07Z0JBQ2xCbkMsUUFBUWEsR0FBRyxDQUFDO1lBQ1osc0JBQXNCO1lBQ3hCLE9BRUs7Z0JBQ0osK0NBQStDO2dCQUM5Q2xCLFdBQVc7WUFDYjtRQUNGO1FBR0EsSUFBSXFDLFVBQVU7WUFDWixNQUFNSSxPQUFPLE1BQU1qQyxNQUVqQixHQUEyRDZCLE9BQXhENUIsd0JBQW1DLEVBQUMsc0JBQTZCLE9BQVQ0QixXQUMzRDtnQkFDRXpCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUYsTUFBTTZCLFFBQVEsTUFBTUQsS0FBS3hCLElBQUk7WUFDN0IsSUFBSXlCLFVBQVUsTUFBTTtnQkFDbEJyQyxRQUFRYSxHQUFHLENBQUM7WUFDYix1QkFBdUI7WUFFeEIsT0FFSztnQkFDSiwrQ0FBK0M7Z0JBQzlDaEIsV0FBVztZQUNiO1FBRUY7SUFDRjtJQUVBLE1BQU15QyxnQkFBZ0IsT0FBT0MsT0FBT0MsT0FBT0M7UUFDekMsSUFBSTtZQUNGLElBQUksQ0FBQzVELFlBQVk7Z0JBQ2ZtQixRQUFRQyxLQUFLLENBQUM7Z0JBQ2Q7WUFDRjtZQUNBLHNDQUFzQztZQUV2QyxNQUFNQyxNQUFNLE1BQU1DLE1BQ2YsR0FBdUMsT0FBcENDLHdCQUFtQyxFQUFDLHlCQUN2QztnQkFDRUcsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUU5QjtvQkFBVzBEO29CQUFPQztvQkFBT0M7Z0JBQVM7WUFDM0Q7WUFFSiw4Q0FBOEM7WUFDNUN6QyxRQUFRYSxHQUFHLENBQUMsc0JBQXFCMEIsT0FBT0MsT0FBT0M7UUFFaEQsaUNBQWlDO1FBQ2xDLEVBQUUsT0FBT3hDLE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLCtCQUErQkE7UUFDL0M7SUFDRjtJQUVBL0IsZ0RBQVNBLENBQUM7UUFFUixNQUFNd0UsWUFBWTtZQUNoQixJQUFJO2dCQUNGbkQsV0FBVztnQkFDWCxNQUFNVyxNQUFNLE1BQU1DLE1BQ2hCLEdBQXVDLE9BQXBDQyx3QkFBbUMsRUFBQyxjQUN2QztvQkFDRUksU0FBUzt3QkFDUG1DLGVBQWUsVUFBZ0IsT0FBTnhEO29CQUMzQjtnQkFDRjtnQkFFRixNQUFNeUIsT0FBTyxNQUFNVixJQUFJVSxJQUFJO2dCQUMzQmxDLFlBQVlrQztnQkFHWix3RUFBd0U7Z0JBQ3hFLElBQUlBLEtBQUtnQyxTQUFTLEtBQUssTUFBTTtvQkFDM0IsTUFBTVIsT0FBTyxNQUFNakMsTUFDakIsR0FBZ0RTLE9BQTdDUix3QkFBbUMsRUFBQyxXQUF3QixPQUFmUSxLQUFLZ0MsU0FBUztvQkFFaEUsTUFBTVAsUUFBUSxNQUFNRCxLQUFLeEIsSUFBSTtvQkFDN0I5QixjQUFjdUQ7b0JBRWQsSUFBR3pCLEtBQUtHLFFBQVEsS0FBS3NCLE1BQU03QyxNQUFNLEVBQUU7d0JBQ2pDQyxVQUFVO29CQUNaO2dCQUVBO1lBRUosRUFBRSxPQUFPUSxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsZ0NBQWdDQTtZQUNoRCxTQUNRO2dCQUNOVixXQUFXLFFBQVEsdUNBQXVDO1lBQzVEO1FBQ0Y7UUFFRixNQUFNc0QsYUFBYTtZQUNmLElBQUk7Z0JBQ0Z0RCxXQUFXO2dCQUNYLE1BQU1XLE1BQU0sTUFBTUMsTUFDaEIsR0FBdUMsT0FBcENDLHdCQUFtQyxFQUFDLGVBQ3ZDO29CQUNFSSxTQUFTO3dCQUNQbUMsZUFBZSxVQUFnQixPQUFOeEQ7b0JBQzNCO2dCQUNGO2dCQUVGLE1BQU15QixPQUFPLE1BQU1WLElBQUlVLElBQUk7Z0JBQzNCaEMsYUFBYWdDO2dCQUViLE1BQU1rQyxvQkFBb0JsQyxLQUFLbUMsTUFBTSxDQUFDMUIsQ0FBQUEsT0FBUUEsS0FBSzJCLE1BQU0sS0FBSztnQkFFOURoRSxpQkFBaUI4RDtZQUVuQixFQUFFLE9BQU83QyxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsZ0NBQWdDQTtZQUFPO1FBQUU7UUFJM0R5QztRQUNBRztJQUVGLEdBQUc7UUFBQzFEO1FBQU9GO0tBQU07SUFFakIscUJBQ0UsOERBQUNaLFdBQVc0RSxRQUFRO1FBQUNDLE9BQU87WUFBRXpFO1lBQVVJO1lBQVlPO1lBQVVGO1lBQVVJO1lBQ3hFUDtZQUFlbUM7WUFBZ0JDO1lBQW1CM0I7WUFBUUM7WUFBV0s7WUFBY2dCO1lBQ25GUTtZQUFrQk07WUFBY2xDO1lBQVNFO1lBQVN3QjtZQUF1QmtCO1FBQWM7a0JBQ3BGOUQ7Ozs7OztBQUdQLEVBQUU7SUE1VFdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvYXBpQ29udGV4dC5qcz8zNzZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBBcGlDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUFwaUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBpQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXBpUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IFtkYXRhVXNlciwgc2V0RGF0YVVzZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkYXRhVXNlcnMsIHNldERhdGFVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2RhdGFDdWFkcm8sIHNldERhdGFDdWFkcm9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpbmFjdGl2ZVVzZXJzLCBzZXRJbmFjdGl2ZVVzZXJzXSA9IHVzZVN0YXRlICh7fSk7XHJcbiAgY29uc3QgW3Jlc2V0LCBzZXRSZXNldF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShDb29raWVzLmdldChcInRva2VuXCIpKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gTnVldm8gZXN0YWRvIGRlIGNhcmdhXHJcbiAgY29uc3QgW2xlZ2VuZCwgc2V0TGVnZW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtoaWpvRGVyLCBzZXRIaWpvRGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGlqb0l6cSwgc2V0SGlqb0l6cV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcblxyXG5cclxuICBjb25zdCBkZWxldGVDdWFkcm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoZGF0YUN1YWRyby5faWQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRWwgY3VhZHJvIG5vIGV4aXN0ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gXHJcbiAgICAgIC8vIExsYW1hciBhIHR1IGZ1bmNpw7NuIGFjdGl2YXIgdXN1YXJpb1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH1jdWFkcm8vZGVsZXRlYCwgIC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biB0dSBjb25maWd1cmFjacOzblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhQ3VhZHJvIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3VhZHJvIGJvcnJhZG86XCIsIGRhdGFDdWFkcm8uX2lkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBhZ3JlZ2FyIGVsIGNhbXBvOlwiLCBlcnJvcik7XHJcbiAgICB9IFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRWwgbm9tYnJlIGRlIHVzdWFyaW8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL2RlbGV0ZVVzZXJgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIFxyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjA1KSB7XHJcbiAgICAgICAgLy8gTGEgc29saWNpdHVkIGZ1ZSBleGl0b3NhLCBwdWVkZXMgcmVhbGl6YXIgYWxndW5hIGFjY2nDs24gYXF1w60gc2kgZXMgbmVjZXNhcmlvXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc3VhcmlvIGJvcnJhZG8gZXhpdG9zYW1lbnRlOlwiLCB1c2VybmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gTGEgc29saWNpdHVkIG5vIGZ1ZSBleGl0b3NhLCBwdWVkZXMgbWFuZWphciBlbCBlcnJvciBhcXXDrVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBib3JyYXIgdXN1YXJpbzpcIix1c2VybmFtZSwgcmVzLnN0YXR1c1RleHQpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgcmVhbGl6YXIgbGEgc29saWNpdHVkOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWN0aXZhclVzdWFyaW8gPSBhc3luYyAodXNlcm5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRWwgbm9tYnJlIGRlIHVzdWFyaW8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBMbGFtYXIgYSB0dSBmdW5jacOzbiBhY3RpdmFyIHVzdWFyaW9cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkR9dXNlci9hY3RpdmFyVXN1YXJpb2AsICAvLyBBanVzdGEgbGEgcnV0YSBzZWfDum4gdHUgY29uZmlndXJhY2nDs25cclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgZGVsIGFwaVwiLCB1c2VybmFtZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWwgYWdyZWdhciBlbCBjYW1wbzpcIiwgZXJyb3IpO1xyXG4gICAgfSBcclxuICB9O1xyXG5cclxuICBjb25zdCBkZXNhY3RpdmFyVXN1YXJpbyA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFbCBub21icmUgZGUgdXN1YXJpbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIExsYW1hciBhIHR1IGZ1bmNpw7NuIGFjdGl2YXIgdXN1YXJpb1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL2Rlc2FjdGl2YXJVc3VhcmlvYCwgIC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biB0dSBjb25maWd1cmFjacOzblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1c2VybmFtZSBkZWwgYXBpXCIsIHVzZXJuYW1lKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBhZ3JlZ2FyIGVsIGNhbXBvOlwiLCBlcnJvcik7XHJcbiAgICB9IFxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBjYW1iaWFyRXN0YWRvQ29tcGxldGUgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGRhdGFVc2VyLnVzZXJuYW1lO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL2NhbWJpYXJFc3RhZG9Db21wbGV0ZWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyIH0pLFxyXG4gICAgXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiYXByZXRhbmRvXCIpXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNvbnN0IHRyYWVyQ3VhZHJvUGFkcmUgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcGFkcmUgPSBkYXRhVXNlci5yZWZlcnJhbF9mYXRoZXIgXHJcbiAgICBjb25zdCBoaWpvID0gZGF0YVVzZXIudXNlcm5hbWU7XHJcbiAgICBjb25zdCBuaWV0byA9IGRhdGFVc2VyLnJlZmVyaWRvc1sxXTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG5cclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkR9Y3VhZHJvL3RyYWVyQ3VhZHJvUGFkcmVgLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGFkcmUsIGhpam8sIG5pZXRvIH0pLFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZnVuY2lvbiBwYWRyZSBhY3RpdmFkYVwiKVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgY29uc3QgY3VhZHJvSWRIaWpvID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhpam9EZXIxID0gZGF0YUN1YWRyby5sYWRvX2RlcmVjaG8uZ3VpZGU7XHJcbiAgICBjb25zdCBoaWpvSXpxMSA9IGRhdGFDdWFkcm8ubGFkb19penF1aWVyZG8uZ3VpZGU7XHJcblxyXG4gICAgaWYgKGhpam9EZXIxKSB7XHJcbiAgICAgIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaChcclxuXHJcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBQ0tFTkR9Y3VhZHJvL2N1YWRyb0hpam8vJHtoaWpvRGVyMX1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QganNvbjEgPSBhd2FpdCByZXMxLmpzb24oKTtcclxuICAgICAgaWYgKGpzb24xID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZW5lbW9zIGVsIG1pc21vIGN1YWRybyBpZFwiKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coaGlqb0RlcilcclxuICAgICAgfVxyXG4gICAgICAvL3NpIGV4aXN0ZSBzaWduaWZpY2EgcXVlIG5vIHRpZW5lbiBlbCBtaXNtbyBjdWFkcm8gaWRcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vIHRlbmVtb3MgZWwgbWlzbW8gY3VhZHJvIGlkXCIpXHJcbiAgICAgICAgc2V0SGlqb0Rlcih0cnVlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpZiAoaGlqb0l6cTEpIHtcclxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKFxyXG5cclxuICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH1jdWFkcm8vY3VhZHJvSGlqby8ke2hpam9JenExfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBqc29uMiA9IGF3YWl0IHJlczIuanNvbigpO1xyXG4gICAgICBpZiAoanNvbjIgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlbmVtb3MgZWwgbWlzbW8gY3VhZHJvIGlkXCIpXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhoaWpvSXpxKVxyXG5cclxuICAgICAgfVxyXG4gICAgICAvL3NpIGV4aXN0ZSBzaWduaWZpY2EgcXVlIG5vIHRpZW5lbiBlbCBtaXNtbyBjdWFkcm8gaWRcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vIHRlbmVtb3MgZWwgbWlzbW8gY3VhZHJvIGlkXCIpXHJcbiAgICAgICAgc2V0SGlqb0l6cSh0cnVlKVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgfSBcclxuXHJcbiAgY29uc3QgY3JlYXRlQ3VhZHJvcyA9IGFzeW5jIChwcm9wMSwgcHJvcDIsIHVzZXJIaWpvKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIWRhdGFDdWFkcm8pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gaGF5IGN1YWRybyBjb24gZGF0YVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gTGxhbWFyIGEgdHUgZnVuY2nDs24gYWN0aXZhciB1c3VhcmlvXHJcbiAgICAgIFxyXG4gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQUNLRU5EfWN1YWRyby9jcmVhdGVDdWFkcm9zYCwgIC8vIEFqdXN0YSBsYSBydXRhIHNlZ8O6biB0dSBjb25maWd1cmFjacOzblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YUN1YWRybyxwcm9wMSwgcHJvcDIsIHVzZXJIaWpvIH0pLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIC8vICBjb25zb2xlLmxvZyhcImRhdGEgZGVsIGN1YWRybyBBUElcIiwganNvbik7IFxyXG4gICAgICBjb25zb2xlLmxvZyhcImxhIHByb3AgbGxlZ2EgYmllblwiLHByb3AxLCBwcm9wMiwgdXNlckhpam8pXHJcblxyXG4gICAgIC8vIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGVudmlhciBkYXRhQ3VhZHJvOlwiLCBlcnJvcik7XHJcbiAgICB9IFxyXG4gIH07XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQUNLRU5EfXVzZXIvZGF0YWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldERhdGFVc2VyKGpzb24pO1xyXG4gICAgIFxyXG4gIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhciBzaSBjdWFkcm9faWQgbm8gZXMgbnVsbCBhbnRlcyBkZSBoYWNlciBsYSBzZWd1bmRhIHNvbGljaXR1ZFxyXG4gICAgICAgIGlmIChqc29uLmN1YWRyb19pZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH1jdWFkcm8vJHtqc29uLmN1YWRyb19pZH1gXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QganNvbjIgPSBhd2FpdCByZXMyLmpzb24oKTtcclxuICAgICAgICAgIHNldERhdGFDdWFkcm8oanNvbjIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgaWYoanNvbi51c2VybmFtZSA9PT0ganNvbjIubGVnZW5kKSB7XHJcbiAgICAgICAgICAgIHNldExlZ2VuZCh0cnVlKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gXHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcml2YXRlIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gSW5kaWNhciBxdWUgbG9zIGRhdG9zIHNlIGhhbiBjYXJnYWRvXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFDS0VORH11c2VyL3VzZXJzYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgc2V0RGF0YVVzZXJzKGpzb24pO1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5hY3RpdmVVc2Vyc0xpc3QgPSBqc29uLmZpbHRlcih1c2VyID0+IHVzZXIuYWN0aXZlICE9PSB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRJbmFjdGl2ZVVzZXJzKGluYWN0aXZlVXNlcnNMaXN0KVxyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcml2YXRlIGRhdGE6XCIsIGVycm9yKTt9IH07XHJcblxyXG4gIFxyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gICAgZmV0Y2hVc2VycygpO1xyXG4gICAgXHJcbiAgfSwgW3Rva2VuLCByZXNldF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwaUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGF0YVVzZXIsIGRhdGFDdWFkcm8sIHNldFRva2VuLCBzZXRSZXNldCwgbG9hZGluZywgXHJcbiAgICBpbmFjdGl2ZVVzZXJzLCBhY3RpdmFyVXN1YXJpbywgZGVzYWN0aXZhclVzdWFyaW8sIGxlZ2VuZCwgc2V0TGVnZW5kLCBkZWxldGVDdWFkcm8sIGRlbGV0ZVVzZXIsIFxyXG4gICAgdHJhZXJDdWFkcm9QYWRyZSwgY3VhZHJvSWRIaWpvLCBoaWpvRGVyLCBoaWpvSXpxLCBjYW1iaWFyRXN0YWRvQ29tcGxldGUsIGNyZWF0ZUN1YWRyb3MgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBpQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb29raWVzIiwiQXBpQ29udGV4dCIsInVzZUFwaUNvbnRleHQiLCJBcGlQcm92aWRlciIsImNoaWxkcmVuIiwiZGF0YVVzZXIiLCJzZXREYXRhVXNlciIsImRhdGFVc2VycyIsInNldERhdGFVc2VycyIsImRhdGFDdWFkcm8iLCJzZXREYXRhQ3VhZHJvIiwiaW5hY3RpdmVVc2VycyIsInNldEluYWN0aXZlVXNlcnMiLCJyZXNldCIsInNldFJlc2V0IiwidG9rZW4iLCJzZXRUb2tlbiIsImdldCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibGVnZW5kIiwic2V0TGVnZW5kIiwiaGlqb0RlciIsInNldEhpam9EZXIiLCJoaWpvSXpxIiwic2V0SGlqb0l6cSIsImRlbGV0ZUN1YWRybyIsIl9pZCIsImNvbnNvbGUiLCJlcnJvciIsInJlcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQUNLRU5EIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImxvZyIsImRlbGV0ZVVzZXIiLCJ1c2VybmFtZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJhY3RpdmFyVXN1YXJpbyIsImRlc2FjdGl2YXJVc3VhcmlvIiwiY2FtYmlhckVzdGFkb0NvbXBsZXRlIiwidXNlciIsInRyYWVyQ3VhZHJvUGFkcmUiLCJwYWRyZSIsInJlZmVycmFsX2ZhdGhlciIsImhpam8iLCJuaWV0byIsInJlZmVyaWRvcyIsImN1YWRyb0lkSGlqbyIsImhpam9EZXIxIiwibGFkb19kZXJlY2hvIiwiZ3VpZGUiLCJoaWpvSXpxMSIsImxhZG9faXpxdWllcmRvIiwicmVzMSIsImpzb24xIiwicmVzMiIsImpzb24yIiwiY3JlYXRlQ3VhZHJvcyIsInByb3AxIiwicHJvcDIiLCJ1c2VySGlqbyIsImZldGNoRGF0YSIsIkF1dGhvcml6YXRpb24iLCJjdWFkcm9faWQiLCJmZXRjaFVzZXJzIiwiaW5hY3RpdmVVc2Vyc0xpc3QiLCJmaWx0ZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/apiContext.js\n"));

/***/ })

});