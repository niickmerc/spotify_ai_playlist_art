"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reactbase",{

/***/ "./pages/reactbase.js":
/*!****************************!*\
  !*** ./pages/reactbase.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_SpotifyController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/SpotifyController */ \"./controllers/SpotifyController.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nfunction PlayListViz(spotifyData) {\n    // const SpotifyCallback = () => {\n    //     useEffect(() => {\n    //     // Function to extract the access token from the URL fragment\n    //     const getAccessToken = () => {\n    //         const params = new URLSearchParams(window.location.hash.substr(1));\n    //         const accessToken = params.get('access_token');\n    //         // Now you have the access token, you can use it to make API calls\n    //         console.log('Access Token:', accessToken);\n    //     };\n    // you can maybe import the getaccess token from /callback, or save it and call it from localstorage.\n    //     getAccessToken();\n    //     }, []);\n    // }\n    // this works\n    const prefetchPlaylists = async ()=>{\n        const accessToken = localStorage.getItem(\"accessToken\");\n        console.log(\"found access token in reactbase: \" + accessToken);\n        return accessToken;\n    };\n    // this is the bottleneck. something's not right here.\n    const fetchPlaylists = async (accessToken)=>{\n        try {\n            // need to login first through index.html page.\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8888/get_playlists\", accessToken);\n            const data = response.data;\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            // Handle error if needed\n            return null;\n        }\n    };\n    // prefetchPlaylists().then( (accessToken) => {\n    //     fetchPlaylists(accessToken);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpotifAiTitle, {}, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpotifAiTable, {\n                spotifyData: spotifyData\n            }, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 49,\n        columnNumber: 14\n    }, this);\n}\n_c = PlayListViz;\nfunction SpotifAiTitle() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Spotif.ai\"\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 57,\n        columnNumber: 12\n    }, this);\n}\n_c1 = SpotifAiTitle;\n// here we assume we have spotifyData as a list of playlists as per sample, JSON being funky currently.\nfunction SpotifAiTable(spotifyData) {\n    const rows = [];\n    // temporary solution to getting it as an array.\n    let spotifyPlaylists = [];\n    spotifyPlaylists.push(spotifyData);\n    spotifyPlaylists.push(spotifyData);\n    console.log(\"here we have \" + spotifyPlaylists.length);\n    for (const playlist of spotifyPlaylists){\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlaylistRow, {\n            playlist: playlist\n        }, void 0, false, {\n            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: rows\n            }, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 75,\n        columnNumber: 13\n    }, this);\n}\n_c2 = SpotifAiTable;\n// each row needs a column for name of playlist, playlist image, and a button for Generate.\nfunction PlaylistRow(playlist) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"playlist name here\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GenerateButton, {}, void 0, false, {\n                    fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n            lineNumber: 97,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, this);\n}\n_c3 = PlaylistRow;\n// need to add an on-click that calls API chain to generate new playlist image.\nfunction GenerateButton() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"a\",\n        children: \"Generate\"\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 108,\n        columnNumber: 13\n    }, this);\n}\n_c4 = GenerateButton;\n// this will be state in the future?\n// this would be the data from spotify api call GetPlaylists.\n// let dataFromGetPlaylists = getPlaylists();\n// static sample. this is an array of one singular playlist. \n// pretty sure we'll have to tease apart the API some more to turn data into this form.\nlet dataFromGetPlaylists = {\n    \"href\": \"https://api.spotify.com/v1/me/shows?offset=0&limit=20\",\n    \"limit\": 20,\n    \"next\": \"https://api.spotify.com/v1/me/shows?offset=1&limit=1\",\n    \"offset\": 0,\n    \"previous\": \"https://api.spotify.com/v1/me/shows?offset=1&limit=1\",\n    \"total\": 4,\n    \"items\": [\n        {\n            \"collaborative\": false,\n            \"description\": \"string\",\n            \"external_urls\": {\n                \"spotify\": \"string\"\n            },\n            \"href\": \"string\",\n            \"id\": \"string\",\n            \"images\": [\n                {\n                    \"url\": \"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\",\n                    \"height\": 300,\n                    \"width\": 300\n                }\n            ],\n            \"name\": \"Sample Playlist\",\n            \"owner\": {\n                \"external_urls\": {\n                    \"spotify\": \"string\"\n                },\n                \"followers\": {\n                    \"href\": \"string\",\n                    \"total\": 0\n                },\n                \"href\": \"string\",\n                \"id\": \"string\",\n                \"type\": \"user\",\n                \"uri\": \"string\",\n                \"display_name\": \"string\"\n            },\n            \"public\": false,\n            \"snapshot_id\": \"string\",\n            \"tracks\": {\n                \"href\": \"string\",\n                \"total\": 0\n            },\n            \"type\": \"string\",\n            \"uri\": \"string\"\n        }\n    ]\n};\n// for each playlist can use getPlaylistImage.\nlet PlaylistImages = [];\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayListViz, {\n        spotifyData: dataFromGetPlaylists\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 174,\n        columnNumber: 12\n    }, this);\n}\n_c5 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"PlayListViz\");\n$RefreshReg$(_c1, \"SpotifAiTitle\");\n$RefreshReg$(_c2, \"SpotifAiTable\");\n$RefreshReg$(_c3, \"PlaylistRow\");\n$RefreshReg$(_c4, \"GenerateButton\");\n$RefreshReg$(_c5, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDTixRQUFRO2dCQUNSLE9BQU87Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0EsVUFBVTtZQUNWLGVBQWU7WUFDZixVQUFVO2dCQUNSLFFBQVE7Z0JBQ1IsU0FBUztZQUNYO1lBQ0EsUUFBUTtZQUNSLE9BQU87UUFDVDtLQUNEO0FBQ0g7QUFFRiw4Q0FBOEM7QUFDOUMsSUFBSUMsaUJBQWlCLEVBQUU7QUFFdkIsU0FBU0M7SUFDTCxxQkFBTyw4REFBQ2pDO1FBQVlDLGFBQWE4Qjs7Ozs7O0FBQ3JDO01BRlNFO0FBSVQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVhY3RiYXNlLmpzPzRlZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFBsYXlsaXN0SW1hZ2UsIGdldFBsYXlsaXN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9TcG90aWZ5Q29udHJvbGxlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBQbGF5TGlzdFZpeihzcG90aWZ5RGF0YSkge1xuXG4gICAgXG4gICAgLy8gY29uc3QgU3BvdGlmeUNhbGxiYWNrID0gKCkgPT4ge1xuICAgIC8vICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICAvLyBGdW5jdGlvbiB0byBleHRyYWN0IHRoZSBhY2Nlc3MgdG9rZW4gZnJvbSB0aGUgVVJMIGZyYWdtZW50XG4gICAgLy8gICAgIGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xuICAgIC8vICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBwYXJhbXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAvLyAgICAgICAgIC8vIE5vdyB5b3UgaGF2ZSB0aGUgYWNjZXNzIHRva2VuLCB5b3UgY2FuIHVzZSBpdCB0byBtYWtlIEFQSSBjYWxsc1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ0FjY2VzcyBUb2tlbjonLCBhY2Nlc3NUb2tlbik7XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyB5b3UgY2FuIG1heWJlIGltcG9ydCB0aGUgZ2V0YWNjZXNzIHRva2VuIGZyb20gL2NhbGxiYWNrLCBvciBzYXZlIGl0IGFuZCBjYWxsIGl0IGZyb20gbG9jYWxzdG9yYWdlLlxuICAgIFxuICAgIC8vICAgICBnZXRBY2Nlc3NUb2tlbigpO1xuICAgIC8vICAgICB9LCBbXSk7XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIHRoaXMgd29ya3NcbiAgICBjb25zdCBwcmVmZXRjaFBsYXlsaXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZCBhY2Nlc3MgdG9rZW4gaW4gcmVhY3RiYXNlOiBcIiArIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgdGhlIGJvdHRsZW5lY2suIHNvbWV0aGluZydzIG5vdCByaWdodCBoZXJlLlxuICAgIGNvbnN0IGZldGNoUGxheWxpc3RzID0gYXN5bmMgKGFjY2Vzc1Rva2VuKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIGxvZ2luIGZpcnN0IHRocm91Z2ggaW5kZXguaHRtbCBwYWdlLlxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvZ2V0X3BsYXlsaXN0c1wiLCBhY2Nlc3NUb2tlbik7IFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IgaWYgbmVlZGVkXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBwcmVmZXRjaFBsYXlsaXN0cygpLnRoZW4oIChhY2Nlc3NUb2tlbikgPT4ge1xuICAgIC8vICAgICBmZXRjaFBsYXlsaXN0cyhhY2Nlc3NUb2tlbik7XG4gICAgLy8gfSk7XG5cbiAgICByZXR1cm4gKCA8ZGl2PlxuICAgICAgICA8U3BvdGlmQWlUaXRsZSAvPlxuICAgICAgICA8U3BvdGlmQWlUYWJsZSBzcG90aWZ5RGF0YT17c3BvdGlmeURhdGF9IC8+XG4gICAgPC9kaXY+ICAgICAgICBcbiAgICApO1xufVxuXG5mdW5jdGlvbiBTcG90aWZBaVRpdGxlKCkge1xuICAgIHJldHVybiA8aDE+U3BvdGlmLmFpPC9oMT5cbn1cblxuLy8gaGVyZSB3ZSBhc3N1bWUgd2UgaGF2ZSBzcG90aWZ5RGF0YSBhcyBhIGxpc3Qgb2YgcGxheWxpc3RzIGFzIHBlciBzYW1wbGUsIEpTT04gYmVpbmcgZnVua3kgY3VycmVudGx5LlxuZnVuY3Rpb24gU3BvdGlmQWlUYWJsZShzcG90aWZ5RGF0YSkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcblxuICAgIC8vIHRlbXBvcmFyeSBzb2x1dGlvbiB0byBnZXR0aW5nIGl0IGFzIGFuIGFycmF5LlxuICAgIGxldCBzcG90aWZ5UGxheWxpc3RzID0gW107XG4gICAgc3BvdGlmeVBsYXlsaXN0cy5wdXNoKHNwb3RpZnlEYXRhKTtcbiAgICBzcG90aWZ5UGxheWxpc3RzLnB1c2goc3BvdGlmeURhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVyZSB3ZSBoYXZlIFwiICsgc3BvdGlmeVBsYXlsaXN0cy5sZW5ndGgpO1xuICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2Ygc3BvdGlmeVBsYXlsaXN0cykge1xuICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICA8UGxheWxpc3RSb3cgcGxheWxpc3Q9e3BsYXlsaXN0fS8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuICg8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+IFxuICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtyb3dzfVxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgKTtcbn1cblxuLy8gZWFjaCByb3cgbmVlZHMgYSBjb2x1bW4gZm9yIG5hbWUgb2YgcGxheWxpc3QsIHBsYXlsaXN0IGltYWdlLCBhbmQgYSBidXR0b24gZm9yIEdlbmVyYXRlLlxuZnVuY3Rpb24gUGxheWxpc3RSb3cgKHBsYXlsaXN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBwbGF5bGlzdCBuYW1lIGhlcmVcbiAgICAgICAgICAgICAgICA8R2VuZXJhdGVCdXR0b24vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuXG4vLyBuZWVkIHRvIGFkZCBhbiBvbi1jbGljayB0aGF0IGNhbGxzIEFQSSBjaGFpbiB0byBnZW5lcmF0ZSBuZXcgcGxheWxpc3QgaW1hZ2UuXG5mdW5jdGlvbiBHZW5lcmF0ZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydhJ30+XG4gICAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG4vLyB0aGlzIHdpbGwgYmUgc3RhdGUgaW4gdGhlIGZ1dHVyZT9cbi8vIHRoaXMgd291bGQgYmUgdGhlIGRhdGEgZnJvbSBzcG90aWZ5IGFwaSBjYWxsIEdldFBsYXlsaXN0cy5cbi8vIGxldCBkYXRhRnJvbUdldFBsYXlsaXN0cyA9IGdldFBsYXlsaXN0cygpO1xuXG4vLyBzdGF0aWMgc2FtcGxlLiB0aGlzIGlzIGFuIGFycmF5IG9mIG9uZSBzaW5ndWxhciBwbGF5bGlzdC4gXG4vLyBwcmV0dHkgc3VyZSB3ZSdsbCBoYXZlIHRvIHRlYXNlIGFwYXJ0IHRoZSBBUEkgc29tZSBtb3JlIHRvIHR1cm4gZGF0YSBpbnRvIHRoaXMgZm9ybS5cbmxldCBkYXRhRnJvbUdldFBsYXlsaXN0cyA9IHtcbiAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9zaG93cz9vZmZzZXQ9MCZsaW1pdD0yMFwiLFxuICAgIFwibGltaXRcIjogMjAsXG4gICAgXCJuZXh0XCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvc2hvd3M/b2Zmc2V0PTEmbGltaXQ9MVwiLFxuICAgIFwib2Zmc2V0XCI6IDAsXG4gICAgXCJwcmV2aW91c1wiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3Nob3dzP29mZnNldD0xJmxpbWl0PTFcIixcbiAgICBcInRvdGFsXCI6IDQsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sbGFib3JhdGl2ZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xuICAgICAgICAgIFwic3BvdGlmeVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHJlZlwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImlkXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDJmZjljYTEwYjU1Y2U4MmFlNTUzYzgyMjhcIixcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDMwMCxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMzAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJTYW1wbGUgUGxheWxpc3RcIixcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZvbGxvd2Vyc1wiOiB7XG4gICAgICAgICAgICBcImhyZWZcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidG90YWxcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJocmVmXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInVzZXJcIixcbiAgICAgICAgICBcInVyaVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdWJsaWNcIjogZmFsc2UsXG4gICAgICAgIFwic25hcHNob3RfaWRcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJ0cmFja3NcIjoge1xuICAgICAgICAgIFwiaHJlZlwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwidG90YWxcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJ1cmlcIjogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuLy8gZm9yIGVhY2ggcGxheWxpc3QgY2FuIHVzZSBnZXRQbGF5bGlzdEltYWdlLlxubGV0IFBsYXlsaXN0SW1hZ2VzID0gW107XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFBsYXlMaXN0Vml6IHNwb3RpZnlEYXRhPXtkYXRhRnJvbUdldFBsYXlsaXN0c30vPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZ2V0UGxheWxpc3RJbWFnZSIsImdldFBsYXlsaXN0cyIsImF4aW9zIiwiUGxheUxpc3RWaXoiLCJzcG90aWZ5RGF0YSIsInByZWZldGNoUGxheWxpc3RzIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImZldGNoUGxheWxpc3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJTcG90aWZBaVRpdGxlIiwiU3BvdGlmQWlUYWJsZSIsImgxIiwicm93cyIsInNwb3RpZnlQbGF5bGlzdHMiLCJwdXNoIiwibGVuZ3RoIiwicGxheWxpc3QiLCJQbGF5bGlzdFJvdyIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJHZW5lcmF0ZUJ1dHRvbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRhdGFGcm9tR2V0UGxheWxpc3RzIiwiUGxheWxpc3RJbWFnZXMiLCJBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reactbase.js\n"));

/***/ })

});