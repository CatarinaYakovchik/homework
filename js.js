// найти максимальную серию подряд идущих элементов по возрастанию

'use strict'
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  var n = randomInteger(5,15);
  var array = [];
  var i=0;
  
  do {
      array.push(randomInteger(-10,10))
      
      i++;
  }while(i<n);
  n=null;

//var array = [4,6,7,56,8,6,4,96];
var longLengthNumbers = [];
var currentLengthNumbers = [];
//console.log(array)
 for(var i=0; i<array.length; i++){

     if(array[i]<array[i+1]){
        currentLengthNumbers.push(array[i])
    } else if (currentLengthNumbers[currentLengthNumbers.length-1] < array[i] ){
        currentLengthNumbers.push(array[i]);
        // if (currentLengthNumbers.length>longLengthNumbers.length){
        //     longLengthNumbers=currentLengthNumbers;
        // }
        
        currentLengthNumbers=[];
    }
 }
 console.log(longLengthNumbers);