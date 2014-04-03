'use strict';

module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,
    jade: {
      compile: {
        options: {
          data: {
            package: pkg
          }
        },
        files: [{
          src: "**/*.jade",
          dest: "public/html/",
          ext: ".html",
          cwd: "views/static/",
          expand: true
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jade']);

};