/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    const count = (s) => {
        const freq = new Array(26).fill(0);
        for (let ch of s) freq[ch.charCodeAt(0) - 97]++;
        return freq;
    };

    const freq1 = count(word1);
    const freq2 = count(word2);

    for (let i = 0; i < 26; i++) {
        if ((freq1[i] === 0) !== (freq2[i] === 0)) return false;
    }

    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true;
};