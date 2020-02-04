var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
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
export default Case;
//# sourceMappingURL=Case.js.map