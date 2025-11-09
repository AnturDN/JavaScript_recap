function callBack(name, age, task){
    console.log('Hello', name);
    console.log("your age", age);
    task();
}

function washHand(){
    console.log("Wash hand with soap");
}
function takeShower(){
    console.log("Take shower");
}

callBack('Antur', 25, washHand)
callBack('Joy', 27, takeShower)
