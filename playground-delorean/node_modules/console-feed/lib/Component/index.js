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
var default_1 = require("./theme/default");
var elements_1 = require("./elements");
var Message_1 = require("./Message");
// https://stackoverflow.com/a/48254637/4089357
var customStringify = function (v) {
    var cache = new Set();
    return JSON.stringify(v, function (key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our set
            cache.add(value);
        }
        return value;
    });
};
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.theme = function () { return ({
            variant: _this.props.variant || 'light',
            styles: __assign({}, default_1["default"](_this.props), _this.props.styles)
        }); };
        return _this;
    }
    Console.prototype.render = function () {
        var _a = this.props, _b = _a.filter, filter = _b === void 0 ? [] : _b, _c = _a.logs, logs = _c === void 0 ? [] : _c, searchKeywords = _a.searchKeywords, logFilter = _a.logFilter;
        var regex = new RegExp(searchKeywords);
        var filterFun = logFilter
            ? logFilter
            : function (log) { return regex.test(customStringify(log)); };
        // @ts-ignore
        logs = logs.filter(filterFun);
        return (React.createElement(emotion_theming_1.ThemeProvider, { theme: this.theme },
            React.createElement(elements_1.Root, null, logs.map(function (log, i) {
                // If the filter is defined and doesn't include the method
                var filtered = filter.length !== 0 &&
                    log.method &&
                    filter.indexOf(log.method) === -1;
                return filtered ? null : (React.createElement(Message_1["default"], { log: log, key: log.method + "-" + i }));
            }))));
    };
    return Console;
}(React.PureComponent));
exports["default"] = Console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZCQUE4QjtBQUM5QixtREFBK0M7QUFFL0MsMkNBQW9DO0FBRXBDLHVDQUFpQztBQUNqQyxxQ0FBK0I7QUFFL0IsK0NBQStDO0FBQy9DLElBQU0sZUFBZSxHQUFHLFVBQVMsQ0FBQztJQUNoQyxJQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO0lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSztRQUMxQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsd0NBQXdDO2dCQUN4QyxPQUFNO2FBQ1A7WUFDRCx5QkFBeUI7WUFDekIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNqQjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRDtJQUFzQiwyQkFBK0I7SUFBckQ7UUFBQSxxRUF1Q0M7UUF0Q0MsV0FBSyxHQUFHLGNBQU0sT0FBQSxDQUFDO1lBQ2IsT0FBTyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU87WUFDdEMsTUFBTSxlQUNELG9CQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDckI7U0FDRixDQUFDLEVBTlksQ0FNWixDQUFBOztJQWdDSixDQUFDO0lBOUJDLHdCQUFNLEdBQU47UUFDTSxJQUFBLGVBQWtFLEVBQWhFLGNBQVcsRUFBWCxnQ0FBVyxFQUFFLFlBQVMsRUFBVCw4QkFBUyxFQUFFLGtDQUFjLEVBQUUsd0JBQVMsQ0FBZTtRQUV0RSxJQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUV4QyxJQUFNLFNBQVMsR0FBRyxTQUFTO1lBQ3pCLENBQUMsQ0FBQyxTQUFTO1lBQ1gsQ0FBQyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQTtRQUUzQyxhQUFhO1FBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFN0IsT0FBTyxDQUNMLG9CQUFDLCtCQUFhLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzlCLG9CQUFDLGVBQUksUUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2YsMERBQTBEO2dCQUMxRCxJQUFNLFFBQVEsR0FDWixNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQ25CLEdBQUcsQ0FBQyxNQUFNO29CQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUVuQyxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUN2QixvQkFBQyxvQkFBTyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFLLEdBQUcsQ0FBQyxNQUFNLFNBQUksQ0FBRyxHQUFJLENBQ2pELENBQUE7WUFDSCxDQUFDLENBQUMsQ0FDRyxDQUNPLENBQ2pCLENBQUE7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUF2Q0QsQ0FBc0IsS0FBSyxDQUFDLGFBQWEsR0F1Q3hDO0FBRUQscUJBQWUsT0FBTyxDQUFBIn0=