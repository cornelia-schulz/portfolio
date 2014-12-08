module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                // add a banner
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            build: {
                src: ['js/jquery-1.11.1.js'],
                dest: 'js/build/jquery-1.11.1.js'
            }
        },
        jshint: {
            // define files to lint
            files: ['gruntfile.js'],
            // configure jshint
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        cssmin: {
            combine: {
                files: {
                    'css/build/style.css': ['css/bootstrap.min.css', 'css/style.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // run these by typing "grunt test" at the command line
    grunt.registerTask('test', ['jshint']);
    // run these by tying "grunt" on the command line
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
