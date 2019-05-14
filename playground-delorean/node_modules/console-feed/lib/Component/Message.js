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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var emotion_theming_1 = require("emotion-theming");
var elements_1 = require("./elements");
var Formatted_1 = require("./message-parsers/Formatted");
var Object_1 = require("./message-parsers/Object");
var Error_1 = require("./message-parsers/Error");
var ConsoleMessage = /** @class */ (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function (theme) { return (__assign({}, theme, { method: _this.props.log.method })); };
        return _this;
    }
    ConsoleMessage.prototype.render = function () {
        var log = this.props.log;
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Message, { "data-method": log.method },
                React.createElement(elements_1.Icon, null),
                React.createElement(elements_1.Content, null, this.getNode()))));
    };
    ConsoleMessage.prototype.getNode = function () {
        var log = this.props.log;
        // Error handling
        var error = this.typeCheck(log);
        if (error)
            return error;
        // Chrome formatting
        if (log.data.length > 0 &&
            typeof log.data[0] === 'string' &&
            log.data[0].indexOf('%') > -1) {
            return React.createElement(Formatted_1["default"], { data: log.data });
        }
        // Error panel
        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
            log.method === 'error') {
            return React.createElement(Error_1["default"], { log: log });
        }
        // Normal inspector
        var quoted = typeof log.data[0] !== 'string';
        return React.createElement(Object_1["default"], { log: log, quoted: quoted });
    };
    ConsoleMessage.prototype.typeCheck = function (log) {
        if (!log) {
            return (React.createElement(Formatted_1["default"], { data: [
                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        else if (!(log.data instanceof Array)) {
            return (React.createElement(Formatted_1["default"], { data: [
                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
                    'color: red',
                    'color: orange',
                    'color: cyan'
                ] }));
        }
        return false;
    };
    return ConsoleMessage;
}(React.PureComponent));
exports["default"] = ConsoleMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnQvTWVzc2FnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBOEI7QUFFOUIsbURBQStDO0FBRS9DLHVDQUFtRDtBQUVuRCx5REFBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGlEQUFnRDtBQUVoRDtJQUE2QixrQ0FBc0M7SUFBbkU7UUFBQSxxRUF5RUM7UUF4RUMsV0FBSyxHQUFHLFVBQUMsS0FBSyxJQUFLLE9BQUEsY0FDZCxLQUFLLElBQ1IsTUFBTSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFDN0IsRUFIaUIsQ0FHakIsQ0FBQTs7SUFxRUosQ0FBQztJQW5FQywrQkFBTSxHQUFOO1FBQ1UsSUFBQSxvQkFBRyxDQUFlO1FBQzFCLE9BQU8sQ0FDTCxvQkFBQywrQkFBYSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUM5QixvQkFBQyxrQkFBTyxtQkFBYyxHQUFHLENBQUMsTUFBTTtnQkFDOUIsb0JBQUMsZUFBSSxPQUFHO2dCQUNSLG9CQUFDLGtCQUFPLFFBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFXLENBQzNCLENBQ0ksQ0FDakIsQ0FBQTtJQUNILENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ1UsSUFBQSxvQkFBRyxDQUFlO1FBRTFCLGlCQUFpQjtRQUNqQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pDLElBQUksS0FBSztZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRXZCLG9CQUFvQjtRQUNwQixJQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVE7WUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzdCO1lBQ0EsT0FBTyxvQkFBQyxzQkFBUyxJQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFJLENBQUE7U0FDckM7UUFFRCxjQUFjO1FBQ2QsSUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBM0IsQ0FBMkIsQ0FBQztZQUN4RCxHQUFHLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFDdEI7WUFDQSxPQUFPLG9CQUFDLGtCQUFVLElBQUMsR0FBRyxFQUFFLEdBQUcsR0FBSSxDQUFBO1NBQ2hDO1FBRUQsbUJBQW1CO1FBQ25CLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUE7UUFDOUMsT0FBTyxvQkFBQyxtQkFBVSxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBSSxDQUFBO0lBQ2pELENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsR0FBUTtRQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxDQUNMLG9CQUFDLHNCQUFTLElBQ1IsSUFBSSxFQUFFO29CQUNKLGtFQUFnRSxPQUFPLEdBQUcseUNBQXNDO29CQUNoSCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZCxHQUNELENBQ0gsQ0FBQTtTQUNGO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLENBQ0wsb0JBQUMsc0JBQVMsSUFDUixJQUFJLEVBQUU7b0JBQ0osMEVBQTBFO29CQUMxRSxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtpQkFDZCxHQUNELENBQ0gsQ0FBQTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBekVELENBQTZCLEtBQUssQ0FBQyxhQUFhLEdBeUUvQztBQUVELHFCQUFlLGNBQWMsQ0FBQSJ9