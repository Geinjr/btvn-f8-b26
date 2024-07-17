Array.prototype.reduce2 = function (callback, initialValue) {
    if (typeof callback !== "function") {
        return;
    }

    var accumulator = initialValue !== undefined ? initialValue : this[0];

    for (var i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce2(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
