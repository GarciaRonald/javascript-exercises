const fibonacci = function(num) {
    const int = parseInt(num);
    const fibby = [1, 1];
    if (int === 0) {
        return 0;
    } else if (int > 0) {
        for (let i = 2; i <= int; i++) {
            fibby.push(fibby[i - 2] + fibby[i - 1]);
        }
        return fibby[int - 1];
    } else if (int < 0) {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
