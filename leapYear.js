// const year = 2032;
// let remainder = year % 4;
// if(remainder == 0){
//     console.log("Your year is a leap year");
// }
// else{
//     console.log("Your year is not a leap year");
// }

//---------------using function--------------------------------------------------

function isLeapYear(year){
    const remainder = year % 4;

    if(remainder == 0){
        return true;
    }
    else{
        return false;
    }
}

// const check = isLeapYear(2000);
console.log(isLeapYear(2010));


