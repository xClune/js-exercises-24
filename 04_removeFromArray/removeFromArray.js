const removeFromArray = function(array, number) {
    newArray = [];
    for (n of array) {
        if (n != number) {
            newArray.push(n);
        }
    }return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
