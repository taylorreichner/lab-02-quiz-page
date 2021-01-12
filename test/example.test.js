// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsANo, countsAsAYes } from "../ultis.js";

const test = QUnit.test;



test('it should return yes when Y is the first letter of the word', (expect) =>
{
    const expected = true;

    const actual = countsAsAYes('YESSSS');
    expect.equal(actual, expected);
});

test('it should return yes when N is the first letter of the word', (expect) =>
{
    const expected = true;

    const actual = countsAsANo('nope');
    expect.equal(actual, expected);

});
