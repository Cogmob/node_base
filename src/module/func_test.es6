const test = require('ava');
const func = require('./func');

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});
