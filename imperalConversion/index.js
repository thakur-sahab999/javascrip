
let input
//length  conversion
function length (value) {
     input = value
    meterToFeet = (3.2808*input).toFixed(3)
    feetToMeter = ((1/3.2808)*input).toFixed(3)
    document.getElementById("length").textContent = `${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meters`
}

function volume (value) {
    input = value
    litersToGallons = (0.26*input).toFixed(3)
    gallonsToLiters = ((1/0.26)*input).toFixed(3)
    document.getElementById("volume").textContent = `${input} liters = ${litersToGallons} gallons | ${input} gallons = ${gallonsToLiters} liters`
}


function mass (value) {
    input = value
    killosToPounds = (2.20462262185*input).toFixed(3)
    poundsToKillos = ((1/2.20462262185)*input).toFixed(3)
    document.getElementById("mass").textContent = `${input} killos = ${killosToPounds} pounds | ${input} pounds = ${poundsToKillos} killos`
}

function change(val){
let value = val
length(value)
volume(value)
mass(value)
}