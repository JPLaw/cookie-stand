'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

var tableHead = document.getElementById('table-head');
var tableBody =  document.getElementById('table-body');
// var tableFooter = document.getElementById('table-footer');

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
  return Math.floor(Math.random() * (Number(this.maxCustomers) - Number(this.minCustomers)) + Number(this.minCustomers));
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

//------------Footer-------------------
// function createFooter() {
//   var trElement = document.createElement('tr');
//   var theadElement = document.getElementById('store');
//   var thElement = document.createElement('th');
//   thElement.textContent = '';
//   trElement.appendChild(thElement);
//   for(var i = 0; i < storeHours.length; i++) {
//     thElement = document.createElement('th');
//     thElement.textContent = storeHours[i];
//     trElement.appendChild(thElement);
//   }
//   thElement = document.createElement('th');
//   thElement.textContent = 'Cookie Total';
//   trElement.appendChild(thElement);
//   theadElement.appendChild(trElement);
// }

// createFooter();
//--------------------------------------------


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

//*********************************************************************** */

function handleLocationFormSubmitted(event) {
  // stop the page from refreshing
  event.preventDefault();
  console.log('the form was submitted!');
  var formElement = event.target;
  var newLocation = new Cookies(formElement.location.value, formElement.mincustomers.value, formElement.maxcustomers.value, formElement.averagecookiesperhour.value);
  console.log(newLocation);

  newLocation.randomNumber();
  newLocation.cookieSales();
  newLocation.totalSold();
  newLocation.renderRow();

}


var locationFormElement = document.getElementById('add-location-form');
locationFormElement.addEventListener('submit', handleLocationFormSubmitted);

//********************************************************** */
