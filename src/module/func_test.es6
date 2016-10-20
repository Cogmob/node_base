const test = require('tape');
const func = require('./func');

test('test1', t => {
    t.plan(1);
    var res = func();
    t.deepEqual([1, 2], res);
});
