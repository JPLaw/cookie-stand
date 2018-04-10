'use strict';

var storeHours = [6 + 'am', + 7 + 'am', + 8 + 'am', + 9 + 'am', + 10 + 'am', + 11 + 'am', + 12 + 'pm', + 1 + 'pm', 2 + 'pm', + 3 + 'pm', + 4 + 'pm', + 5 + 'pm', + 6 + 'pm', + 7 + 'pm', + 8 + 'pm'];

//create object literal for each location
//FIRST AND PIKE LOCATION
var pikeAndFirst = {
  minCustomers: 23,
  maxCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  cookiesPerHour: [],
  customerPerHour: [],
  dailySales: 0,

  randomNumber: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },

  cookieSales: function() {
    for(var i = 0; i < storeHours.length; i++){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },

  renderSales: function() {
    // access the parent element from the DOM
    var ulElement = document.getElementById('pikeAndFirst');
    for( var i = 0; i < storeHours.length; i++) {
      // 1. create element
      var listItemEl = document.createElement('li');
      // 2. give it content
      listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemEl);
    }
  }
};
pikeAndFirst.randomNumber();
pikeAndFirst.cookieSales();
pikeAndFirst.renderSales();

var ulElement = document.getElementById('pikeAndFirst');
var listItemEl = document.createElement('li');
listItemEl.textContent = 'Total Sold: ' + Math.floor(pikeAndFirst.dailySales);
ulElement.appendChild(listItemEl);


//total cookies function

//SEATAC LOCATION
var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  customerPerHour: [],
  dailySales: 0,

  randomNumber: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },

  cookieSales: function() {
    for(var i = 0; i < storeHours.length; i++){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },

  renderSales: function() {
    // access the parent element from the DOM
    var ulElement2 = document.getElementById('SeaTac');
    for( var i = 0; i < storeHours.length; i++) {
      // 1. create element
      var listItemEl2 = document.createElement('li');
      // 2. give it content
      listItemEl2.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement2.appendChild(listItemEl2);
    }
  }
};

seaTac.randomNumber();
seaTac.cookieSales();
seaTac.renderSales();

// var ulElement2 = document.getElementById('seaTac');
// var listItemEl2 = document.createElement('li');
// listItemEl2.textContent = 'Total Sold: ' + Math.floor(seaTac.dailySales);
// ulElement2.appendChild(listItemEl2);


//SEATTLE CENTER LOCATION
var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  cookiesPerHour: [],
  customerPerHour: [],
  dailySales: 0,

  randomNumber: function() {
    for(var i = 0; i < storeHours.length; i++)
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },

  cookiesSales: function() {
    for(var i = 0; i < storeHours.length; i++){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer; this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },

  renderSales: function(){
    var ulElement = document.getElementById('seattleCenter');
    for(var i = 0; i < storeHours.length; i++){
      var listItemEl = document.createElement('li');
      listItemEl.textContent = storeHours[i] + ':' + Math.round(this.cookiesPerHour[i]);
      ulElement.appendChild(listItemEl);
    }
  }
};

seattleCenter.randomNumber();
seattleCenter.cookiesSales();
seattleCenter.renderSales();