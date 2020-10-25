"use strict"
/*
let numInput
let tempType
let origUnit
let convUnit
*/


document.getElementById("convReq").addEventListener("click", convTemp);


function convTemp (){
let origUnit = prompt("Input a number!");
let tempType = prompt("What Unit? Enter f for Farenheit, c for Celsius");

let convUnit = (tempType=="f") ? ((origUnit-32)*5/9) :
(tempType=="c") ? ((origUnit*9/5)+32) :
"Please input a unit";

alert( `${origUnit}${tempType} converts to ${convUnit}!` );
}
/*
let convUnit = (tempType=="f") ? ((origUnit-32)*5/9) :
(tempType=="c") ? ((origUnit*9/5)+32) :
"Please input a unit";

}else if (document.getElementById('tempTypeF').checked) { 
                let convUnit =((origUnit*9/5)+32);
                alert( `${origUnit}+"C" converts to ${convUnit}+"F"` );
            } 


/*
let numInput
let tempType
let origUnit
let convUnit
let tempTypeF
let tempTypeC




function display() {  
            if(tempTypeF) { 
                let convUnit =((origUnit-32)*5/9);
                document.write( `${origUnit}+"F" converts to ${convUnit}+"C"` );
            
            
        } 
}

console.log(origUnit)
*/