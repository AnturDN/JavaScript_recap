function addNumbers(num1, num2){
    var sum = 0
    for(var i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(5, 10, 15)
console.log(result);
 