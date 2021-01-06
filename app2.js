
'use strict'

var hours = ["6:00am", "7:00am", "8:00am", " 9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]
function randomNumOfCustomers(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

function Location(min, max, average, name) {
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averageCookiesSold = average;
    this.locationName = name;
   
}

Location.prototype.numOfCustomers = function () {
    return randomNumOfCustomers(this.minCustomers, this.maxCustomers);
}

Location.prototype.calAverCookiePerHour = function () {
    var cookiesPerHour = [];
    for (var i = 0; i < hours.length; i++) {
        cookiesPerHour[i] = this.numOfCustomers() * this.averageCookiesSold;
    }
    return cookiesPerHour;
   
}

function firstRender() {
    var parentElement = document.getElementById("TableOfData");
    console.log(parentElement);
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h2 = document.createElement('h2');
    h2.textContent = "Locations: ";
    article.appendChild(h2);
  
    var table = document.createElement('table');
    article.appendChild(table);
    
    var tableFirstRow = document.createElement('tr');
    table.appendChild(tableFirstRow);

    var headerEmpty = document.createElement('th');
    headerEmpty.textContent = '';
    tableFirstRow.appendChild(headerEmpty);

    for (var i = 0; i < hours.length; i++) {
        var header = document.createElement('th');
        header.textContent = hours[i];
        tableFirstRow.appendChild(header);
    }
    var headerDailyTotal = document.createElement('th');
    headerDailyTotal.textContent = 'Daily Location Total';
    tableFirstRow.appendChild(headerDailyTotal);
}

Location.prototype.renderLocationInTable = function () {
    var parentElement = document.getElementsByTagName('table');
    console.log(parentElement);

    var tableSecondRow = document.createElement('tr');
    parentElement[0].appendChild(tableSecondRow);
    var nameOfLoction = document.createElement('td');
    nameOfLoction.textContent = this.locationName;
    tableSecondRow.appendChild(nameOfLoction);

    var total = 0;
    for (var i = 0; i < hours.length; i++) {
        var tableData = document.createElement('td');
        tableData.textContent = Math.floor(seattle.calAverCookiePerHour()[i]);
        tableSecondRow.appendChild(tableData);
        total += Math.floor(seattle.calAverCookiePerHour()[1]);
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = total;
    tableSecondRow.appendChild(dailyTotal);
}

function lastRender() {
    var parentElement = document.getElementsByTagName('table');
    var tablefinalRow = document.createElement('tr');
    parentElement[0].appendChild(tablefinalRow);
    var dataCell = document.createElement('td');
    dataCell.textContent = 'Totals';
    tablefinalRow.appendChild(dataCell);

    var finalTotal = 0;

    for (var i = 0; i < hours.length; i++) {
        var dataCell = document.createElement('td');
        var hourlyTotal = Math.floor(seattle.calAverCookiePerHour()[i] + tokyo.calAverCookiePerHour()[i] + paris.calAverCookiePerHour()[i] + dubai.calAverCookiePerHour()[i] + lima.calAverCookiePerHour()[i]);
        dataCell.textContent = hourlyTotal;
        tablefinalRow.appendChild(dataCell);
        finalTotal += hourlyTotal;
    }
    var dataCell = document.createElement('td');
    dataCell.textContent = finalTotal;
    tablefinalRow.appendChild(dataCell);
}


var seattle = new Location(23, 65, 6.3, 'Seattle')
console.log(seattle);
console.log(seattle.calAverCookiePerHour());
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
console.log(tokyo);
var dubai = new Location(11, 38, 3.7, 'Dubai');
console.log(dubai);
var paris = new Location(20, 38, 2.3, 'Paris');
console.log(paris);
var lima = new Location(2, 16, 4.9, 'Lima');
console.log(lima);

firstRender();
seattle.renderLocationInTable();
tokyo.renderLocationInTable();
dubai.renderLocationInTable();
paris.renderLocationInTable();
lima.renderLocationInTable();
lastRender();
