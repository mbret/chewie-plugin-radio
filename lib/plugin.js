"use strict";

module.exports = {
    mount(chewie, helper, cb) {
        this.helper = helper;
        this.lastRunningRadio = null;
        return cb();
    }
};
