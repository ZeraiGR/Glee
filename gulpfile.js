const {
	src,
	dest,
	watch,
	parallel,
	series
} = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync');
const fileinclude = require('gulp-file-include');


function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
		notify: false
	})
}

function htmlInclude() {
	return src(['app/html/pages/*.html', '!app/html/components/_*.html'])
		.pipe(fileinclude({
			prefix: '@',
			basepath: '@file'
		}))
		.pipe(dest('app'))
		.pipe(browserSync.stream())
}

function styles() {
	return src('app/scss/style.scss')
		.pipe(scss({
			outputStyle: 'compressed'
		}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 versions'],
			grid: true
		}))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src([
			'node_modules/jquery/dist/jquery.js',
			'node_modules/slick-carousel/slick/slick.js',
			'node_modules/mixitup/dist/mixitup.min.js',
			'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
			'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
			'app/js/main.js'
		])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function images() {
	return src('app/images/**/*.*')
		.pipe(imagemin([
			imagemin.gifsicle({
				interlaced: true
			}),
			imagemin.mozjpeg({
				quality: 75,
				progressive: true
			}),
			imagemin.optipng({
				optimizationLevel: 5
			}),
			imagemin.svgo({
				plugins: [{
						removeViewBox: true
					},
					{
						cleanupIDs: false
					}
				]
			})
		]))
		.pipe(dest('dist/images'))
}

function build() {
	return src([
			'app/**/*.html',
			'app/css/style.min.css',
			'app/js/main.min.js'
		], {
			base: 'app'
		})
		.pipe(dest('dist'))
}

function cleanDist() {
	return del('dist')
}

function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
	watch(['app/html/**/*.html'], htmlInclude);

	// watch(['app/html/**/*.html']).on('change', browserSync.reload);
}

exports.htmlinclude = htmlInclude;
exports.styles = styles;
exports.scripts = scripts;
exports.browserSync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build);

exports.default = parallel(htmlInclude, styles, scripts, browsersync, watching);