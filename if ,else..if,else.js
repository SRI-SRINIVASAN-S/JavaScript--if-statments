//We will learn all about the if ,else..if & else conditions in JS :)

//if statement :

/*The syntax of the if statement is:

if (condition) {
    // the body of if
}

The if statement evaluates the condition inside the parenthesis ()

If the condition is evaluated to true, the code inside the body of if is executed.
If the condition is evaluated to false, the code inside the body of if is skipped.
*/

const fit =5001;
const loss =4999;
if (fit > loss){
    console.log('the if condition is true so the if block is executed successfully!')
}
console.log('this block will be executed every time becauseit is in outside the if statements')

const cycle =[1,2,3,4,5,6];
const bike =[1,2,3,4,5,6,7,8];
if (bike < cycle){
    console.log('here the condition is false so the if block will not be execute it')
}
console.log('the if condition is false so this is executed');


// Else statement

/* An if statement can have an optional else clause. The syntax of the if...else statement is:

if (condition) {
    // block of code if condition is true
} else {
   // block of code if condition is false
}

The if..else statement evaluates the condition inside the parenthesis.

If the condition is evaluated to "true" ,
the code inside the body of if statement  is executed
the code inside the body of else is skipped from execution

If the condition is evaluated as "false" ,

the code inside the body of else is executed
the code inside the body of if statement is skipped from execution
*/
const upside =500;
const downside =600;
if (upside > downside){
    console.log('the if condition is true so it is executed')
}else{
    console.log('here the else is executed because the if condition is false')
}

const right =1001;
const left =1000;
if (right < left){
    console.log('We got it !')
}else {
    console.log('practice makes perfect')
}

/*The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else  can be used.

The syntax of the if...else if...else statement is:

if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}

If condition1 evaluates to true, the code block 1 is executed.
If condition1 evaluates to false, then condition2 is evaluated.
If the condition2 is true, the code block 2 is executed.
If the condition2 is false, the code block 3 is executed.
*/
const stat ='509';
const stat1 ='509';
if (stat < stat1){
    console.log('if condition is false so not executed')
}else if (stat === stat1){          //=== note here we used strickly equal to
    console.log('the condition is true so it is executed ')
}else{
    console.log('the condition is true in else..if so else willnot be executed')
}

const stat01 =901;                          // Inside the if statement we can you number of time else..if we need.
const stat02 =901;
if (stat01 > stat02)
    console.log('good try! Success ')
else if (stat01 != stat02)
    console.log('executed ')
else if(stat01 == stat02)
    console.log('you  did it ')
else
    console.log('we try at nxt time')

//If the body of if...else has only one statement, we can omit { } in our programs.

const battery =500;
const cell =600;
if (battery > cell)
    console.log('Do more practice')
else
    console.log('We get it, bye ')

console.log('this is all about if ,else..if & else conditions ');

//THANK YOU (: