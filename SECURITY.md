# Security boundary and reporting

This is a local, read-only snapshot viewer. It accepts only an explicitly selected, intentionally prepared public-safe JSON file. Files stay in browser memory. The server binds to loopback, serves exact static routes, and rejects network mutations. Sources and evidence are producer claims, not authenticated identity or verified enforcement. Credential detection is partial; never import secrets or private state. See docs/THREAT_MODEL.md and docs/IMPORT_SCHEMA.md.

There is no task executor, policy gateway, account, persistence or live adapter. The decorative background has a pause control and respects reduced motion. Supported API integrations or optional safety evidence require a separately reviewed contract and explicit authorization; a label alone provides no protection.

Do not report a vulnerability through a public issue with exploit payloads containing real data, tokens, private logs or internal paths. Use GitHub's private vulnerability reporting instead (the Security tab, then Report a vulnerability, on this repository). No response-time guarantee is claimed.

Optional reports are strict, bounded, unverified advisory sidecars; no-match grants no task status or action authority. The included helper runs only by the operator’s manual command. Network containment and hard RSS containment are not established. Core/validator/registry remain Apache-2.0 with notices independent of future dashboard release terms.
