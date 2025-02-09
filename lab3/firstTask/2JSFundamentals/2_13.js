//task1
let i = 3;
while(i){
    alert(i);
    i--;
} // the last message will be 1, because when i will be 0, it returns false, the loop stops automatically

//task2
let i = 0;
while (++i < 5) alert( i );
// 1step: 1
// 2step: 2
// 3step: 3
// 4step: 4
let i = 0;
while (i++ < 5) alert( i );
//1step: 1
//2step: 2
//3step: 3
//4step: 4
//5step: 5 because when while loop check the "(i++)" in this step, it returns 4, and 4 < 5 

//task3
for (let i = 0; i < 5; i++) alert( i );
for (let i = 0; i < 5; ++i) alert( i );
// both of them returns same values, because the value returned by the increment is not used here, so there’s no difference between i++ and ++i.

//task4
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}

//task5
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}

//task6
let num;
do{
    num = prompt("Enter a number greater than 100? ", 0);
}while(num <=100 && num);

//task7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); 
}