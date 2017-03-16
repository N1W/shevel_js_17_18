module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      basic_and_extras: {
        files: {
          'js/build/output.min.js': ['js/src/script1.js', 'js/src/script2.js', 'js/src/script3.js'],
          'css/build/output.min.css': ['css/src/footer.css', 'css/src/header.css', 'css/src/style.css'],
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/build/output.min.js': ['js/build/output.min.js'],
          'css/build/output.min.css': ['css/build/output.min.css']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};