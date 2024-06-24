const removeFromArray = function(array,...removeFromArray) {
        const newArray = Array.from(removeFromArray);
        const finalArray = array.filter(x=>!removeFromArray.includes(x));
        return finalArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
