'use strict';

const primes = require('./primes');

var productsOfPrimes = primes.products();
var result = primes.printNumbers(productsOfPrimes); 

process.stdout.write(result);