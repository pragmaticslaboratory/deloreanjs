"use strict";
exports.__esModule = true;
var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
})(Arithmetic || (Arithmetic = {}));
function isMinusZero(value) {
    return 1 / value === -Infinity;
}
exports["default"] = {
    type: 'Arithmetic',
    shouldTransform: function (type, value) {
        return (type === 'number' &&
            (value === Infinity || value === -Infinity || isMinusZero(value)));
    },
    toSerializable: function (value) {
        return value === Infinity
            ? Arithmetic.infinity
            : value === -Infinity
                ? Arithmetic.minusInfinity
                : Arithmetic.minusZero;
    },
    fromSerializable: function (data) {
        if (data === Arithmetic.infinity)
            return Infinity;
        if (data === Arithmetic.minusInfinity)
            return -Infinity;
        if (data === Arithmetic.minusZero)
            return -0;
        return data;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJpdGhtZXRpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vYXJpdGhtZXRpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNiLG1EQUFRLENBQUE7SUFDUiw2REFBYSxDQUFBO0lBQ2IscURBQVMsQ0FBQTtBQUNYLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQscUJBQXFCLEtBQUs7SUFDeEIsT0FBTyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFBO0FBQ2hDLENBQUM7QUFFRCxxQkFBZTtJQUNiLElBQUksRUFBRSxZQUFZO0lBQ2xCLGVBQWUsWUFBQyxJQUFTLEVBQUUsS0FBVTtRQUNuQyxPQUFPLENBQ0wsSUFBSSxLQUFLLFFBQVE7WUFDakIsQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbEUsQ0FBQTtJQUNILENBQUM7SUFDRCxjQUFjLEVBQWQsVUFBZSxLQUFLO1FBQ2xCLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDdkIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBQ3JCLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxRQUFRO2dCQUNuQixDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWE7Z0JBQzFCLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO0lBQzVCLENBQUM7SUFDRCxnQkFBZ0IsWUFBQyxJQUFnQjtRQUMvQixJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsUUFBUTtZQUFFLE9BQU8sUUFBUSxDQUFBO1FBQ2pELElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxhQUFhO1lBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQTtRQUN2RCxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFFNUMsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0YsQ0FBQSJ9