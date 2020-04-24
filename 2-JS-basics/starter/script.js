/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
class Person{
    constructor(name,mass,height){
        this.name = name;
        this.mass = mass;
        this.height = height;
        this.BMI = mass / (height * height);
    }
}
const Mark = new Person('Mark',78,1.69);
const John = new Person('John',92,1.95);

let bool = Mark.BMI > John.BMI;

console.log(`Is Mark's BMI ${Mark.BMI} higher than John's ${John.BMI}? ${bool}`)
*/

/* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
class Team{
    constructor(name,game1, game2, game3){
        this.name = name;
        this.game1 = game1;
        this.game2 = game2;
        this.game3 = game3;
        this.average = (game1 + game2 + game3) / 3;
        Teams.push(this);
    }
}
let Teams = [];
const John = new Team('John', 89, 120, 103);
const Mike = new Team('Mike', 116, 94, 123);
const Mary = new Team('Mary', 97,134,105);

const findHighest = (...teams) =>{
    let avgs = [];
    teams.forEach( teams =>{
        avgs.push(teams.average);
        
    })
    let highestAVG = avgs.reduce((a,b)=>{
        return Math.max(a,b);
    })
    
    let highestIndex = avgs.indexOf(highestAVG);
    let teamWithHighestAvg = teams[highestIndex];
    console.log( `${teamWithHighestAvg.name}'s team had the highest average at: ${highestAVG} points`)
}

findHighest(...Teams)
console.log(Teams)
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
//Tip Calculator. 
let tips = [];
let bills = [124,48,268];
let totals = [];

const calculateTips = (bills) => {
    let tipAmount = 0;
    bills.forEach(bill=>{
        if(bill >50 && bill < 200){
            tipAmount = bill * .15;
            
        } else if (bill > 200){
            tipAmount = bill * .10;
        } else {
            tipAmount = bill * .20;
        }
        tips.push(tipAmount);
        totals.push(tipAmount + bill)})
}
calculateTips(bills);
console.log(tips)
console.log(totals)
*/
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*
class Person{
    constructor(name,mass,height){
        this.name = name;
        this.mass = mass;
        this.height = height;
        const calcBMI = () => {
        this.BMI = mass / (height * height);
        return this.BMI;
        }
        calcBMI()
    }
}
const Mark = new Person('Mark',78,1.69);
const John = new Person('John',92,1.95);

let bool = Mark.BMI > John.BMI;

if(bool === true){
    console.log(`Mark has the highest BMI: ${Mark.BMI}`);
} else {
    console.log(`John has the highest BMI: ${John.BMI}`);
}
*/
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

const johnBills = {
    bills: [124,48,268,180,42],

    calcTips: function() {
        this.tips = [];
        this.totals = [];
        this.bills.forEach(bill => {
            let tipAmount = 0;
            switch(bill){
                case bill > 200:
                    tipAmount = bill*.25;
                    break;
                case bill < 50:
                    tipAmount = bill *.20;
                    break;
                default:
                    tipAmount = bill *.10;
            }
            this.tips.push(tipAmount);
            this.totals.push(bill + tipAmount);            
        })
    },
    /*
    calcAvg: function() {
        this.totalTips = this.tips.reduce((a,b)=>(a+b));
        this.avg = (this.totalTips / this.tips.length);     
    },   */
}
johnBills.calcTips()
//johnBills.calcAvg();

const markBills = {
    bills: [77,375,110,45],

    calcTips: function() {
        this.tips = [];
        this.totals = [];
        this.bills.forEach(bill => {
            let tipAmount = 0;
            switch(bill){
                case bill > 300:
                    tipAmount = bill*.10;
                    break;
                case bill < 100:
                    tipAmount = bill *.20;
                    break;
                default:
                    tipAmount = bill *.15;
            }
            this.tips.push(tipAmount);
            this.totals.push(bill + tipAmount);            
        })
    },
    

    /*
    calcAvg: function() {
        this.totalTips = this.tips.reduce((a,b)=>(a+b));
        this.avg = (this.totalTips / this.tips.length);     
    },   */
}
markBills.calcTips()
//markBills.calcAvg();

console.log(markBills.tips)
console.log(johnBills.tips)

const calcAvg = (arr) => {
   let avg = arr.reduce((a,b)=> a+b) / arr.length;
   return avg;
}

calcAvg(markBills.tips);
calcAvg(johnBills.tips);

if(calcAvg(markBills.tips) > calcAvg(johnBills.tips)){
    console.log(`Mark had the highest avg tips: ${calcAvg(markBills.tips)}`)
}  else{ 
    console.log(`John had the highest avg tips: ${calcAvg(johnBills.tips)}`)}