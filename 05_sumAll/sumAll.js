const sumAll = function(firstNum, lastNum) {
    let smallNum = 0;
    let bigNum = 0;
    let sumAll = 0

    if (firstNum < 0 || lastNum < 0) {
        return "ERROR";
    }

    if (firstNum > lastNum) {
        smallNum = lastNum;
        bigNum = firstNum;
    } else {
        smallNum = firstNum;
        bigNum = lastNum;
    }

    for (let init = smallNum; init <= bigNum; init++) {
        sumAll += init;
    }

    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
