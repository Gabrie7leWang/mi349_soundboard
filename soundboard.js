var FirstBUTTON = document.getElementById('FirstBUTTON') 
var SecondBUTTON = document.getElementById ('SecondBUTTON') 
var ThirdBUTTON = document.getElementById('ThirdBUTTON') 
  
FirstBUTTON .addEventListener('click', function () { 
var FirstBUTTONSound = new Audio('FirstBUTTON.wav'); 
FirstBUTTONSound.play(); 
 }) 
 SecondBUTTON.addEventListener('click', function () { 
 var SecondBUTTONSound = new Audio('SecondBUTTON.wav'); 
 SecondBUTTONSound.play(); 
 }) 
 ThirdBUTTON.addEventListener('click', function () { 
 var ThirdBUTTONSound = new Audio('ThirdBUTTON.wav'); 
 ThirdBUTTONSound.play(); 
 }) 
 FirstBUTTON.addEventListener('mouseenter', function () { 
 var  FirstBUTTONSound = new Audio('CLICK.wav'); 
 FirstBUTTONSound.play(); 
 }) 
 SecondBUTTON.addEventListener('mouseenter', function () { 
 var SecondBUTTONSound = new Audio('CLICK.wav'); 
 SecondBUTTONSound.play(); 
 }) 
 ThirdBUTTON.addEventListener('mouseenter', function () { 
 var ThirdBUTTONSound = new Audio('CLICK.wav'); 
 ThirdBUTTONSound.play(); })
 
