# GuardClaw Core

A Go detection library and CLI for known attack patterns in agent inputs. The
static tiered engine returns `allow`, `escalate` or `deny`. The caller must act on
that decision; scanning alone does not intercept an agent or establish that an
allowed input is safe.

```
input ──▶ Bloom filter ──▶ Aho-Corasick ──▶ composite RE2 ──▶ entropy ──▶ decision
```

The `guardian/tiered` engine and `guardclaw-scan` CLI use local static patterns,
with no LLM, network calls or telemetry in that scanning path.
`guardian/security.URLValidator` judges URLs on their text by default; it
resolves DNS only after a caller opts in with `EnableDNSResolution()` or
`SetResolver(fn)`. Pre-policy and egress checks use a default, offline
validator. No hosted service or paid feed is required to use the static engine.

## Build from the selected source

Use Go **1.26.6 or newer**. From this repository or an approved source archive:

```sh
go build -trimpath -o guardclaw-scan ./cmd/guardclaw-scan
go test ./...
go vet ./...
```

The module and imports are `github.com/TakeInterestInc/guardclaw-core`, the
public repository at <https://github.com/TakeInterestInc/guardclaw-core>. The
engine files here are synced from that repository; `docs/THIRD_PARTY.md` in Dot
Observatory records the source commit. `cmd/guardclaw-report`, `internal/report`
and `schemas/` are Dot Observatory additions and are not part of upstream Core.

## Scan explicit files or directories

```sh
./guardclaw-scan suspicious_commands.txt
./guardclaw-scan ./synthetic-inputs/
```

Each nonblank line that does not start with `#` is scanned as one input. This is
not whole-document or cross-line analysis. Findings show the file, line,
decision, severity and matched pattern. Inputs are read as text, never executed.
Select paths carefully: directory traversal reads entries, including file
symlink targets.

Exit status:

| Code | Meaning |
|---|---|
| 0 | Scan completed without high/critical findings; lower-severity findings or escalations can still be printed. |
| 1 | Scan completed with at least one high/critical finding. |
| 2 | Usage/setup/input error or incomplete scan, including unreadable/missing files and lines exceeding the scanner's 1 MiB token limit. Errors take precedence over findings. |

CI must treat both 1 and 2 as failure. An exit of 0 is not a safety guarantee.

## Use the static library

```go
import "github.com/TakeInterestInc/guardclaw-core/guardian/tiered"

eng, err := tiered.NewEngine(nil)
if err != nil {
    return err
}
r := eng.Scan(userInput)
switch r.Decision {
case "deny":      // caller blocks the action
case "escalate":  // caller asks for another check or approval
case "allow":     // caller applies its remaining policy
}
```

## Detection limits and scope

Baseline patterns cover prompt/command/SQL injection, SSRF, XSS, path traversal,
header injection, secret/PII shapes, context poisoning and exfiltration shapes.
Known patterns can produce false positives and miss attacks. Corpus evaluation
counts benign **denies** and malicious **non-allow** decisions; it is not a
measurement of attack reachability or field effectiveness. See
[CONTRIBUTING.md](CONTRIBUTING.md) for thresholds and
[fixture provenance](testdata/corpus/README.md).

This tree does not include the proprietary GuardClaw runtime, action routing,
receipts, hosted control plane or an agent adapter. No separately offered paid
capability is asserted here. Release performance, external integrations and
fresh-machine public installation have not been certified by these docs.

## License

[Apache License 2.0](LICENSE), with [NOTICE](NOTICE). Contributions use the
[DCO](CONTRIBUTING.md). See [SECURITY.md](SECURITY.md) for reporting guidance.
