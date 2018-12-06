"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = debounce;
var DEFAULT_TIMEOUT = 200;

function debounce() {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TIMEOUT;

    var map = {};
    var func = function func(id, cb, params) {
        if (typeof id == "function") {
            params = cb;
            cb = id;
            id = undefined;
        }
        clearTimeout(map[id]);
        map[id] = setTimeout(function () {
            cb(params);
        }, timeout);
    };
    func.stop = function (id) {
        clearTimeout(map[id]);
    };
    return func;
}