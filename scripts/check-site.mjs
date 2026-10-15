// Checks the exported site in out/: every internal link and image resolves,
// and every page has a title, description, lang/dir, one <h1> and image alts.
// Usage: npm run build && npm run check
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("../out/", import.meta.url).pathname;
if (!existsSync(root)) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) pages.push(p);
  }
})(root);

const errors = [];
const fail = (page, msg) => errors.push(`${relative(root, page)}: ${msg}`);

function resolveTarget(url) {
  const [path] = url.split(/[?#]/);
  const decoded = decodeURIComponent(path);
  const candidates = decoded.endsWith("/")
    ? [join(root, decoded, "index.html")]
    : [join(root, decoded), join(root, decoded, "index.html"), join(root, `${decoded}.html`)];
  return candidates.find((c) => existsSync(c) && statSync(c).isFile());
}

const linked = new Set();
for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const rel = relative(root, page);
  const isSitePage = /^(ar|en)\//.test(rel);

  for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    if (url.startsWith("/_next/") && attr === "href" && !url.endsWith(".css")) continue;
    const target = resolveTarget(url);
    if (!target) fail(page, `broken ${attr} → ${url}`);
    else {
      linked.add(relative(root, target));
      const hash = url.split("#")[1];
      if (hash && !readFileSync(target, "utf8").includes(`id="${hash}"`)) fail(page, `missing anchor → ${url}`);
    }
  }

  if (!isSitePage) continue;
  const locale = rel.slice(0, 2);
  if (!html.includes(`<html lang="${locale}" dir="${locale === "ar" ? "rtl" : "ltr"}"`)) fail(page, "wrong <html lang/dir>");
  if (!/<title>[^<]+<\/title>/.test(html)) fail(page, "missing <title>");
  if (!/<meta name="description" content="[^"]+"/.test(html)) fail(page, "missing meta description");
  if (!html.includes('rel="canonical"')) fail(page, "missing canonical");
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(page, `expected 1 <h1>, found ${h1}`);
  for (const [img] of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(img)) fail(page, `img without alt: ${img.slice(0, 80)}`);
}

// Every page should be reachable from at least one other page, and listed in the sitemap.
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
for (const page of pages) {
  const rel = relative(root, page);
  if (!/^(ar|en)\//.test(rel)) continue;
  if (!linked.has(rel)) fail(page, "orphan page (no internal link points to it)");
  const url = "/" + rel.replace(/index\.html$/, "");
  if (!sitemap.includes(`${url}</loc>`)) fail(page, "not listed in sitemap.xml");
}

const sitePages = pages.filter((p) => /^(ar|en)\//.test(relative(root, p))).length;
if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n✗ ${errors.length} problem(s) in ${sitePages} pages`);
  process.exit(1);
}
console.log(`✓ ${sitePages} pages checked — all links, images, titles and metadata OK`);
