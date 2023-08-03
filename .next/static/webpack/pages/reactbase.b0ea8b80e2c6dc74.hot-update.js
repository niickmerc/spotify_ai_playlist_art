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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_SpotifyController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/SpotifyController */ \"./controllers/SpotifyController.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\nfunction PlayListViz(spotifyData) {\n    // const SpotifyCallback = () => {\n    //     useEffect(() => {\n    //     // Function to extract the access token from the URL fragment\n    //     const getAccessToken = () => {\n    //         const params = new URLSearchParams(window.location.hash.substr(1));\n    //         const accessToken = params.get('access_token');\n    //         // Now you have the access token, you can use it to make API calls\n    //         console.log('Access Token:', accessToken);\n    //     };\n    // you can maybe import the getaccess token from /callback, or save it and call it from localstorage.\n    //     getAccessToken();\n    //     }, []);\n    // }\n    // this works\n    const prefetchPlaylists = async ()=>{\n        const accessToken = localStorage.getItem(\"accessToken\");\n        console.log(\"found access token in reactbase: \" + accessToken);\n        return accessToken;\n    };\n    // this is the bottleneck. something's not right here.\n    const fetchPlaylists = async (accessToken)=>{\n        try {\n            // need to login first through index.html page.\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8888/get_playlists\", accessToken);\n            const data = response.data;\n            console.log(data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            // Handle error if needed\n            return null;\n        }\n    };\n    // prefetchPlaylists().then( (accessToken) => {\n    //     fetchPlaylists(accessToken);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpotifAiTitle, {}, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpotifAiTable, {\n                spotifyData: spotifyData\n            }, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 49,\n        columnNumber: 14\n    }, this);\n}\n_c = PlayListViz;\nfunction SpotifAiTitle() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Spotif.ai\"\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 57,\n        columnNumber: 12\n    }, this);\n}\n_c1 = SpotifAiTitle;\n// here we assume we have spotifyData as a list of playlists as per sample, JSON being funky currently.\nfunction SpotifAiTable(spotifyData) {\n    const rows = [];\n    // temporary solution to getting it as an array.\n    let spotifyPlaylists = [];\n    spotifyPlaylists.push(spotifyData);\n    spotifyPlaylists.push(spotifyData);\n    console.log(\"here we have \" + spotifyPlaylists.length);\n    for (const playlist of spotifyPlaylists){\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlaylistRow, {\n            playlist: playlist\n        }, void 0, false, {\n            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {}, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: rows\n            }, void 0, false, {\n                fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 75,\n        columnNumber: 13\n    }, this);\n}\n_c2 = SpotifAiTable;\n// each row needs a column for name of playlist, playlist image, and a button for Generate.\nfunction PlaylistRow(playlist) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"playlist name goes here\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GenerateButton, {}, void 0, false, {\n                    fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n            lineNumber: 90,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_c3 = PlaylistRow;\n// need to add an on-click that calls API chain to generate new playlist image.\nfunction GenerateButton() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"a\",\n        children: \"Generate\"\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 101,\n        columnNumber: 13\n    }, this);\n}\n_c4 = GenerateButton;\n// this will be state in the future?\n// this would be the data from spotify api call GetPlaylists.\n// let dataFromGetPlaylists = getPlaylists();\n// static sample. this is an array of one singular playlist. \n// pretty sure we'll have to tease apart the API some more to turn data into this form.\nlet dataFromGetPlaylists = {\n    \"href\": \"https://api.spotify.com/v1/me/shows?offset=0&limit=20\",\n    \"limit\": 20,\n    \"next\": \"https://api.spotify.com/v1/me/shows?offset=1&limit=1\",\n    \"offset\": 0,\n    \"previous\": \"https://api.spotify.com/v1/me/shows?offset=1&limit=1\",\n    \"total\": 4,\n    \"items\": [\n        {\n            \"collaborative\": false,\n            \"description\": \"string\",\n            \"external_urls\": {\n                \"spotify\": \"string\"\n            },\n            \"href\": \"string\",\n            \"id\": \"string\",\n            \"images\": [\n                {\n                    \"url\": \"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\",\n                    \"height\": 300,\n                    \"width\": 300\n                }\n            ],\n            \"name\": \"Sample Playlist\",\n            \"owner\": {\n                \"external_urls\": {\n                    \"spotify\": \"string\"\n                },\n                \"followers\": {\n                    \"href\": \"string\",\n                    \"total\": 0\n                },\n                \"href\": \"string\",\n                \"id\": \"string\",\n                \"type\": \"user\",\n                \"uri\": \"string\",\n                \"display_name\": \"string\"\n            },\n            \"public\": false,\n            \"snapshot_id\": \"string\",\n            \"tracks\": {\n                \"href\": \"string\",\n                \"total\": 0\n            },\n            \"type\": \"string\",\n            \"uri\": \"string\"\n        }\n    ]\n};\n// for each playlist can use getPlaylistImage.\nlet PlaylistImages = [];\nfunction App() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayListViz, {\n        spotifyData: dataFromGetPlaylists\n    }, void 0, false, {\n        fileName: \"/Users/anmolsangha/Documents/REBIRTH GENESIS/spotifAI/spotif-ai-cover-art/pages/reactbase.js\",\n        lineNumber: 167,\n        columnNumber: 12\n    }, this);\n}\n_c5 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"PlayListViz\");\n$RefreshReg$(_c1, \"SpotifAiTitle\");\n$RefreshReg$(_c2, \"SpotifAiTable\");\n$RefreshReg$(_c3, \"PlaylistRow\");\n$RefreshReg$(_c4, \"GenerateButton\");\n$RefreshReg$(_c5, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDVixlQUFlO1lBQ2YsVUFBVTtnQkFDUixRQUFRO2dCQUNSLFNBQVM7WUFDWDtZQUNBLFFBQVE7WUFDUixPQUFPO1FBQ1Q7S0FDRDtBQUNIO0FBRUYsOENBQThDO0FBQzlDLElBQUlDLGlCQUFpQixFQUFFO0FBRXZCLFNBQVNDO0lBQ0wscUJBQU8sOERBQUNoQztRQUFZQyxhQUFhNkI7Ozs7OztBQUNyQztNQUZTRTtBQUlULCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlYWN0YmFzZS5qcz80ZWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdEltYWdlLCBnZXRQbGF5bGlzdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvU3BvdGlmeUNvbnRyb2xsZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gUGxheUxpc3RWaXooc3BvdGlmeURhdGEpIHtcblxuICAgIFxuICAgIC8vIGNvbnN0IFNwb3RpZnlDYWxsYmFjayA9ICgpID0+IHtcbiAgICAvLyAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgLy8gRnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUgYWNjZXNzIHRva2VuIGZyb20gdGhlIFVSTCBmcmFnbWVudFxuICAgIC8vICAgICBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9ICgpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcGFyYW1zLmdldCgnYWNjZXNzX3Rva2VuJyk7XG4gICAgLy8gICAgICAgICAvLyBOb3cgeW91IGhhdmUgdGhlIGFjY2VzcyB0b2tlbiwgeW91IGNhbiB1c2UgaXQgdG8gbWFrZSBBUEkgY2FsbHNcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdBY2Nlc3MgVG9rZW46JywgYWNjZXNzVG9rZW4pO1xuICAgIC8vICAgICB9O1xuXG4gICAgLy8geW91IGNhbiBtYXliZSBpbXBvcnQgdGhlIGdldGFjY2VzcyB0b2tlbiBmcm9tIC9jYWxsYmFjaywgb3Igc2F2ZSBpdCBhbmQgY2FsbCBpdCBmcm9tIGxvY2Fsc3RvcmFnZS5cbiAgICBcbiAgICAvLyAgICAgZ2V0QWNjZXNzVG9rZW4oKTtcbiAgICAvLyAgICAgfSwgW10pO1xuICAgIC8vIH1cbiAgICBcbiAgICAvLyB0aGlzIHdvcmtzXG4gICAgY29uc3QgcHJlZmV0Y2hQbGF5bGlzdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQgYWNjZXNzIHRva2VuIGluIHJlYWN0YmFzZTogXCIgKyBhY2Nlc3NUb2tlbik7XG4gICAgICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIHRoZSBib3R0bGVuZWNrLiBzb21ldGhpbmcncyBub3QgcmlnaHQgaGVyZS5cbiAgICBjb25zdCBmZXRjaFBsYXlsaXN0cyA9IGFzeW5jIChhY2Nlc3NUb2tlbikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBsb2dpbiBmaXJzdCB0aHJvdWdoIGluZGV4Lmh0bWwgcGFnZS5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2dldF9wbGF5bGlzdHNcIiwgYWNjZXNzVG9rZW4pOyBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yIGlmIG5lZWRlZFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcHJlZmV0Y2hQbGF5bGlzdHMoKS50aGVuKCAoYWNjZXNzVG9rZW4pID0+IHtcbiAgICAvLyAgICAgZmV0Y2hQbGF5bGlzdHMoYWNjZXNzVG9rZW4pO1xuICAgIC8vIH0pO1xuXG4gICAgcmV0dXJuICggPGRpdj5cbiAgICAgICAgPFNwb3RpZkFpVGl0bGUgLz5cbiAgICAgICAgPFNwb3RpZkFpVGFibGUgc3BvdGlmeURhdGE9e3Nwb3RpZnlEYXRhfS8+XG4gICAgPC9kaXY+ICAgICAgICBcbiAgICApO1xufVxuXG5mdW5jdGlvbiBTcG90aWZBaVRpdGxlKCkge1xuICAgIHJldHVybiA8aDE+U3BvdGlmLmFpPC9oMT5cbn1cblxuLy8gaGVyZSB3ZSBhc3N1bWUgd2UgaGF2ZSBzcG90aWZ5RGF0YSBhcyBhIGxpc3Qgb2YgcGxheWxpc3RzIGFzIHBlciBzYW1wbGUsIEpTT04gYmVpbmcgZnVua3kgY3VycmVudGx5LlxuZnVuY3Rpb24gU3BvdGlmQWlUYWJsZShzcG90aWZ5RGF0YSkge1xuICAgIGNvbnN0IHJvd3MgPSBbXTtcblxuICAgIC8vIHRlbXBvcmFyeSBzb2x1dGlvbiB0byBnZXR0aW5nIGl0IGFzIGFuIGFycmF5LlxuICAgIGxldCBzcG90aWZ5UGxheWxpc3RzID0gW107XG4gICAgc3BvdGlmeVBsYXlsaXN0cy5wdXNoKHNwb3RpZnlEYXRhKTtcbiAgICBzcG90aWZ5UGxheWxpc3RzLnB1c2goc3BvdGlmeURhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVyZSB3ZSBoYXZlIFwiICsgc3BvdGlmeVBsYXlsaXN0cy5sZW5ndGgpO1xuICAgIGZvciAoY29uc3QgcGxheWxpc3Qgb2Ygc3BvdGlmeVBsYXlsaXN0cykge1xuICAgICAgICByb3dzLnB1c2goXG4gICAgICAgICAgICA8UGxheWxpc3RSb3cgcGxheWxpc3Q9e3BsYXlsaXN0fS8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuICg8dGFibGUgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIFxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cm93c31cbiAgICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgICk7XG59XG5cbi8vIGVhY2ggcm93IG5lZWRzIGEgY29sdW1uIGZvciBuYW1lIG9mIHBsYXlsaXN0LCBwbGF5bGlzdCBpbWFnZSwgYW5kIGEgYnV0dG9uIGZvciBHZW5lcmF0ZS5cbmZ1bmN0aW9uIFBsYXlsaXN0Um93IChwbGF5bGlzdCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgcGxheWxpc3QgbmFtZSBnb2VzIGhlcmVcbiAgICAgICAgICAgICAgICA8R2VuZXJhdGVCdXR0b24vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdHI+XG4gICAgKVxufVxuXG4vLyBuZWVkIHRvIGFkZCBhbiBvbi1jbGljayB0aGF0IGNhbGxzIEFQSSBjaGFpbiB0byBnZW5lcmF0ZSBuZXcgcGxheWxpc3QgaW1hZ2UuXG5mdW5jdGlvbiBHZW5lcmF0ZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eydhJ30+XG4gICAgICAgICAgICBHZW5lcmF0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG4vLyB0aGlzIHdpbGwgYmUgc3RhdGUgaW4gdGhlIGZ1dHVyZT9cbi8vIHRoaXMgd291bGQgYmUgdGhlIGRhdGEgZnJvbSBzcG90aWZ5IGFwaSBjYWxsIEdldFBsYXlsaXN0cy5cbi8vIGxldCBkYXRhRnJvbUdldFBsYXlsaXN0cyA9IGdldFBsYXlsaXN0cygpO1xuXG4vLyBzdGF0aWMgc2FtcGxlLiB0aGlzIGlzIGFuIGFycmF5IG9mIG9uZSBzaW5ndWxhciBwbGF5bGlzdC4gXG4vLyBwcmV0dHkgc3VyZSB3ZSdsbCBoYXZlIHRvIHRlYXNlIGFwYXJ0IHRoZSBBUEkgc29tZSBtb3JlIHRvIHR1cm4gZGF0YSBpbnRvIHRoaXMgZm9ybS5cbmxldCBkYXRhRnJvbUdldFBsYXlsaXN0cyA9IHtcbiAgICBcImhyZWZcIjogXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9zaG93cz9vZmZzZXQ9MCZsaW1pdD0yMFwiLFxuICAgIFwibGltaXRcIjogMjAsXG4gICAgXCJuZXh0XCI6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvc2hvd3M/b2Zmc2V0PTEmbGltaXQ9MVwiLFxuICAgIFwib2Zmc2V0XCI6IDAsXG4gICAgXCJwcmV2aW91c1wiOiBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3Nob3dzP29mZnNldD0xJmxpbWl0PTFcIixcbiAgICBcInRvdGFsXCI6IDQsXG4gICAgXCJpdGVtc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sbGFib3JhdGl2ZVwiOiBmYWxzZSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImV4dGVybmFsX3VybHNcIjoge1xuICAgICAgICAgIFwic3BvdGlmeVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHJlZlwiOiBcInN0cmluZ1wiLFxuICAgICAgICBcImlkXCI6IFwic3RyaW5nXCIsXG4gICAgICAgIFwiaW1hZ2VzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMDFlMDJmZjljYTEwYjU1Y2U4MmFlNTUzYzgyMjhcIixcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDMwMCxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMzAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJTYW1wbGUgUGxheWxpc3RcIixcbiAgICAgICAgXCJvd25lclwiOiB7XG4gICAgICAgICAgXCJleHRlcm5hbF91cmxzXCI6IHtcbiAgICAgICAgICAgIFwic3BvdGlmeVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZvbGxvd2Vyc1wiOiB7XG4gICAgICAgICAgICBcImhyZWZcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIFwidG90YWxcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJocmVmXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJpZFwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwidHlwZVwiOiBcInVzZXJcIixcbiAgICAgICAgICBcInVyaVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwiZGlzcGxheV9uYW1lXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdWJsaWNcIjogZmFsc2UsXG4gICAgICAgIFwic25hcHNob3RfaWRcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJ0cmFja3NcIjoge1xuICAgICAgICAgIFwiaHJlZlwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgIFwidG90YWxcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgXCJ1cmlcIjogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuLy8gZm9yIGVhY2ggcGxheWxpc3QgY2FuIHVzZSBnZXRQbGF5bGlzdEltYWdlLlxubGV0IFBsYXlsaXN0SW1hZ2VzID0gW107XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gPFBsYXlMaXN0Vml6IHNwb3RpZnlEYXRhPXtkYXRhRnJvbUdldFBsYXlsaXN0c30vPlxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZ2V0UGxheWxpc3RJbWFnZSIsImdldFBsYXlsaXN0cyIsImF4aW9zIiwiUGxheUxpc3RWaXoiLCJzcG90aWZ5RGF0YSIsInByZWZldGNoUGxheWxpc3RzIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImZldGNoUGxheWxpc3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJTcG90aWZBaVRpdGxlIiwiU3BvdGlmQWlUYWJsZSIsImgxIiwicm93cyIsInNwb3RpZnlQbGF5bGlzdHMiLCJwdXNoIiwibGVuZ3RoIiwicGxheWxpc3QiLCJQbGF5bGlzdFJvdyIsInRhYmxlIiwiY2xhc3NOYW1lIiwidGhlYWQiLCJ0Ym9keSIsInRyIiwiR2VuZXJhdGVCdXR0b24iLCJidXR0b24iLCJkYXRhRnJvbUdldFBsYXlsaXN0cyIsIlBsYXlsaXN0SW1hZ2VzIiwiQXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reactbase.js\n"));

/***/ })

});