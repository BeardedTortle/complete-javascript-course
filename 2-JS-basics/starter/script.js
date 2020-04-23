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
let Teams = [];

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
const John = new Team('John', 89, 120, 103);
const Mike = new Team('Mike', 116, 94, 123);
const Mary = new Team('Mary', 97,134,105);

Team.allInstances = [];
Team.allInstances.push(this);

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