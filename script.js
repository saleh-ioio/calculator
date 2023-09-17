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

function operator(operator, a, b){
switch(operator){
    case "+":
        add(a,b);
        break;
    case "-":
        subtract(a,b);
        break;
    case "*":
        multiply(a,b);
        break;
    case "/":
        devide(a,b);
        break;
    default:
        console.log("no such operator");
}
}