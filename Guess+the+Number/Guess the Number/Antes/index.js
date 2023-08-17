let computerNumber;
let userNumbers = [];
let attempts = 0;


function init(){
   computerNumber = Math.floor(Math.random() * 100 + 1);
   console.log(computerNumber);
}

function compareNumbers(){
   const userNumber = Number(document.getElementById('inputBox').value);
   userNumbers.push(' ' + userNumber);
   document.getElementById('guesses').innerHTML = userNumbers

   if(userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = "Seu numero é muito alto"
    document.getElementById('inputBox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts;

   }
   else if (userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = "Seu numero é muito baixo"
    document.getElementById('inputBox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts;

   }
   else{
    document.getElementById('textOutput').innerHTML = "Parabéns!!!"
    attempts++
    document.getElementById('attempts').innerHTML = attempts;
   }
}