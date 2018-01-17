'use strict';

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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

  var tdE1 = document.createElement('td');
  tdE1.textContent = this.locationName;
  trE1.appendChild(tdE1);

  for (var i = 0; i < times.length; i++) {

    tdE1 = document.createElement('td');

    var randomCustomerNumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

    var randomCookiesSold = randomCustomerNumber * Math.floor(this.cookiesPerCustomer);

    tdE1.textContent = randomCookiesSold;

    trE1.appendChild(tdE1);

    console.log(this.totalCookiesSold);
    this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
    console.log(this.totalCookiesSold);
    console.log(this.randomCookiesSold);
    
  }

  tdE1 = document.createElement('td'),

  tdE1.textContent = this.totalCookiesSold;

  trE1.appendChild(tdE1);

  salesTable.appendChild(trE1);

};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location Name';
  trEl.appendChild(thEl);

  for (var i = 0; i < times.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Total Cookies Sold';
  trEl.appendChild(thEl);

  salesTable.appendChild(trEl);
}

makeHeaderRow();
var firstAndPike = new LocationSalesData('1st and Pike', 23, 65, 6.3);
console.log(firstAndPike);
firstAndPike.render();

