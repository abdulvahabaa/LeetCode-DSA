/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const mapPtoW = new Map();
    const mapWtoP = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if ((mapPtoW.has(p) && mapPtoW.get(p) !== w) ||
            (mapWtoP.has(w) && mapWtoP.get(w) !== p)) {
        return false;
        }

        mapPtoW.set(p, w);
        mapWtoP.set(w, p);
    }

    return true;
};