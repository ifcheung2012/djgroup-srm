var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  // livereload = require('gulp-livereload'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  return sass('./public/css/**/*.scss')
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.reload({stream:true}));
    // .pipe(livereload());
});

gulp.task('browser-sync', ['develop'], function() {
	browserSync.init(null, {
		    proxy: "http://localhost:3000",
        // files: ["public/**/*.*","views/*.*"],
        port: 9000,
	});
  gulp.watch('./public/css/*.scss', ['sass'])
  gulp.watch('./public/css/*.css').on("change",browserSync.reload);
  gulp.watch('./public/images/*.*').on("change",browserSync.reload);
  gulp.watch('./public/js/*.js').on("change",browserSync.reload);
  gulp.watch('./views/*.jade').on("change",browserSync.reload);
  gulp.watch('./routes/*.js').on("change",browserSync.reload);
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
});

gulp.task('develop', function () {
  // livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        // livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'browser-sync'
  // ,'watch'
]);
