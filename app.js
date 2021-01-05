
"use strict";
//seattle
var sectorone = {

    sectorlocation: "seattle",
    minimumcustomers: 23,
    maximumcustomers: 65,
    avgcookiecustomers: 6.3,
    arraycustomernum: [],
    total: 0,
    hoursales: [],

    
    numofcustomers: function () {
        for (let index = 0; index < 13; index++) {
            this.arraycustomernum[index] = Math.floor(Math.random() * (this.maximumcustomers - this.minimumcustomers) + this.minimumcustomers);


        }
    },


    

    salescalculation: function () {
        for (let index = 0; index < this.arraycustomernum.length; index++) {
            sectorone.hoursales[index] = sectorone.arraycustomernum[index] * parseInt(this.avgcookiecustomers);


            
        }

    },
    totalculation: function () {
        for (let index = 0; index < this.hoursales.length; index++) {
            this.total = this.total + sectorone.hoursales[index];


        }

    },
}


var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
sectorone.numofcustomers();
sectorone.salescalculation();
sectorone.totalculation();

var parentelement = document.getElementById("own");


var ulLink = document.createElement("ul");
ulLink.textContent = sectorone.sectorlocation;
parentelement.appendChild(ulLink);

for (let index = 0; index <13; index++) {
 
    


var itemlist = document.createElement("li");

itemlist.textContent = stringarray[index] +sectorone.hoursales[index];

ulLink.appendChild(itemlist);


}


function location(min, max, average, name) {
    this.minimumcustomers = min;
    this.maximumcustomers = max;
    this.arraycustomernum = average;
    this.sectorlocation = name;
}


location

//Tokyo
var sectortwo = {

    sectorlocation: "Tokyo",
    minimumcustomers: 3,
    maximumcustomers: 24,
    avgcookiecustomers: 1.2,
    arraycustomernum: [],
    total: 0,
    hoursales: [],

    numofcustomers: function () {
        for (let index = 0; index < 13; index++) {
            this.arraycustomernum[index] = Math.floor(Math.random() * (this.maximumcustomers - this.minimumcustomers) + this.minimumcustomers);


        }
    },



    salescalculation: function () {
        for (let index = 0; index < this.arraycustomernum.length; index++) {
            sectortwo.hoursales[index] = sectortwo.arraycustomernum[index] * parseInt(this.avgcookiecustomers);


            
        }

    },
    totalculation: function () {
        for (let index = 0; index < this.hoursales.length; index++) {
            this.total = this.total + sectortwo.hoursales[index];


        }

    },
}


var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
sectortwo.numofcustomers();
sectortwo.salescalculation();
sectortwo.totalculation();

var parentelement = document.getElementById("own");


var ulLink = document.createElement("ul");
ulLink.textContent = sectortwo.sectorlocation;
parentelement.appendChild(ulLink);

for (let index = 0; index <13; index++) {
 
    


var itemlist = document.createElement("li");

itemlist.textContent = stringarray[index] +sectortwo.hoursales[index];

ulLink.appendChild(itemlist);


}

//Dubai
var sectorthree = {

    sectorlocation: "Dubai",
    minimumcustomers: 11,
    maximumcustomers: 38,
    avgcookiecustomers: 3.7,
    arraycustomernum: [],
    total: 0,
    hoursales: [],

    numofcustomers: function () {
        for (let index = 0; index < 13; index++) {
            this.arraycustomernum[index] = Math.floor(Math.random() * (this.maximumcustomers - this.minimumcustomers) + this.minimumcustomers);


        }
    },



    salescalculation: function () {
        for (let index = 0; index < this.arraycustomernum.length; index++) {
            sectorthree.hoursales[index] =sectorthree.arraycustomernum[index] * parseInt(this.avgcookiecustomers);


            
        }

    },
    totalculation: function () {
        for (let index = 0; index < this.hoursales.length; index++) {
            this.total = this.total + sectorthree.hoursales[index];


        }

    },
}


var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
sectorthree.numofcustomers();
sectorthree.salescalculation();
sectorthree.totalculation();

var parentelement = document.getElementById("own");


var ulLink = document.createElement("ul");
ulLink.textContent = sectorthree.sectorlocation;
parentelement.appendChild(ulLink);

for (let index = 0; index <13; index++) {
 
    


var itemlist = document.createElement("li");

itemlist.textContent = stringarray[index] +sectorthree.hoursales[index];

ulLink.appendChild(itemlist);


}

// Paris
var sectorfour = {

    sectorlocation: "Paris",
    minimumcustomers: 20,
    maximumcustomers: 38,
    avgcookiecustomers: 2.3,
    arraycustomernum: [],
    total: 0,
    hoursales: [],

    numofcustomers: function () {
        for (let index = 0; index < 13; index++) {
            this.arraycustomernum[index] = Math.floor(Math.random() * (this.maximumcustomers - this.minimumcustomers) + this.minimumcustomers);


        }
    },



    salescalculation: function () {
        for (let index = 0; index < this.arraycustomernum.length; index++) {
            sectorfour.hoursales[index] = sectorfour.arraycustomernum[index] * parseInt(this.avgcookiecustomers);


            
        }

    },
    totalculation: function () {
        for (let index = 0; index < this.hoursales.length; index++) {
            this.total = this.total +sectorfour.hoursales[index];


        }

    },
}


var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
sectorfour.numofcustomers();
sectorfour.salescalculation();
sectorfour.totalculation();

var parentelement = document.getElementById("own");


var ulLink = document.createElement("ul");
ulLink.textContent = sectorfour.sectorlocation;
parentelement.appendChild(ulLink);

for (let index = 0; index <13; index++) {
 
    


var itemlist = document.createElement("li");

itemlist.textContent = stringarray[index] +sectorfour.hoursales[index];

ulLink.appendChild(itemlist);


}

//Lima

var sectorfive = {

    sectorlocation: "Lima",
    minimumcustomers:2,
    maximumcustomers: 16,
    avgcookiecustomers: 4.6,
    arraycustomernum: [],
    total: 0,
    hoursales: [],

    numofcustomers: function () {
        for (let index = 0; index < 13; index++) {
            this.arraycustomernum[index] = Math.floor(Math.random() * (this.maximumcustomers - this.minimumcustomers) + this.minimumcustomers);


        }
    },



    salescalculation: function () {
        for (let index = 0; index < this.arraycustomernum.length; index++) {
            sectorfive.hoursales[index] = sectorfive.arraycustomernum[index] * parseInt(this.avgcookiecustomers);


            
        }

    },
    totalculation: function () {
        for (let index = 0; index < this.hoursales.length; index++) {
            this.total = this.total +sectorfive.hoursales[index];


        }

    },
}


var stringarray = ["6am:" ,"7am:", "8am", "9am:", "10am:", "11am:", "12pm:", "1pm:", "2pm:", "3pm:", "4pm:", "5pm:", "6pm:" ];
sectorfive.numofcustomers();
sectorfive.salescalculation();
sectorfive.totalculation();

var parentelement = document.getElementById("own");


var ulLink = document.createElement("ul");
ulLink.textContent = sectorfive.sectorlocation;
parentelement.appendChild(ulLink);

for (let index = 0; index <13; index++) {
 
    


var itemlist = document.createElement("li");

itemlist.textContent = stringarray[index] +sectorfive.hoursales[index];

ulLink.appendChild(itemlist);


}







