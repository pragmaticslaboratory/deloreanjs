"use strict";
exports.__esModule = true;
var state_1 = require("../../store/state");
var dispatch_1 = require("../../store/dispatch");
var actions_1 = require("../../store/actions");
function start(label) {
    dispatch_1["default"](actions_1.timeStart(label));
}
exports.start = start;
function stop(label) {
    var timing = state_1.state.timings[label];
    if (timing && !timing.end) {
        dispatch_1["default"](actions_1.timeEnd(label));
        var time = state_1.state.timings[label].time;
        return {
            method: 'log',
            data: [label + ": " + time + "ms"]
        };
    }
    return {
        method: 'warn',
        data: ["Timer '" + label + "' does not exist"]
    };
}
exports.stop = stop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0hvb2svcGFyc2UvbWV0aG9kcy90aW1pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFDekMsaURBQTJDO0FBQzNDLCtDQUF3RDtBQUV4RCxlQUFzQixLQUFhO0lBQ2pDLHFCQUFRLENBQUMsbUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzVCLENBQUM7QUFGRCxzQkFFQztBQUVELGNBQXFCLEtBQWE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNuQyxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDekIscUJBQVEsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7UUFDaEIsSUFBQSx3Q0FBSSxDQUF5QjtRQUVyQyxPQUFPO1lBQ0wsTUFBTSxFQUFFLEtBQUs7WUFDYixJQUFJLEVBQUUsQ0FBSSxLQUFLLFVBQUssSUFBSSxPQUFJLENBQUM7U0FDOUIsQ0FBQTtLQUNGO0lBQ0QsT0FBTztRQUNMLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLENBQUMsWUFBVSxLQUFLLHFCQUFrQixDQUFDO0tBQzFDLENBQUE7QUFDSCxDQUFDO0FBZkQsb0JBZUMifQ==