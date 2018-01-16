'use strict';

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



var firstAndPike = {
  minimumCustomers: 23,
  maximumCustomers: 65,
  cookiesPerCustomer: 6.3,
  totalCookiesSold: 0,
  render: function(){
    var ulE1 = document.getElementById('firstPike');

    for (var i = 0; i < times.length; i++) {
      var liE1 = document.createElement('li');

      var randomCustomerNumumber = Math.floor(Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers);

      var randomCookiesSold = randomCustomerNumumber * Math.floor(this.cookiesPerCustomer);

      liE1.textContent = times[i] + ':  ' + randomCookiesSold;

      ulE1.appendChild(liE1);

      this.totalCookiesSold = this.totalCookiesSold + randomCookiesSold;
    }
    liE1 = document.createElement('li'),

    liE1.textContent = 'Total Cookies: ' + this.totalCookiesSold;

    ulE1.appendChild(liE1);

  }
};

firstAndPike.render();

