//task 1
let user = {};
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//task 2
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

//task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum);

//task 4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}
