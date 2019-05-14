"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var elements_1 = require("../react-inspector/elements");
var devtools_parser_1 = require("../devtools-parser");
var Formatted = /** @class */ (function (_super) {
    __extends(Formatted, _super);
    function Formatted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Formatted.prototype.render = function () {
        return (React.createElement(elements_1.Root, { "data-type": "formatted", dangerouslySetInnerHTML: {
                __html: devtools_parser_1["default"](this.props.data || [])
            } }));
    };
    return Formatted;
}(React.PureComponent));
exports["default"] = Formatted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvRm9ybWF0dGVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFDOUIsd0RBQWtEO0FBRWxELHNEQUF1QztBQU12QztJQUF3Qiw2QkFBK0I7SUFBdkQ7O0lBV0EsQ0FBQztJQVZDLDBCQUFNLEdBQU47UUFDRSxPQUFPLENBQ0wsb0JBQUMsZUFBSSxpQkFDTyxXQUFXLEVBQ3JCLHVCQUF1QixFQUFFO2dCQUN2QixNQUFNLEVBQUUsNEJBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDdEMsR0FDRCxDQUNILENBQUE7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBd0IsS0FBSyxDQUFDLGFBQWEsR0FXMUM7QUFFRCxxQkFBZSxTQUFTLENBQUEifQ==