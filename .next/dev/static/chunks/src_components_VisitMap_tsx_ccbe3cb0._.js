(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/VisitMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_ef5f0413.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/node_modules_react-leaflet_lib_index_fdd4bfe8.js",
  "static/chunks/src_components_VisitMap_tsx_f6924c65._.js",
  "static/chunks/src_components_VisitMap_tsx_7116b949._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/VisitMap.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);