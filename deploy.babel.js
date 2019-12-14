// Deploys the site to the server.
//
// This can only be done with SSH access to the server. If you haven't been
// authorized to deploy, this file can be ignored.
//
// Usage:
//
//   # Deploys to the production environment (davidminnerly.com)
//   $ npm run deploy:prod
//
//   # Deploys to the development environment (beta.davidminnerly.com).
//   # This is used commonly when you're testing out changes and want to see
//   # how they'll look online before being fully ready to push to production.
//   $ npm run deploy:dev

import fs from 'fs';
import git from 'simple-git';
import config from './webpack.config.js';

// Remote repositories for deploying the site. These can only be pushed to with
// proper authorization.
const REMOTES = {
	staging: 'ssh://git@davidminnerly.com/~/beta.davidminnerly.git',
	production: 'ssh://git@davidminnerly.com/~/davidminnerly.git'
}

const OUTPUT_DIR = config.output.path || 'dist';

function getRemote() {
	if (process.env.NODE_ENV == 'production') {
		return REMOTES.production;
	} else {
		return REMOTES.staging;
	}
};

if (fs.existsSync(OUTPUT_DIR)) {
	const repo = git(OUTPUT_DIR)
	.init()
	.add('.')
	.commit('Release');

	const remote = getRemote();

	repo.addRemote('origin', remote);
	repo.push(['-f', 'origin', 'master']);

	console.log('Deployed to ' + remote);
} else {
	console.warn('Nothing has been built. Run `npm run build` first');
}
