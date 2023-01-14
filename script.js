const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMilionairesBtn = document.getElementById('show-millionaires');
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
//  Double Money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 } //returnig everithing what is in the user object and set money to money*2
  });

  updateDOM();
}

// Sort user by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money); // passing compare function(a, b) ....b-a sorting descending

  updateDOM();
}

// Filter only milionaiers
function showMilionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) { //if nothing is passed to the function it will use "data"
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  // Take provided data and loop through that
  providedData.forEach(item => { //if we have only one parameter, dont need surrounding parenthesis around item
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}


// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67

}


// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMilionairesBtn.addEventListener('click', showMilionaires);