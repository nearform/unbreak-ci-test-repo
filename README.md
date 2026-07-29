# unbreak-ci-test-repo

Sample repository for exercising the [UnbreakCI](https://github.com/nearform/unbreakci) GitHub App.

The previous version of this repo was deleted, so this is a fresh one. Nothing here
does anything useful — the dependencies are deliberately out of date so that
Dependabot has something to open pull requests about, and the single test can be
made to fail on demand so that a check suite reports a failure.

## Setup

- The **unbreak-ci-dev** App must be installed on this repo
- It writes to the [UnbreakCI testing board](https://github.com/orgs/nearform/projects/20) (project 20), never the Technology Hub board
- Dependabot is enabled via [.github/dependabot.yml](.github/dependabot.yml). Disable it here when you're not actively testing, so it stops opening pull requests

## Exercising each rule

**A failing check suite adds the PR to the board.** Change the expected value in
[sum.test.js](sum.test.js) so the test fails, push that to a Dependabot PR branch, and the
card should appear in whichever column `COLUMN_NAME_DEV` names.

**A closed, unmerged Dependabot PR is removed from the board.** Close one of Dependabot's
PRs without merging it and the card should disappear.

**A PR labelled for a human moves to the maintainer column.** Add the `requires-human`
label to an open Dependabot PR and the card should move to whichever column
`LABEL_COLUMN_NAME_DEV` names. Removing the label again should do nothing.

**The label survives a later CI failure.** With the label still applied, make CI fail and
re-run it. The card must stay where it is rather than dropping back to `COLUMN_NAME_DEV`.

## Notes

The label rule only applies to pull requests opened by `PR_AUTHOR` (Dependabot), so
labelling a hand-written PR here will correctly do nothing.
