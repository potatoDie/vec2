import Vec2 from './vec2.js';

function testEquality(v, w, testname) {
    if (v.equalTo(w) === false) {
        console.log('Fail:' + testname);
    } else {
        console.log('Passed: ' + testname);
    }
}

let v1 = new Vec2(1, 3);
testEquality(v1, {x: 1, y: 3}, "Create Vec2 test");

v1 = new Vec2([1, 3]);
testEquality(v1, {x: 1, y: 3}, "Create Vec2 from array test");

let v2 = v1.add(new Vec2(5, -1));
testEquality(v2, new Vec2(6, 2), "Add test");

let v3 = Vec2.add(v1, new Vec2(9,100));
console.log(v1, v2, v3);

v1 = Vec2.multiply(new Vec2(3, -2), 3);
testEquality(v1, new Vec2(9, -6), "Scalar multiple of vector");