# SEO Indexation Log — seche10semaines.fr

## 2026-02-26 (Thu 06:00)

### Ping Engines (`ping-engines.mjs`)
- Google: 404 — Sitemaps ping deprecated
- Bing: 410 Gone
- Yandex: 200 OK ✅
- IndexNow (via ping script): 403 Forbidden (67 URLs)

### IndexNow (`indexnow-submit.mjs`)
- 67 URLs found in sitemap
- **403 Forbidden** — `UserForbiddedToAccessSite`: key verification issue
- ⚠️ Action needed: verify IndexNow key file is deployed at site root

### Google Indexing API (`google-indexing.mjs`)
- Service account: ✅ present
- 51/67 URLs submitted successfully (all 200)
- Script crashed after URL #51 (exit code 1) — possible rate limit or quota exceeded
- ⚠️ 16 URLs not submitted this run

### Sitemap Check
- `dist/sitemap.xml`: **67 URLs** ✅
- `public/sitemap.xml` also present (source)

### Summary
| Method | Status | URLs |
|--------|--------|------|
| Yandex Ping | ✅ OK | — |
| Google/Bing Ping | ❌ Deprecated | — |
| IndexNow | ❌ 403 Key issue | 0/67 |
| Google Indexing API | ⚠️ Partial | 51/67 |

### Action Items
1. Fix IndexNow key verification (ensure key file at `https://seche10semaines.fr/<key>.txt`)
2. Investigate Google Indexing API quota/crash after 51 URLs
