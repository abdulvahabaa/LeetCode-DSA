/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let R = [];
    let D = [];
    const n = senate.length;

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') R.push(i);
        else D.push(i);
    }

    while (R.length && D.length) {
        let r = R.shift();
        let d = D.shift();
        if (r < d) R.push(r + n);
        else D.push(d + n);
    }

    return R.length > 0 ? "Radiant" : "Dire";
};