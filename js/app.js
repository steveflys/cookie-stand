'use strict';

var times = ['locationName','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'totalCookiesSold'];

var locationSalesData = [];

function LocationSalesData(locationName, minimumCustomers, maximumCustomers, cookiesPerCustomer) {
  this.locationName = locationName;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.totalCookiesSold = 0;
  locationSalesData.push(this);
}

var salesTable = document.getElementById('salesTable');

LocationSalesData.prototype.render = function(){    
  var trE1 = document.createElement('tr');

  for (var i = 0; i < times.length; i++) {

    if (i === 0 ) {
      var tdE1 = document.createElement('td');
      tdE1.textcontent = this.locationName;
      trE1.appendChild(tdE1);
    }

    else {
      var tdE1 = document.createElement('td');

      var randomCustomerNumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

      var randomCookiesSold = randomCustomerNumber * Math.floor(this.cookiesPerCustomer);

      tdE1.textContent = randomCookiesSold;

      trE1.appendChild(tdE1);
    }

    this.totalCookiesSold = this.totalCookiesSold + this.randomCookiesSold;
  }

  tdE1 = document.createElement('td'),

  tdE1.textContent = this.totalCookiesSold;

  trE1.appendChild(tdE1);

  salesTable.appendChild(trE1);

};


var firstAndPike = new LocationSalesData('1st and Pike', 23, 65, 6.3);
console.log(firstAndPike);
firstAndPike.render();

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

// var seatacAirportData = {
//   minimumCustomers: 3,
//   maximumCustomers: 24,
//   cookiesPerCustomer: 1.2,
//   totalCookiesSold: 0,
//   render: function(){
//     var ulE1 = document.getElementById('seatacAirport');

//     for (var i = 0; i < times.length; i++) {
//       var liE1 = document.createElement('li');

//       var randomCustomerNumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

//       var randomCookiesSold = randomCustomerNumber * Math.floor(this.cookiesPerCustomer);

//       liE1.textContent = times[i] + ':  ' + randomCookiesSold;

//       ulE1.appendChild(liE1);

//       this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
//     }
//     liE1 = document.createElement('li'),

//     liE1.textContent = 'Total Cookies: ' + this.totalCookiesSold;

//     ulE1.appendChild(liE1);

//   }
// };

// var seattleCenterData = {
//   minimumCustomers: 11,
//   maximumCustomers: 38,
//   cookiesPerCustomer: 3.7,
//   totalCookiesSold: 0,
//   render: function(){
//     var ulE1 = document.getElementById('seattleCenter');

//     for (var i = 0; i < times.length; i++) {
//       var liE1 = document.createElement('li');

//       var randomCustomerNumumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

//       var randomCookiesSold = randomCustomerNumumber * Math.floor(this.cookiesPerCustomer);

//       liE1.textContent = times[i] + ':  ' + randomCookiesSold;

//       ulE1.appendChild(liE1);

//       this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
//     }
//     liE1 = document.createElement('li'),

//     liE1.textContent = 'Total Cookies: ' + this.totalCookiesSold;

//     ulE1.appendChild(liE1);

//   }
// };

// var capitalHillData = {
//   minimumCustomers: 20,
//   maximumCustomers: 38,
//   cookiesPerCustomer: 2.3,
//   totalCookiesSold: 0,
//   render: function(){
//     var ulE1 = document.getElementById('capitalHill');

//     for (var i = 0; i < times.length; i++) {
//       var liE1 = document.createElement('li');

//       var randomCustomerNumumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

//       var randomCookiesSold = randomCustomerNumumber * Math.floor(this.cookiesPerCustomer);

//       liE1.textContent = times[i] + ':  ' + randomCookiesSold;

//       ulE1.appendChild(liE1);

//       this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
//     }
//     liE1 = document.createElement('li'),

//     liE1.textContent = 'Total Cookies: ' + this.totalCookiesSold;

//     ulE1.appendChild(liE1);

//   }
// };

// var alkiData = {
//   minimumCustomers: 2,
//   maximumCustomers: 16,
//   cookiesPerCustomer: 4.6,
//   totalCookiesSold: 0,
//   render: function(){
//     var ulE1 = document.getElementById('alki');

//     for (var i = 0; i < times.length; i++) {
//       var liE1 = document.createElement('li');

//       var randomCustomerNumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

//       var randomCookiesSold = randomCustomerNumber * Math.floor(this.cookiesPerCustomer);

//       liE1.textContent = times[i] + ':  ' + randomCookiesSold;

//       ulE1.appendChild(liE1);

//       this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
//     }
//     liE1 = document.createElement('li'),

//     liE1.textContent = 'Total Cookies: ' + this.totalCookiesSold;

//     ulE1.appendChild(liE1);

//   }
// };


// firstAndPikeData.render();
// seatacAirportData.render();
// seattleCenterData.render();
// capitalHillData.render();
// alkiData.render();



