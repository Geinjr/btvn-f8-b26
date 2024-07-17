Object.prototype.getCurrency = function (currencyVN) {
    var numberString = this.toString();
    var digits = numberString.split("").reverse();

    var groupedArrays = [];

    for (var i = 0; i < digits.length; i += 3) {
        var subArray = digits.slice(i, i + 3);
        groupedArrays.push(subArray.reverse().join(""));
    }

    var resultString = groupedArrays.reverse().join(",");
    return resultString + " " + currencyVN;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = "12000000";
console.log(price2.getCurrency("đ"));
