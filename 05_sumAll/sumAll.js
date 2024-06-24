const sumAll = function(sum1, sum2) {
    if (sum1 < 0 || sum2 < 0) return "ERROR"
    if (!Number.isInteger(sum1) || !Number.isInteger(sum2)) return "ERROR"
    let totalsum = 0;
    let start = Math.min(sum1, sum2);
    let end = Math.max(sum1, sum2);
    for (let i = start; i <=end; i++ ) {
        totalsum += i;
    }
    return totalsum;
}
// Do not edit below this line
module.exports = sumAll;


// take two sum numbers 
// identify the numbers between them and add them into a variable
// add all numbers together sum1 sum 2 and new var 
// return 