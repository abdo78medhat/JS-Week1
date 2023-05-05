// first exercise
console.log(document.getElementsByTagName('p'));
console.log(document.getElementById('p1-symbol').innerText);
console.log(document.getElementsByClassName('square').length);
console.log(document.querySelector('h2').textContent);

//second exercise
document.querySelector('#p1-name').textContent=" AbdelRahman"; 
document.querySelector('#p2-name').textContent=" Belal"; 
document.querySelector('#p1-symbol').textContent= "O"
document.querySelector('#p2-symbol').textContent= "X"
document.querySelector('h2').append(" and love");

// values & data types exercise
console.log(typeof false);
console.log(typeof "true");
console.log(typeof document.title);
console.log(typeof "some string".length);
console.log(typeof null);

// working with strings exercise
document.querySelector('#p1-name').append(" Medhat");
console.log(document.title.indexOf("T"));
console.log(document.title[10]);
console.log(document.title.includes("JavaScript"));
document.querySelector('h1').textContent = document.querySelector('h1').textContent.toUpperCase(); 

// operators exercise
let numOfSiblings = 3+3;
console.log(numOfSiblings);
let hoursOfSleep = (5+9+8+7+10+6+12) / 7;
console.log(hoursOfSleep);
let numOfDogs = 16*7;
console.log(numOfDogs);