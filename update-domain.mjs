import fs from 'fs';
import path from 'path';

const DEFAULT_DOMAIN = 'https://fosternormanyo.netlify.app';
const CV_PATH = '/documents/foster-normanyo-cv.pdf';
const HOMEPAGE_PRIORITY = '1.0';
const CV_PRIORITY = '0.7';

const rawInput = process.argv[2] || DEFAULT_DOMAIN;
const formattedInput = /^https?:\/\//i.test(rawInput.trim())
  ? rawInput.trim()
  : `https://${rawInput.trim()}`;

let parsedUrl;
try {
  parsedUrl = new URL(formattedInput);
} catch {
  console.error(`❌ Invalid URL provided: "${rawInput}". Example: https://fosternormanyo.com`);
  process.exit(1);
}

const siteOrigin = parsedUrl.origin;
const siteHostname = parsedUrl.hostname;
const todayIso = new Date().toISOString().split('T')[0];

function readCleanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.charCodeAt(0) === 0xFEFF ? content.slice(1) : content;
}

// 1. Update astro.config.mjs
const astroConfigPath = path.resolve('astro.config.mjs');
if (fs.existsSync(astroConfigPath)) {
  let astroConfig = readCleanFile(astroConfigPath);
  astroConfig = astroConfig.replace(
    /site:\s*['"][^'"]+['"]/,
    `site: '${siteOrigin}'`
  );
  fs.writeFileSync(astroConfigPath, astroConfig, 'utf8');
  console.log(`✅ Updated astro.config.mjs -> site: '${siteOrigin}'`);
}

// 2. Update src/content/siteData.ts
const siteDataPath = path.resolve('src/content/siteData.ts');
if (fs.existsSync(siteDataPath)) {
  let siteData = readCleanFile(siteDataPath);
  siteData = siteData.replace(
    /siteUrl:\s*['"][^'"]+['"]/,
    `siteUrl: '${siteOrigin}'`
  );
  siteData = siteData.replace(
    /domain:\s*['"][^'"]+['"]/,
    `domain: '${siteHostname}'`
  );
  fs.writeFileSync(siteDataPath, siteData, 'utf8');
  console.log(`✅ Updated src/content/siteData.ts -> siteUrl: '${siteOrigin}', domain: '${siteHostname}'`);
}

// 3. Update public/sitemap.xml (Homepage + Downloadable CV PDF)
const sitemapPath = path.resolve('public/sitemap.xml');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Portfolio & Venture Showcase Homepage -->
  <url>
    <loc>${siteOrigin}/</loc>
    <lastmod>${todayIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${HOMEPAGE_PRIORITY}</priority>
  </url>
  <!-- Downloadable Curriculum Vitae (PDF) -->
  <url>
    <loc>${siteOrigin}${CV_PATH}</loc>
    <lastmod>${todayIso}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${CV_PRIORITY}</priority>
  </url>
</urlset>
`;
fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
console.log(`✅ Updated public/sitemap.xml -> Indexed ${siteOrigin}/ and ${siteOrigin}${CV_PATH}`);

// 4. Update public/robots.txt
const robotsPath = path.resolve('public/robots.txt');
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
console.log(`✅ Updated public/robots.txt -> Sitemap: ${siteOrigin}/sitemap.xml`);

console.log(`\n🎉 Domain synchronization complete for: ${siteOrigin}\n`);
