# Architecture and data boundaries

A static browser app, Node built-in read-only loopback server, with no runtime package installation. Native ES modules and CSS are sufficient for this small surface. There is no database, model, SDK, account, hidden integration, dependency installation or network service.

```text
Original synthetic fixture ───────────────┐
                                         v
Explicit safe JSON file → bounded parser → validated DTO → read-only views
                         (browser memory)    |             (textContent)
                                              └→ derived counts/freshness
```

`src/demo.mjs`: original authored fixture plus frozen evaluation time. `src/model.mjs`: pure schema checks, state consistency, freshness/filter/count helpers. `src/app.mjs`: small DOM primitives and view compositions; event handlers change local view/selection only. `styles.css`: shared tokens, continuous atmospheric field, editorial decision/proof grid and responsive boundaries. `assets/atmosphere-v1.png`: an original generated local texture. Decorative CSS motion has a pause control and reduced-motion fallback; it represents no live task state. `server.mjs`: exact route map, loopback Host check, GET/HEAD only, no-store and restrictive CSP including `connect-src 'none'`. Static example files are safe; docs/tests/private files are not served.

No imports go to the server. No localStorage, sessionStorage, IndexedDB, cookies, analytics, externally fetched fonts/assets, fetch, sockets or operational mutations are used by the app. The optional test runner performs local HTTP reads/negative checks; it is outside app runtime.

## Future adapter seam

A separately reviewed adapter may transform a supported, authorized API's public-safe records into the version 1 DTO. It must live outside the reusable UI package, hold credentials outside snapshot data, enforce source/task scopes and owner authorization, retain observation/capture times, and pass the same validation. A producer claiming `authorized-api` does not establish authorization. No private state scraping, raw-log translation or automatic credential discovery is acceptable.

Optional Core source lives under `guardclaw/` with its unchanged Apache LICENSE/NOTICE and dependency notices. An operator builds and runs its stdin-only helper manually; there is no execution route, runner, bridge or automatic download. `src/guardclaw-report.mjs` is an Apache-2.0 strict validator port, with a generated fixed 1,703-ID registry in `src/guardclaw-patterns.mjs`. Only these exact static modules are served; the Core tree, binary, fixtures, schema and docs are not HTTP routes.

The browser owns one random session snapshot UUID and a safe-integer revision. Every successful snapshot replacement/reset advances the revision; failed replacements do not. Reports are separate memory-only sidecars with application import times, always unverified provenance and selected-content association. Earlier/mismatched reports remain visibly noncurrent. A null subject is an unattached metadata error. Reports never enter snapshot v1, evidence arrays, task states or derived verified counts. No-match has no authority. Reset cancels pending reads and discards reports; overlapping reads use generation tokens to preserve the latest explicit selection. See SCANNER_REPORTS.md.

## Public/private separation

The public-safe candidate consists of original code/composition, synthetic fixtures, generic docs, optional separately licensed Core source/validator/registry, and three unmodified OFL font assets with their full notices, and one original generated texture with recorded provenance. The font/palette roles are recorded in BRAND_PROVENANCE.md. Internal process records and review metadata are retained locally in the task's evidence packet; never included in the public-safe release archive. Any later private fixtures/adapters belong outside this folder. `.gitignore` excludes conventional secrets/private imports/test outputs, but an ignore rule is not a disclosure guarantee; review the exact archive and repository history before release.
