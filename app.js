'use strict'
//creating a global hours array and a function to grnerate a random number of customers per hour
var hours = ["6:00am", "7:00am", "8:00am", " 9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]
var locationArray = [];
function randomNumOfCustomers(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}


function Location(min, max, average, name) {
    this.minCustomers = min;
    this.maxCustomers = max;
    this.averageCookiesSold = average;
    this.locationName = name;
    this.cookiesPerHour = [];
    this.total = 0;
    locationArray.push(this);
}



Location.prototype.numOfCustomers = function () {
    return randomNumOfCustomers(this.minCustomers, this.maxCustomers);
}




Location.prototype.calAverCookiePerHour = function () {
    
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.numOfCustomers() * this.averageCookiesSold));
    }

   
}




function createTable() {
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
}



function firstHeaderRender() {
    // adding headings (first row)
    var parentElement = document.getElementsByTagName('table');
    var tableFirstRow = document.createElement('tr');
    parentElement[0].appendChild(tableFirstRow);

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

    this.calAverCookiePerHour();

    for (var i = 0; i < hours.length; i++) {
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[i];
        tableSecondRow.appendChild(tableData);
        this.total += this.cookiesPerHour[i];
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = this.total;
    tableSecondRow.appendChild(dailyTotal);
}




function lastRender() {
    var parentElement = document.getElementsByTagName('table');
    var tableFinalRow = document.createElement('tr');
    parentElement[0].appendChild(tableFinalRow);
    var dataCell = document.createElement('td');
    dataCell.textContent = 'Totals';
    tableFinalRow.appendChild(dataCell);

    var finalTotal = 0;

    for (var i = 0; i < hours.length; i++) {
        var totalLocationPerHour =0;
        var hourDataCell = document.createElement('td');
        for(var j=0; j<locationArray.length;j++){
            totalLocationPerHour+=locationArray[j].cookiesPerHour[i];
        }
        
        //var hourlyTotal = Math.floor(seattle.calAverCookiePerHour()[i] + tokyo.calAverCookiePerHour()[i] + paris.calAverCookiePerHour()[i] + dubai.calAverCookiePerHour()[i] + lima.calAverCookiePerHour()[i]);
        hourDataCell.textContent = totalLocationPerHour;
        tableFinalRow.appendChild(hourDataCell);
        finalTotal += totalLocationPerHour;
    }
    var totalDataCell = document.createElement('td');
    totalDataCell.textContent = finalTotal;
    tableFinalRow.appendChild(totalDataCell);
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




// attached to the sales html page 
createTable();
firstHeaderRender();
for(var index=0; index<locationArray.length; index++){
    locationArray[index].renderLocationInTable();
}
lastRender();