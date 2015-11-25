module.exports = function (grunt) {
	grunt.initConfig({
		uglify: {
			dist: {
				files: {
					'output/calculator.min.js': 'calculator/*.js'
				},
				options: {
					banner: '/* This is my minified app, built <%= grunt.template.today() %> */'
				}
			}			
		},
		watch: {
			files: ['calculator/*.js'],
			tasks: ['uglify:dist']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'watch'
	]);
};