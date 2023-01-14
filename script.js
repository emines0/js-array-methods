const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilionairesBtn = document.getElementById('show-milionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();


// Fetch random user and add money

async function getRandomUser() {
 const res = await fetch('https://randomuser.me/api'); // waiting to finish because it returns promise
 const data = await res.json(); // waiting to finish because it returns promise too

 const user = data.results[0]

 const newUser = {
  name: `${user.name.first} ${user.name.last}`,
  money: Math.floor(Math.random() * 1000000)
 };

 addData(newUser);
}

// Add new obj to data arr

function addData(obj) {
  data.push(obj);
}