// Day 4 : Loops 
// Task/Activities:

// Acticity 1 : For loop 


// Task 1 : // Write a programm to print numbers from 1 to 10 using for loop.
for(let i = 1 ;i<=10;i++){
    console.log(i);
}


// Task 2: 
// Write a program to print the multiplication table of 5 using a for loop .

for(let i=1;i<=10;i++){
    console.log(5,"x",i," = ",5*i);
}


// Task 3:
// Write a program to calculate sum of number from 1 to 10;

let sum  = 0;
for(let i = 1;i<=5;i++){
    sum += i;
}
console.log("sum of 1 to 5 : ",sum);


// Task 4: Write a programm to print numbers from 10 to 1 using  while loop 
let i=10;
while(i>0){
    console.log(i);
    i--;
}

// Activity 3: do...while Loop


// Task 5 : Write a program to print numbers from 1 to 5 using a do... while loop.

 i = 1;
do{
    console.log(i);
    i++;
} while(i<5);


// Task 6: Write a program to calculate the factorial of a number using a do while loop.

num  = 5;
let fact = 1;
i = 1;
do{
    fact *= i;
    i++;
}   while(i<=num);
console.log("factorial of a number ",fact);


// Activity 4 : Nested Loops 


// Task 7 : Write a program to prin a patteern using nested Loops

let rows = 4;
let str = "*"
for(let i = 1 ;i<=rows;i++){
    console.log(str);
    str += " *";
}


// TAsk 8: write a programm to print number from 1 to 1o except 5 using continue;

for(let itr = 1; itr <= 10;itr++){
    if(itr == 5) continue;
    console.log(itr);
}


// Task 9 : Write a program to print numbers from 1 to 10 .stop the loop when number is 7;

for(let itr = 1; itr <= 10;itr++){
    if(itr == 7) continue;
    console.log(itr);
}

