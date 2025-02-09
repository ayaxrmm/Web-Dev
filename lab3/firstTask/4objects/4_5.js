//task 1
let obj = {};
function A(){ return obj; };
function B(){ return obj; };
let a = new A();
let b = new B();
alert( a == b); // true

//task 2
function Calculator(a, b){
    this.read = function(){
        this.a = +prompt("enter a: ", 0);
        this.b = +prompt("enter b: ", 0);
    },
    this.sum = function(){
        return this.a + this.b;
    },
    this.mul =  function(){
        return this.a * this.b;
    }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//task 3
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("enter a value: ", 0);
    }
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
