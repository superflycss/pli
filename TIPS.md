# Tips

## Globbing Patterns

The below example utilitizes the modules `path`, `glob-patterns`, and the `PLI` in order to construct a glob matching all the **main** CSS resources.  [Do you need to use `path.join` in node](http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js) contains the rationale behind using `path`.

``` javascript
var path = require('path');
var GLOB = require('glob-patterns');
var PLI = require('superfly-css-pli');

var cssEntryFiles = path.join(PLI.src.main.css, GLOB.ALL_CSS);
console.log(PLI.src.main.css);
//Logs `./src/main/css/**/*.css`
```
