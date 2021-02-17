"use strict";

//GETTING SELECTED COLOUR FROM USER
window.addEventListener("DOMContentLoaded", getValue);

//SHOWING SELECTED COLOUR
function getValue() {
    document.getElementById("colour-picker").addEventListener("input", function (event) {
      let hexValue = addColour(event); //hexValue = hex
      displayHex(hexValue);

      let rgbValue = hexToRGB(hexValue); //rgbValue = rgb
      displayRGB(rgbValue);

      let cssValue = rgbToCSS(rgbValue); //cssValue = css
      displayCSS(cssValue);

      let hslValue = rgbToHSL(rgbValue); // hslValue = hsl
      displayHSL(hslValue);
    });
  }

//SHOW COLOUR AS COLOURED BOX
function addColour(event) {
    document.querySelector(".colour").style.backgroundColor = event.target.value;
    let hex = event.target.value;
    console.log(hex);
    return hex;

}

//SHOWING COLOUR AS HEX
function displayHex(hexValue){
    document.querySelector("#HEX p").innerHTML = hexValue;
}

//CONVERTING HEX TO RGB 
function hexToRGB(hexValue) {
    const rString = hexValue.substring(1, 3);
    const gString = hexValue.substring(3, 5);
    const bString = hexValue.substring(5, 7);
  
    const r = parseInt(rString, 16);
    const g = parseInt(gString, 16);
    const b = parseInt(bString, 16);

    let rgb = {
      r,
      g,
      b,
    }
    return rgb;
}

//CONVERTING RGB TO CSS STRING 
function rgbToCSS(rgbValue) {
let css = `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
return css;
}

//SHOWING THE COLOR AS CSS STRING
function displayCSS(cssValue) {
  document.querySelector("#CSS p").innerHTML = cssValue;
}

//SHOWING THE COLOR AS RGB
function displayRGB(rgbValue) {
    document.querySelector("#RGB p").innerHTML = `${rgbValue.r} ${rgbValue.g} ${rgbValue.b}`;
  }

//CONVERTING RGB TO HSL
  function rgbToHSL(rgbValue){
    rgbValue.r /= 255;
    rgbValue.g /= 255;
    rgbValue.b /= 255;
  
    let h, s, l;
  
    const min = Math.min(rgbValue.r, rgbValue.g, rgbValue.b);
    const max = Math.max(rgbValue.r, rgbValue.g, rgbValue.b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === rgbValue.r) {
      h = 60 * (0 + (rgbValue.g - rgbValue.b) / (max - min) );
    } else
    if (max === rgbValue.g) {
      h = 60 * (2 + (rgbValue.b - rgbValue.r) / (max - min) );
    } else
    if (max === rgbValue.b) {
      h = 60 * (4 + (rgbValue.r - rgbValue.g) / (max - min) );
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

    let hsl = `${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;

    return hsl;

  }

//SHOWING THE COLOR AS HSL 
  function displayHSL(hslValue) {
      document.querySelector("#HSL p").innerHTML = hslValue;
  }


