(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/matchScore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//PTのスキルと利用者の症状一致したとき加算方式でマッチングさせる、位置情報も計算に含む
__turbopack_context__.s([
    "calculateMatchScore",
    ()=>calculateMatchScore
]);
const calculateMatchScore = (pt, user, userLat, userLng // 追加：利用者の今の経度
)=>{
    let score = 0;
    // ① 既存ロジック：症状の一致（5点）
    if (pt.skills.includes(user.symptom)) {
        score += 5;
    }
    // ② 既存ロジック：専門分野の一致（4点）
    if (user.symptom === "膝の痛み" && pt.specialty === "運動器") {
        score += 4;
    }
    // ③ 既存ロジック：経験年数の一致（3点）
    if (user.targetExperience === "5年以上" && pt.experienceYears >= 5) {
        score += 3;
    } else if (user.targetExperience === "3~5年" && pt.experienceYears >= 3 && pt.experienceYears < 5) {
        score += 3;
    }
    // ④ 【追加分】：距離による加点（5点満点）
    // 解説：もし位置情報が取れていれば、距離を計算して近いほど加点します
    if (userLat !== undefined && userLng !== undefined && pt.lat && pt.lng) {
        const distance = Math.sqrt(Math.pow(pt.lat - userLat, 2) + Math.pow(pt.lng - userLng, 2));
        if (distance < 0.05) {
            score += 5;
        } else if (distance < 0.1) {
            score += 2;
        }
    }
    return score;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// 解説：Google Mapsなどを使ってPTの位置をピンで表示
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function Map({ therapists }) {
    _s();
    const { isLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"])({
        googleMapsApiKey: "YOUR_API_KEY"
    });
    return isLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleMap"], {
        zoom: 10,
        center: {
            lat: 35.68,
            lng: 139.76
        },
        children: therapists.map((tp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                position: {
                    lat: tp.lat,
                    lng: tp.lng
                }
            }, tp.id, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this) : null;
}
_s(Map, "mLN67oIZdYDfCjxG2Fcvbwz7Mfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useJsApiLoader"]
    ];
});
_c = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/therapistsData'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matchScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/matchScore.ts [app-client] (ecmascript)");
// ★ ここを絶対パスに変えるか、正しい階層に修正します
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Map.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// 結果画面
"use client";
;
;
;
;
;
function ResultsContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const symptom = searchParams.get('symptom') || "";
    const expLimit = parseInt(searchParams.get('experience') || "0");
    const [sortType, setSortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("score");
    const [selectedPT, setSelectedPT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const userCondition = {
        symptom,
        targetExperience: expLimit.toString()
    };
    // 並び替えとフィルタリング
    const displayList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResultsContent.useMemo[displayList]": ()=>{
            let list = allPTs.filter({
                "ResultsContent.useMemo[displayList].list": (pt)=>pt.experienceYears >= expLimit
            }["ResultsContent.useMemo[displayList].list"]);
            const listWithScore = list.map({
                "ResultsContent.useMemo[displayList].listWithScore": (pt)=>({
                        ...pt,
                        matchScore: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$matchScore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateMatchScore"])(pt, userCondition, 33.5902, 130.4017)
                    })
            }["ResultsContent.useMemo[displayList].listWithScore"]);
            switch(sortType){
                case "score":
                    return listWithScore.sort({
                        "ResultsContent.useMemo[displayList]": (a, b)=>b.matchScore - a.matchScore
                    }["ResultsContent.useMemo[displayList]"]);
                case "rating":
                    return listWithScore.sort({
                        "ResultsContent.useMemo[displayList]": (a, b)=>b.rating - a.rating
                    }["ResultsContent.useMemo[displayList]"]);
                case "price_low":
                    return listWithScore.sort({
                        "ResultsContent.useMemo[displayList]": (a, b)=>a.price - b.price
                    }["ResultsContent.useMemo[displayList]"]);
                case "price_high":
                    return listWithScore.sort({
                        "ResultsContent.useMemo[displayList]": (a, b)=>b.price - a.price
                    }["ResultsContent.useMemo[displayList]"]);
                case "exp_long":
                    return listWithScore.sort({
                        "ResultsContent.useMemo[displayList]": (a, b)=>b.experienceYears - a.experienceYears
                    }["ResultsContent.useMemo[displayList]"]);
                default:
                    return listWithScore;
            }
        }
    }["ResultsContent.useMemo[displayList]"], [
        sortType,
        symptom,
        expLimit
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#f8f9fa",
            fontFamily: "sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    padding: "15px 30px",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    margin: 0,
                                    fontSize: "18px",
                                    color: "#333"
                                },
                                children: "セラピスト検索結果"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    margin: 0,
                                    fontSize: "13px",
                                    color: "#666"
                                },
                                children: [
                                    "症状: ",
                                    symptom
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        style: {
                            padding: "8px 12px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            fontSize: "14px"
                        },
                        value: sortType,
                        onChange: (e)=>setSortType(e.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "score",
                                children: "おすすめ順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "rating",
                                children: "評価が高い順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "price_low",
                                children: "料金が安い順"
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "50%",
                            overflowY: "auto",
                            padding: "20px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px"
                            },
                            children: displayList.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedPT(pt),
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid #eee",
                                        padding: "15px",
                                        borderRadius: "12px",
                                        backgroundColor: "#fff",
                                        cursor: "pointer",
                                        transition: "transform 0.1s"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: pt.photo,
                                            alt: pt.name,
                                            style: {
                                                width: "55px",
                                                height: "55px",
                                                borderRadius: "50%",
                                                marginRight: "12px",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: "16px"
                                                    },
                                                    children: [
                                                        pt.name,
                                                        " 先生"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: "2px 0",
                                                        fontSize: "12px",
                                                        color: "#666"
                                                    },
                                                    children: [
                                                        pt.specialty,
                                                        " / 経験",
                                                        pt.experienceYears,
                                                        "年"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: "bold",
                                                        color: "#0070f3",
                                                        fontSize: "14px"
                                                    },
                                                    children: [
                                                        "¥",
                                                        pt.price.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/results/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundColor: "#e6f7ff",
                                                color: "#0070f3",
                                                padding: "4px 8px",
                                                borderRadius: "6px",
                                                fontSize: "12px",
                                                fontWeight: "bold"
                                            },
                                            children: [
                                                pt.matchScore,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/results/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, pt.id, true, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "50%",
                            backgroundColor: "#eee"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Map$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            pts: displayList,
                            onMarkerClick: (pt)=>setSelectedPT(pt)
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            selectedPT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: "#fff",
                        width: "350px",
                        borderRadius: "20px",
                        padding: "25px",
                        textAlign: "center",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedPT.photo,
                            style: {
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                marginBottom: "10px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 93,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                margin: "0 0 10px 0"
                            },
                            children: [
                                selectedPT.name,
                                " 先生"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                textAlign: "left",
                                fontSize: "14px",
                                color: "#555",
                                lineHeight: "1.5",
                                marginBottom: "20px"
                            },
                            children: selectedPT.message
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 95,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push(`/reserve/${selectedPT.id}`),
                            style: {
                                width: "100%",
                                padding: "14px",
                                backgroundColor: "#0070f3",
                                color: "#fff",
                                border: "none",
                                borderRadius: "10px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            },
                            children: "予約日時を選択する"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedPT(null),
                            style: {
                                marginTop: "15px",
                                color: "#999",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "14px"
                            },
                            children: "閉じる"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 103,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 92,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 43,
        columnNumber: 9
    }, this);
}
_s(ResultsContent, "D8TQEjQS4fu/IftrT/fiU35ac9o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ResultsContent;
function ResultsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "読み込み中..."
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 119,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultsContent, {}, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 120,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
_c1 = ResultsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResultsContent");
__turbopack_context__.k.register(_c1, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ed4426f9._.js.map