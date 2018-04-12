'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

var tableHead = document.getElementById('table-head');
var tableBody =  document.getElementById('table-body');
//var tableFooter = document.getElementById('table-footer');

function Cookies(storeLocation, minCustomers, maxCustomers, averageCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.dailySales = 0;
  this.hourlySales = [];
  allStores.push(this);
}

//create header in HTML
function createHeader() {
  //create tr element
  var trElement = document.createElement('tr');
  //create th element
  var thElement = document.createElement('th');
  //empty cell, so append it to tr
  trElement.appendChild(thElement);
  //creates header cells
  for(var i=0; i < storeHours.length; i++) {
    //creates th element, which we append to tr
    thElement = document.createElement('th');
    //give element content
    thElement.textContent = storeHours[i];
    //append  th child to the tr parent element
    trElement.appendChild(thElement);
    //append tr to table
    tableHead.appendChild(trElement);
  }
  //create th element for store total
  thElement = document.createElement('th');
  //give th content
  thElement.textContent = 'Total';
  //append th to tr
  trElement.appendChild(thElement);
}

createHeader();

//create methods to call on each instance


Cookies.prototype.randomNumber = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

Cookies.prototype.cookieSales = function(){
  for(var i = 0; i < storeHours.length; i++){
    var numberSold = Math.floor(this.randomNumber() * this.averageCookiesPerCustomer);
    this.hourlySales.push(numberSold);
  }
};
Cookies.prototype.totalSold = function(){
  var cookiesSoldCalc = 0;
  for( var i = 0; i < storeHours.length; i++){
    cookiesSoldCalc += this.hourlySales[i];
  }
  this.totalSold = cookiesSoldCalc;
};

//Write a function to create rest of table
Cookies.prototype.renderRow = function(){
  //create a tr element
  var trElement = document.createElement('tr');
  //create td elemetnt
  var tdElement = document.createElement('td');
  //give td content
  tdElement.textContent = this.storeLocation;
  //append to the row
  trElement.appendChild(tdElement);
  for(var i = 0; i < storeHours.length; i++){
    //create a td element
    tdElement = document.createElement('td');
    //give td content
    tdElement.textContent = this.hourlySales[i];
    //append it to tr
    trElement.appendChild(tdElement);
    //append row to table
    tableBody.appendChild(trElement);
  }
  //create a td element that will contain the totals
  tdElement = document.createElement('td');
  //give it content
  tdElement.textContent = this.totalSold;
  //append it to the row
  trElement.appendChild(tdElement);
  //append to table?
};

// Cookies.prototype.cookiesPerHour= function(){
// // access the parent element from the DOM
//   var ulElement = document.getElementById('pikeAndFirst');
//   for( var i = 0; i < storeHours.length; i++) {
//   // 1. create element
//     var listItemEl = document.createElement('li');
//     // 2. give it content
//     listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
//     // 3. append it to the DOM
//     // parentElement.appendChild(childElement);
//     ulElement.appendChild(listItemEl);
//   }
// };


//what I had before above changes
// for(var i = 0; i < storeHours.length; i++) {
//   this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;


// Cookies.prototype.cookieSales = function() {
//   for(var i = 0; i < storeHours.length; i++){
//     var customerPerHour = Math.round(this.randomNumber() * this.averageCookiesPerCustomer);
//     this.hourlySales.push(customerPerHour);
//   }
// };

//what I had before above changes
// var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
// this.cookiesPerHour[i] = numberSold;
// this.dailySales += numberSold;

//create instances/objects
var pikeAndFirstLocation = new Cookies('First and Pike', 23, 65, 6.3);
var seattleAirportLocation = new Cookies('SeaTac Airport', 3, 24, 1.2);
var seattleCenterLocation = new Cookies('Seattle Center', 11, 38, 3.7);
var capitolHillLocation = new Cookies('Capitol Hill', 20, 38, 2.3);
var alkiLocation = new Cookies('Alki', 2, 16, 4.6);

//

pikeAndFirstLocation.randomNumber();
pikeAndFirstLocation.cookieSales();
pikeAndFirstLocation.totalSold();
pikeAndFirstLocation.renderRow();

seattleAirportLocation.randomNumber();
seattleAirportLocation.cookieSales();
seattleAirportLocation.totalSold();
seattleAirportLocation.renderRow();


seattleCenterLocation.randomNumber();
seattleCenterLocation.cookieSales();
seattleCenterLocation.totalSold();
seattleCenterLocation.renderRow();

capitolHillLocation.randomNumber();
capitolHillLocation.cookieSales();
capitolHillLocation.totalSold();
capitolHillLocation.renderRow();

alkiLocation.randomNumber();
alkiLocation.cookieSales();
alkiLocation.totalSold();
alkiLocation.renderRow();


//   randomNumber: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//     }
//   },

