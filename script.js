alert("Welcome to my website!");
alert("Hello!\nWelcome to JavaScript Learning");

var username = "student01";
var myName = "Muzuu";

console.log("Username:", username);
console.log("Full Name:", myName);


var message = "Hello World";
alert(message);
console.log(message);

var age = "18";
var course = "Web Development";

alert("Name: " + myName);
alert("Age: " + age);
alert("Course: " + course);

console.log("Bio Data shown in alerts");


var email = "Muzuu@gmail.com";
alert("My email address is " + email);
console.log(email);


var book = "A smarter way to learn JavaScript";
alert("I am learning from the book " + book);
console.log(book);

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);
document.write(design);
console.log(design);


var age = 18;
alert("I am " + age + " years old");
console.log("Age:", age);


var visits = 5;
document.write("You have visited this site " + visits + " times<br>");
console.log("Visits:", visits);

var birthYear = 2002;
document.write("My birth year is " + birthYear + "<br>");
console.log("Birth Year:", birthYear);


var visitorName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");
console.log(visitorName, productTitle, quantity);

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.getElementById('sumResult').innerHTML = "Sum of " + num1 + " and " + num2 + " is " + sum; // Matches output format [cite: 10]

var diff = num1 - num2;
document.getElementById('subResult').innerHTML = "Difference of " + num1 + " and " + num2 + " is " + diff; // Similar to sum [cite: 16, 17]


var product = num1 * num2;
document.getElementById('mulResult').innerHTML = "Product of " + num1 + " and " + num2 + " is " + product;

var quotient = num1 / num2;
document.getElementById('divResult').innerHTML = "Division of " + num1 + " by " + num2 + " is " + quotient;


var modulus = num1 % num2;
document.getElementById('modResult').innerHTML = "Modulus of " + num1 + " by " + num2 + " is " + modulus;


var myVariable;


document.getElementById('declarationValue').innerHTML = "Value after variable declaration is: " + myVariable; 


myVariable = 5; 


document.getElementById('initialValue').innerHTML = "Initial value: " + myVariable; 


myVariable++; 

document.getElementById('incrementValue').innerHTML = "Value after increment is: " + myVariable; 


myVariable = myVariable + 7; 

document.getElementById('additionValue').innerHTML = "Value after addition is: " + myVariable;

myVariable--; 


document.getElementById('decrementValue').innerHTML = "Value after decrement is: " + myVariable;
var remainder = myVariable % 3;


document.getElementById('remainderValue').innerHTML = "The remainder is: " + remainder;

var celsiusTemp = 25; 


var fahrenheitFromC = (celsiusTemp * 9 / 5) + 32;


document.write(celsiusTemp + "°C is " + fahrenheitFromC + "°F" + "<br>");

var fahrenheitTemp = 70; 


var celsiusFromF = (fahrenheitTemp - 32) * 5 / 9;


document.write(fahrenheitTemp + "°F is " + celsiusFromF + "°C"); 






var a = 1, b = 2, c = 3;


var name;
var _age;
var $price;
var user1;
var first_name;

// Illegal variables (commented)
// var 1user;
// var user-name;
// var var;
// var alert;
// var first name;

console.log("Legal and Illegal variables assignment done");


  var num1 = 10;
  var num2 = 5;

  document.write("Addition: " + (num1 + num2) + "<br>");
  document.write("Subtraction: " + (num1 - num2) + "<br>");
  document.write("Multiplication: " + (num1 * num2) + "<br>");
  document.write("Division: " + (num1 / num2) + "<br>");
  document.write("Modulus: " + (num1 % num2) + "<br><br>");

  var a;
  document.write("Value after declaration is: " + a + "<br>");

  a = 5;
  document.write("Initial value: " + a + "<br>");

  a++;
  document.write("After increment: " + a + "<br>");

  a += 7;
  document.write("After addition: " + a + "<br>");

  a--;
  document.write("After decrement: " + a + "<br>");

  document.write("The remainder is: " + (a % 3) + "<br>");

  console.log("Math expressions completed");



  var userName = prompt("Enter your name");
  alert("Welcome " + userName);
  console.log("User greeted");


  var number = prompt("Enter a number for table", 5);

  document.write("<h2>Table of " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }

  console.log("Table printed");