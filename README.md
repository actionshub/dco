# dco-check

[![Build](
https://github.com/actionshub/dco/actions/workflows/build.yaml/badge.svg
)](https://github.com/actionshub/dco/actions/workflows/build.yaml)
[![CodeQL](
https://github.com/actionshub/dco/actions/workflows/codeql.yml/badge.svg
)](https://github.com/actionshub/dco/actions/workflows/codeql.yml)
[![Lint](
https://github.com/actionshub/dco/actions/workflows/lint.yaml/badge.svg
)](https://github.com/actionshub/dco/actions/workflows/lint.yaml)

A GitHub Action that verifies commits in pull-request all include Developer
Certificate of Origin (DCO) information

*NOTE*: This is a fork of [tim-actions/dco](https://github.com/tim-actions/dco),
which is no longer maintained.

test

## Usage

Add .github/workflows/sanity-check.yml with the following:

```yaml
name: DCO
on: [pull_request]

jobs:
  commits_check_job:
    runs-on: ubuntu-latest
    name: Commits Check
    steps:
    - name: Get PR Commits
      id: 'get-pr-commits'
      uses: actionshub/get-pr-commits@main
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
    - name: DCO Check
      uses: actionshub/dco@main
      with:
        commits: ${{ steps.get-pr-commits.outputs.commits }}
```
