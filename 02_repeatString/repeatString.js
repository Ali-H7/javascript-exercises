
const repeatString = function(word,num) {
    let string = ""
    if (Math.sign(num) == -1){
        string = "ERROR"
    } else
    for (let i = 0; i < num; i++) {
        string += word;
        
}
return string
}

// Do not edit below this line
module.exports = repeatString;


