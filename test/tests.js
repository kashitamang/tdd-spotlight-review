// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    renderDogLI,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('should return the with exclamation points', (expect) => {
    const string = 'bunny';

    const expected = 'bunny!!!';

    const actual = addExclamationPoints(string);

    expect.equal(actual, expected);
});

test('should multiple by seven', (expect) => {
    const num = 5;

    const expected = 35;

    const actual = multiplyBySeven(num);

    expect.equal(actual, expected);
});

skip('should return dog name in an li', (expect) => {
    const dog = { name: 'Benny', age: 6 };

    const expected = '<li>Benny</li>';

    const actual = renderDogLI(dog);

    expect.equal(actual, expected);
});

test('should multiple by 12 then /2', (expect) => {
    const num = 4;

    const expected = 24;

    const actual = multiplyBy12ThenHalve(num);

    expect.equal(actual, expected);
});
