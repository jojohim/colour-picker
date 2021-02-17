"use strict";

//GETTING SELECTED COLOUR FROM USER
window.addEventListener("DOMContentLoaded", getValue);

//SHOWING SELECTED COLOUR
function getValue() {
    document.getElementById("colour-picker").addEventListener("input", addColour);
  }

//SHOW COLOUR AS COLOURED BOX, FUNCTION HANDLER
function addColour(event) {
    let colouredBoxValue = document.querySelector(".colour").style.backgroundColor = event.target.value;
    //console.log(`HEX: ${colouredBoxValue}`);
    displayHex(colouredBoxValue);
    hexToRGB(colouredBoxValue);

}

//SHOWING COLOUR AS HEX
function displayHex(colouredBoxValue){
    document.querySelector("#HEX p").innerHTML = colouredBoxValue;
}

//CONVERTING HEX TO RGB 
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
    rgbToCSS(r, g, b);

}

//CONVERTING RGB TO CSS STRING 
function rgbToCSS(r, g, b) {
let cssText = `rgb(${r}, ${g}, ${b})`;
displayCSS(cssText);
}

//SHOWING THE COLOR AS CSS STRING
function displayCSS(cssText) {
  document.querySelector("#CSS p").innerHTML = cssText;
}

//SHOWING THE COLOR AS RGB
function displayRGB(r, g, b) {
    document.querySelector("#RGB p").innerHTML = `${r} ${g} ${b}`;
  }

//CONVERTING RGB TO HSL
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
    s *= 100;
    l *= 100;
  
    displayHSL(h,s,l);
    console.log(h, s, l); 

  }

//SHOWING THE COLOR AS HSL 
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

