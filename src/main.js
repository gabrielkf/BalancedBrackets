const areBracketsBalanced = require('./areBracketsBalanced');

const [, , bracketString] = process.argv;

if (!bracketString) {
    console.log(`
    No string was found to be evaluated.
    To execute the script to evaluate a brackets string, run "node src/main.js '<bracketString>'"
    To see test cases, run "yarn test".
    `);
    process.exit(0);
}

const isValid = areBracketsBalanced(bracketString);
console.log(`The provided brackets string is ${isValid ? 'VALID' : 'INVALID'}`);
