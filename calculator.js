
//Object for storing strings of values. These strings will then be converted to Ints or floats
//depending on the type of input given.
let memory={
    firstInput:'',
    secondInput:'',
    operator: '',
}
let click=false;
let reset=false;

const operands=document.querySelectorAll('.operand');
const numbers=document.querySelectorAll('.number');
const screen=document.getElementById('currentScreen');
const decimal=document.querySelector('.float')
//Initializer for screen.textContent
screen.textContent='0';

//event listeners for each number 0-9 and each operation except the equals button
numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

//Event listenter for = button
document.getElementById('equal').addEventListener('click', ()=>{
    //so we dont fire the calculate function without having an operand
    if(memory['operator']!==''){
        calculate();
        click=true;
    }
});

//Event listener for adding a decimal
decimal.addEventListener('click',()=>hasDecimal(decimal.textContent));

//We check the object here to complete two tasks. 1) to seperate numerical values from operators
//and 2)If the value operator is not an empty string, the function will pass to the calculate
//function in order to keep the sequentiality request within the assignment. 
function setOperand(operand){
    if(memory['operator']!=='' && !click) {calculate();}
    else if(memory['operator']!=='' && click) {click=false;}
    
    memory['firstInput']=screen.textContent;
    memory['operator']=operand;
    console.log(`Operand: ${memory["operator"]}, Input: ${memory['firstInput']}`)
    reset=true;
}

function setNumber(number){
    //Prevents 0's or previous inputs from stacking on values: IE 01123-> 1123
    screen.textContent==='0' || reset ? clearScreen(number):screen.textContent+=number;
}

function clearScreen(number){
    screen.textContent=number;
    reset=false;
}

function hasDecimal(decimal){
    if(reset) {clearScreen('0');}
    screen.textContent.toString().includes('.') ? null:screen.textContent+=decimal;
}

function calculate(){
    //temp filler
    if(memory['operator']===''|| reset) {return;}

    if(memory['operator']==='/' && screen.textContent==='0'){
        alert(`Naughty Naughty!`);
        return;
    }
    memory['secondInput']=screen.textContent;
    screen.textContent=roundAnswer(
        operate(memory['operator'], memory['firstInput'], memory['secondInput'])
        );
}

function roundAnswer(number){
    return Math.round(number*1000)/1000;
}


function operate(operator, first, second){
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);

    switch(operator){
        case '+':
            return add(first,second);
        case '-':
            return subtract(first,second);
        case '*':
            return multiply(first,second);
        case '/':
            if(second===0) {return null;}
            return divide(first,second);
        default:
            return null;
    }
}

//Basic math functions. 
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}


//function for deleting entries on a screen
document.querySelector('.delete').addEventListener('click',()=>{
    screen.textContent=screen.textContent.toString().slice(0,-1);
    //we want a base value of zero, always
    if(screen.textContent===''){
        screen.textContent='0';
    }
});

//Function for clearing the entire board.
document.querySelector('.clear').addEventListener('click',()=>{
    memory['firstInput']='';
    memory['operator']='';
    memory['secondInput']='';
    click=false;
    screen.textContent='0';
});