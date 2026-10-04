
let expression = "";
const outputWindow = document.getElementById("displayScreen");

function deleteLastInput(){
    expression = expression.substring(0 , expression.length-1);
    outputWindow.value = expression;
}

function getInput(word){
    expression += word;
    outputWindow.value = expression;
}

function clearScreen(){
    expression ="";
    outputWindow.value = "";
}

function printResult(){

    try{
        const result = eval(expression);
        outputWindow.value = result;
        expression = String(result);
    }catch(error){
        outputWindow.value = "ERROR";
    }
    
}