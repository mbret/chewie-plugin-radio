"use strict";

module.exports = class Plugin {
    mount(chewie, helper, cb) {
        this.helper = helper;
        this.helper.shared.lastRunningRadio = null;
        return cb();
    }
};
