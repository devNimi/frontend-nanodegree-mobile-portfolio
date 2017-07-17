module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
        build: {
            src: 'src/js/perfmatters.js',
            dest: 'dist/js/perfmatters.min.js'
        }
    },

    htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'dist/index.html': 'src/index.html'  ,   // 'destination': 'source'
            'dist/project-2048.html': 'src/project-2048.html',
            'dist/project-mobile.html': 'src/project-mobile.html',
            'dist/project-webperf.html': 'src/project-webperf.html'
          }
        }
      }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']);

};
