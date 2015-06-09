cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.vliesaputra.deviceinformation/www/deviceinformation.js",
        "id": "com.vliesaputra.deviceinformation.DeviceInformation",
        "clobbers": [
            "cordova.plugins.deviceInformation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.vliesaputra.deviceinformation": "1.0.1"
}
// BOTTOM OF METADATA
});