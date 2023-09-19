/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = 'Shawn Henrie';
let currentYear = '2023';
let profilePicture = 'images/Me.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile Image of ${fullname}`);

/* Step 5 - Array */
let favoriteFood = ['Hamburgers', 'Pizza', 'Chicken', 'Barbeque', 'Rice']
let newFood = 'Sausage'

foodElement.innerHTML = `<strong>${favoriteFood}</strong>`
favoriteFood.push(newFood);

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;



