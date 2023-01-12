// IMPORT MODULES under test here:
import {
    myFunction,
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    renderDogLI,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting,
    getSecondItem,
    getLastItem,
    renderDogDiv,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

test('should return the with exclamation points', (expect) => {
    const string = 'bunny rabbit';

    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints(string);

    expect.equal(actual, expected);
});

test('should multiple by seven', (expect) => {
    const num = 4;

    const expected = 28;

    const actual = multiplyBySeven(num);

    expect.equal(actual, expected);
});

test('should return dog name in an li', (expect) => {
    const dog = { name: 'Benny', age: 6 };

    const expected = '<li>Benny</li>';

    const actual = renderDogLI(dog);

    expect.equal(actual.outerHTML, expected);
});

test('should multiple by 12 then /2', (expect) => {
    const num = 4;

    const expected = 24;

    const actual = multiplyBy12ThenHalve(num);

    expect.equal(actual, expected);
});

test('should take in 3 numbers', (expect) => {
    const num1 = 8;
    const num2 = 4;
    const num3 = 5;

    const expected = 10;

    const actual = divideThenMultiply(num1, num2, num3);

    expect.equal(actual, expected);
});

test('returns an array', (expect) => {
    const num1 = 8;
    const num2 = 4;
    const num3 = 5;

    const expected = [8, 4, 5];

    const actual = returnAsAnArray(num1, num2, num3);

    expect.deepEqual(actual, expected);
});

test('returns as a string', (expect) => {
    const num1 = 8;
    const num2 = 4;
    const num3 = 5;

    const expected = '845';

    const actual = returnAsAString(num1, num2, num3);

    expect.deepEqual(actual, expected);
});

test('makeLuckyGreetings', (expect) => {
    const num1 = 8;
    const num2 = 4;

    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(num1, num2);

    expect.deepEqual(actual, expected);
});

test('gets second item', (expect) => {
    const arr = ['kiwi', 'apple', 'orange', 'plum'];

    const expected = 'apple';

    const actual = getSecondItem(arr);

    expect.deepEqual(actual, expected);
});

test('gets last item', (expect) => {
    const arr = ['kiwi', 'apple', 'orange', 'plum'];

    const expected = 'plum';

    const actual = getLastItem(arr);

    expect.deepEqual(actual, expected);
});

test('render dog div', (expect) => {
    const dog = { name: 'Benny', age: 6 };

    const expected = '<div><h1>Benny</h1><p>Benny is 6 years old</p></div>';

    const actual = renderDogDiv(dog);

    expect.equal(actual.outerHTML, expected);
});
