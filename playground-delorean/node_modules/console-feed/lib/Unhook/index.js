"use strict";
exports.__esModule = true;
/**
 * Unhook a console constructor and restore back the Native methods
 * @argument console The Console constructor to Hook
 */
function Unhook(console) {
    if (console.feed) {
        for (var _i = 0, _a = Object.keys(console.feed.pointers); _i < _a.length; _i++) {
            var method = _a[_i];
            console[method] = console.feed.pointers[method];
        }
        return delete console.feed;
    }
    else {
        return false;
    }
}
exports["default"] = Unhook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVW5ob29rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsZ0JBQWdCLE9BQXNCO0lBQ3BDLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtRQUNoQixLQUFxQixVQUFrQyxFQUFsQyxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBbEMsY0FBa0MsRUFBbEMsSUFBa0M7WUFBbEQsSUFBTSxNQUFNLFNBQUE7WUFDZixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDaEQ7UUFDRCxPQUFPLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQTtLQUMzQjtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUE7S0FDYjtBQUNILENBQUM7QUFFRCxxQkFBZSxNQUFNLENBQUEifQ==