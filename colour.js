"use strict";

//access the current value of the colour picker 
window.addEventListener("DOMContentLoaded", getValue);

//Call add colour via eventlistener
function getValue() {
    document.getElementById("colour-picker").addEventListener("input", addColour);
  }

//add current colour to box and call conversions
function addColour(event) {
    let colouredBoxValue = document.querySelector(".colour").style.backgroundColor = event.target.value;
    console.log(`HEX: ${colouredBoxValue}`);
    displayHex(colouredBoxValue);
    hexToRGB(colouredBoxValue);
}

//display hex
function displayHex(colouredBoxValue){
    document.querySelector("#HEX p").innerHTML = colouredBoxValue;
}

//RGB conversion and display
function hexToRGB(colouredBoxValue) {
    const rString = colouredBoxValue.substring(1, 3);
    const gString = colouredBoxValue.substring(3, 5);
    const bString = colouredBoxValue.substring(5, 7);
  
    const r = parseInt(rString, 16);
    const g = parseInt(gString, 16);
    const b = parseInt(bString, 16);
    console.log(`RGB: ${r}${g}${b}`)
    displayRGB(r, g, b);
    rgbToHSL(r, g, b);
}

function displayRGB(r, g, b) {
    document.querySelector("#RGB p").innerHTML = `${r} ${g} ${b}`;
  }

//HSL conversion and display
  function rgbToHSL(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) 
    {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
  
    displayHSL(h,s,l);
    console.log(h, s, l); 

  }

  function displayHSL(h,s,l) {
      document.querySelector("#HSL p").innerHTML = `${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;
  }

//1. call functin with eventlistener
//2. AddEventListener for mouse over colour 
//3. display hovered colour in colour field 
//4. functions that collects and displays the following:
    //- HEX Code 
    //- RGB Values 
    //- HSL Values

