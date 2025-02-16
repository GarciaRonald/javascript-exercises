const reverseString = function(string) {
    const toArr = [...string];
    const newArr = [];
    let newStr = "";
    for (const letter of toArr) {
        newArr.unshift(letter);
    }
    newStr = newArr.join("");
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
