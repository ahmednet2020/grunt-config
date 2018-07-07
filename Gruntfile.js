module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks();

  // Default task(s).
  grunt.registerTask('run',() => {
	  console.log("grunt hello world")
  });
  grunt.registerTask('by',() => {
	  console.log("grunt by world")
  });
  grunt.registerTask('all', ['by', 'run'])

};