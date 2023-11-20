
const operands=document.querySelectorAll('.operand');
const numbers=document.querySelectorAll('.number');


numbers.forEach(number => number.addEventListener('click',()=>setNumber(number.textContent)))
operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

function setOperand(operand){
    console.log(operand);
}

function setNumber(number){
    console.log(number);
}