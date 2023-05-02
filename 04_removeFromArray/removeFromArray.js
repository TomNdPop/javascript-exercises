const removeFromArray = function(array, ...arg) {
    for(var i = array.length-1; i >=0; i--){
        for(var j = arg.length-1; j>=0; j--){
            if(array[i]===arg[j]){
                array.splice(i,1);
            } 
        }       
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
