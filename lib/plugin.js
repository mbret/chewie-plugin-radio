"use strict";

module.exports = {
    constructor(chewie, helper) {
        this.chewie = chewie;
        // like chewie, it may be useful to have access to helper inside the modules
        this.helper = helper;
        this.lastRunningRadio = null;
    }
};
