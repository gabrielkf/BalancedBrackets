const areBracketsBalanced = require('../src/areBracketsBalanced');

const TEST_CASES = [
    { bracketString: '(){}[]', isValid: true },
    { bracketString: '[{()}](){}', isValid: true },
    { bracketString: '[]{()', isValid: false },
    { bracketString: '[{)]', isValid: false },
    { bracketString: '[()]{}{[()()]()}', isValid: true },
    { bracketString: '[(])', isValid: false },
];

describe('areBracketsBalanced function', () => {
    test.each(TEST_CASES)(
        '$bracketString is valid: $isValid',
        ({ bracketString, isValid }) => {
            expect(areBracketsBalanced(bracketString)).toBe(isValid);
        }
    );
});
