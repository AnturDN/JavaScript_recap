
//-----------2-(push and pop)--------------

var friendAge = [10, 20, 30, 40, 50]
console.log(friendAge);

friendAge.push(60);// to add element to the array
friendAge.unshift(70) // add element at the starting of the array
//consloe.log(frindAge.length);// to see how many elements the array have;
console.log(friendAge);

//friendAge.shift(); // delete the first element of the array
friendAge.pop()// delete the last element of the array

friendAge.splice(2, 1); // splice(startIndex, deleteCount-[how many element you want to delete from index 2]) and here it will delete the 2nd index of the array
console.log(friendAge);