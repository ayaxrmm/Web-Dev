//task1
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") ); // John
  
//task2 
function checkSpam(str){
    let lowercase = str.toLowerCase();
    return str.includes("viagra") || str.includes("xxx");
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

//task 3
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength - 1) + "...";
    }else{
        return str;
    }
}
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

truncate("Hi everyone!", 20) == "Hi everyone!"

//task4
function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 ); // true