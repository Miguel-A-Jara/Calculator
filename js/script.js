const displayCalculator = document.querySelector('.displayCalculator'); //Main display of our calculator




/*===========================   FUNCTIONS   ===========================*/
function showInDisplay(value){
    if(value == 'C' || value == '='){
        return
    }

    if(displayCalculator.innerHTML == ''){
        if(value == '+' || value == '-' || value == '*' || value == '/'){
            return
        } else {
            displayCalculator.innerHTML += value;
        }
    } else {
        displayCalculator.innerHTML += value;
    }
}




function clearDisplay(){
    displayCalculator.innerHTML = '';
}




function deleteLastDigit(){
    displayCalculator.innerHTML = displayCalculator.innerHTML.slice(0, -1);
}




function calculateResultFunction(){
    let result = eval(displayCalculator.innerHTML);
    if(result == undefined || result == NaN || result == Infinity){
        displayCalculator.innerHTML = "ERROR";
    } else {
        displayCalculator.innerHTML = result;
    }
}




/*===========================   MAIN CODE   ===========================*/
//Buttons input Functionality
document.addEventListener('click', (e) => {
    if(e.target.matches('button')){
        showInDisplay(e.target.innerHTML);
    }

    if(e.target.innerHTML == "AC"){
       clearDisplay(); 
    }

    if(e.target.innerHTML == "C"){
        deleteLastDigit();
    }

    if(e.target.innerHTML == '='){
        calculateResultFunction();
    }
});




//Keys input Functionality
document.addEventListener('keydown', (e) => {
    if(!isNaN(Number(e.key))){
        showInDisplay(e.key);
    }

    if(e.key == "/" || e.key == "*" || e.key == "+" || e.key == "-"){
        showInDisplay(e.key);
    }

    if(e.key == "Delete"){
        clearDisplay();
    }

    if(e.key == "Backspace"){
        deleteLastDigit();
    }

    if(e.key == "Enter"){
        calculateResultFunction();
    }
})
