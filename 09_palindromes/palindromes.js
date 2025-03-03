const palindromes = function (str) {
    const palin = str
        .replaceAll("!", "")
        .replaceAll(",", "")
        .replaceAll(".", "")
        .replaceAll(" ", "")
        .toLowerCase();
    for (let i = 0; i < palin.length; i++) {
        if (palin[i] !== palin[palin.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
