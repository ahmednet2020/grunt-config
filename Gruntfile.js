module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
      },
      dist: {
        src: ['css/*.css'],
        dest: 'build/app.css',
      }
    },
    browserify: {
      dist: {
        files: {
          'build/module.js': ['js/*js']
        },
        options: {
          transform: [["babelify", { "presets": ["env","react"]}]],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  //run Tasks
  grunt.registerTask('all', ['browserify:dist','concat']);

};