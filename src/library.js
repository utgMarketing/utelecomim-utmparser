import UtmParser from "./UtmParser";

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = UtmParser;
    } else {
        root.UtmParser = factory();
    }
}(window, function () {
    return UtmParser;
}));
