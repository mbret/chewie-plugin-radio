let myPackage = require("./package.json");

module.exports = {
    name: myPackage.name,
    description: myPackage.description,
    version: myPackage.version,
    author: myPackage.author,
    pluginInstance: "./lib/plugin.js",
    modules: [
        {
            id: "startRadio",
            module: "./lib/module.js",
            name: 'Start radio',
            type: 'task',
            optionsConfig: [
                {
                    name: 'radioName',
                    label: 'Radio',
                    type: 'select',
                    choices: [
                        {
                            label: "NRJ",
                            value: "nrj"
                        },
                        {
                            label: "France Inter",
                            value: "franceInter"
                        }
                    ],
                    required: true
                },
            ],
        },
        {
            id: "stopRadio",
            module: "./lib/module.js",
            name: 'Stop radio',
            type: 'task',
            optionsConfig: [],
        }
    ]
};