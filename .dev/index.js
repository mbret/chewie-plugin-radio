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
                chewie.repositoriesHelper.installPluginFromDisk(__dirname + "/..", {reinstall: true})
                    .then(() => done())
                    .catch(done);
            }
        },
        forcePluginsSynchronizeAtStartup: true,
        system: {
            tmpDir: "./.chewie/.tmp",
            appDataPath: "./.chewie"
        }
    }
});