/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);
// here in the above code there is nothing wrong and you can do that but I think its better to be explicit anyway 
let isValid = ("true" === "true"); 
// i dont think you need the boolean here. The three === means you want false 
if (isValid) {
console.log("This is valid!");
} // I think its better if the machine returns a result so I changed from false to true but since === means we want false it made the satement true 

let age =Number("25"); // age was upercase so i made it lower 
let totalAge =Number(age) + 5; // i added number just to be safe becasue we have the + sign. 
console.log("Total Age: " + totalAge);

let implicitassignment ="100" * 5
console.log("100" * 5);

let input = null; // that way input will = 0
let result = Number(input); // this turns or converts null to a number itself 
console.log(result); // 0 i hope ! 
