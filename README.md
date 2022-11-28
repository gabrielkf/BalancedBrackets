## What is it
Exports a function which evaluates a string made of brackets, e.g. the characters ()[]{} and returns true if the brackets are balanced, or false otherwise.

## Usage
The entrypoint (src/main.js) can be run with node.js and an additional argument, the string to be evaluated:
```
node [DIRECTORY]/src/main.js '(}[])]'
```

It will print a message with the result of the evaluation, or a usage message if no string is provided.

## Unit tests
The function is unit tested with Jest against some test cases.
To run the tests, install the dependencies and run the "test" script:
```
yarn test
```