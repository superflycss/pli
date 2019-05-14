'use strict';

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
  deploy: {
    js: 'deploy/js/',
    css: 'deploy/css/',
    svg: 'deploy/svg/'
  },
  src: {
    main: {
      js: 'src/main/js/',
      css: 'src/main/css/',
      sss: 'src/main/sss/',
      html: 'src/main/html/',
      svg: 'src/main/svg/',
      njk: 'src/main/njk/',
      md: 'src/main/md/'
    },
    test: {
      js: 'src/test/js/',
      css: 'src/test/css/',
      sss: 'src/test/sss/',
      html: 'src/test/html/',
      svg: 'src/test/svg/',
      njk: 'src/test/njk/',
      md: 'src/test/md/'
    }
  },
  target: {
    main: {
      js: 'target/main/js/',
      css: 'target/main/css/',
      html: 'target/main/html/',
      svg: 'target/main/svg/',
      njk: 'target/main/njk/',
      md: 'target/main/md/'
    },
    test: {
      js: 'target/test/js/',
      css: 'target/test/css/',
      html: 'target/test/html/',
      svg: 'target/test/svg/',
      njk: 'target/test/njk/',
      md: 'target/test/md/'
    }
  }
}

PLI.SRC_MAIN_CSS = path.join(PLI.src.main.css, GLOB.ALL_CSS);
PLI.SRC_MAIN_SSS = path.join(PLI.src.main.sss, GLOB.ALL_SSS);
PLI.SRC_MAIN_HTML = path.join(PLI.src.main.html, GLOB.ALL_HTML);
PLI.SRC_MAIN_JS = path.join(PLI.src.main.js, GLOB.ALL_JS);
PLI.SRC_MAIN_SVG = path.join(PLI.src.main.svg, GLOB.ALL_SVG);
PLI.SRC_MAIN_MD = path.join(PLI.src.main.md, GLOB.ALL_MD);
PLI.SRC_TEST_CSS = path.join(PLI.src.test.css, GLOB.ALL_CSS);
PLI.SRC_TEST_SSS = path.join(PLI.src.test.sss, GLOB.ALL_SSS);
PLI.SRC_TEST_HTML = path.join(PLI.src.test.html, GLOB.ALL_HTML);
PLI.SRC_TEST_JS = path.join(PLI.src.test.js, GLOB.ALL_JS);
PLI.SRC_TEST_SVG = path.join(PLI.src.test.svg, GLOB.ALL_SVG);
PLI.SRC_TEST_MD = path.join(PLI.src.test.md, GLOB.ALL_MD);
PLI.SRC_TEST_NJK = path.join(PLI.src.test.njk, GLOB.ALL_NJK);

PLI.TARGET_MAIN_CSS = path.join(PLI.target.main.css, GLOB.ALL_CSS);
PLI.TARGET_MAIN_HTML = path.join(PLI.target.main.html, GLOB.ALL_HTML);
PLI.TARGET_MAIN_JS = path.join(PLI.target.main.js, GLOB.ALL_JS);
PLI.TARGET_MAIN_SVG = path.join(PLI.target.main.svg, GLOB.ALL_SVG);
PLI.TARGET_MAIN_MD = path.join(PLI.target.main.md, GLOB.ALL_MD);
PLI.TARGET_TEST_CSS = path.join(PLI.target.test.css, GLOB.ALL_CSS);
PLI.TARGET_TEST_HTML = path.join(PLI.target.test.html, GLOB.ALL_HTML);
PLI.TARGET_TEST_JS = path.join(PLI.target.test.js, GLOB.ALL_JS);
PLI.TARGET_TEST_SVG = path.join(PLI.target.test.svg, GLOB.ALL_SVG);
PLI.TARGET_TEST_MD = path.join(PLI.target.test.md, GLOB.ALL_MD);
PLI.TARGET_TEST_NJK = path.join(PLI.target.test.njk, GLOB.ALL_NJK);

PLI.DEPLOY_TEST_CSS = path.join(PLI.deploy.css, GLOB.ALL_CSS);
PLI.DEPLOY_TEST_HTML = path.join(PLI.DEPLOY, GLOB.ALL_HTML);
PLI.DEPLOY_TEST_JS = path.join(PLI.deploy.js, GLOB.ALL_JS);

PLI.SERVE_TEST_HTML = path.join(PLI.SERVE, GLOB.ALL_HTML);
PLI.SERVE_TEST_SVG = path.join(PLI.serve.svg, GLOB.ALL_SVG);
PLI.SERVE_TEST_CSS = path.join(PLI.serve.css, GLOB.ALL_CSS);

PLI.NODE_MODULES = 'node_modules';

module.exports = PLI;