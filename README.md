# dco-check

A GitHub Action that verifies commits in pull-request all include Developer
Certificate of Origin (DCO) information

NOTE: This is a fork of [tim-actions/dco](https://github.com/tim-actions/dco),
which is no longer maintained.

## Usage

Add .github/workflows/sanity-check.yml with the following:

```
name: Sanity check
on: [pull_request]

jobs:
  commits_check_job:
    runs-on: ubuntu-latest
    name: Commits Check
    steps:
    - name: Get PR Commits
      id: 'get-pr-commits'
      uses: tim-actions/get-pr-commits@master
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
    - name: DCO Check
      uses: tim-actions/dco@master
      with:
        commits: ${{ steps.get-pr-commits.outputs.commits }}
```
