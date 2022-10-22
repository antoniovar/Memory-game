//Variable initialization
let backCards = 0; //Number of cards that are showing the value
//Random numbers for the cards values
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers = numbers.sort(() => Math.random()-0.5)
//First and seccond card flipped
let firstFlipped = null;
let secondFlipped = null;
//Comparaison Values
let firstValue = null;
let secondValue = null;
//Pairs completes
let completes = 0;
//Movements
let movements = 0;


//Principal Function
function showValue(id){
  backCards ++ ;
  if (backCards == 1){
    //show first value
    firstFlipped = document.getElementById(id);
    firstFlipped.innerHTML= numbers[id];
    firstValue = numbers[id]
    //Disable button
    firstFlipped.disabled = true;
  }else if(backCards == 2){
    //show second value
    secondFlipped =  document.getElementById(id);
    secondFlipped.innerHTML = numbers[id]
    secondValue = numbers[id]
    //Increment movement
    movements ++;
    let value = document.getElementById('movements')
    value.innerHTML = 'Movements: ' + movements ;
    //Disable button
    secondFlipped.disabled = true;
    if(firstValue == secondValue){
      backCards = 0;
      completes ++;
      let correct = document.getElementById('correct')
      correct.innerHTML = 'Correct: ' + completes;
      if(completes==8){
        correct.innerHTML = 'Congratulations You Won 🥳 🎉';
      }
    }else{
      //Back to hidden value
      setTimeout(() => {
        firstFlipped.innerHTML = ' ';
        secondFlipped.innerHTML = ' ';
        firstFlipped.disabled = false;
        secondFlipped.disabled = false;
        backCards = 0;
      }, 500);
    }
  }
  else{
    alert('If the cards have different values, you must wait for them to turn over again before selecting another')
  }


}
