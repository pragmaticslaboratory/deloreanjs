"use strict";
exports.__esModule = true;
var Methods_1 = require("../definitions/Methods");
var parse_1 = require("./parse");
var Transform_1 = require("../Transform");
// import Construct from './construct'
/**
 * Hook a console constructor and forward messages to a callback
 * @argument console The Console constructor to Hook
 * @argument callback The callback to be called once a message is logged
 */
function Hook(console, callback, encode) {
    if (encode === void 0) { encode = true; }
    var TargetConsole = console;
    var Storage = {
        pointers: {},
        src: {
            npm: 'https://npmjs.com/package/console-feed',
            github: 'https://github.com/samdenty99/console-feed'
        }
    };
    var _loop_1 = function (method) {
        var NativeMethod = TargetConsole[method];
        // Override
        TargetConsole[method] = function () {
            // Pass back to native method
            NativeMethod.apply(this, arguments);
            // Parse arguments and send to transport
            var args = [].slice.call(arguments);
            // setTimeout to prevent lag
            setTimeout(function () {
                var parsed = parse_1["default"](method, args);
                if (parsed) {
                    var encoded = parsed;
                    if (encode) {
                        encoded = Transform_1.Encode(parsed);
                    }
                    callback(encoded, parsed);
                }
            });
        };
        // Store native methods
        Storage.pointers[method] = NativeMethod;
    };
    // Override console methods
    for (var _i = 0, Methods_2 = Methods_1["default"]; _i < Methods_2.length; _i++) {
        var method = Methods_2[_i];
        _loop_1(method);
    }
    TargetConsole.feed = Storage;
    return TargetConsole;
}
exports["default"] = Hook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvSG9vay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLGtEQUE0QztBQUU1QyxpQ0FBMkI7QUFFM0IsMENBQXFDO0FBQ3JDLHNDQUFzQztBQUV0Qzs7OztHQUlHO0FBQ0gsY0FDRSxPQUFnQixFQUNoQixRQUFrQixFQUNsQixNQUFhO0lBQWIsdUJBQUEsRUFBQSxhQUFhO0lBRWIsSUFBTSxhQUFhLEdBQUcsT0FBd0IsQ0FBQTtJQUM5QyxJQUFNLE9BQU8sR0FBWTtRQUN2QixRQUFRLEVBQUUsRUFBRTtRQUNaLEdBQUcsRUFBRTtZQUNILEdBQUcsRUFBRSx3Q0FBd0M7WUFDN0MsTUFBTSxFQUFFLDRDQUE0QztTQUNyRDtLQUNGLENBQUE7NEJBR1EsTUFBTTtRQUNiLElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUUxQyxXQUFXO1FBQ1gsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1lBQ3RCLDZCQUE2QjtZQUM3QixZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUVuQyx3Q0FBd0M7WUFDeEMsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFckMsNEJBQTRCO1lBQzVCLFVBQVUsQ0FBQztnQkFDVCxJQUFNLE1BQU0sR0FBRyxrQkFBSyxDQUFDLE1BQXdCLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQ3BELElBQUksTUFBTSxFQUFFO29CQUNWLElBQUksT0FBTyxHQUFZLE1BQWlCLENBQUE7b0JBQ3hDLElBQUksTUFBTSxFQUFFO3dCQUNWLE9BQU8sR0FBRyxrQkFBTSxDQUFDLE1BQU0sQ0FBWSxDQUFBO3FCQUNwQztvQkFDRCxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBRUQsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFBO0lBQ3pDLENBQUM7SUEzQkQsMkJBQTJCO0lBQzNCLEtBQW1CLFVBQU8sRUFBUCxZQUFBLG9CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQXJCLElBQUksTUFBTSxnQkFBQTtnQkFBTixNQUFNO0tBMEJkO0lBRUQsYUFBYSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7SUFFNUIsT0FBTyxhQUFhLENBQUE7QUFDdEIsQ0FBQztBQTlDRCwwQkE4Q0MifQ==