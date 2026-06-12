module.exports = {
  getOutput(commitInfos) {
    const lines = commitInfos.map(info => `  ${info.sha}    ${info.message}`)

    return `The Developer Certificate of Origin (DCO) check failed

${lines.join('\n')}

  What should I do to fix it ?

  All proposed commits should include a line like this in your commit message:

    Signed-off-by: <your-name> <your-email-address>

  This is most conveniently done by using --signoff (-s) when running git commit.

  This will of course only work if your git is configured with your name and
  email address. If it is not, you can fix that with these commands:

    git config --global user.name 'your_name'
    git config --global user.email 'you_email'

  For more information on DCO, see:
    https://en.wikipedia.org/wiki/Developer_Certificate_of_Origin
    https://github.com/chef-boneyard/chef-rfc/blob/master/rfc080-dco.md
    https://developercertificate.org/`

  },
}
