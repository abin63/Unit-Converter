/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertInput = document.getElementById("convert-input");
const convertBtn = document.getElementById("convert-btn");
const lengthOut = document.getElementById("length-out");
const volumeOut = document.getElementById("volume-out");
const massOut = document.getElementById("mass-out");

convertBtn.addEventListener("click", function(){
    const value = Number(convertInput.value);
    
    if(isNaN(value) || value < 1){
        alert("Please enter a valid number");
        return;
    }
    
    meterToFeet(value);
    literToGallon(value);
    kilogramToPound(value);
});

function meterToFeet(value){
   const feetValue = value * 3.281;
   const meterValue = value * 0.3048;
   lengthOut.textContent = `${value} meter = ${feetValue.toFixed(3)} feet | ${value} feet = ${meterValue.toFixed(3)} meter`
}

function literToGallon(value){
    const gallonValue = value * 0.264;
    const literValue = value * 3.78541;
    volumeOut.textContent = `${value} liters = ${gallonValue.toFixed(3)} gallons | ${value} gallons = ${literValue.toFixed(3)} liters`    
}

function kilogramToPound(value){
    const poundValue = value * 2.204;
    const kilogramValue = value * 0.45359237;
    massOut.textContent = `${value} kilogram = ${poundValue.toFixed(3)} pounds | ${value} pounds = ${kilogramValue.toFixed(3)} kilograms`
}