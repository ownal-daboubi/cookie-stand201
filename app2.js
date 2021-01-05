// var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
// function arraycustomernum(minimum, maximum) {
//     return  Math.floor(Math.random() * (maximum - minimum) + minimum);

    
// }


// function location(min, max, average, name) {
//     this.minimumcustomers = min;
//     this.maximumcustomers = max;
//     this.arraycustomernum = average;
//     this.sectorlocation = name;
// }


// location.prtotype.numofcustomers = function () {

//     return arraycustomernum(this.maximumcustomers, this.maximumcustomers);
    
// }

// location.prtotype.avgcookieshourly = function () {
// var cookieshorly = [];
// for (let index = 0; index < hour.length; index++) {
//     cookieshorly[index] = this.numofcustomers() * this.arraycustomernum;
// }
//   return cookieshorly;  
// }

// function firstrender(params) {
//     var parentelement = document.getElementById ("Tableofdata");
//     console.log(parentelement);
//     var article = document.createElement("article");
//     parentelement.appendChild(article);
//     var h2 = document.createElement("h2");
//     h2.textContent = "locations ";
//     article.appendChild(h2);

//     var table = document.createElement("table");
//     article.appendChild(table);

//     var tablefirstrow = document.createElement("tr");
//     table.appendChild(tablefirstrow);


//     var headerempty = document.createElement("th");
//     headerempty.textContent = "";
//     tablefirstrow.appendChild(headerempty);
// for (let index = 0; index < hours.length; index++) {
//     var header = document.createElement("th");
//     header.textContent = hours[i];
//     tablefirstrow.appendChild(header);

// }

// var headerdaytotal = document.createElement("th");
// headerdaytotal.textContent = "day location total";
// tablefirstrow.appendChild(headerdaytotal);
    
// }

// location.prtotype.renderlocationintable = function () {

//     var parentelement = document.getElementsByTagName("table");
//    console.log(parentelement);
// }


// var tablesecondraw = document.createElement("tr");
// parentelement[0].appendChild(tablesecondraw);

// var nameoflocation = document.createElement("td");
// namemeoflocation.textContent = this.locatioNname;
// tablesecondraw.appendChild(namemeoflocation);

// var total = 0;

// for (let index = 0; index <hours.length; index++) {

//     var tabledata = document.createElement("td");
//     tabledata.textContent = Math.floor(seattle.calabgcookiesperhour()[index]);
//    tablesecondraw.appendChild(tabledata);

// }


'use strict'
//creating a global hours array and a function to grnerate a random number of customers per hour
var hours = ["6:00am", "7:00am", "8:00am", " 9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]
function randomNumOfCustomers(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

//a single constructor function
function Location(min, max, average, name) {
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averageCookiesSold = average;
    this.locationName = name;
    //this.cookiesPerHour= [];
}
// function to generate a reandom number of customers each hour
Location.prototype.numOfCustomers = function () {
    return randomNumOfCustomers(this.minCustomers, this.maxCustomers);
}
// function for creating an array of cookies sold per hour
Location.prototype.calAverCookiePerHour = function () {
    var cookiesPerHour = [];
    for (var i = 0; i < hours.length; i++) {
        cookiesPerHour[i] = this.numOfCustomers() * this.averageCookiesSold;
    }
    return cookiesPerHour;
    // this.cookiesPerHour= cookiesPerHour;
}
//Writing HTML code
//Header Row:
function firstRender() {
    var parentElement = document.getElementById("TableOfData");
    console.log(parentElement);
    var article = document.createElement('article');
    parentElement.appendChild(article);
    var h2 = document.createElement('h2');
    h2.textContent = "Locations: ";
    article.appendChild(h2);
    // start of the table
    var table = document.createElement('table');
    article.appendChild(table);
    // adding headings (first row)
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

//creating table of data as a method of the object
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
// creating the final row
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


//creating an object for each location from the constructor
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


//Calling the functions to create the table:
firstRender();
seattle.renderLocationInTable();
tokyo.renderLocationInTable();
dubai.renderLocationInTable();
paris.renderLocationInTable();
lima.renderLocationInTable();
lastRender();