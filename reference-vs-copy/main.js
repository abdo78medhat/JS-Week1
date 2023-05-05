const players = ['Wes', 'Sarah' , 'Ryan' , 'Poppy'];
// const team = players;
// console.log(players , team);
// team[3]='Lux';
const team2 = players.slice();
team2[3]='Lux';
console.log(players,team2);

// or we can use concat
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3]='sssss';
console.log(team4 , players);

const team5 = Array.from(players);

// with objects
const person ={
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
 const cap2 =  Object.assign({}, person, {number: 99});
 console.log(cap2);
 console.log(person);

//  we will hopefully soon see the object ...spread
const cap3 = {...person};

//  note
const wes ={
    name: 'Wes' ,
    age: 100, 
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};
console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

// assign is one level deep

// deep clone
const dev2 = JSON.parse(JSON.stringify(wes));