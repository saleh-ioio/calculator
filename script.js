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

let A, B, operator;

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

