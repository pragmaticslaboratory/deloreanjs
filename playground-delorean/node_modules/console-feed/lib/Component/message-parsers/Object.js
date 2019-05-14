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
var emotion_theming_1 = require("emotion-theming");
var elements_1 = require("../react-inspector/elements");
var Linkify = require("linkifyjs/react");
var react_inspector_1 = require("../react-inspector");
var ObjectTree = /** @class */ (function (_super) {
    __extends(ObjectTree, _super);
    function ObjectTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectTree.prototype.render = function () {
        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
        return log.data.map(function (message, i) {
            if (typeof message === 'string') {
                var string = !quoted && message.length ? (message + " ") : (React.createElement("span", null,
                    React.createElement("span", null, "\""),
                    React.createElement("span", { style: {
                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
                        } }, message),
                    React.createElement("span", null, "\" ")));
                return (React.createElement(elements_1.Root, { "data-type": "string", key: i },
                    React.createElement(Linkify, null, string)));
            }
            return React.createElement(react_inspector_1["default"], { data: message, key: i });
        });
    };
    return ObjectTree;
}(React.PureComponent));
exports["default"] = emotion_theming_1.withTheme(ObjectTree);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0NvbXBvbmVudC9tZXNzYWdlLXBhcnNlcnMvT2JqZWN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQTJDO0FBQzNDLHdEQUFrRDtBQUVsRCx5Q0FBMEM7QUFFMUMsc0RBQTBDO0FBUTFDO0lBQXlCLDhCQUErQjtJQUF4RDs7SUFnQ0EsQ0FBQztJQS9CQywyQkFBTSxHQUFOO1FBQ1EsSUFBQSxlQUFtQyxFQUFqQyxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsWUFBRyxDQUFlO1FBRXpDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFZLEVBQUUsQ0FBUztZQUMxQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBTSxNQUFNLEdBQ1YsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDdkIsT0FBTyxNQUFHLENBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FDRjtvQkFDRSx1Q0FBYztvQkFDZCw4QkFDRSxLQUFLLEVBQUU7NEJBQ0wsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCO3lCQUM5QyxJQUNBLE9BQU8sQ0FDSDtvQkFDUCx3Q0FBZSxDQUNWLENBQ1IsQ0FBQTtnQkFFSCxPQUFPLENBQ0wsb0JBQUMsZUFBSSxpQkFBVyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUM7b0JBQzdCLG9CQUFDLE9BQU8sUUFBRSxNQUFNLENBQVcsQ0FDdEIsQ0FDUixDQUFBO2FBQ0Y7WUFFRCxPQUFPLG9CQUFDLDRCQUFTLElBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQUE7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBaENELENBQXlCLEtBQUssQ0FBQyxhQUFhLEdBZ0MzQztBQUVELHFCQUFlLDJCQUFTLENBQUMsVUFBVSxDQUFDLENBQUEifQ==