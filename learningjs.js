console.log('Hello');
//alert('Hello');

// How to write a comment inline

//variables
var b = 'smoothie'
console.log(b);

var someNumber = 45;
console.log(someNumber);

document.getElementById('demoh1').innerHTML = 'Hello World'

 //var name = prompt('What is your Name? ');
// var age = prompt('What is your age?')

 //document.getElementById('demo').innerHTML = 
 //' Hello ' + name + ' you are currently ' +
 //age + ' years old '

var num1 = 10;
num1 ++;
console.log(num1);

//Increment By any number
var num2 = 10;
num2 += 10;
console.log(num2);

/* Functions
 1. Create a fundtion
 2. Call the function

*/
function fun() {
    console.log('This is a funtion');
}
// call
fun();

/* Lets create a function that gets a name and 
 says Hello name
 */

 function greeting() {
     var name = prompt('What is Your name');
     document.getElementById('demop').innerHTML = 
     ' Hello ' + name ;

 }
  //greeting();

  //How do arguments work in functions

  function sumNumber(num1,num2) {
      var result = num1 + num2 ;
      console.log( result);

  }

  sumNumber(20,40);
 
/* while loops 
    var num = 0;
    while (num < 100) {
        num ++;
        console.log(num);
    }

*/

/*for (let num = 0; num <= 100; num++) {
    console.log(num);
}

*/
let yourAge = 18;//number
let yourName = 'Bob'