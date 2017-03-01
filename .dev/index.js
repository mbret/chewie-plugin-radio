'use strict';

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
process.chdir(__dirname);

const chewie = require("chewie-system");

// Start the system
chewie.start({
    settings: {
        bootstrap: {
            bootstrap: function(chewie, done) {
                chewie.repositoriesHelper.reinstallPluginFromDisk(__dirname + "/..")
                    .then(() => done())
                    .catch(done);
            }
        },
        alwaysSynchronizePlugins: true,
        system: {
            tmpDir: "./.chewie/.tmp",
            appDataPath: "./.chewie"
        }
    }
});