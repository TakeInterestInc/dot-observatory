# Proposed repository setup

Local source preparation only. No remote, CODEOWNERS or repository security settings have been applied. A verified owner/repository name and release terms are required before publication. Add CODEOWNERS only after the owner verifies the maintainer's actual GitHub identity; do not use a placeholder account.

## Proposed main protection, for owner review

- Require a pull request and one independent approving review.
- Dismiss stale approvals on new commits; require approval of the latest reviewable push by someone other than its author.
- Require `model-tests` and an up-to-date branch. Confirm the exact check context after the first real CI run before making it required.
- Require resolved review conversations.
- Block force pushes and deletion; apply requirements to administrators without bypass exceptions.
- Require code-owner review only after CODEOWNERS contains verified maintainers. One maintainer cannot approve their own change; recruit a second reviewer rather than claiming independent coverage.

These are proposed settings, not claims of enforcement. Present the exact repository/settings for action-time approval before applying them. Configure private vulnerability reporting and a verified contact before accepting security reports publicly. Do not add a guessed address.

## Lean CI

The tests workflow runs built-in Node model tests and syntax checks on normal `pull_request` and main push events. It has `contents: read`, disables checkout credential persistence, passes no secrets and has no deploy/publish step. Use hosted runners. Never execute fork code in `pull_request_target` or a write-token workflow. It does not claim browser, Safari or device coverage. GitHub execution remains untested until a repository exists.

Full SHA pins were checked against official release commit pages on 2 October 2026: [checkout v7.0.1](https://github.com/actions/checkout/commit/3d3c42e5aac5ba805825da76410c181273ba90b1), [setup-node v7.0.0](https://github.com/actions/setup-node/commit/820762786026740c76f36085b0efc47a31fe5020). Node 22 is a fixed test target; local QA used the separately recorded installed runtime. No package installation or dependency cache is needed.

Review exact staged files and fresh history before release. Retain font notices and asset provenance; the root LICENSE is Apache-2.0 unless the owner changes it. Public release should identify a version and exact commit, include run/test steps, and state unsupported integrations and device coverage.

## Exact proposed GitHub controls — unapplied

Protect `main`: require PR; one approving review from a maintainer other than the author; dismiss stale approvals; require latest-push approval by someone other than its pusher; require resolved conversations; require up-to-date `model-tests`; block force pushes and deletion; enforce for admins; no review or push bypass actors. Bind the required check to the observed GitHub Actions app after the first real run, never an invented app ID or “any app.” Verify the actual job context first. Required code-owner review is gated on real verified maintainers and CODEOWNERS covering `.github/workflows/`, package/test scripts, server/import validators and license/provenance files. No placeholder identity or automated approving bot. An owner-only repository needs a second maintainer for the owner’s own PRs. [GitHub protected-branch controls](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

Actions settings: restricted default token; disable Actions-created/approved PRs; require workflow-run approval for **all external contributors**; never send fork workflows write tokens or secrets (keep both disabled wherever exposed); use GitHub-hosted runners only. Allow only the two exact full-SHA official actions already referenced; require full-SHA pins where supported. No repository/environment secrets, reusable private workflows, self-hosted runners, cache writes or deployment credentials are needed. No `pull_request_target`/`workflow_run` path processes untrusted source or artifacts. [GitHub Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

The current workflow declares only `contents: read`, so unspecified scopes—including contents write, PR write and OIDC—are absent. Normal external-fork PR tokens are read-only under the proposed fork policy. Tests execute contributor-controlled code in the disposable hosted runner, not on the maintainer’s Mac, with no supplied secrets; do not treat a green check as a trusted code review. Inspect workflow/package/test changes before approving a run or merge. A fork is not a grant of upstream push permission. This is a source/configuration assessment, not proof that GitHub enforces settings before a repository exists. [Token permission semantics](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions), [untrusted-workflow guidance](https://docs.github.com/en/actions/reference/security/secure-use).

## Capability and approval needed

Branch protection changes require verified repo admin/owner access, or an explicitly repo-scoped GitHub App/fine-grained token with **Administration: write**. Readback needs Administration: read; no secret need be put into this repo/app. Actions policy and private-reporting setup likewise need the owner’s settings access. The currently exposed connected GitHub tools provide repository reads/PR operations, not an identified protection/settings-write action; use the authenticated owner UI or an approved admin API capability if later authorized. [Protection API permissions](https://docs.github.com/en/rest/branches/branch-protection#update-branch-protection).

Public protections are available with GitHub Free; private-repo protections depend on the account plan. Organization push restrictions also depend on account type; verify capability and actual maintainer identities instead of fabricating a restriction list. Exact public destination, release terms, initial commit contents/author identity and publication approval remain owner decisions. Present the final repository and precise settings for action-time approval before any security-setting mutation; publication approval does not silently grant new app/token access. Verify every setting by readback and run a real fork-PR/merge-block check afterward. Hosted CI, fork enforcement, admin permissions, check-app binding, CODEOWNERS and private reporting are **unrun/unconfigured** here.
