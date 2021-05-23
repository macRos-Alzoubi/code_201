const question_1 = document.querySelector('.js-question--1');
const question_2 = document.querySelector('.js-question--2');
const question_3 = document.querySelector('.js-question--3');
const question_4 = document.querySelector('.js-question--4');

let textContent = '';
let LI = null;
let UL = null;

let createElement = element => document.createElement(element);

let appendChild = function (pairentElement, element) {
  pairentElement.appendChild(element);
};

let addStyle = function (element, style) {
  element.style = style;
};

const userName = prompt('What is your name sir?');
console.log('asking about users name, ' + 'userName is ' + userName);
alert(userName + ' Your Welcom in our webpage!');
textContent = document.createTextNode(userName);
LI = createElement('li');
UL = createElement('ul');
addStyle(UL, 'list-style: none;');
appendChild(LI, textContent);
appendChild(UL, LI);
appendChild(question_1, UL);

const userAge = prompt('How old are you sir?');
console.log('asking about users age, ' + 'userAge is ' + userAge);
alert(
  userName + ' your age is ' + userAge + ' and you are allowed in this webpage'
);
textContent = document.createTextNode(userAge);
LI = createElement('li');
UL = createElement('ul');
addStyle(UL, 'list-style: none;');
appendChild(LI, textContent);
appendChild(UL, LI);
appendChild(question_2, UL);

const userFavMov = prompt('What is your favorite movie?');
console.log(
  'asking about users favorite movie, ' + 'userFavMov is ' + userFavMov
);
alert(userName + ' your favorite movie is ' + userFavMov);
textContent = document.createTextNode(userFavMov);
LI = createElement('li');
UL = createElement('ul');
addStyle(UL, 'list-style: none;');
appendChild(LI, textContent);
appendChild(UL, LI);
appendChild(question_3, UL);

const nutellaFan = prompt('Do you like Nutella?');
console.log(
  'asking a user if he/she like nutella, ' + 'userFavMov is ' + nutellaFan
);
alert(
  `${userName} your age is ${userAge}, Your favorite movie is ${userFavMov} and you are ${
    nutellaFan.toLocaleLowerCase() === 'yes'
      ? 'nutella fan'
      : ' not a nutella fan'
  }`
);
textContent = document.createTextNode(nutellaFan);
LI = createElement('li');
UL = createElement('ul');
addStyle(UL, 'list-style: none;');
appendChild(LI, textContent);
appendChild(UL, LI);
appendChild(question_4, UL);
