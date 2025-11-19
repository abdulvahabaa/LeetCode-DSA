/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0, read = 0;
    while (read < chars.length) {
        let char = chars[read], count = 0;
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }
        chars[write++] = char;
        if (count > 1) {
            for (let c of String(count)) {
                chars[write++] = c;
            }
        }
    }
    return write;
};