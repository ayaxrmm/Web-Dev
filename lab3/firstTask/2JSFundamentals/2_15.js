//task1: Есть ли какая-либо разница в поведении этих двух вариантов?
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }

function checkAge(age){
    if (age > 18){
        return true;
    }
    //... 
    return confirm('Did parents allow you?');
}
// no differences, in both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.

//task2: rewrite the code by using ? and ||
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  function checkAge(age){
    return (age > 18) ? true : confirm('Did parents allow you?');
  }

  function checkAge(age){
    return (age > 18) || confirm('Did parents allow you?');
  }

  //task3
  function min(a, b){
    if(a > b){
        return b;
    }else{
        return a;
    }
  }
  function min(a, b){
    return (a < b) ? a : b;
  }
  
  //task4
  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }