"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
exports.initialState = {
    timings: {},
    count: {}
};
exports["default"] = (function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'COUNT': {
            var times = state.count[action.name] || 0;
            return __assign({}, state, { count: __assign({}, state.count, (_a = {}, _a[action.name] = times + 1, _a)) });
        }
        case 'TIME_START': {
            return __assign({}, state, { timings: __assign({}, state.timings, (_b = {}, _b[action.name] = {
                    start: performance.now() || +new Date()
                }, _b)) });
        }
        case 'TIME_END': {
            var timing = state.timings[action.name];
            var end = performance.now() || +new Date();
            var start = timing.start;
            var time = end - start;
            return __assign({}, state, { timings: __assign({}, state.timings, (_c = {}, _c[action.name] = __assign({}, timing, { end: end,
                    time: time }), _c)) });
        }
        default: {
            return state;
        }
    }
    var _a, _b, _c;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsc0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBQ2xDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1osSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRTNDLG9CQUNLLEtBQUssSUFDUixLQUFLLGVBQ0EsS0FBSyxDQUFDLEtBQUssZUFDYixNQUFNLENBQUMsSUFBSSxJQUFHLEtBQUssR0FBRyxDQUFDLFVBRTNCO1NBQ0Y7UUFFRCxLQUFLLFlBQVksQ0FBQyxDQUFDO1lBQ2pCLG9CQUNLLEtBQUssSUFDUixPQUFPLGVBQ0YsS0FBSyxDQUFDLE9BQU8sZUFDZixNQUFNLENBQUMsSUFBSSxJQUFHO29CQUNiLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtpQkFDeEMsVUFFSjtTQUNGO1FBRUQsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNmLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXpDLElBQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUE7WUFDcEMsSUFBQSxvQkFBSyxDQUFXO1lBRXhCLElBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUE7WUFFeEIsb0JBQ0ssS0FBSyxJQUNSLE9BQU8sZUFDRixLQUFLLENBQUMsT0FBTyxlQUNmLE1BQU0sQ0FBQyxJQUFJLGlCQUNQLE1BQU0sSUFDVCxHQUFHLEtBQUE7b0JBQ0gsSUFBSSxNQUFBLGFBR1Q7U0FDRjtRQUVELE9BQU8sQ0FBQyxDQUFDO1lBQ1AsT0FBTyxLQUFLLENBQUE7U0FDYjtLQUNGOztBQUNILENBQUMsRUFBQSJ9