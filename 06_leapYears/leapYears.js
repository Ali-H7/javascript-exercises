const leapYears = function(year) {
    let divideBy4 = year / 4;
    let divideBy100 = year / 100;
    let divideBy400 = year / 400;

    if (Number.isInteger(divideBy4) && !Number.isInteger(divideBy100) || Number.isInteger(divideBy400)) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
