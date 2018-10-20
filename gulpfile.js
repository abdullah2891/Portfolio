var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");



gulp.task("browserify", function () {
	browserify({ debug: true })
		.transform(babelify)
		.require("./src/app.js", { entry: true })
		.bundle()
		.on("error", function (err) { console.log("Error: " + err.message); })
		.pipe(fs.createWriteStream("dist/js/bundle.js"));
});


gulp.task('serve', function(){
	gulp.watch('src/*.js',['browserify'])
})
