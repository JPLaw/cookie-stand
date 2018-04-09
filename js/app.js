'use strict';

var storeHours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
//create object literal for each location
var pike = {
  minClientPerHour: 23,
  maxClientPerHour: 65,
  avergaeCookiesPerCustomer: 6.3,
  dailySales: [],
  customerPerHour: [],
  cookiesPerHour: []
  randomNumberClients: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }
  }
  
  cookieSalesPerHour: function(){
  for(var i = 0; i < storeHours.length; i++){
    var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
    this.cookiesPerHour[i] = numberSold;
    this.dailySales += numberSold;
  }
}
