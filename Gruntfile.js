module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['styles/**/*.css'],
            },
            html: {
                files: ['views/**/*.html'],
            }
        },
        
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: ''
                }
            }
        },
        
        open: {
            server: {
                path: 'http://localhost:9001/',
                app: 'Chrome'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    
    grunt.registerTask('default', [
        'connect',
        'open',
        'watch'
    ]);

};