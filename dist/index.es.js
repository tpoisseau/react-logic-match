import React from 'react';

function Match(_a) {
    var _b = _a.condition, condition = _b === void 0 ? false : _b, _c = _a.fallback, fallback = _c === void 0 ? null : _c, children = _a.children;
    if (condition)
        return children;
    return fallback;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

var Case = /** @class */ (function (_super) {
    __extends(Case, _super);
    function Case() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Case.prototype.render = function () {
        return this.props.children;
    };
    return Case;
}(React.Component));

var Default = /** @class */ (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.render = function () {
        return this.props.children;
    };
    return Default;
}(React.Component));

var SUPPORTED_TYPES = [Case, Default];
function Switch(props) {
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

export { Case, Default, Match, Switch };
//# sourceMappingURL=index.es.js.map
