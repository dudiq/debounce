const DEFAULT_TIMEOUT = 200;

export default function debounce(timeout = DEFAULT_TIMEOUT) {
    const map = {};
    const func = function (id, cb, params) {
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
