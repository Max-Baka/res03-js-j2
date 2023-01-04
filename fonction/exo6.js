function add(nb1, nb2) {

    return nb1 + nb2;
}

function sub(nb1, nb2) {
    return nb1 - nb2;
}

function mult(nb1, nb2) {
    return nb1 * nb2;
}

function div(nb1, nb2) {
    return nb1 / nb2;
}

function mod(nb1, nb2) {
    return nb1 % nb2;
}


console.log(add(5, 10));
console.log(sub(20, 7));
console.log(mult(50, 4));
console.log(div(76, 6));
console.log(mod(100, 5));


function askUserOperation(){
    let operateur = "";
    while(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/" && operateur !== "&" ){
        operateur = window.prompt("je veux une operation");
        
    }
    return operateur;
}
function askUserFirstNumber(){
    let firstNumber = "";
        firstNumber = window.prompt("faite votre choix");
        
        return parseInt(firstNumber);
}
function askUserSecondNumber(){
    let secondNumber = "";
        secondNumber = window.prompt("faite encore votre choix");
        
        return parseInt(secondNumber);
}


let operateur =  askUserOperation();
let firstNumber = askUserFirstNumber();
let secondNumber = askUserSecondNumber();

console.log(operateur);
console.log(firstNumber);
console.log(secondNumber);

function calculator(){
    let operateur =   askUserOperation();
    let firstNumber = askUserFirstNumber();
    let secondNumber = askUserSecondNumber();

    if(operateur === "+"){
        return add(firstNumber, secondNumber);
    }
    else if(operateur === "-"){
        return sub(firstNumber, secondNumber);
    }
    else if(operateur === "*"){
        return mult(firstNumber, secondNumber);
    }
    else if(operateur === "/"){
        return div(firstNumber, secondNumber);
    }
    else if(operateur === "%"){
        return mod(firstNumber, secondNumber);
    }
}
let domino = calculator();
console.log(domino);