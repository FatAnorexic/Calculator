
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
const decimal=document.querySelector('.float');
const sign=document.querySelector('.sign');

//Initializer for screen.textContent
screen.textContent='0';

//event listeners for each number 0-9 and each operation except the equals button
numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

window.addEventListener('keydown', keyBoardInput);
document.querySelector('.clear').addEventListener('click',()=>clear());
document.querySelector('.delete').addEventListener('click', ()=>del());
//Event listenter for = button
document.getElementById('equal').addEventListener('click', ()=>equal());
sign.addEventListener('click', changeSign);

//Event listener for adding a decimal
decimal.addEventListener('click',()=>hasDecimal(decimal.textContent));

//Function to set the keys in a keyboard
function keyBoardInput(e){
    (e.key>=0 && e.key <=9) ? setNumber(e.key)
    : e.key==='.' ? hasDecimal(e.key)
    : e.key=== '=' || e.key === 'Enter' ? equal()
    : e.key==='Backspace' ? del()
    : e.key==='Escape' ? clear()
    : (e.key==='+'||e.key==='-'||e.key==='*'||e.key==='/') ? setOperand(e.key)
    : null;
    // console.log(e.key)

}

function changeSign(){ 
    screen.textContent=-1*Number(screen.textContent).toString();
}
function equal(){
    //so we dont fire the calculate function without having an operand
    if(memory['operator']!==''){
        calculate();
        click=true;
    }
}

//We check the object here to complete two tasks. 1) to seperate numerical values from operators
//and 2)If the value operator is not an empty string, the function will pass to the calculate
//function in order to keep the sequentiality request within the assignment. 
function setOperand(operand){
    if(memory['operator']!=='' && !click) {calculate();}
    else if(memory['operator']!=='' && click) {click=false;}
    
    memory['firstInput']=screen.textContent;
    memory['operator']=operand;
    reset=true;
}

function setNumber(number){
    //Prevents 0's or previous inputs from stacking on values: IE 01123-> 1123
    let length=screen.textContent.toString().length;
    if(length>=12 && !reset) return;
    screen.textContent==='0' || reset ? clearScreen(number):screen.textContent+=number;
}

function clearScreen(number){
    screen.textContent=number;
    reset=false;
}

function hasDecimal(decimal){
    //if we're attempting to add a new decimal number after clicking an operand
    //this resets and clears the screen with a leading 0 for us. 
    if(reset) {clearScreen('0');}

    //Prevents multiple decimal points in a single number. 
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
    return (Math.round(number*1000)/1000).toPrecision(10);
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
function del(){
    screen.textContent=screen.textContent.toString().slice(0,-1);
    //we want a base value of zero, always
    if(screen.textContent===''){
        screen.textContent='0';
    }
    
}

//Function for clearing the entire board.
function clear(){
    memory['firstInput']='';
    memory['operator']='';
    memory['secondInput']='';
    click=false;
    screen.textContent='0';
}

//Add an event listener to prevent the enter key from pressing the buttons
window.addEventListener('keydown', (e)=>{
    if(e.target.nodeName==='BUTTON' && e.key==='Enter') {
        e.preventDefault();
        return false;
    } 
}, true);