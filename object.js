var student = {id:519, phone:171454, name:"Antur"};
var student2 = {id:520, phone:177454, name:"Abir"};

//-----same thing using different technique-----
// var phoneNo= student["phone"];
// var phoneNo= student.phone;
var phoneProNo = "phone"
var phoneNo = student[phoneProNo]
//----------------------------------------------
//update phone number
student2.phone = 111222;
student2["phone"] = 222333
student2[phoneProNo] = 333444
console.log(phoneNo);
console.log(student2);

