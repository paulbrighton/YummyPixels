var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src('./scss/application.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 12 versions'],
      grid: 'autoplace',
      cascade: false
    }))
    .pipe(rename(function (path) {
      path.extname = '.scss'
    }))
    .pipe(gulp.dest('./build/scss'))
})

// gulp.task('watch', function () {
//   gulp.watch('../scss/**/*.scss', ['sass'])
// })

gulp.task('watch', function () {
  gulp.watch('../scss/**/*.scss', gulp.series('sass'))
})
