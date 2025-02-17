const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    let userArr = args.shift()
    const removals = args;

    for (const remove of removals) {
        userArr = userArr.filter(item => item !== remove);
    }
    return userArr;
};

// Do not edit below this line
module.exports = removeFromArray;
