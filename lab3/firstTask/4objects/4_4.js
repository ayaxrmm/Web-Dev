//task1
function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); // John

  //task2
  let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        this.a = +prompt("enter a: ", 0);
        this.b = +prompt("enter b: ", 0);
    }
  };
  calculator.read();
  alert(calculator.sum() );
  alert(calculator.mul() );

  //task 3
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0