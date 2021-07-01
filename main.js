let myParagraph = document.createElement('div');
let myText = document.createTextNode('Dummy text to add');

myParagraph.appendChild(myText);
document.body.appendChild(myParagraph);

let name1 = 'Tom';
let and = ' and';
let name2 = 'Jerry';

console.log(name1.concat(and).concat(and))