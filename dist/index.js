import require$$0 from '@actions/core';
import require$$1 from '@actions/github';
import require$$2 from './libs/helper.js';
import require$$3 from './libs/dco.js';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = {};

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const core = require$$0;
	const github = require$$1;

	const helper = require$$2;
	const getDcoStatus = require$$3;

	async function main() {
	  try {
	    const {payload: {pull_request: pr}} = github.context;

	    const commitsString = core.getInput('commits');
	    const commits = JSON.parse(commitsString);

	    const allowLabel = core.getInput('allow-obvious-fix-label');
	    if (allowLabel && pr.labels && pr.labels.some(label => label.name === allowLabel)) {
	      return
	    }

	    const dcoFailed = await getDcoStatus(commits, () => true, pr.html_url);
	    if (dcoFailed.length == 0) return

	    const summary = helper.getOutput(dcoFailed);
	    core.setFailed(summary);
	  } catch (error) {
	    core.setFailed(error.message);
	  }
	}

	main();
	return src;
}

var srcExports = requireSrc();
var index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

export { index as default };
