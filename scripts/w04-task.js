/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Shawn Henrie",
    photo: "images/Me.jpg",
    favoriteFoods: [
        'Brownies',
        'Pizza',
        'Chicken',
        'Pie'
    ],
    hobbies: [
        'basketball',
        'guitar',
        'jogging'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: 'Boise, Idaho',
    length: '8 months'
}
);

myProfile.placesLived.push(
    {
    place: 'Torrijos, Marinduque',
    length: '10 months'
}
);

myProfile.placesLived.push(
    {
    place: 'San Diego, CA',
    length: '1.5 years'
}
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const image = document.querySelector('#photo');
image.setAttribute('src', myProfile.photo);
image.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(
    food => {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);

}

)

/* Places Lived DataList */
myProfile.placesLived.forEach(
    place =>{
        let dt = document.createElement('dt');
        dt.textContent = place;
        document.querySelector('#places-lived').appendChild(dt);
    }
);

myProfile.placesLived.forEach(
    length =>{
        let dd = document.createElement('dd');
        dd.textContent = length;
        document.querySelector('#places-lived').appendChild(dd);
    }
);

