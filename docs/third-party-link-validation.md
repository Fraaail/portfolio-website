# Third-Party Link Validation Policy

## Objective
Periodically verify that external links used in metadata and project references remain reachable and trustworthy.

## Cadence
- Run scheduled CI link checks monthly.
- Re-run checks manually after major content updates.

## Validation scope
- External links in `index.html` metadata and project writeup links.
- Public social/profile links and repository links.

## Failure handling
1. Confirm whether the failure is transient.
2. Update or replace broken links.
3. Record remediation in changelog notes.

## Security baseline
- Prefer HTTPS URLs.
- Keep `rel="noopener noreferrer"` on external target-blank links.
- Remove links that no longer serve portfolio credibility or user utility.
