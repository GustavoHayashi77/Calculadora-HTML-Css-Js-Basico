
let display = document.querySelector("#current_operation");
let controledel = false;
let controlecalc = false;


function input_data(input) {

    display.innerText += input;
    if (input === "+" || input === "-" | input === "/" || input === "*") {
        controlecalc = true;
    }

}


function cleardisplay(input) {
         display.innerText = "";
         controledel = false;
         controlecalc = false;
}


function del(input) {
    if(controledel === true) return;
    display.innerText = display.innerText.slice(0, -1)
}


function calc(input) {
    if (controlecalc === false) return;
    
    try {
        display.innerText = eval(display.innerText);
        controledel = true;
        
    } catch (error) {
        display.innerText = "Error";    
        
    }
        
        
    }


