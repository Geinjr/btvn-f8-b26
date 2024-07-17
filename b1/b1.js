function sum(...numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") {
            return "Giá trị không hợp lệ";
        }
    }

    return numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, "2", 3, 4));
