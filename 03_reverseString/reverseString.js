const reverseString = function(string) {
    var reverseArray = []
    var stringArray = string.split('');
    for(var i = stringArray.length - 1; i >= 0; i--){
        reverseArray.push(stringArray[i]);
    }
    var newstring = reverseArray.join('');
    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
