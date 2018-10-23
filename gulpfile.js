var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var sass = require('gulp-sass');
 
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


gulp.task('serve', function(){
	gulp.watch('src/**/*.js',['browserify'])
	gulp.watch('src/scss/**/*.scss', ['sass']);
})
