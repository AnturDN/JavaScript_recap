

//-------ordinary way------

// var inch = 156

// var feet = inch/12;

// console.log(feet);

//-----------------------------------

//------standard way-------------

function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}

var feet1 = inchToFeet(156);
console.log(feet1);
var feet2 = inchToFeet(288);
console.log(feet2);

//---using array----
var myFeet = [156, 288, 364];
var myFeet = inchToFeet(myFeet[1])
console.log(myFeet);