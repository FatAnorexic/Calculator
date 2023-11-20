
const operands=document.querySelectorAll('.operand');

operands.forEach((op)=> op.addEventListener( 'click', ()=> setOperand(op.textContent)));

function setOperand(operand){
    console.log(operand);
}