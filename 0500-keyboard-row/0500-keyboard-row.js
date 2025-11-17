/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");
    
    return words.filter(word => {
        const lower = word.toLowerCase();
        const first = lower[0];
        let row = row1.has(first) ? row1 : row2.has(first) ? row2 : row3;
        return [...lower].every(ch => row.has(ch));
    });
};