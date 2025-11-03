
var num = 2.52458;
var result = Math.floor(num); // turn into minumum integer value;
var result2 = Math.ceil(num); // turn into maximum integer value;
var result3 = Math.round(num); // tunr a floating number into round-figure;
console.log(result, result2, result3);


var dice = Math.random() * 10; // will show random number within number 10;
console.log(dice);


var randomNum = Math.random() * 10;
var output = Math.round(randomNum); // will show random number(round figure) within number 10;

console.log(output);


//---------------usgin for-loop------------

for(var i = 0; i < 10; i++){
    var randomNum = Math.random() * 10;
    var output = Math.round(randomNum); // will show random number(round figure) within number 10;

    console.log(output);
}
