// Class code examples

// Declaration with parameters
function greetStudent(firstName, lastName) {
    console.log(`¡Hola ${firstName} ${lastName}!`)
    return "I can finally return now!";
}

// Invokation with arguments
greetStudent('Miguel', 'Delgado')
greetStudent('Iñigo', 'M')
greetStudent('Inés', 'García')
greetStudent("Sara");
//console.log("return value from my function", greetStudent('Sara'))

//set a DEFAULT parameter value in casa of it not being passed 
function greetStudent2(firstName="Student", lastName="" ) {
    console.log(`¡Hola ${firstName} ${lastName}!`);
 }

 greetStudent2();
 greetStudent2("Marco");
 greetStudent2("Marco", "Santo");

 function isMultiple(number1, number2){
      /**
   * const remainder = number1 % number2 // 
   * a number: the remainder of the division
   * const result = remainder === 0 // a booelan: the result of the === comparison
   *
   * return result
   */

      return number1 % number2 === 0; // I want to return a boolean that tells me if they are multiples
  }



  /**
 * Create a function doTheMath(num1, sign, num2)
 * that will return the result of the mathematical operations of num1 operator num2.
 * Allowed operators (signs) are +, -, *, /, %, **.
 * Hint: you can use the switch statement.
 */

  function doTheMath (num1, sign, num2){
    switch (sign) {
        case "+": 
           return num1 + num2
        case "-":
           return num1 - num2 
        case "*":
            return num1 * num2
        case "/":
            if(num2 === 0) return "Division by zero not allowed"
            return num1 / num2
        case "%":
            return num1 % num2

        case "**":
            return num1 ** num2
        
        default:
            return "Operation unknown";

    }
        
  
  }
  console.log ("Let's do the math: ", doTheMath(2, "+", 3));