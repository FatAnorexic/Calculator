
const operands=document.querySelectorAll('.operand');
const numbers=document.querySelectorAll('.number');

const screen=document.getElementById('currentScreen');

//Initializer for screen.textContent
screen.textContent='0';

numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

let memory={
    firstInput:0,
    operator:'',
    secondInput:0,
}

//We check the object here to complete two tasks. 1) to seperate numerical values from operators
//and 2)If the value operator is not an empty string, the function will pass to the calculate
//function in order to keep the sequentiality request within the assignment. 
function setOperand(operand){
    if(memory.operator===''){
        memory.firstInput=screen.textContent;
        memory.operator=operand;
        screen.textContent='0';
        console.log(`Input: ${memory.firstInput}, Operator: ${memory.operator}`);
    }
}

function setNumber(number){
    console.log(number);
    if(isFirst(number) && number!==0){
        screen.textContent=number;
    }else{
        screen.textContent+=number;
    }
}

function isDigit(){
    //converting the text content into a string we can analyze via element
    let string=screen.textContent;
    // Delete later
    console.log(string);
    if(!parseInt(string[string.length-1])){ 
        // delete upon finalization
        console.log(string[string.length-1])
        console.log('fire');
        return false;
    }
    return true;
}

//This function takes the textContent and determines if the initial 0
//needs to be replaced with the entered digit or not by returning a 
//boolean value.
function isFirst(number){
    let string=screen.textContent;
    if(string.length===1 && screen.textContent==='0'){
        return true;
    }
    return false;
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