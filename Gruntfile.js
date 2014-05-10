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
        },

        useminPrepare: {
            html: 'views/index.html',
            options: {
                root: '',
                dest: 'build'
            }
        },
  
        usemin: {
            html: ['build/views/*.html'],
            options: {
                assetsDirs: ['styles', '.tmp'],
                dest: 'build'
            }
        },

        copy: {
            beforeBuild: {
                files: [                    
                    { expand: true, flatten: true, src: ['views/*.html'], dest: 'build/views/'}
                ]
            },

            afterBuild: {
                files: [
                    { expand: true, flatten: true, src: ['images/*'], dest: 'build/images/' },
                    { expand: true, flatten: true, src: ['images/content/*'], dest: 'build/images/content/' },
                    { expand: true, flatten: true, src: ['.tmp/concat/styles/*'], dest: 'build/styles/' }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-open');
    
    grunt.registerTask('default', [
        'connect',
        'open',
        'watch'
    ]);

    grunt.registerTask('build', [
        'copy:beforeBuild',
        'useminPrepare',
        'concat',
        'usemin',
        'copy:afterBuild'
    ]);

};