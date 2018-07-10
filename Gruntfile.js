'use strict';  
const sass = require('node-sass');
module.exports = function(grunt) {
  //load all grunt plugin
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //concat plugin config
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
    //browserify plugin config
    //for babel and react
    browserify: {
      dist: {
        files: {
          'build/module.min.js': ['js/*.js']
        },
        options: {
          transform: [["babelify"]],
        }
      }
    },
    //sass plugin config
    sass: {
      options: {
          implementation: sass,
          sourceMap: false,
          outputStyle: 'compressed'
      },
      dist: {
          files: {
            './css/main.css': './css/sass/root.scss'
          }
      }
    },
    //clean plugin config
    clean: {
      build: {
        src: ['./build/','./css/main.css']
      }
    },
    //uglify plugin config
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          './build/module.min.js': ['./build/module.min.js']
        }
      }
    },
    //watch plugin config
    watch: {
      css: {
        files: ['./css/**'],
        tasks: ['sass','concat']
      },
      js: {
        files: ['./js/**'],
        tasks: ['browserify:dist','uglify']
      },
    }
  });
  //run Tasks
  grunt.registerTask('default', ['clean','sass','concat','browserify:dist','uglify','watch']);
};