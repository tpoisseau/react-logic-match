export default function Match(_a) {
    var _b = _a.condition, condition = _b === void 0 ? false : _b, _c = _a.fallback, fallback = _c === void 0 ? null : _c, children = _a.children;
    if (condition)
        return children;
    return fallback;
}
//# sourceMappingURL=Match.js.map