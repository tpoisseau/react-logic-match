var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React from "react";
import Case from "./Case";
import Default from "./Default";
var SUPPORTED_TYPES = [Case, Default];
export default function Switch(props) {
    var e_1, _a;
    var value = props.value, children = props.children;
    var childs = React.Children.toArray(children);
    var defaultElement = undefined;
    var caseElementIndex = -1;
    try {
        for (var _b = __values(childs.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], element = _d[1];
            // @ts-ignore
            if (!SUPPORTED_TYPES.includes(element.type))
                continue;
            // @ts-ignore
            if (element.props.value === value)
                caseElementIndex = key;
            // @ts-ignore
            if (element.type === Default)
                defaultElement = element;
            if (defaultElement && caseElementIndex >= 0)
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (caseElementIndex >= 0)
        return children[caseElementIndex];
    if (defaultElement)
        return defaultElement;
    console.warn("Switch: no Case found and Default not provided");
    return null;
}
//# sourceMappingURL=Switch.js.map