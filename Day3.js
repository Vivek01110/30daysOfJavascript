// Activity 1 : If - else Statement

// Task 1: 
// Write a program to check if a number is positive,negative, or Zero and log the result 

let num = 10;
if(num>0)
    console.log("positive");
else if(num<0)
    console.log("number is Negative");
else 
    console.log("number is Zero ");


// Task 2:
//  Write a program to check if a person is eligble to vote (age >= 18) ans log the result
let preson_age = 23;
if(person_age>=18)
    console.log("preson is elegible to Vote ");
else 
    console.log("person is not mature to do Vote");


// Activity 2 : Nested ifelse Statements

// Task 3 :
// write a program to find the largest of three numbers using nested If-else statements

let num1 = 5;
let num2 = 10;
let num3 = 15;
let max = num1;
if(num2>max){
    max = num2;
}
if(num3>max){
    max = num3;
}
console.log("maximum number is : ",max);

// Activity 3 : Switch Case 

// Task 4:
// Write a program that uses case to determine the day of the week based on a number(1-7)
//  and log the day name to the console.
let n;
switch(n){
    case 1: console.log("SUNDAY");
    break;
    case 2: console.log("MONDAY");
    break;
    case 3: console.log("TUESDAY");
    break;
    case 4: console.log("WEDNESDAY");
    break;
    case 5: console.log("THURSDAY");
    break;
    case 6: console.log("FRIDAY");
    break;
    case 7: console.log("SATURDAY");
}


// Task 5: 
// Write a program that uses a swithch case to assign (A,b,c,d,e)
let score = 20 ; //20 out of 100

switch(score){
    case 20:
        console.log("E");
    case 40:
        console.log("D");
    case 50:
        console.log("C");
    case 70:
        console.log("B");
    case 90:
        console.log("A");   
}

// Activity 4: Conditional(Ternary) Operator

// Task 6: 
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the log

num = 4; 
console.log((num&1)?"Odd" : "even");
// output : even

// Activity 5: Combining Condition

// Task 7 : 
// Write a program to check if a year is a leap year using multiple condition (divisible by 4,
// but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if(year%4==0 && year%100 != 0)
    console.log("it's a leap year");

else if(year%400 == 0)
    console.log("it's a leap year");

else 
    console.log("it's not a leap year");














