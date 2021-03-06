'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function Match(_a) {
    var _b = _a.condition, condition = _b === void 0 ? false : _b, _c = _a.fallback, fallback = _c === void 0 ? null : _c, children = _a.children;
    if (condition) {
        if (typeof children === 'function')
            return children(condition);
        return children;
    }
    if (typeof fallback === 'function')
        return fallback(condition);
    return fallback;
}

exports.default = Match;
//# sourceMappingURL=Match.js.map
