module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			static_mappings: {
				files: [{
					src: 'js/index.js',
					dest: 'build/index.min.js'
				}, {
					src: 'js/login.js',
					dest: 'build/login.min.js'
				}]
			}
		},
		concat: {
			basic: {
				src: ['build/*.js'],
				dest: 'dist/basic.js',
			}
			/*bar:{
				src:["build/*.js"],
				dest:"test/all.min.js"
			}*/
		},
		watch: {
			/*scripts: {
				files: 'js/*.js',
				'css/.less',
				tasks: ['uglify', 'concat', 'jshint'],
			},*/
			css: {
				files: ['css/*.less'],
				tasks: ['less'],
				options: {
					livereload: true,
				},
			},
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				},
			},
			uses_defaults: ['js/*.js'],
		},
		less: {
			compile: {
				files: {
					'css/login.css': 'css/login.less'
				}
			},
		}
	});

	// 加载包含 "uglify" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 加载包含 "concat" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-concat');
	// 加载包含 "watch" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-watch');
	// 加载包含 "jshint" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// 加载包含 "less" 任务的插件。
	grunt.loadNpmTasks('grunt-contrib-less');
	// 默认被执行的任务列表。
	grunt.registerTask('default', ['uglify', 'concat', 'watch', 'jshint', 'less']);

};