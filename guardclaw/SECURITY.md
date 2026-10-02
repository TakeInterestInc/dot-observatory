# Security Policy

> Included-source note: the upstream Core policy below is retained as reference. This dashboard repository has no verified GitHub private-reporting channel or maintainer contact yet. Do not rely on the tab or response timelines below for this copy; verify and configure the owner’s reporting route before public release.

## Reporting a vulnerability

GuardClaw Core is a security tool, so we take vulnerabilities in it seriously — including detection bypasses (an attack class the engine should catch but doesn't).

**Please do not open a public GitHub issue for security reports.**

Instead, use GitHub's private vulnerability reporting (the **Security → Report a vulnerability** tab on this repository), which opens a private channel with the maintainers.

Please include:

- A description of the issue and its impact.
- A minimal reproduction (input + expected vs actual decision), if applicable.
- Any suggested remediation.

## What to expect

- We aim to acknowledge a report within a few business days.
- We will work with you on a fix and a coordinated disclosure timeline.
- With your consent, we will credit you in the release notes.

## Scope

In scope: detection bypasses, false-negative attack classes, denial-of-service in the engine, and any code-execution or memory-safety issue in the library or CLI.

Out of scope: the absence of a pattern for a brand-new attack class (please open a normal feature request or PR for those), and issues in downstream software that merely embeds this engine.

## Supported versions

Security fixes target the latest released minor version on `main`.
