# Dependency Update and Audit Policy

## Objective
Keep runtime and toolchain dependencies current, secure, and predictable.

## Policy
1. Review dependency updates at least once per month.
2. Prioritize security patches and high-severity advisories.
3. Apply updates incrementally and verify site behavior after each batch.
4. Avoid bundling major version jumps with unrelated feature changes.

## Audit Checklist
- Confirm no stale/unused build artifacts remain after update.
- Re-run diagnostics and smoke checks for navigation, accessibility, and media fallbacks.
- Verify entry bundle references in `index.html` still match active files in `assets/`.
- Validate contact and resume flows after updates.

## Rollback Guideline
If a dependency update causes regression:
1. Revert only the affected dependency change.
2. Keep roadmap and implementation docs synchronized.
3. Reattempt update with a narrower scope and explicit verification notes.

## Documentation Requirement
For each meaningful dependency update, record:
- Date
- Packages or toolchain components changed
- Reason (security, bug fix, maintenance)
- Verification summary
