function Person(name) {
  this.name = name;
}

Person.prototype.myFriends = function(friends) {
  let arr;
  arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};
let friends = ["Bob", "Jane", "Pedro"];
new Person("John").myFriends(friends);



/////////
// Arrays

const boxes = document.querySelectorAll('.box');
const boxesArr = Array.from(boxes);
boxesArr.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
/*
for (var i = 0; i < boxesArr.length; i++) {

    if(boxesArr[i].className === 'box blue') {
        continue;
    }
    boxesArr[i].textContent = 'I changed to blue';
}
*/

//ES6

for (const cur of boxesArr) {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}

// ES6
const ages = [12, 17 ,8 , 19, 11];

let ind = ages.findIndex(cur => cur >= 18);
let elm = ages.find(cur => cur >= 18);

console.log(ind, elm);


//ES6 - spread op
const family1 = ['Kate', 'Kyle'];
const family2 = ['Dred', 'Bread'];
const bigFamily = [...family1, 'Liza', ...family2];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes1 = document.querySelectorAll('.box');
const all = [h,...boxes1];
console.log(all)

Array.from(all).forEach(cur => cur.style.color = 'purple');



// ES6 Rest parameters
function isFullAge(limit, ...years) {
    years.forEach(cur => console.log((2019 - cur) >= limit));
};

isFullAge(18, 1990, 2010, 1993, 2001, 1970)


// classes vs inheritence, function constructor
// ES5 

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hi there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super (name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

// class definitions are not hoisted







