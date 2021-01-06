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
      cusNumer : [],  //avg num of customers per hour 
      hourlySales: [],
      numberOfCustomer : function(){
          for (var i = 0 ; i< 13 ; i++){
              seattle.cusNumer[i]= parseInt(Math.random()* (this.maxCus-this.minCus)+ this.maxCus);
            // return this.cusNumer;
          }  
      } ,
      calculateSales : function(){
        for (var i=0; i< this.cusNumer.length;i++){
        this.hourlySales[i] = parseInt( this.cusNumer[i] )*parseInt(this.avgCoSale);
         return this.hourlySales[i];
        
        }
      }
      
}


seattle.numberOfCustomer();
console.log(seattle.cusNumer);

var tokyo = {
    locations:"tokyo",
    minCus:3 ,
    maxCus:24 ,
    avgCoSale:1.2, 
    cusNumer : [],  //avg num of customers per hour 
      hourlySales: [],
}
tokyo.sellPerHour = Math.floor(Math.random() * 9);
var myArray2 = Object.values(tokyo);
document.getElementById("odai2").innerHTML = myArray2;
console.log(tokyo);





seattle.sellPerHour = Math.floor(Math.random() * 10);


var myArray = Object.values(seattle);
document.getElementById("odai").innerHTML = myArray;

console.log(Math.random());// so this makes a random number!!
console.log(Math.random()*10);// and when multiply by ten we got a number between zero and ten
console.log(Math.floor(Math.random() * 10));// using floor gave me a fixed number,,
//how do i generate a random number and return the value to mmy array, i need to use the min and max values and multiply them with the random number then return them result of the calculation sum m3 b3d to the avg coki sale per hour
// i will try to describe the function to make that inside the first branch witch is seattle use for 


//==================



randomNumber =[];//I want to return the calclation of the random number to this empty array for each branch

function randomNumber (minCus,maxCus){// i used a function have the min and max numbers of each branchs 
    for (let index = 0; index < workingHours.length; index++) {
        var result = Math.floor(Math.random()*(maxCus - minCus + 1) + minCus); // the result of the random number generated is inside 'result'
        
    }; for (let index = 0; index < randomNumber.length; index++) {
        const perHour = workingHours[index]; // here i made a container for the result to return the answer to the avgperhour
}
};
console.log(randomNumber);

// console.log(randomNumber);
//==============
// didnt work as what i think,
//=============
// ok after generating a number in a way or another i have to show an unorderlist for each citie showing the time from 6 am to 7pm and the sales per hour, ya halawa


console.log(seattle);


var dubai = {
    locations:"duabi",
    minCus:11 ,
    maxCus:38 ,
    avgCoSale:3.7,   
}
dubai.sellPerHour = Math.floor(Math.random() * 12);
var myArray3 = Object.values(dubai);
document.getElementById("odai3").innerHTML = myArray3;
console.log(dubai);

var paris = {
    locations:"paris",
    minCus:20 ,
    maxCus:38 ,
    avgCoSale:2.3,
}
paris.sellPerHour = Math.floor(Math.random() * 7);
var myArray4 = Object.values(paris);
document.getElementById("odai4").innerHTML = myArray4;
console.log(paris);



var lima = {
    locations:"lima",
    minCus:2 ,
    maxCus:16 ,
    avgCoSale:4.6,    
}
lima.sellPerHour = Math.floor(Math.random() * 11);
var myArray5 = Object.values(lima);
document.getElementById("odai5").innerHTML = myArray5;
console.log(lima);

