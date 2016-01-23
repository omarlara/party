module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}', 'sass/_partials/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                },
                files: [
                    'css/fiesta.css'
                ]
            }
        },
        sass: {
            options: {
                sourceMap: true,
                //outputStyle: 'compressed'
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'css/fiesta.css': 'sass/fiesta.scss'
                }
            }
        },
        compress: {
            main: {
                options: {
                    mode: 'gzip'
                },
                files: [
                    {
                        expand: false,
                        src: ['css/<%= pkg.name %>.min.css'],
                        dest: 'css/<%= pkg.name %>.min.css.gz'
                    },
                    {
                        src: ['js/<%= pkg.name %>.min.js'],
                        dest: 'js/<%= pkg.name %>.min.js.gz'
                    }
                ]
            }
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);

};
