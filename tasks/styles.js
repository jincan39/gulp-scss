const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const browser = require('browser-sync')

gulp.task('styles', () => {
  gulp
    .src('./assets/styles/main.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 10 versions'))
    .pipe(cssnano())
    .pipe(gulp.dest('./styles'))
    .pipe(browser.reload({ stream: true }))
})
