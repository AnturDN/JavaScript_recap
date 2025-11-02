

// var n = 100;
// for(i = 2; i < n; i++){
    
//     if( n%i == 0){
//         console.log("Not a prime number");
//         break;
//     }
//     else{
//         console.log("Your number is a prime number");
//     }
// }

//-----------------using function----------------

function isPrime(n){
    for(i = 2; i < n; i++){
    
        if( n%i == 0){
            return 'Not a prime number;'
        }
    }
    return "Your number is a prime number"
}

var result = isPrime(17)
console.log(result);
