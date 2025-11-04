var speech = "I am a good person. I don't snore at night";
var count = 0;

for(var i = 0; i<speech.length; i++){
    var char = speech[i];

    // if(char == " " && speech[i-1] != " ") // to prevent double white space counting;
    if(char == " "){
        count++;
    }
 }
count++;

console.log(count);



