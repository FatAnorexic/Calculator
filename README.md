# Calculator
A Web-based calculator made using HTML, CSS, JS


This is based on an assignment as part of the final portions of the foundations course for 
The Odin Project Fullstack Web Devleopment.

## Assignment

Here are some use cases (abilities your project needs to have):

1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
    - add
    - subtract
    - multiply
    - divide
2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
3. Create a new function `operate` that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    - Do not worry about wiring up the JS just yet.
    - There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
    - Add a “clear” button.
5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
6. Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then `operate()` on the two numbers when the user presses the “=” key.
    - You should already have the code that can populate the display, so once `operate()` has been called, update the display with the ‘solution’ to the operation.
    - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
7. Gotchas: watch out for and fix these bugs if they show up in your code:
    - Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, `12 + 7 - 5 * 3 =` should yield `42`. An example of the behavior we’re looking for would be [this student solution](https://mrbuddh4.github.io/calculator/).
    - **Your calculator should not evaluate more than a single pair of numbers at a time.** Example: you press a number button (`12`), followed by an operator button (`+`), a second number button (`7`), and finally a second operator button (`-`). Your calculator should then do the following: first, evaluate the first pair of numbers (`12 + 7`), second, display the result of that calculation (`19`), and finally, use that result (`19`) as the first number in your new calculation, along with the next operator (`-`).
    - You should round answers with long decimals so that they don’t overflow the screen.
    - Pressing = before entering all of the numbers or an operator could cause problems!
    - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
    - Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

#### Extra credit

- Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a `.` button and let users input decimals! Make sure you don’t let them type more than one though: `12.3.56.5`. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
- Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
- Add a “backspace” button, so the user can undo if they click the wrong number.
- Add keyboard support! You might run into an issue where keys such as (`/`) might cause you some trouble. Read the [MDN documentation for event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to help solve this problem.


## Pseudo Code
>[!warning] Pseudo code is subject to change as the project progresses


```html
(header stuff)
	src links to css, js script
(body)
	<div head>
	<div calculator body>
		(input/output screen)
		<div numbers>
			(buttons 0-9)
		<div operands>
			(buttons + - * / . del clear clearAll =)
		<div equal button>
			<!-- Very important operation! several actions need to happen when this button is called -->
			(button = )
		<div clear and del>
			(buttons clear and del)
	<div footer>
```

```js
//global quearyselector for operand and numbers

event listener for each operator => evnet(click, => setOperand(operator))
event listener for each number => event(click, =>setNumber(number))

memoryobj={}

function setOperand(operator){
	if memobj.operand is empty add input and screen operator
	else fire calculate function 
}

function setNumber(number){
	if previous string index is operator start new number{

	}
	else keep adding digits to string{
		if the first element is 0, string[0]=new input value
	}
}

function isFirst(number){
	let string = screen.textContent
	if the string length < 2 and number !=0{screen.textContent=number;}
}

function calculate(){
	let x=firstinput, y=secondinput
	switch for all operators=> screen.text=x(operator)y
}

event listener del button=>(click, (screen)=>{
	if the value is 0, keep the value at 0
	delete last value in textContent for screen;
	if we have deleted the last value->
	we restore a value of 0;
})

event listener AC button=>(click, (screen, obj)=>{
	delete values on screen and scrub the values in memobj={
		firstInput:0,
		operand:'',
		secondInput:0,
	}
})

```
