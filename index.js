function shout(string) {
    return string.toUpperCase();  
}
console.log(shout("hello!"));

function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper("I'M NOT YELLING"));

function logShout(string) {
    console.log(string.toUpperCase());
}
console.log(logShout("hello again"));


function logWhisper(string) {
    console.log(string.toLowerCase());
}
    console.log(logWhisper("I AM HUNGRY"));

    function sayHiToGrandma(string) {
        if (string === string.toLowerCase()) {
         return ("I can't hear you!")
       } else if (string === string.toUpperCase()) {
        return ("YES INDEED!");
         }
         else if (string === "I love you, Grandma.") {
             return ("I love you, too.");
         }
       }
    

    console.log(sayHiToGrandma ("hello"));
    console.log(sayHiToGrandma ("I love you, Grandma."));
    console.log(sayHiToGrandma ("WHAT"));
       