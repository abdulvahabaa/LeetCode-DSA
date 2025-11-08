/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const r = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (r < -(2**31) || r > (2**31 - 1)) ? 0 : r;
};