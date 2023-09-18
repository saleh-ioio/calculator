function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a -b;
}

function multiply(a, b){
    return a*b;
}

function devide(a, b){
    if(b == 0)
    return "error cant devide by 0";
    return a/b;
}

let A = 0, B = 0, operator = null;
const stages = {
    a: 1,
    b: 2,
    opert: 3
}
let currentVar = stages.a;

function operatorfunc(operator, a, b){
switch(operator){
    case "+":
        return add(a,b);
    case "-":
        return subtract(a,b);
    case "*":
        return multiply(a,b);
    case "/":
        return devide(a,b);
        
    default:
        return "no such operator";
}

}
let screen = document.querySelector('.screen');

function saveUserInputValue(input){
   console.log(isNaN(input));
   if(!isNaN(input) && currentVar == stages.a) {
    A=  parseFloat((A + "")+  input);
    currentVar = stages.b
    currentVar=stages.a;
    screen.textContent = A;
   }else if((input == "+"|| input == "-" || input == "/"|| input == "*") && (currentVar == stages.a || currentVar == stages.opert)){
    operator = input;
    currentVar= stages.opert
    screen.textContent = `${A} ${operator}`  ;
   }else if( !isNaN(input) && (currentVar == stages.opert || currentVar == stages.b)){

    B=  parseFloat((B + "")+  input);
    currentVar = stages.b
    screen.textContent =`${A} ${operator} ${B}` ;
   }else if( input == "="){
    if(operator == null){
        return screen.textContent = "error 'must choose operator'"
    }
    A = Math.round(operatorfunc(operator, A, B) *100)/100;
    screen.textContent = A;
    B= 0;
    operator=null;
    currentVar =stages.a;
   }else if(input == 'clear'){
    A=0;
    B=0;
    operator=null;
    currentVar= stages.a
    screen.textContent = "0";
   }else if((input == "+"|| input == "-" || input == "/"|| input == "*") && stages.b){
    A = Math.round( operatorfunc(operator , A, B)*100)/100;
    B=0;
    operator=input;
    currentVar=stages.opert;
    screen.textContent = `${A} ${operator}`
   }else if(input = 'delete'){
    switch(currentVar){
        case stages.a:
            A= Math.floor( A /10) ;
            screen.textContent = A;
            break;
        case stages.b:
            B = Math.floor(A/10);
            screen.textContent =`${A} ${operator} ${B}` ;
            break;
        case stages.opert:
            screen.textContent = `${A} `  ;
            operator = null;
    }
    

   } else{
    console.log("no such thing")
   }

}