//   cookieSales: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

// renderSales: function() {
//   // access the parent element from the DOM
//   var ulElement = document.getElementById('pikeAndFirst');
//   for( var i = 0; i < storeHours.length; i++) {
//     // 1. create element
//     var listItemEl = document.createElement('li');
//     // 2. give it content
//     listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
//     // 3. append it to the DOM
//     // parentElement.appendChild(childElement);
//     ulElement.appendChild(listItemEl);
//   }
// };

// pikeAndFirst.randomNumber();
// pikeAndFirst.cookieSales();
// pikeAndFirst.renderSales();

//total cookies function
// var ulElement = document.getElementById('pikeAndFirst');
// var listItemEl = document.createElement('li');
// listItemEl.textContent = 'Total Sold: ' + Math.floor(pikeAndFirst.dailySales);
// ulElement.appendChild(listItemEl);



// //SEATAC LOCATION
// var seaTac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   averageCookiesPerCustomer: 1.2,
//   cookiesPerHour: [],
//   customerPerHour: [],
//   dailySales: 0,

//   randomNumber: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },

//   cookieSales: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

//   renderSales: function() {
//     // access the parent element from the DOM
//     var ulElement = document.getElementById('seaTac');
//     for( var i = 0; i < storeHours.length; i++) {
//       // 1. create element
//       var listItemEl = document.createElement('li');
//       // 2. give it content
//       listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
//       // 3. append it to the DOM
//       // parentElement.appendChild(childElement);
//       ulElement.appendChild(listItemEl);
//     }
//   }
// };

// seaTac.randomNumber();
// seaTac.cookieSales();
// seaTac.renderSales();

// // total sales function
// ulElement = document.getElementById('seaTac');
// listItemEl = document.createElement('li');
// listItemEl.textContent = 'Total Sold: ' + Math.floor(seaTac.dailySales);
// ulElement.appendChild(listItemEl);


// //SEATTLE CENTER LOCATION
// var seattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   averageCookiesPerCustomer: 3.7,
//   cookiesPerHour: [],
//   customerPerHour: [],
//   dailySales: 0,

//   randomNumber: function() {
//     for(var i = 0; i < storeHours.length; i++)
//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },

//   cookiesSales: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer; this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

//   renderSales: function(){
//     var ulElement = document.getElementById('seattleCenter');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItemEl = document.createElement('li');
//       listItemEl.textContent = storeHours[i] + ':' + Math.round(this.cookiesPerHour[i]);
//       ulElement.appendChild(listItemEl);
//     }
//   }
// };

// seattleCenter.randomNumber();
// seattleCenter.cookiesSales();
// seattleCenter.renderSales();

// //total cookies function
// ulElement = document.getElementById('seattleCenter');
// listItemEl = document.createElement('li');
// listItemEl.textContent = 'Total sold: ' + Math.floor(seattleCenter.dailySales);
// ulElement.appendChild(listItemEl);


// //CAPITOL HILL LOCATION
// var capitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   averageCookiesPerCustomer: 2.3,
//   cookiesPerHour: [],
//   customerPerHour: [],
//   dailySales: 0,

//   randomNumber: function() {
//     for (var i = 0; i < storeHours.length; i++)
//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },

//   cookieSales: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

//   renderSales: function() {
//     var ulElement = document.getElementById('capitolHill');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItemEl = document.createElement('li');
//       listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
//       ulElement.appendChild(listItemEl);
//     }
//   }
// };
// capitolHill.randomNumber();
// capitolHill.cookieSales();
// capitolHill.renderSales();

// //total cookies function

// ulElement = document.getElementById('capitolHill');
// listItemEl = document.createElement('li');
// listItemEl.textContent = 'Total Sold: ' + Math.floor(capitolHill.dailySales);
// ulElement.appendChild(listItemEl);

// //ALKI LOCATION
// var alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   averageCookiesPerCustomer: 4.6,
//   cookiesPerHour: [],
//   customerPerHour: [],
//   dailySales: 0,

//   randomNumber: function() {
//     for (var i = 0; i < storeHours.length; i++)
//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },

//   cookieSales: function() {
//     for(var i = 0; i < storeHours.length; i++){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

//   renderSales: function() {
//     var ulElement = document.getElementById('alki');
//     for(var i = 0; i < storeHours.length; i++){
//       var listItemEl = document.createElement('li');
//       listItemEl.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
//       ulElement.appendChild(listItemEl);
//     }
//   }
// };
// alki.randomNumber();
// alki.cookieSales();
// alki.renderSales();

// //total cookies function

// ulElement = document.getElementById('alki');
// listItemEl = document.createElement('li');
// listItemEl.textContent = 'Total Sold: ' + Math.floor(alki.dailySales);
// ulElement.appendChild(listItemEl);}