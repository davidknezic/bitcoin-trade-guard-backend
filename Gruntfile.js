module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    mochaTest: {
      test: {
        options: {
          reporter: 'dot',
          require: [
            function () { should = require('should'); },
            function () { request = require('supertest'); }
          ]
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('build', []);
  grunt.registerTask('test', ['mochaTest:test']);
};
