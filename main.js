let myParagraph = document.createElement('div');
let myText = document.createTextNode('Dummy text to add');

myParagraph.appendChild(myText);
document.body.appendChild(myParagraph);

/* Try-out-1 */
let name1 = 'Tom';
let and = ' and';
let name2 = 'Jerry';

//Solution not that good lmao
console.group('Try-out-1');
    console.warn(name1.concat(and).concat(and))
    console.log(name1 + ' and ' + name2);
console.groupEnd();

/* Try-it-out 2 */
let first = 'This is';
let second = ' Javascript';
console.group('Try-out-2');
    console.log(first + second);

    let lenghtString = first + second;
    console.log(lenghtString.length);
console.groupEnd();

/* Try-it-out 3 */
let year = 2021;
let month = 'June';
let day = 1;
console.group('Try-out-3');
    //Print the date as 01-Jan-2016 when
    console.log(0 + '' + day + '-' + month + '-' + year );
console.groupEnd();

console.log(isNaN(year)); 

/*
Write JavaScript program to convert ⁰C (Celsius) to ⁰F (Fahrenheit). 
You can prompt the user for input ⁰C using window.prompt. 
Formula for converting ⁰C to ⁰F is F = (12°C × 9/5) + 32

is used to display whether a value is a number or not.
*/

/* Try-it-out 4 */
//let userAnswer = window.prompt('Celsius to Fahrenheit');
let result = parseFloat((userAnswer * (9/5)) + 32).toFixed(1);

console.group('Try-out-4');
    console.log('User input: ' + userAnswer);
    console.log('Celius: ' + userAnswer + '°C to ' + result + '°F');

    alert('Answer in console')
console.groupEnd();