
const operands=document.querySelectorAll('.operand');
const numbers=document.querySelectorAll('.number');

const screen=document.getElementById('currentScreen');


numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

function setOperand(operand){
    console.log(operand);
    screen.textContent+=operand;
}

function setNumber(number){
    console.log(number);
    screen.textContent+=number;
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