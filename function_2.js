
function evenify(num){
    if(num % 2 == 0){
        console.log(num, ": is even number");
    }
    else{
        console.log(num, ": is odd number");
    }
}


var nums = [5, 10, 15, 20, 25, 30]

for(var i = 0; i<nums.length; i++){
    var num = nums[i];
    //  if(num % 2 == 0){
    //     console.log(num, ": is even number");
    // }
    // else{
    //     console.log(num, ": is odd number");
    // }
    evenify(num);
 
}

friends_age = [20, 25, 21, 22, 23]
for(var i = 0; i<friends_age.length; i++){
    var age = friends_age[i];
    // if(age % 2 == 0){
    //     console.log(age, ": is even age");
    // }
    // else{
    //     console.log(age,": is odd age");
    // }
    evenify(age);
}
