const repeatString = function(string,num) {
    var result = '';
    if(num >= 0){
        for(var i = 0; i < num; i++){
            result += string;
        }
    }else if(num < 0){
        result = "ERROR"
    }
    return result;
    
};

// Do not edit below this line
module.exports = repeatString;
