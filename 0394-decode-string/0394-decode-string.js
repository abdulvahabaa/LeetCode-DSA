/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let countStack = [];
    let stringStack = [];
    let currStr = "";
    let currNum = 0;

    for (let ch of s) {
        if (!isNaN(ch)) currNum = currNum * 10 + Number(ch);
        else if (ch === "[") {
            countStack.push(currNum);
            stringStack.push(currStr);
            currNum = 0;
            currStr = "";
        } else if (ch === "]") {
            let repeat = countStack.pop();
            currStr = stringStack.pop() + currStr.repeat(repeat);
        } else currStr += ch;
    }

    return currStr;
};