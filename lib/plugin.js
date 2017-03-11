"use strict";

class Plugin {
    constructor(chewie, helper) {
        this.chewie = chewie;
        this.helper = helper;
        // contain the last running start-radio-module instance.
        this.lastRunningRadio = null;
    }
}

module.exports = Plugin;
