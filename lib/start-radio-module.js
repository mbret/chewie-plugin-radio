'use strict';

let RadioModule = require("./radio-module");

class StartRadioModule extends RadioModule {

    /**
     * @param {Object} options
     * @param {Function} done
     */
    newDemand(options, done) {
        let self = this;

        // stop the eventual previous radio task
        if (self.plugin.lastRunningRadio) {
            self.plugin.lastRunningRadio.stopRadio();
        }
        self.plugin.lastRunningRadio = this;

        this.player = self.helper.system.speaker.playUrl(self.config.radio[options.radioName]);

        let onError = function(err) {
            self.plugin.helper.logger.warn("An error occurred when playing radio [%s]", options.radioName, err);
        };
        let onStop = function() {
            done();
        };
        this.player.on("error", onError);
        this.player.once("stop", onStop);

        // clean listeners
        this.once("stop", function() {
            self.player.removeListener("stop", onStop);
            self.player.removeListener("error", onError);
        });
    }

    /**
     * Stop the current radio
     */
    stop(done) {
        this.emit("stop");
        this.stopRadio();
        return done();
    }

    stopRadio() {
        if (this.player) {
            this.player.stop();
        }
    }
}

module.exports = StartRadioModule;
