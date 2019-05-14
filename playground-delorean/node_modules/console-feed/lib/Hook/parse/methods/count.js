"use strict";
exports.__esModule = true;
var state_1 = require("../../store/state");
var dispatch_1 = require("../../store/dispatch");
var actions_1 = require("../../store/actions");
function increment(label) {
    dispatch_1["default"](actions_1.count(label));
    var times = state_1.state.count[label];
    return {
        method: 'log',
        data: [label + ": " + times]
    };
}
exports.increment = increment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvSG9vay9wYXJzZS9tZXRob2RzL2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXlDO0FBQ3pDLGlEQUEyQztBQUMzQywrQ0FBMkM7QUFFM0MsbUJBQTBCLEtBQWE7SUFDckMscUJBQVEsQ0FBQyxlQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN0QixJQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhDLE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxDQUFJLEtBQUssVUFBSyxLQUFPLENBQUM7S0FDN0IsQ0FBQTtBQUNILENBQUM7QUFSRCw4QkFRQyJ9