const removeFromArray = function(arr, remove) {
    const newArr = arr.filter(item => item !== remove);
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
