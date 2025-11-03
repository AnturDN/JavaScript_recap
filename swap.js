var a = 5;
var b = 7;
console.log("Before swap: A =", a,",", "B =", b);

var temp = a;
a = b;
b = temp;

console.log("After swap: A =", a,",", "B =", b);

var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;

console.log("After swap: X =", x,",", "Y =", y);

var p = 5;
var q = 7;

[p, q] = [q, p];

console.log("After swap: P =", p,",", "Q =", q);



