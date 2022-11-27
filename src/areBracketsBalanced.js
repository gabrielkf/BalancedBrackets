const closing = {
    '(': ')',
    '[': ']',
    '{': '}',
};

/**
 * @param bracketsString string
 * @return boolean
 */
function areBracketsBalanced(bracketsString) {
    const size = bracketsString.length;
    const opened = [];

    for (let c = 0; c < size; c++) {
        let bracket = bracketsString[c];
        if (closing[bracket]) {
            opened.push(bracket);
        } else if (opened.length === 0) {
            return false;
        } else if (closing[opened.pop()] !== bracket) {
            return false;
        }
    }

    return opened.length === 0;
}

module.exports = areBracketsBalanced;
