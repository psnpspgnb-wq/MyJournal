if (!self.define) {
    let e,
        a = {};
    const n = (n, s) => (
        (n = new URL(n + ".js", s).href),
        a[n] ||
        new Promise((a) => {
            if ("document" in self) {
                const e = document.createElement("script");
                e.src = n;
                e.onload = a;
                document.head.appendChild(e);
            } else {
                e = n;
                importScripts(n);
                a();
            }
        }).then(() => {
            let e = a[n];
            if (!e) throw new Error(`Module ${n} didn't register its module`);
            return e;
        })
    );
    self.define = (s, t) => {
        const i =
            e ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (a[i]) return;
        let c = {};
        const p = (e) => n(e, i);
        const r = { module: { uri: i }, exports: c, require: p };
        a[i] = Promise.all(s.map((e) => r[e] || p(e))).then((e) => (t(...e), c));
    };
}

define(["./workbox-f1770938"], function (wb) {
    "use strict";

    importScripts();
    self.skipWaiting();
    wb.clientsClaim();

    // =============================================
    // プリキャッシュ（アプリの全静的ファイルを事前にキャッシュ）
    // =============================================
    wb.precacheAndRoute(
        [
            { url: "/myjournal_type2_app/_next/static/XXC6NhhUqU_Ko9MUmKvGt/_buildManifest.js", revision: "ead908acaf02288d3def90656c91e858" },
            { url: "/myjournal_type2_app/_next/static/XXC6NhhUqU_Ko9MUmKvGt/_ssgManifest.js", revision: "b6652df95db52feb4daf4eca35380933" },
            { url: "/myjournal_type2_app/_next/static/chunks/4bd1b696-096d35a2bd1da3af.js", revision: "096d35a2bd1da3af" },
            { url: "/myjournal_type2_app/_next/static/chunks/500-5d45efbf86b8d36e.js", revision: "5d45efbf86b8d36e" },
            { url: "/myjournal_type2_app/_next/static/chunks/687-f74ce70f34a888ff.js", revision: "f74ce70f34a888ff" },
            { url: "/myjournal_type2_app/_next/static/chunks/899.1813981119fa1f8a.js", revision: "1813981119fa1f8a" },
            { url: "/myjournal_type2_app/_next/static/chunks/928-d47dbde8a6a90172.js", revision: "d47dbde8a6a90172" },
            { url: "/myjournal_type2_app/_next/static/chunks/959-786075a3c1cc0144.js", revision: "786075a3c1cc0144" },
            { url: "/myjournal_type2_app/_next/static/chunks/966.1775eb621d8d3e09.js", revision: "1775eb621d8d3e09" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/_global-error/page-a3d4f8e832675edd.js", revision: "a3d4f8e832675edd" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/_not-found/page-3d2ad1bbf839b24d.js", revision: "3d2ad1bbf839b24d" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/analysis/page-e6f2e24a4913dac3.js", revision: "e6f2e24a4913dac3" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/edit/%5Bdate%5D/page-e6e75cb68e2864b7.js", revision: "e6e75cb68e2864b7" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/history/page-c75705d41113710e.js", revision: "c75705d41113710e" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/layout-d5d18689b79b3fae.js", revision: "d5d18689b79b3fae" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/page-b580bf3d8f3d46ac.js", revision: "b580bf3d8f3d46ac" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/settings/page-036f9fd4f91dab9e.js", revision: "036f9fd4f91dab9e" },
            { url: "/myjournal_type2_app/_next/static/chunks/app/write/page-8963d8ce0aafe831.js", revision: "8963d8ce0aafe831" },
            { url: "/myjournal_type2_app/_next/static/chunks/framework-75892d61b920805f.js", revision: "75892d61b920805f" },
            { url: "/myjournal_type2_app/_next/static/chunks/main-5608a1ffb6e8b3eb.js", revision: "5608a1ffb6e8b3eb" },
            { url: "/myjournal_type2_app/_next/static/chunks/main-app-5a200342ba005372.js", revision: "5a200342ba005372" },
            { url: "/myjournal_type2_app/_next/static/chunks/next/dist/client/components/builtin/app-error-a3d4f8e832675edd.js", revision: "a3d4f8e832675edd" },
            { url: "/myjournal_type2_app/_next/static/chunks/next/dist/client/components/builtin/forbidden-a3d4f8e832675edd.js", revision: "a3d4f8e832675edd" },
            { url: "/myjournal_type2_app/_next/static/chunks/next/dist/client/components/builtin/global-error-4a0f5b878039d78a.js", revision: "4a0f5b878039d78a" },
            { url: "/myjournal_type2_app/_next/static/chunks/next/dist/client/components/builtin/not-found-a3d4f8e832675edd.js", revision: "a3d4f8e832675edd" },
            { url: "/myjournal_type2_app/_next/static/chunks/next/dist/client/components/builtin/unauthorized-a3d4f8e832675edd.js", revision: "a3d4f8e832675edd" },
            { url: "/myjournal_type2_app/_next/static/chunks/polyfills-42372ed130431b0a.js", revision: "846118c33b2c0e922d7b3a7676f81f6f" },
            { url: "/myjournal_type2_app/_next/static/chunks/webpack-64fa1295b7756e6c.js", revision: "64fa1295b7756e6c" },
            { url: "/myjournal_type2_app/_next/static/css/d668670707d2a442.css", revision: "d668670707d2a442" },
            { url: "/myjournal_type2_app/_next/static/media/19cfc7226ec3afaa-s.woff2", revision: "9dda5cfc9a46f256d0e131bb535e46f8" },
            { url: "/myjournal_type2_app/_next/static/media/21350d82a1f187e9-s.woff2", revision: "4e2553027f1d60eff32898367dd4d541" },
            { url: "/myjournal_type2_app/_next/static/media/8e9860b6e62d6359-s.woff2", revision: "01ba6c2a184b8cba08b0d57167664d75" },
            { url: "/myjournal_type2_app/_next/static/media/ba9851c3c22cd980-s.woff2", revision: "9e494903d6b0ffec1a1e14d34427d44d" },
            { url: "/myjournal_type2_app/_next/static/media/c5fe6dc8356a8c31-s.woff2", revision: "027a89e9ab733a145db70f09b8a18b42" },
            { url: "/myjournal_type2_app/_next/static/media/df0a9ae256c0569c-s.woff2", revision: "d54db44de5ccb18886ece2fda72bdfe0" },
            { url: "/myjournal_type2_app/_next/static/media/e4af272ccee01ff0-s.p.woff2", revision: "65850a373e258f1c897a2b3d75eb74de" },
            { url: "/myjournal_type2_app/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
            { url: "/myjournal_type2_app/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
            { url: "/myjournal_type2_app/icons/emotion-circle.svg", revision: "2179b78e7b7c2fd89085a32fcbfa2cc8" },
            { url: "/myjournal_type2_app/manifest.json", revision: "dcfce05bce111ab68f70be9445f96d50" },
            { url: "/myjournal_type2_app/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
            { url: "/myjournal_type2_app/vercel.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
            { url: "/myjournal_type2_app/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
        ],
        { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );

    wb.cleanupOutdatedCaches();

    // =============================================
    // 🔴 修正1: start-url を CacheFirst に変更
    // オフライン時もトップページを表示できるようにする
    // =============================================
    wb.registerRoute(
        "/myjournal_type2_app",
        new wb.CacheFirst({
            cacheName: "start-url",
            plugins: [
                {
                    cacheWillUpdate: async ({ response }) => {
                        if (response && response.type === "opaqueredirect") {
                            return new Response(response.body, {
                                status: 200,
                                statusText: "OK",
                                headers: response.headers,
                            });
                        }
                        return response;
                    },
                },
            ],
        }),
        "GET"
    );

    // =============================================
    // Google Fonts（外部フォント）
    // =============================================
    wb.registerRoute(
        /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
        new wb.CacheFirst({
            cacheName: "google-fonts-webfonts",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536000 })],
        }),
        "GET"
    );

    wb.registerRoute(
        /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
        new wb.StaleWhileRevalidate({
            cacheName: "google-fonts-stylesheets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
        }),
        "GET"
    );

    // =============================================
    // フォントファイル
    // =============================================
    wb.registerRoute(
        /\.(?:eot|otf|ttc|ttf|woff|woff2|font\.css)$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "static-font-assets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
        }),
        "GET"
    );

    // =============================================
    // 画像ファイル
    // =============================================
    wb.registerRoute(
        /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "static-image-assets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592000 })],
        }),
        "GET"
    );

    // =============================================
    // Next.js 静的JSアセット（_next/static）
    // =============================================
    wb.registerRoute(
        /\/_next\/static.+\.js$/i,
        new wb.CacheFirst({
            cacheName: "next-static-js-assets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // Next.js 最適化画像
    // =============================================
    wb.registerRoute(
        /\/_next\/image\?url=.+$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "next-image",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // 音声・動画ファイル
    // =============================================
    wb.registerRoute(
        /\.(?:mp3|wav|ogg)$/i,
        new wb.CacheFirst({
            cacheName: "static-audio-assets",
            plugins: [
                new wb.RangeRequestsPlugin(),
                new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
        }),
        "GET"
    );

    wb.registerRoute(
        /\.(?:mp4|webm)$/i,
        new wb.CacheFirst({
            cacheName: "static-video-assets",
            plugins: [
                new wb.RangeRequestsPlugin(),
                new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
            ],
        }),
        "GET"
    );

    // =============================================
    // JSファイル（一般）
    // =============================================
    wb.registerRoute(
        /\.(?:js)$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "static-js-assets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // CSSファイル
    // =============================================
    wb.registerRoute(
        /\.(?:css|less)$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "static-style-assets",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // Next.js データ（JSON）
    // =============================================
    wb.registerRoute(
        /\/_next\/data\/.+\/.+\.json$/i,
        new wb.StaleWhileRevalidate({
            cacheName: "next-data",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // その他のデータファイル
    // =============================================
    wb.registerRoute(
        /\.(?:json|xml|csv)$/i,
        new wb.NetworkFirst({
            cacheName: "static-data-assets",
            networkTimeoutSeconds: 10,
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // API ルート
    // =============================================
    wb.registerRoute(
        ({ sameOrigin, url: { pathname } }) =>
            !(!sameOrigin || pathname.startsWith("/api/auth/callback") || !pathname.startsWith("/api/")),
        new wb.NetworkFirst({
            cacheName: "apis",
            networkTimeoutSeconds: 10,
            plugins: [new wb.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // RSC プリフェッチ
    // =============================================
    wb.registerRoute(
        ({ request, url: { pathname }, sameOrigin }) =>
            request.headers.get("RSC") === "1" &&
            request.headers.get("Next-Router-Prefetch") === "1" &&
            sameOrigin &&
            !pathname.startsWith("/api/"),
        new wb.NetworkFirst({
            cacheName: "pages-rsc-prefetch",
            networkTimeoutSeconds: 10,
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // RSC リクエスト
    // =============================================
    wb.registerRoute(
        ({ request, url: { pathname }, sameOrigin }) =>
            request.headers.get("RSC") === "1" &&
            sameOrigin &&
            !pathname.startsWith("/api/"),
        new wb.NetworkFirst({
            cacheName: "pages-rsc",
            networkTimeoutSeconds: 10,
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // 🔴 修正2: ページルート を CacheFirst に変更
    // オフライン時もキャッシュからページを返せるようにする
    // =============================================
    wb.registerRoute(
        ({ url: { pathname }, sameOrigin }) =>
            sameOrigin && !pathname.startsWith("/api/"),
        new wb.CacheFirst({
            cacheName: "pages",
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
        }),
        "GET"
    );

    // =============================================
    // クロスオリジン（外部リクエスト）
    // =============================================
    wb.registerRoute(
        ({ sameOrigin }) => !sameOrigin,
        new wb.NetworkFirst({
            cacheName: "cross-origin",
            networkTimeoutSeconds: 10,
            plugins: [new wb.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
        }),
        "GET"
    );
});