module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    'dist/css/style.css': 'src/less/style.less'
                }
            }
        },

        uglify: {
            build: {
                files: {
                    'dist/js/script.min.js': 'src/js/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
