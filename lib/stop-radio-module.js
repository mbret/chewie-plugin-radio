'use strict';

let RadioModule = require("./radio-module");

class StopRadioModule extends RadioModule {

    /**
     * @param {Object} options
     * @param {Function} done
     */
    newDemand(options, done) {
        let self = this;
        if (self.plugin.lastRunningRadio) {
            self.plugin.lastRunningRadio.stopRadio();
            self.plugin.lastRunningRadio = null;
        }
        done();
    }
}

module.exports = StopRadioModule;
