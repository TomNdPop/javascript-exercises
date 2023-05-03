const sumAll = function(min, max) {
    result=0;
    if(typeof(min) != 'number'||typeof(max)!='number'){
        return 'ERROR'
    }else if(min > 0 && max > 0){
        if(min<max){
            for(var i = min;i<=max;i++){
                result+=i;
            }
        }else if(min>max){
            for(var i = max;i<=min;i++){
                result+=i;
            }
        }
    }else if(min < 0 || max < 0){
        return 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
