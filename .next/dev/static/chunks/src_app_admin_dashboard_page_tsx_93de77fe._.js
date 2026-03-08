(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TherapistConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TherapistConnect() {
    _s();
    const [approvedMatches, setApprovedMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // モーダル・デモ状態管理
    const [showSoapModal, setShowSoapModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSnsModal, setShowSnsModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChart, setShowChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFamilyView, setShowFamilyView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // ★家族画面用
    const [isPaid, setIsPaid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // ★決済ステータス
    const [isAiAnalyzing, setIsAiAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [soapForm, setSoapForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        s: "",
        o: "",
        a: "",
        p: ""
    });
    const API_KEY = "YOUR_API_KEY_HERE";
    const HAKATA_STATION = {
        lat: 33.5897,
        lng: 130.4207
    };
    const userLocations = [
        {
            id: 1,
            position: {
                lat: 33.592,
                lng: 130.415
            }
        },
        {
            id: 2,
            position: {
                lat: 33.585,
                lng: 130.425
            }
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TherapistConnect.useEffect": ()=>{
            const fetchData = {
                "TherapistConnect.useEffect.fetchData": async ()=>{
                    try {
                        const chatRes = await fetch("/api/chats/list");
                        const approvedData = await chatRes.json();
                        setApprovedMatches(approvedData);
                        setBalance(approvedData.length * 5000 + 145000);
                        setLoading(false);
                    } catch (err) {
                        setLoading(false);
                    }
                }
            }["TherapistConnect.useEffect.fetchData"];
            fetchData();
        }
    }["TherapistConnect.useEffect"], []);
    const runAiAnalysis = ()=>{
        setIsAiAnalyzing(true);
        setTimeout(()=>{
            setSoapForm({
                s: "「階段が楽になった」「膝の痛みなし」",
                o: "10m歩行: 8.5s (前回10.2s)",
                a: "下肢筋力向上により立脚相が安定。歩行効率が改善。",
                p: "屋外歩行時の耐久性向上を目標に設定。"
            });
            setIsAiAnalyzing(false);
        }, 1200);
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: "center",
            padding: "100px"
        },
        children: "データを同期中..."
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 50,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
        apiKey: API_KEY,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "40px",
                maxWidth: "1100px",
                margin: "0 auto",
                fontFamily: 'sans-serif',
                backgroundColor: "#fcfcfc",
                minHeight: "100vh"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: "20px",
                        marginBottom: "30px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: "1px solid #0070f3",
                                padding: "25px",
                                borderRadius: "20px",
                                backgroundColor: "#f0f7ff",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                margin: 0,
                                                color: "#0070f3",
                                                fontSize: "12px",
                                                fontWeight: "bold"
                                            },
                                            children: "当月売上 (自動決済連携済み)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: "42px",
                                                margin: "5px 0",
                                                color: "#1a1a1a",
                                                fontWeight: "900"
                                            },
                                            children: [
                                                "¥",
                                                balance.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: "16px",
                                                color: "#0070f3",
                                                fontWeight: "bold"
                                            },
                                            children: [
                                                "完了案件: ",
                                                approvedMatches.length,
                                                "件"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#ffb400",
                                                fontWeight: "bold",
                                                fontSize: "14px"
                                            },
                                            children: "★ 4.9 (24件)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: "1px solid #eee",
                                padding: "25px",
                                borderRadius: "20px",
                                backgroundColor: "#fff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        color: "#999",
                                        fontSize: "12px",
                                        fontWeight: "bold"
                                    },
                                    children: "次回振込予定日"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "24px",
                                        margin: "5px 0",
                                        color: "#1a1a1a",
                                        fontWeight: "bold"
                                    },
                                    children: "2026/04/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0,
                                        color: "#2e7d32",
                                        fontSize: "11px"
                                    },
                                    children: "● Stripe決済システム稼働中"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "1.2fr 0.8fr",
                        gap: "30px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "18px",
                                        marginBottom: "15px",
                                        color: "#444"
                                    },
                                    children: "📍 エリア需要モニタリング"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        height: "350px",
                                        borderRadius: "24px",
                                        overflow: "hidden",
                                        border: "1px solid #eee"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                                        defaultCenter: HAKATA_STATION,
                                        defaultZoom: 14,
                                        disableDefaultUI: true,
                                        children: userLocations.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                                                position: u.position
                                            }, u.id, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 57
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "17px",
                                        marginBottom: "15px",
                                        color: "#444"
                                    },
                                    children: "本日の訪問・管理"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                approvedMatches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "20px",
                                            border: "1px solid #eee",
                                            borderRadius: "20px",
                                            background: "#fff",
                                            marginBottom: "15px",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.02)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginBottom: "15px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: "bold"
                                                        },
                                                        children: [
                                                            match.user?.name || match.name,
                                                            " 様"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: isPaid ? "#2e7d32" : "#ffb400",
                                                            fontSize: "12px",
                                                            fontWeight: "bold"
                                                        },
                                                        children: isPaid ? "✓ 決済完了" : "● 未決済"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "10px",
                                                    marginBottom: "10px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowSoapModal(true),
                                                        style: miniButtonStyle("#1a1a1a"),
                                                        children: "📝 SOAP作成"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowFamilyView(true),
                                                        style: miniButtonStyle("#6200ee"),
                                                        children: "🏠 家族画面"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "10px",
                                                    marginBottom: "10px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowChart(true),
                                                        style: miniButtonStyle("#0070f3"),
                                                        children: "📊 成果図解"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowSnsModal(true),
                                                        style: miniButtonStyle("#ff4b4b"),
                                                        children: "🚀 SNSシェア"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setIsPaid(true);
                                                    alert("Stripe決済を実行しました（¥5,000）");
                                                },
                                                style: {
                                                    width: "100%",
                                                    padding: "10px",
                                                    backgroundColor: "#f9f9f9",
                                                    border: "1px solid #ddd",
                                                    borderRadius: "10px",
                                                    fontSize: "12px",
                                                    cursor: "pointer",
                                                    fontWeight: "bold"
                                                },
                                                children: "💳 今すぐ決済を実行"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, match.id, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/dashboard/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this),
                showFamilyView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: overlayStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...modalStyle,
                            width: "375px",
                            padding: "0",
                            overflow: "hidden",
                            border: "8px solid #333",
                            borderRadius: "40px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: "#6200ee",
                                    color: "white",
                                    padding: "20px",
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "12px",
                                            margin: 0
                                        },
                                        children: "利用者家族様専用マイページ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            margin: "5px 0"
                                        },
                                        children: "リハビリ報告書"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "20px",
                                    textAlign: "left",
                                    backgroundColor: "#f5f5f5",
                                    height: "450px",
                                    overflowY: "auto"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: "white",
                                            padding: "15px",
                                            borderRadius: "15px",
                                            marginBottom: "15px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "11px",
                                                    color: "#999"
                                                },
                                                children: "担当: 多田 健二 (PT)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    margin: "5px 0",
                                                    color: "#6200ee"
                                                },
                                                children: "本日の成果"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "14px",
                                                    fontWeight: "bold"
                                                },
                                                children: "「階段昇降がスムーズになりました」"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "100px",
                                                    backgroundColor: "#eef2ff",
                                                    borderRadius: "10px",
                                                    marginTop: "10px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#0070f3",
                                                    fontSize: "12px"
                                                },
                                                children: "[ 改善グラフ表示エリア ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFamilyView(false),
                                        style: {
                                            width: "100%",
                                            padding: "12px",
                                            backgroundColor: "#333",
                                            color: "white",
                                            borderRadius: "10px",
                                            border: "none",
                                            cursor: "pointer"
                                        },
                                        children: "ダッシュボードに戻る"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 117,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 112,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 111,
                    columnNumber: 21
                }, this),
                showSoapModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: overlayStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: modalStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "18px",
                                    marginBottom: "15px"
                                },
                                children: "AI記録アシスタント"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: runAiAnalysis,
                                style: {
                                    width: "100%",
                                    padding: "12px",
                                    backgroundColor: "#0070f3",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    marginBottom: "15px",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                },
                                children: isAiAnalyzing ? "解析中..." : "🪄 チャットからSOAPを下書き"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 137,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "left"
                                },
                                children: Object.entries(soapForm).map(([key, val])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: {
                                                    fontSize: "11px",
                                                    fontWeight: "bold",
                                                    color: "#0070f3"
                                                },
                                                children: key.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: val,
                                                onChange: (e)=>setSoapForm({
                                                        ...soapForm,
                                                        [key]: e.target.value
                                                    }),
                                                style: textareaStyle,
                                                rows: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 140,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowSoapModal(false);
                                    alert("保存しました。家族マイページへ反映されます。");
                                },
                                style: {
                                    width: "100%",
                                    marginTop: "15px",
                                    padding: "12px",
                                    borderRadius: "10px",
                                    backgroundColor: "#1a1a1a",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer"
                                },
                                children: "保存して家族へ共有"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 148,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 135,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 134,
                    columnNumber: 21
                }, this),
                showSnsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: overlayStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...modalStyle,
                            width: "450px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "18px",
                                    marginBottom: "20px"
                                },
                                children: "SNS実績シェア"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 157,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    background: "linear-gradient(135deg, #0070f3 0%, #00a3ff 100%)",
                                    borderRadius: "15px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "white",
                                    padding: "30px",
                                    marginBottom: "20px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        },
                                        children: "REHAB REPORT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: "24px",
                                            margin: "10px 0",
                                            fontWeight: "900"
                                        },
                                        children: [
                                            "歩行スピード",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 109
                                            }, this),
                                            "17.5%向上！"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "12px"
                                        },
                                        children: "博多エリア訪問リハ実績"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 158,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1fr",
                                    gap: "10px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>alert("Xに投稿しました"),
                                        style: snsButtonStyle("#1a1a1a"),
                                        children: "𝕏"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>alert("画像を保存しました"),
                                        style: snsButtonStyle("#E4405F"),
                                        children: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>alert("LINEで送信しました"),
                                        style: snsButtonStyle("#06C755"),
                                        children: "LINE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowSnsModal(false),
                                style: {
                                    width: "100%",
                                    marginTop: "20px",
                                    padding: "10px",
                                    border: "1px solid #eee",
                                    background: "none",
                                    cursor: "pointer"
                                },
                                children: "閉じる"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 168,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 156,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 155,
                    columnNumber: 21
                }, this),
                showChart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: overlayStyle,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...modalStyle,
                            width: "400px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "18px",
                                    marginBottom: "20px"
                                },
                                children: "リハビリ成果"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 177,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "flex-end",
                                    height: "150px",
                                    background: "#f9f9f9",
                                    padding: "20px",
                                    borderRadius: "15px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "40%",
                                            height: "40%",
                                            background: "#ccc",
                                            borderRadius: "5px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "40%",
                                            height: "90%",
                                            background: "#0070f3",
                                            borderRadius: "5px"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 178,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "15px",
                                    fontSize: "14px"
                                },
                                children: "初回から**1.7秒**の短縮に成功！"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 182,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowChart(false),
                                style: {
                                    width: "100%",
                                    marginTop: "20px",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    border: "1px solid #ddd",
                                    cursor: "pointer"
                                },
                                children: "閉じる"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/dashboard/page.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/dashboard/page.tsx",
                        lineNumber: 176,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/dashboard/page.tsx",
                    lineNumber: 175,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/dashboard/page.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/dashboard/page.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(TherapistConnect, "MHV6gJ+uwLNzefNHJ+KklP7odK4=");
_c = TherapistConnect;
const miniButtonStyle = (color)=>({
        padding: "10px",
        backgroundColor: "white",
        color: color,
        border: `1px solid ${color}`,
        borderRadius: "10px",
        fontSize: "10px",
        fontWeight: "bold",
        cursor: "pointer"
    });
const snsButtonStyle = (bg)=>({
        padding: "12px",
        backgroundColor: bg,
        color: "white",
        border: "none",
        borderRadius: "10px",
        fontSize: "11px",
        fontWeight: "bold",
        cursor: "pointer"
    });
const textareaStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "13px",
    marginTop: "4px"
};
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backdropFilter: "blur(5px)"
};
const modalStyle = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "28px",
    width: "420px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
};
var _c;
__turbopack_context__.k.register(_c, "TherapistConnect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_admin_dashboard_page_tsx_93de77fe._.js.map