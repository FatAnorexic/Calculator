function Operator(){
    let operand=document.querySelectorAll('.operand');
    operand.forEach((op)=>{
        op.addEventListener('click', ()=>{
            let text=op.textContent;
            //Testing to see each button displays
            console.log(text);
        });
    });
}

function Input(){

}

function calculator(){
    const calc={
        firstNum:Input(),
        operand:Operator(),
        secondNum:Input(),
    }
}
Operator();