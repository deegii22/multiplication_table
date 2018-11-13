'use strict';

const assert = require('assert');
const primes = require('./primes');

describe('Multiplication table for prime primes', function() {
    describe('#isPrimeNumber()', function() {
        it('should return if passed value is prime number or not', function(){
            assert.equal(primes.isPrimeNumber(5), true);
            assert.equal(primes.isPrimeNumber(17), true);
            assert.equal(primes.isPrimeNumber(18), false);
        });
    });

    describe('#products()', function() {
        it('should return first row of table which is first 10 prime number', function(){
            assert.deepEqual(primes.products()[0], ['',2,3,5,7,11,13,17,19,23,29]);
        });

        it('should return size of products of first 10 prime number with prime numbers', function(){
            assert.equal(primes.products().length, 11);
        });

        it('should return products of first 10 prime number', function(){
            assert.deepEqual(primes.products(),  [['',2,3,5,7,11,13,17,19,23,29],[2,4,6,10,14,22,26,34,38,46,58],[3,6,9,15,21,33,39,51,57,69,87],[5,10,15,25,35,55,65,85,95,115,145],[7,14,21,35,49,77,91,119,133,161,203],[11,22,33,55,77,121,143,187,209,253,319],[13,26,39,65,91,143,169,221,247,299,377],[17,34,51,85,119,187,221,289,323,391,493],[19,38,57,95,133,209,247,323,361,437,551],[23,46,69,115,161,253,299,391,437,529,667],[29,58,87,145,203,319,377,493,551,667,841]]);
        });
    });

    describe('#printNumbers()', function() {
        it('should return multiplication table of passed numbers', function(){
            assert.equal(primes.printNumbers([ [ 'N', 2, 3, 5 ],[ 2, 4, 6, 10 ],[ 3, 6, 9, 15 ],[ 5, 10, 15, 25 ] ]),  ' N  2  3  5 \n 2  4  6 10 \n 3  6  9 15 \n 5 10 15 25 \n');
        });
    });
});
