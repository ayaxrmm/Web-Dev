//task1
alert( null || 2 || undefined ); // result is 2, because the first true value

//task2
alert( alert(1) || 2 || alert(3) ); // result will be 1, and after 2

//task3
alert(1 && null && 2); // result: null, because the first false answer

//task4
alert( alert(1) && alert(2) ); // result: a, and after undefined 

//task5 
alert( null || 2 && 3 || 4 ); //result = 3, because the first true value 

//task6
if(age >= 14 && age <= 90);

//task7
//the first version:
if(!(age >= 14 && age <= 90));
//the second version:
if(age < 14 || age >90);

//task8
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

//task9
let login = promt("Who's there?", "");
if(login == "Admin"){
    let password = promt("Enter the password: ", "");
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == '' || password == null){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
}else if(login == '' || login == null){
    alert("Canceled");
}else{
    alert("I don't know you");
}