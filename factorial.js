// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
//--------------------------------------------

// var factorial = 1;

// for(var i = 1; i<=10; i++){

//     factorial = factorial*i;    
//     console.log(i, factorial);
// }

//----------------using function---------------

// function factorial(n){
//     var factorial = 1;
//     for( var i = 1; i <= n; i++){
//         factorial = factorial*i;
//     }
//     return factorial;
// }

// var result = factorial(10)
// console.log(result);

//------------------while loop-----------------

// var i = 1;
// var factorial = 1;
// while( i <= 10){
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++;
// }

//-----------using while loop and function---------

// function factorial(n){
//     var i =1;
//     var factorial = 1;
//     while(i <= n){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var result = factorial(10)
// console.log(result);

//-----------------recursive--------------------

// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 7! = (7-1)!*7
// n! = (n-1)!*n

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return factorial(n-1) * n;
    }
}

var result = factorial(10)
console.log(result);
