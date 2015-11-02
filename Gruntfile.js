module.exports = function(grunt) {

    var nightwatch = require("nightwatch");

    nightwatch.initGrunt(grunt);

    grunt.initConfig({
        nightwatch: {
            options: {
                cwd: "./"
            },
            "default" : {},
            browserstack: {
                argv: {
                    env: "browserstack"
                },
                settings: {
                    silent: true
                }
            },
            "all" : {
                argv: {
                    env: "default, browserstack"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-nightwatch");
    grunt.registerTask("default", ["nightwatch"]);

};