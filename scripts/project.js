/* Project Javascript Code */

const url = "https://api.chucknorris.io/jokes/random"
let joke = '';
let funnyJokes = [];
let notFunnyJokes = [];

async function getJoke(){
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        joke = data.value;
        console.log(joke);
        doStuff(joke);
    }
}

function doStuff(joke){
    document.querySelector('#joke').textContent = joke;
}

function jokeFunny(){
    funnyJokes.push(joke);
    const funnyJokeList = document.querySelector('#funnyJokes');
    funnyJokeList.innerHTML = '';
    funnyJokes.forEach((jokes) =>{
        const html = `<li>${jokes}</li>`;
        funnyJokeList.innerHTML += html;

    })
}

function jokeNotFunny(){
    notFunnyJokes.push(joke);
    const notFunnyJokeList = document.querySelector('#notFunnyJokes');
    notFunnyJokeList.innerHTML = '';
    notFunnyJokes.forEach((jokes) =>{
        const html = `<li>${jokes}</li>`;
        notFunnyJokeList.innerHTML += html;

    })
}

function clearLists(){
    const notFunnyJokeList = document.querySelector('#notFunnyJokes');
    notFunnyJokeList.innerHTML = '';
    const funnyJokeList = document.querySelector('#funnyJokes');
    funnyJokeList.innerHTML = '';
}

document.querySelector('#generateJoke').addEventListener('click', getJoke);
document.querySelector('#funny').addEventListener('click', jokeFunny);
document.querySelector('#notFunny').addEventListener('click', jokeNotFunny);
document.querySelector('#clear').addEventListener('click', clearLists);