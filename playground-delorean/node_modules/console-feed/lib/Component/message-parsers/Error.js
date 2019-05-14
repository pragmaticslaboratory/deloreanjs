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
var Linkify = require("linkifyjs/react");
function splitMessage(message) {
    var breakIndex = message.indexOf('\n');
    // consider that there can be line without a break
    if (breakIndex === -1) {
        return message;
    }
    return message.substr(0, breakIndex);
}
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorPanel.prototype.render = function () {
        var log = this.props.log;
        /* This checks for error logTypes and shortens the message in the console by wrapping
        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
        follow after that. This creates a nice collapsible error message */
        var otherErrorLines;
        var msgLine = log.data.join(' ');
        var firstLine = splitMessage(msgLine);
        var msgArray = msgLine.split('\n');
        if (msgArray.length > 1) {
            otherErrorLines = msgArray.slice(1);
        }
        if (!otherErrorLines) {
            return React.createElement(Linkify, null, log.data.join(' '));
        }
        return (React.createElement("details", null,
            React.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
            React.createElement(Linkify, null, otherErrorLines.join('\n\r'))));
    };
    return ErrorPanel;
}(React.PureComponent));
exports["default"] = ErrorPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L21lc3NhZ2UtcGFyc2Vycy9FcnJvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQThCO0FBRTlCLHlDQUEwQztBQU0xQyxzQkFBc0IsT0FBZTtJQUNuQyxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hDLGtEQUFrRDtJQUNsRCxJQUFJLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLE9BQU8sQ0FBQTtLQUNmO0lBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRUQ7SUFBeUIsOEJBQStCO0lBQXhEOztJQTJCQSxDQUFDO0lBMUJDLDJCQUFNLEdBQU47UUFDVSxJQUFBLG9CQUFHLENBQWU7UUFDMUI7OzJFQUVtRTtRQUNuRSxJQUFJLGVBQWUsQ0FBQTtRQUNuQixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQyxJQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixPQUFPLG9CQUFDLE9BQU8sUUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBVyxDQUFBO1NBQy9DO1FBRUQsT0FBTyxDQUNMO1lBQ0UsaUNBQVMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQ25ELFNBQVMsQ0FDRjtZQUNWLG9CQUFDLE9BQU8sUUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFXLENBQ3pDLENBQ1gsQ0FBQTtJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUEzQkQsQ0FBeUIsS0FBSyxDQUFDLGFBQWEsR0EyQjNDO0FBRUQscUJBQWUsVUFBVSxDQUFBIn0=