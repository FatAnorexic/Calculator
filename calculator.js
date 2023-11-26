
const operands=document.querySelectorAll('.operand');
const numbers=document.querySelectorAll('.number');

const screen=document.getElementById('currentScreen');


//Initializer for screen.textContent
screen.textContent='0';

//event listeners for each number 0-9 and each operation except the equals button
numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

let click=false;
//Event listenter for = button
document.getElementById('equal').addEventListener('click', ()=>{
    //so we dont fire the calculate function without having an operand
    if(memory['operator']!==''){click=true; calculate();}
});

//Object for storing strings of values. These strings will then be converted to strings or floats
//depending on the type of input given.
let memory={
    firstInput:'',
    operator:'',
    secondInput:'',
}

//We check the object here to complete two tasks. 1) to seperate numerical values from operators
//and 2)If the value operator is not an empty string, the function will pass to the calculate
//function in order to keep the sequentiality request within the assignment. 
function setOperand(operand){
    if(memory['operator']===''){
        memory['operator']=operand;
        screen.textContent='0';
        console.log(`Operator: ${memory['operator']}`);
    }else if(click===true){
        memory['operator']=operand;
        memory['secondInput']='';
        screen.textContent='0';
        click=false;
        console.log(`Operator: ${memory['operator']}, Equals Button: ${click}`);
    }else{
        calculate();
        memory['operator']=operand;
        memory['secondInput']='';
        // screen.textContent='0';
        click=false;
        console.log(`Operator: ${memory['operator']}`);
    }
}

function setNumber(number){
    let string=screen.textContent
    //Prevents 0's from stacking on values: IE 01123-> 1123
    if(string.length===1 && screen.textContent==='0'){
        screen.textContent=number;
    }else{
        screen.textContent+=number;
    }

    //Checks for an empty operator to determine if number is appended to 
    //first or second input in the memory object. 
    if(firstInput()){
        memory['firstInput']+=number;
    }else{
        memory['secondInput']+=number;
    }
}

function firstInput(){
    return memory['operator']==='';
}



//function for determining if calculating for int/float numbers
function calculate(){
    //temp filler
    operate();
}
function operate(){
    let x=parseInt(memory['firstInput']);
    let y=parseInt(memory['secondInput']);
    console.log(x);
    console.log(y);

    switch(memory['operator']){
        case '+':
            screen.textContent=add(x,y);
            break;
        case '-':
            screen.textContent=subtract(x,y);
            break;
        case '*':
            screen.textContent=multiply(x,y);
            break;
        case '/':
            screen.textContent=divide(x,y);
            if(screen.textContent===''){
                memory['operator']='';
                screen.textContent='0'
            }
            break;
    }   
    memory['firstInput']=screen.textContent;
    screen.textContent=memory['firstInput']
    console.log(memory['firstInput']);
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
    return y===0 ? alert(`Naughty Naughty!`): x/y;
}


//function for deleting entries on a screen
document.querySelector('.delete').addEventListener('click',()=>{
    if(screen.textContent==='0'){
        screen.textContent='0';
    }
    screen.textContent=screen.innerText.slice(0,-1);

    //we want a base value of zero, always
    if(screen.textContent===''){
        screen.textContent='0';
    }
});

document.querySelector('.clear').addEventListener('click',()=>{
    memory['firstInput']='';
    memory['operator']='';
    memory['secondInput']='';
    click=false;
    console.log(`Input: ${memory['firstInput']}, Operator: ${memory['operator']}, Input: ${memory['secondInput']}`);
    screen.textContent='0';
});