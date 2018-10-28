var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var sass = require('gulp-sass');
var htmlmin  = require('gulp-htmlmin');

sass.compiler = require('node-sass');

gulp.task("browserify", function () {
	console.log("starting browserify compiler");
	browserify({ debug: true })
		.transform(babelify)
		.require("./src/index.js", { entry: true })
		.bundle()
		.on("error", function (err) { console.log("Error: " + err.message); })
		.pipe(fs.createWriteStream("dist/js/bundle.js"));
});


gulp.task('sass', function () {
console.log("starting sass compiler")
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Gulp task to minify HTML files
gulp.task('page', function() {
  return gulp.src(['index.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});



gulp.task('serve',['browserify','sass','page'],function(){
	gulp.watch('src/**/*.js',['browserify'])
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('index.html', ['page']);
})


gulp.task('default',['browserify','sass','page']);
