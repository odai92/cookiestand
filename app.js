'use strict'


var workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', 
'11:00am', '12:00pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 am', '8:00 am', 'Daily Total'];
var minCus = [];
var maxCus = [];
var avgCoSale = [];
var locations = ['seattle', 'tokyo','dubai','paris','lima'];


// here i made the objects for the five branchs, i still need to make the for loop to generate a random number, then calculate the sales for each hour using another for loop then render the list
var seattle = {
      locations:"seattle",
      minCus:23 ,
      maxCus:65 ,
      avgCoSale:6.3,
      resultPerHourArr: [0],
      
      
}
var myArray = Object.values(seattle);
document.getElementById("odai").innerHTML = myArray;

console.log(seattle);

var tokyo = {
    locations:"tokyo",
    minCus:3 ,
    maxCus:24 ,
    avgCoSale:1.2,
    resultPerHourArr: [0],
    
    
}
var myArray2 = Object.values(tokyo);
document.getElementById("odai2").innerHTML = myArray2;
console.log(tokyo);

var dubai = {
    locations:"duabi",
    minCus:11 ,
    maxCus:38 ,
    avgCoSale:3.7,
    resultPerHourArr: [0],
    
    
}
var myArray3 = Object.values(dubai);
document.getElementById("odai3").innerHTML = myArray3;
console.log(dubai);

var paris = {
    locations:"paris",
    minCus:20 ,
    maxCus:38 ,
    avgCoSale:2.3,
    resultPerHourArr: [0],
    
    
}
var myArray4 = Object.values(paris);
document.getElementById("odai4").innerHTML = myArray4;
console.log(paris);



var lima = {
    locations:"lima",
    minCus:2 ,
    maxCus:16 ,
    avgCoSale:4.6,
    resultPerHourArr: [0],
    
    
}
var myArray5 = Object.values(lima);
document.getElementById("odai5").innerHTML = myArray5;
console.log(lima);

