/*jslint node: true */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: {
            site: {
                src: './assets/app/css/style.css'
            }
        },
        less: {
            compile: {
                files: {
                    './assets/app/css/style.css' : './assets/app/css/style.less'
                }
            }
        },
        jekyll: {
            server: {
                serve: true,
                watch: true,
                verbose: true,
                server: true,
                auto: true,
                server_port: 4000
            }
        },
        watch: {
            options: {
                atBegin: true
            },
            less: {
                files: ['./assets/app/css/*.less'],
                tasks: ['less', 'autoprefixer']
            },
            jekyll: {
                files: ['./_layouts/*.html', './_posts/*.md'],
                tasks: ['jekyll']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['watch', 'jekyll']);
};
