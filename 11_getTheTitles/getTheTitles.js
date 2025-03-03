const getTheTitles = function(arr) {
    const titles = [];
    arr.map(book => {
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
