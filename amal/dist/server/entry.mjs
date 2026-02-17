import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BHbsIuxF.mjs';
import { manifest } from './manifest_Cyjm7erb.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/backend/cek_nik.astro.mjs');
const _page3 = () => import('./pages/api/backend/hak_akses.astro.mjs');
const _page4 = () => import('./pages/api/backend/kategori.astro.mjs');
const _page5 = () => import('./pages/api/backend/kategori_publik.astro.mjs');
const _page6 = () => import('./pages/api/backend/layanan.astro.mjs');
const _page7 = () => import('./pages/api/backend/level.astro.mjs');
const _page8 = () => import('./pages/api/backend/login.astro.mjs');
const _page9 = () => import('./pages/api/backend/logout.astro.mjs');
const _page10 = () => import('./pages/api/backend/menu.astro.mjs');
const _page11 = () => import('./pages/api/backend/penduduk.astro.mjs');
const _page12 = () => import('./pages/api/backend/pengaduan.astro.mjs');
const _page13 = () => import('./pages/api/backend/riwayat.astro.mjs');
const _page14 = () => import('./pages/api/backend/riwayat_layanan.astro.mjs');
const _page15 = () => import('./pages/api/backend/tracking.astro.mjs');
const _page16 = () => import('./pages/api/backend/trash.astro.mjs');
const _page17 = () => import('./pages/api/backend/unit_kerja.astro.mjs');
const _page18 = () => import('./pages/api/backend/user.astro.mjs');
const _page19 = () => import('./pages/api/wilayah/_---path_.astro.mjs');
const _page20 = () => import('./pages/dashboard.astro.mjs');
const _page21 = () => import('./pages/form_layanan/success.astro.mjs');
const _page22 = () => import('./pages/form_layanan/tracking.astro.mjs');
const _page23 = () => import('./pages/form_layanan.astro.mjs');
const _page24 = () => import('./pages/hak_akses.astro.mjs');
const _page25 = () => import('./pages/kategori.astro.mjs');
const _page26 = () => import('./pages/layanan.astro.mjs');
const _page27 = () => import('./pages/level.astro.mjs');
const _page28 = () => import('./pages/monitoring.astro.mjs');
const _page29 = () => import('./pages/penduduk.astro.mjs');
const _page30 = () => import('./pages/permohonan.astro.mjs');
const _page31 = () => import('./pages/riwayat/layanan.astro.mjs');
const _page32 = () => import('./pages/riwayat/permohonan.astro.mjs');
const _page33 = () => import('./pages/statistik_penduduk.astro.mjs');
const _page34 = () => import('./pages/trash/layanan.astro.mjs');
const _page35 = () => import('./pages/trash/permohonan.astro.mjs');
const _page36 = () => import('./pages/unit_kerja.astro.mjs');
const _page37 = () => import('./pages/user.astro.mjs');
const _page38 = () => import('./pages/validator.astro.mjs');
const _page39 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/backend/cek_nik.ts", _page2],
    ["src/pages/api/backend/hak_akses.ts", _page3],
    ["src/pages/api/backend/kategori.ts", _page4],
    ["src/pages/api/backend/kategori_publik.ts", _page5],
    ["src/pages/api/backend/layanan.ts", _page6],
    ["src/pages/api/backend/level.ts", _page7],
    ["src/pages/api/backend/login.ts", _page8],
    ["src/pages/api/backend/logout.ts", _page9],
    ["src/pages/api/backend/menu.ts", _page10],
    ["src/pages/api/backend/penduduk.ts", _page11],
    ["src/pages/api/backend/pengaduan.ts", _page12],
    ["src/pages/api/backend/riwayat.ts", _page13],
    ["src/pages/api/backend/riwayat_layanan.ts", _page14],
    ["src/pages/api/backend/tracking.ts", _page15],
    ["src/pages/api/backend/trash.ts", _page16],
    ["src/pages/api/backend/unit_kerja.ts", _page17],
    ["src/pages/api/backend/user.ts", _page18],
    ["src/pages/api/wilayah/[...path].ts", _page19],
    ["src/pages/dashboard/index.astro", _page20],
    ["src/pages/form_layanan/success.astro", _page21],
    ["src/pages/form_layanan/tracking.astro", _page22],
    ["src/pages/form_layanan/index.astro", _page23],
    ["src/pages/hak_akses/index.astro", _page24],
    ["src/pages/kategori/index.astro", _page25],
    ["src/pages/layanan/index.astro", _page26],
    ["src/pages/level/index.astro", _page27],
    ["src/pages/monitoring/index.astro", _page28],
    ["src/pages/penduduk/index.astro", _page29],
    ["src/pages/permohonan/index.astro", _page30],
    ["src/pages/riwayat/layanan.astro", _page31],
    ["src/pages/riwayat/permohonan.astro", _page32],
    ["src/pages/statistik_penduduk/index.astro", _page33],
    ["src/pages/trash/layanan.astro", _page34],
    ["src/pages/trash/permohonan.astro", _page35],
    ["src/pages/unit_kerja/index.astro", _page36],
    ["src/pages/user/index.astro", _page37],
    ["src/pages/validator/index.astro", _page38],
    ["src/pages/index.astro", _page39]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/kazeohasan/Documents/projek/astro/amal/dist/client/",
    "server": "file:///Users/kazeohasan/Documents/projek/astro/amal/dist/server/",
    "host": "0.0.0.0",
    "port": 4322,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
