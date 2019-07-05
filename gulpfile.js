const {src,dest,watch,series} = require('gulp');
const babel = require('gulp-babel');

function rebuildComponents() {
  return src(['packages/components/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"])
    .pipe(babel())
    .pipe(dest('packages/components/lib/'));
}

function rebuildModules() {
  return src(['packages/modules/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"])
    .pipe(babel())
    .pipe(dest('packages/modules/lib/'));
}

function rebuildServices() {
  return src(['packages/services/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"])
    .pipe(babel())
    .pipe(dest('packages/services/lib/'));
}


exports.default = function() {
  // You can use a single task
  watch(['packages/components/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"], series(rebuildComponents,rebuildModules));
  watch(['packages/modules/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"], rebuildModules);
  watch(['packages/services/src/*.js', '!./node_modules/**',"!*.story.js","!*.spec.js"], series(rebuildServices,rebuildModules));
};