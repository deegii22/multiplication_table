'use strict';

// function to check if passed value is prime number or not.
exports.isPrimeNumber = function(n){

    if (typeof n !== 'number' || n % 1 !== 0 || n <= 0) {
        throw new Error("You must enter a positive integer")
    }

    if(n < 2) return false;

    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

// function that returns products of first 10 prime number. 
exports.products = function(){

    // can change this value to N instead of 10. 
    var num = 10;

    var i = 3;
    var j = 2;

    // 2d array to store products of prime numbers.
    var values = new Array(num+1).fill('').map(n => new Array(num+1).fill(''));

    // initial value of array because finding prime number is starts with 3.
    values[0][1] = values[1][0] = 2;
    values[1][1] = 4;

    while(j <= num){
        if(exports.isPrimeNumber(i)){
            values[j][0] = values[0][j] = i;

            for(let k = 1; k <= j; k++){
                values[j][k] = values[k][j] = values[k][0] * i;
            }

            j++;
        }
        i += 2;
    }
    
    return values;
}


// function that prints table of passed products.
exports.printNumbers = function(values){

    var res = '';
    var lastNum = values.length-1;

    // variable that calculates most long number of passed arrays.
    var max = values[lastNum][values[lastNum-1].length-1].toString().length;

    for(let i = 0; i < values.length; i++){
        for(let j = 0; j < values[i].length; j++){

            // padding size of number
            var diff = max - values[i][j].toString().length;
            for(let k = 0; k < diff; k++){
                res += ' '; 
            }
            res += values[i][j] + ' '
        }
        res += '\n';
    }
    
    return res;
}