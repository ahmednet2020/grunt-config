'use strict';  
const sass = require('node-sass');
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n',
        stripBanners:false
      },
      css: {
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
          transform: [["babelify"]],
        }
      }
    },
    sass: {
      options: {
          implementation: sass,
          sourceMap: false
      },
      dist: {
          files: {
            './css/main.css': './css/sass/root.scss'
          }
      }
    },
    clean: {
      build: {
        src: ['./build/','./css/main.css']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //run Tasks
  grunt.registerTask('all', ['clean','browserify:dist','sass','concat']);
};