"use strict";

module.exports = {

    mount: function(helper, cb) {
        helper.shared.lastRunningRadio = null;
        return cb();
    },

    unmount: function(done) {
        console.log("zblz");
        // console.log("coucou");
    }
};