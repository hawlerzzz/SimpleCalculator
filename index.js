

const display = document.getElementById("display");

/* Appends a character(number, operator or symbol) to the expression*
ex: if input = "2" and the display shows "4+" it becomes "2+4"*/


function appendToDisplay(input){
    display.value += input;

}

/* Clears the calculator display */

function clearDisplay(){
    display.value = "";

}

/*Evaluates expressions using eval(), if expression is invalid the display shows a "Error"*/

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
}