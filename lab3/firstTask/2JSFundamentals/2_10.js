//task1
if ("0") {
    alert( 'Hello' );
} //retunr Hello, because the string "0" is true

//task2
let question = prompt("What is the 'official' name of JavaScript?", "");
let messege = (question == "ECMAScript") ? "Right!" : "You don't know? ECMAScript!";
alert(messege);

//task3
let value = prompt("Enter a number", "");
if(value > 0 ){
    alert(1);
}else if(value < 0){
    alert(-1);
}else{
    alert(0);
}

//task4
let resut = (a + b < 4) ? "Below" : "Over";

//task5
let login = prompt("Enter your role: ", "");
let message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greetings!" :
    (login == '') ? "No login" :
    '';
    