'use strict';

// We need an array to hold our dogs
var allDogs = [];

// We need to access the table that is in the DOM
var dogTable = document.getElementById('dogs');

// We need to access the form from our index.html
var dogForm = document.getElementById('dog-form');

// We need a constructor to make our dog objects
function Dog(name, color, breed, nickname) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.nickname = nickname;
  allDogs.push(this);
}

// Let's refactor so that render() method is on the constructor's prototype; this will tidy up the way things look on the screen
Dog.prototype.render = function () {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // give td content (name, then color, then breed, the nickname) <- eventually do it in a for loop
  tdEl.textContent = this.name;
  // append td to tr
  trEl.appendChild(tdEl);
  // append tr to table

  tdEl = document.createElement('td');
  tdEl.textContent = this.color;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.breed;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.nickname;
  trEl.appendChild(tdEl);

  dogTable.appendChild(trEl);
};

// We need a separate function to make the table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Color';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Breed';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Nickname';
  trEl.appendChild(thEl);

  dogTable.appendChild(trEl);
}

function renderAllDogs() {
  for(var i in allDogs) {
    allDogs[i].render();
  }
}

function addNewDog(event) {
  event.preventDefault();
  console.log(event.target.dogName.value);
  var newName = event.target.dogName.value;
  var newColor = event.target.color.value;
  var newBreed = event.target.breed.value;
  var newNickname = event.target.nickname.value;

  new Dog(newName, newColor, newBreed, newNickname);

  dogTable.innerHTML = '';
  makeHeaderRow();
  renderAllDogs();
}

// We need to create our Dog instances
new Dog('Gary', 'White', 'Westie', 'Gare Bear');
new Dog('Charlotte', 'White', 'Westie', 'Goose');
new Dog('Ollivander', 'Tan', 'French Bulldog', 'Ollie');
new Dog('Buddy', 'Black', 'Labra-doodle', '');
new Dog('Demi', 'Black and White', 'Border Collie', null);

dogForm.addEventListener('submit', addNewDog);

// Now we need to call our functions: the one for the header row, and the one for generating the individual dog rows
makeHeaderRow();
renderAllDogs();