/******************************************************
 *             ----前端工程自动化构建----             *
 *                                                    *
 *      @author dai-siki同学 < 851733175@qq.com >     *
 ******************************************************/

// import package
const $ = require('gulp-load-plugins')(),
	webpack = require('webpack-stream'),
	named = require('vinyl-named'),
	gulp = require('gulp');

/** 开发
 -------------------------------------------------------------*/

gulp.task('css', function () {
	gulp.src('./scss/*.scss')
		.pipe($.sass())
		.pipe($.autoprefixer('last 10 version'))
		.pipe(gulp.dest('./'))
});

// jS task
gulp.task('js', function () {
	var webpack_config = {
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel',
					query: {
						presets: ['es2015', 'stage-2', 'stage-3'],
						plugins: ['transform-runtime']
					}
				},
				{
					test: /\.css$/,
					loaders: ['style', 'css']
				},
				{
					test: /\.json$/,
					loaders: ['json']
				},
				{
					test: /\.(scss|sass)$/,
					loaders: ['style', 'sass']
				},
				{
					test: /\.(html|tpl)$/,
					loaders: ['html']
				},
				{
					test: /\.vue$/,
					loaders: ['vue']
				}
			]
		}
	};

	gulp.src('./example/demo.js')
		.pipe($.plumber({
			errorHandler: _errrHandler
		}))
		.pipe(named(function () {
			return 'demo-src';
		}))
		.pipe(webpack(webpack_config))
		.pipe($.uglify())
		.pipe(gulp.dest('./example'));
});

gulp.task('serve', function () {
	gulp.watch(['./example/demo.js', './datepicker.vue', './scss/*.scss'], ['js']);
	gulp.watch(['./scss/*.scss'], ['css']);
});

gulp.task('default', ['serve']);

/** 辅助函数
 -------------------------------------------------------------*/
//错误提示
function _errrHandler(e) {
	$.util.beep();
	$.util.log(e);
}
