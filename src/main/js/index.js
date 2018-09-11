var path = require('path');
var GLOB = require('glob-patterns');

var PLI = {
  SRC: 'src/',
  TARGET: 'target/',
  DEPLOY: 'deploy/',
  SERVE: 'serve/',
  DIST: 'dist/',
  SRC_TEST: 'src/test/',
  serve: {
    js: 'serve/js/',
    css: 'serve/css/',
    svg: 'serve/svg/'
  },
  src: {
    main: {
      js: 'src/main/js/',
      css: 'src/main/css/',
      html: 'src/main/html/',
      svg: 'src/main/svg/',
      njk: 'src/main/njk/'
    },
    test: {
      js: 'src/test/js/',
      css: 'src/test/css/',
      html: 'src/test/html/',
      svg: 'src/test/svg/',
      njk: 'src/test/njk/'
    }
  },
  target: {
    main: {
      js: 'target/main/js/',
      css: 'target/main/css/',
      html: 'target/main/html/',
      svg: 'target/main/svg/',
      njk: 'target/main/njk/'
    },
    test: {
      js: 'target/test/js/',
      css: 'target/test/css/',
      html: 'target/test/html/',
      svg: 'target/test/svg/',
      njk: 'target/test/njk/'
    }
  },
  deploy: {
    main: {
      js: 'deploy/main/js/',
      css: 'deploy/main/css/',
      html: 'deploy/main/html/',
      njk: 'deploy/main/njk/'
    },
    test: {
      js: 'deploy/test/js/',
      css: 'deploy/test/css/',
      html: 'deploy/test/html/',
      njk: 'deploy/test/njk/'
    }
  }
}

PLI.SRC_MAIN_CSS = path.join(PLI.src.main.css, GLOB.ALL_CSS);
PLI.SRC_MAIN_HTML = path.join(PLI.src.main.html, GLOB.ALL_HTML);
PLI.SRC_MAIN_JS = path.join(PLI.src.main.js, GLOB.ALL_JS);
PLI.SRC_MAIN_SVG = path.join(PLI.src.main.svg, GLOB.ALL_SVG);
PLI.SRC_TEST_CSS = path.join(PLI.src.test.css, GLOB.ALL_CSS);
PLI.SRC_TEST_HTML = path.join(PLI.src.test.html, GLOB.ALL_HTML);
PLI.SRC_TEST_JS = path.join(PLI.src.test.js, GLOB.ALL_JS);
PLI.SRC_TEST_SVG = path.join(PLI.src.test.svg, GLOB.ALL_SVG);

PLI.TARGET_MAIN_CSS = path.join(PLI.target.main.css, GLOB.ALL_CSS);
PLI.TARGET_MAIN_HTML = path.join(PLI.target.main.html, GLOB.ALL_HTML);
PLI.TARGET_MAIN_JS = path.join(PLI.target.main.js, GLOB.ALL_JS);
PLI.TARGET_MAIN_SVG = path.join(PLI.target.main.svg, GLOB.ALL_SVG);
PLI.TARGET_TEST_CSS = path.join(PLI.target.test.css, GLOB.ALL_CSS);
PLI.TARGET_TEST_HTML = path.join(PLI.target.test.html, GLOB.ALL_HTML);
PLI.TARGET_TEST_JS = path.join(PLI.target.test.js, GLOB.ALL_JS);
PLI.TARGET_TEST_SVG = path.join(PLI.target.test.svg, GLOB.ALL_SVG);

PLI.DEPLOY_MAIN_CSS = path.join(PLI.deploy.main.css, GLOB.ALL_CSS);
PLI.DEPLOY_MAIN_HTML = path.join(PLI.target.main.html, GLOB.ALL_HTML);
PLI.DEPLOY_MAIN_JS = path.join(PLI.deploy.main.js, GLOB.ALL_JS);
PLI.DEPLOY_TEST_CSS = path.join(PLI.deploy.test.css, GLOB.ALL_CSS);
PLI.DEPLOY_TEST_HTML = path.join(PLI.deploy.test.html, GLOB.ALL_HTML);
PLI.DEPLOY_TEST_JS = path.join(PLI.deploy.test.js, GLOB.ALL_JS);

PLI.SERVE_TEST_HTML = path.join(PLI.SERVE, GLOB.ALL_HTML);
PLI.SERVE_TEST_SVG = path.join(PLI.SERVE, GLOB.ALL_SVG);

PLI.NODE_MODULES = 'node_modules';

module.exports = PLI;
