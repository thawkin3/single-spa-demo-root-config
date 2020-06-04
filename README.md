# single-spa demo - Root Config

## Overview

This repo is used in conjunction with three other repos listed below. Together they make up an application composed of microfrontends. Each app can be updated and deployed independently of the others.

- **Root Config** (This Repo) (https://github.com/thawkin3/single-spa-demo-root-config)
- **Nav App** (https://github.com/thawkin3/single-spa-demo-nav)
- **Page App 1** (https://github.com/thawkin3/single-spa-demo-page-1)
- **Page App 2** (https://github.com/thawkin3/single-spa-demo-page-2)

## Demo

You can find the demo here: https://thawkin3-single-spa-demo.herokuapp.com/page1

## How It Works

This project uses [single-spa](https://single-spa.js.org/) to architect an app composed of micrfrontends. In the root config, the three microfrontend apps (nav, page 1, and page 2) are registered with singe-spa. The main `index.ejs` file contains an import map, which references where to find the compiled JavaScript bundle for each microfrontend. [SystemJS](https://github.com/systemjs/systemjs) is the module loader which then loads the bundles when needed.

Each repo is set up with [Travis CI](https://travis-ci.org/) for running jobs as part of a continuous integration pipeline. When new code is pushed to the master branch for any of the repos, the new code is compiled and then uploaded to AWS S3, which serves as a CDN. The CI job also updates the import map file to reference the new bundle for the updated project.

## NPM Scripts

- `build`: Creates a production build
- `lint`: Lints the code using [ESLint](https://eslint.org/)
- `prettier`: Formats the code using [Prettier](https://prettier.io/)
- `start:dev`: Starts a webpack dev server for running the app in development mode
- `start"` Starts an express server for running the app in production mode
- `test`: Runs unit tests using [Jest](https://jestjs.io/)
