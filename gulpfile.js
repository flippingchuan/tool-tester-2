var gulp    = require('gulp'),
		gutil    = require('gulp-util'),
		uglify  = require('gulp-uglify'),
		concat  = require('gulp-concat'),
		browserify = require('gulp-browserify');

gulp.task('js', function () {
	gulp.src('./assets/js/*.js')
	.pipe(browserify())
	.pipe(uglify())
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
	gulp.run('js'); 
});

gulp.watch('./assets/js/*', function () {
     gulp.run('js');
});