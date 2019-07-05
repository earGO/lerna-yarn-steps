const {src, dest, watch, series} = require('gulp');
const babel = require('gulp-babel');

function rebuildCommonComponents() {
  return src([
    'packages/components/src/common/*.js',
    '!./node_modules/**',
    '!*.story.js',
    '!*.spec.js'
  ])
    .pipe(babel())
    .pipe(dest('packages/components/lib/common/'));
}

function rebuildComponentsRoot() {
  return src([
    'packages/components/src/*.js',
    '!./node_modules/**',
    '!*.story.js',
    '!*.spec.js'
  ])
    .pipe(babel())
    .pipe(dest('packages/components/lib/'));
}

function rebuildModules() {
  return src([
    'packages/modules/src/*.js',
    '!./node_modules/**',
    '!*.story.js',
    '!*.spec.js'
  ])
    .pipe(babel())
    .pipe(dest('packages/modules/lib/'));
}

function rebuildServices() {
  return src([
    'packages/services/src/*.js',
    '!./node_modules/**',
    '!*.story.js',
    '!*.spec.js'
  ])
    .pipe(babel())
    .pipe(dest('packages/services/lib/'));
}

function rebuildUtils() {
  return src([
    'packages/utils/src/*.js',
    '!./node_modules/**',
    '!*.story.js',
    '!*.spec.js'
  ])
    .pipe(babel())
    .pipe(dest('packages/utils/lib/'));
}

exports.default = function() {
  // You can use a single task
  watch(
    [
      'packages/components/src/common/*.js',
      '!./node_modules/**',
      '!*.story.js',
      '!*.spec.js'
    ],
    series(rebuildCommonComponents, rebuildComponentsRoot, rebuildModules)
  );
  watch(
    [
      'packages/components/*/*.js',
      '!./node_modules/**',
      '!*.story.js',
      '!*.spec.js'
    ],
    series(rebuildComponentsRoot, rebuildModules)
  );
  watch(
    [
      'packages/modules/src/*.js',
      '!./node_modules/**',
      '!*.story.js',
      '!*.spec.js'
    ],
    series(rebuildModules)
  );
  watch(
    [
      'packages/services/src/*.js',
      '!./node_modules/**',
      '!*.story.js',
      '!*.spec.js'
    ],
    series(rebuildServices, rebuildModules)
  );
  watch(
    [
      'packages/utils/src/*.js',
      '!./node_modules/**',
      '!*.story.js',
      '!*.spec.js'
    ],
    series(rebuildUtils)
  );
};
