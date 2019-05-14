"use strict";
exports.__esModule = true;
var theme_1 = require("./theme");
/**
 * Return themed log-method style
 * @param style The style
 * @param type The method
 */
var Themed = function (style, method, styles) {
    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
        styles["LOG_" + style.toUpperCase()];
};
/**
 * console-feed
 */
exports.Root = theme_1["default"]('div')({
    wordBreak: 'break-word'
});
/**
 * console-message
 */
exports.Message = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        position: 'relative',
        display: 'flex',
        color: Themed('color', method, styles),
        backgroundColor: Themed('background', method, styles),
        borderTop: "1px solid " + Themed('border', method, styles),
        borderBottom: "1px solid " + Themed('border', method, styles),
        marginTop: -1,
        marginBottom: +/^warn|error$/.test(method),
        paddingLeft: 10,
        boxSizing: 'border-box',
        '& *': {
            verticalAlign: 'top',
            boxSizing: 'border-box',
            fontFamily: styles.BASE_FONT_FAMILY,
            whiteSpace: 'pre-wrap',
            fontSize: styles.BASE_FONT_SIZE
        },
        '& a': {
            color: 'rgb(177, 177, 177)'
        }
    });
});
/**
 * message-icon
 */
exports.Icon = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        width: styles.LOG_ICON_WIDTH,
        height: styles.LOG_ICON_HEIGHT,
        backgroundImage: Themed('icon', method, styles),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
    });
});
/**
 * console-content
 */
exports.Content = theme_1["default"]('div')(function (_a) {
    var _b = _a.theme, styles = _b.styles, method = _b.method;
    return ({
        clear: 'right',
        position: 'relative',
        padding: styles.PADDING,
        marginLeft: 15,
        minHeight: 18,
        flex: 'auto',
        width: 'calc(100% - 15px)'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ29tcG9uZW50L2VsZW1lbnRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUE0QjtBQUc1Qjs7OztHQUlHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQU07SUFDbkQsT0FBQSxNQUFNLENBQUMsU0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLFNBQUksS0FBSyxDQUFDLFdBQVcsRUFBSSxDQUFDO1FBQzVELE1BQU0sQ0FBQyxTQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUksQ0FBQztBQURwQyxDQUNvQyxDQUFBO0FBTXRDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxTQUFTLEVBQUUsWUFBWTtDQUN4QixDQUFDLENBQUE7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLGtCQUFNLENBQWEsS0FBSyxDQUFDLENBQzlDLFVBQUMsRUFBb0M7UUFBbEMsYUFBeUIsRUFBaEIsa0JBQU0sRUFBRSxrQkFBTTtJQUFnQixPQUFBLENBQUM7UUFDekMsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ3RDLGVBQWUsRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDckQsU0FBUyxFQUFFLGVBQWEsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFHO1FBQzFELFlBQVksRUFBRSxlQUFhLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRztRQUM3RCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUMsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsWUFBWTtRQUN2QixLQUFLLEVBQUU7WUFDTCxhQUFhLEVBQUUsS0FBSztZQUNwQixTQUFTLEVBQUUsWUFBWTtZQUN2QixVQUFVLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtZQUNuQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLGNBQWM7U0FDaEM7UUFDRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsb0JBQW9CO1NBQzVCO0tBQ0YsQ0FBQztBQXJCd0MsQ0FxQnhDLENBQ0gsQ0FBQTtBQUVEOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsa0JBQU0sQ0FBYSxLQUFLLENBQUMsQ0FDM0MsVUFBQyxFQUFvQztRQUFsQyxhQUF5QixFQUFoQixrQkFBTSxFQUFFLGtCQUFNO0lBQWdCLE9BQUEsQ0FBQztRQUN6QyxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7UUFDNUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxlQUFlO1FBQzlCLGVBQWUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7UUFDL0MsZ0JBQWdCLEVBQUUsV0FBVztRQUM3QixrQkFBa0IsRUFBRSxTQUFTO0tBQzlCLENBQUM7QUFOd0MsQ0FNeEMsQ0FDSCxDQUFBO0FBRUQ7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxrQkFBTSxDQUFhLEtBQUssQ0FBQyxDQUM5QyxVQUFDLEVBQW9DO1FBQWxDLGFBQXlCLEVBQWhCLGtCQUFNLEVBQUUsa0JBQU07SUFBZ0IsT0FBQSxDQUFDO1FBQ3pDLEtBQUssRUFBRSxPQUFPO1FBQ2QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1FBQ3ZCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxtQkFBbUI7S0FDM0IsQ0FBQztBQVJ3QyxDQVF4QyxDQUNILENBQUEifQ==