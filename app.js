'use strict'

// array for working hours & will be used when we create the table to be the first row
var hours = ["6:00am", "7:00am", "8:00am", " 9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"]
var locationArray = []; // here is the array will return the result from our object for reach branch
function randomNumOfCustomers(minimum, maximum) {// here is the object used for generating a random number
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}


function Location(min, max, average, name) { // and here is our costructre
    this.minCustomers = min; // the object have properties of min and max customer and the avarage sell per hour and the name of the branch
    this.maxCustomers = max;
    this.averageCookiesSold = average;
    this.locationName = name;
    this.cookiesPerHour = []; // after generating a random number we will use it to get the avarge sell per hour and store it in this array
    this.total = 0;
    locationArray.push(this); // all the results will be pushed the the locationarray
}



Location.prototype.numOfCustomers = function () {
    return randomNumOfCustomers(this.minCustomers, this.maxCustomers);
} // here generated a random number of customer using the result from each branch by taking the min and max and then return it to the object so it will be use to calculate the avarage cookie sell per hour




Location.prototype.calAverCookiePerHour = function () { // a function is created to calculate the avg
    
    for (var i = 0; i < hours.length; i++) { // this line mean we have integer equal zero and i is less than the length of hours array witch is true , i will keep add one untill reach the length of the array
        this.cookiesPerHour.push(Math.floor(this.numOfCustomers() * this.averageCookiesSold));// this line means the result of the randomnumber of customer by the result of avg will be pushed to the array for each hour inside our object so for each location
    }

   
}




function createTable() { // a function made to create the table 
    var parentElement = document.getElementById("TableOfData"); // the parent element will be the id witch was selected inside the html file and took the id = TableOfData and the following table type will be appenedchild for it 
    console.log(parentElement);
    var article = document.createElement('article'); // an article was creatied 
    parentElement.appendChild(article);// an article was appendchild for the parent element
    var h2 = document.createElement('h2');// an h2 war created 
    h2.textContent = "Locations: ";// an h2 got a text content discribed the locations 
    article.appendChild(h2);// the h2 was appened child to the article
    // start of the table
    var table = document.createElement('table');// a table was created 
    table.setAttribute('id','salmonTable')
    article.appendChild(table);// a table is the article child
}



function firstHeaderRender() {// creating the header of the table
    // adding headings (first row)
    var parentElement = document.getElementsByTagName('table'); // the parent element is the table
    var tableFirstRow = document.createElement('tr');// the first row is created
    parentElement[0].appendChild(tableFirstRow);// the first index of the row witch is tr is child of the tableFirstRow

    var headerEmpty = document.createElement('th'); //create an element th
    headerEmpty.textContent = ''; // the th content is empty
    tableFirstRow.appendChild(headerEmpty); // the th is child or the first row

    for (var i = 0; i < hours.length; i++) { // here a for loop is used to give each th lengthed from the hours array its result and the th is child of the table first row
        var header = document.createElement('th');
        header.textContent = hours[i];
        tableFirstRow.appendChild(header);
    }
    var headerDailyTotal = document.createElement('th'); // a th is made to show the box of text content the daily location total and its child for the first row
    headerDailyTotal.textContent = 'Daily Location Total';
    tableFirstRow.appendChild(headerDailyTotal);
}





Location.prototype.renderLocationInTable = function () { // here insirt the location to render each td
    var parentElement = document.getElementsByTagName('table'); // the table was called by its tage name and its the parent element
    console.log(parentElement);

    var tableSecondRow = document.createElement('tr'); 
    parentElement[0].appendChild(tableSecondRow); 
    var nameOfLoction = document.createElement('td');
    nameOfLoction.textContent = this.locationName;
    tableSecondRow.appendChild(nameOfLoction);

    this.calAverCookiePerHour(); // the calculated avvrge 

    for (var i = 0; i < hours.length; i++) { // looping the lenght of the first row 'hours' and filling the td with the result from avg*random witch is the function made before on each index of td
        var tableData = document.createElement('td');
        tableData.textContent = this.cookiesPerHour[i];
        tableSecondRow.appendChild(tableData);
        this.total += this.cookiesPerHour[i];
    }

    var dailyTotal = document.createElement('td');
    dailyTotal.textContent = this.total;
    tableSecondRow.appendChild(dailyTotal);
}




function lastRender() { // in the last render a tr is created and been a total final row and is index 0 of the table and have text content Totals 
    var parentElement = document.getElementsByTagName('table');
    var tableFinalRow = document.createElement('tr');
    parentElement[0].appendChild(tableFinalRow);
    var dataCell = document.createElement('td');
    dataCell.textContent = 'Totals';
    tableFinalRow.appendChild(dataCell);

    var finalTotal = 0;

    for (var i = 0; i < hours.length; i++) { // to calculate the total from each hour for each branch 
        var totalLocationPerHour =0; // 3rfna integer qemto 0
        var hourDataCell = document.createElement('td'); // a td is created to and got a text content of final total  and its chiled of tablefinalrow
        for(var j=0; j<locationArray.length;j++){ // the j is less than location array 
            totalLocationPerHour+=locationArray[j].cookiesPerHour[i]; // the total of the first index for location array is for the total of first index of cookierperhour
        }
        hourDataCell.textContent = totalLocationPerHour; // hourdatacell texet content is the thewkntkenkewrntk
        tableFinalRow.appendChild(hourDataCell); // hourdatacell is child of the finalrow
        finalTotal += totalLocationPerHour; // the final total is the result from the for loop totallocat~
    }
    var totalDataCell = document.createElement('td'); // td is created
    totalDataCell.textContent = finalTotal; // a td got a text content of final total
    tableFinalRow.appendChild(totalDataCell); // the created td is child of tablefinal row
}



// using the constructre new branchs (objects) was created and there properties one by one the min max avg and name

var seattle = new Location(23, 65, 6.3, 'Seattle')
var tokyo = new Location(3, 24, 1.2, 'Tokyo');
var dubai = new Location(11, 38, 3.7, 'Dubai');
var paris = new Location(20, 38, 2.3, 'Paris');
var lima = new Location(2, 16, 4.9, 'Lima');

// attached to the sales html page to create the table
createTable(); // the function is called 
firstHeaderRender(); // calling the function
for(var h=0; h<locationArray.length; h++){// table content 
    locationArray[h].renderLocationInTable()
}
lastRender(); // calling my last render




// here i create a listener 

var add = document.getElementById('add');
add.addEventListener('submit', function(event){
    event.preventDefault();
    
    var min = parseInt(event.target.min.value)
    var max = parseInt(event.target.max.value)
    var avg = parseInt(event.target.average.value)
    var name = event.target.name.value


    var newInput = new Location(min, max, avg, name );
    console.log(newInput);


   deleteRow();// table removed
   newInput.renderLocationInTable();//new input added

   lastRender()  // the hole table is called 
   console.log(add); 
   
});

function deleteRow(){// to remove the table in line 171
    document.getElementById('salmonTable').deleteRow(-1);
}



// i have a bug while adding a new branch ,, 




