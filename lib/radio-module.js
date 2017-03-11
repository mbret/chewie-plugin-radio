'use strict';

let EventEmitter = require("events");
let config = require("./../config");

/**
 * Abstract class
 */
class RadioModule extends EventEmitter {

    /**
     * @param plugin
     * @param info
     */
    constructor(plugin, info) {
        super();
        this.info = info;
        this.player = null;
        this.plugin = plugin;
        this.helper = plugin.helper;
        this.config = config;
    }
}

module.exports = RadioModule;
