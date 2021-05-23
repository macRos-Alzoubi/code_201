const question_1 = document.querySelector('.js-question--1');
const question_2 = document.querySelector('.js-question--2');
const question_3 = document.querySelector('.js-question--3');
const question_4 = document.querySelector('.js-question--4');
let UL = document.createElement('ul');
let LI = document.createElement('li');
let textContent = '';


const userName = prompt('What is your name sir?');
console.log('asking about users name, ' + 'userName is ' + userName);
alert(userName + ' Your Welcom in our webpage!');
textContent = document.createTextNode(userName);
UL.style = 'list-style: none;';
LI.appendChild(textContent);
UL.appendChild(LI);
question_1.appendChild(UL);


const userAge = prompt('How old are you sir?');
console.log('asking about users age, ' + 'userAge is ' + userAge);
alert(userName + ' your age is '+ userAge + ' and you are allowed in this webpage');
textContent = document.createTextNode(userAge);
LI = document.createElement('li');
UL = document.createElement('ul');
UL.style = 'list-style: none;';
LI.appendChild(textContent);
UL.appendChild(LI);
question_2.appendChild(UL);

const userFavMov = prompt('What is your favorite movie?');
console.log('asking about users favorite movie, ' + 'userFavMov is ' + userFavMov);
alert(userName + ' your favorite movie is ' + userFavMov);
textContent = document.createTextNode(userFavMov);
LI = document.createElement('li');
UL = document.createElement('ul');
UL.style = 'list-style: none;';
LI.appendChild(textContent);
UL.appendChild(LI);
question_3.appendChild(UL);

const nutellaFan = prompt('Do you like Nutella?');
console.log('asking a user if he/she like nutella, ' + 'userFavMov is ' + nutellaFan);
alert(`${userName} your age is ${userAge}, Your favorite movie is ${userFavMov} and you are ${nutellaFan.toLocaleLowerCase() === 'yes' ? 'nutella fan' : ' not a nutella fan'}`);
textContent = document.createTextNode(nutellaFan);
LI = document.createElement('li');
UL = document.createElement('ul');
UL.style = 'list-style: none;';
LI.appendChild(textContent);
UL.appendChild(LI);
question_4.appendChild(UL);