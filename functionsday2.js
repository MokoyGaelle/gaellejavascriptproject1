/*
const havefunswimming = () => {console.log ("have fun swimming");}

havefunswimming ()


const pressGrindBeans = () => {console.log ("Grinding for 20 seconds");}

pressGrindBeans ()


const Eatmyshorts = () => {console.log ("eat my shorts"); }

Eatmyshorts ()



let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {console.log ("Stopping the grind");
coffeeIsGrinding = false }
else { 
    console.log ("Grinding is about to begin");
    coffeeIsGrinding = true
} }

pressGrindBeans ()



let coffeeIsGrinding = false 

const pressGrindBeans = () => {
if (coffeeIsGrinding) {console.log ("stop machine");
coffeeIsGrinding = false}
else {
    console.log ("Your machine is in use"); 
    coffeeIsGrinding = true 
}
}

pressGrindBeans ()



let cashWithdrawal = (amount, accnum) => {}



let coffeeDrink = (size, typeOfDrink) => {}

const orderDrink = () => { (size , typeOfDrink) 
    console.log ('Please make a: ${size} ${typeofDrink} for the next customer'); 
}

orderDrink("extra large", "hot chocolate")



let gaelle = 101088

const cashWithdrawal = (amount, accnum) => {
    console.log (`withdrawing ${amount} from account ${accnum}`)

}

cashWithdrawal (550, gaelle )



let megane = 020996

const takeMoneyOut = ( value, accdets) => {
    console.log (`withdrawing ${value} from account ${accdets}`)
}

takeMoneyOut (300, megane)



const addUp = (num1, num2) => { 
    return num1 + num2}

    console.log (addUp (7,3)) ;  console.log (addUp (2,5));



const multiplybyFiveNinth = (Fahrenheit) => {
    return Fahrenheit * (5/9);
}

const getCelsius = Fahrenheit => {
    return multiplyByFiveNinth (Fahrenheit) - 32 ; 
} ;

console.log ("the temperature is"  +  getCelsius (89) + "°C") ; 



let orderCount = 0

const takeOrder = (topping) => {
    console.log (`Pizza with ${topping}`); 
    
 orderCount++; 
}

takeOrder ("pineapple")



let orderCount = 0

const takeOrder = (topping, size) => {
    console.log (`${size} Pizza with ${topping}`);
    orderCount++
}

takeOrder ("cheese", "medium")



let rubsAccDets = 1111
let value = 500

const takeMoneyOut = (pin, balance) => {
   if (rubsAccDets == 1111 && value >= 500) 
   console.log (`Your ${pin} is correct and your ${balance} is over £500. 
   Dispense cash`)

    else if (rubsAccDets == 1111 && value < 500)
   console.log (`Your ${pin} is correct and your ${balance} is below £500. 
   Do not dispense cash`)

   else console.log (`Do not dispense cash`)
}
 
takeMoneyOut ("pin", "balance")



let accIsEligible
let pin = 1234
let amount = 500

const getCashOut = () => {
   if (pin == 1234 && amount == 500) {
       console.log ("dispense cash"); 
       accIsEligible = true
    } else {
        console.log ("funds too low")
        accIsEligible = false
    }

}

getCashOut ()



let item = "sandwich"

const takeOrder = (topping1 , topping2, topping3, topping4,topping5)=> {
    console.log (` I would like a ("sandwich") with 
    ${topping1} ${topping2} ${topping3} ${topping4} ${topping5} and a can of fanta please`);
}
 
takeOrder ("ham", "cheese", "cucumber", "tomato", "mayonnaise")



let favSongs = [ 
    "Bonjovi - Living on a prayer" ,
    "Kanye West - All Falls down", 
    "Michael Jacksoon - Smooth Criminal"
];

console.log (favSongs[2]);



let favSongs = [ 
    "Bonjovi - Living on a prayer" ,
    "Kanye West - All Falls down", 
    "Michael Jacksoon - Smooth Criminal"
]
favSongs [1] = "UB40 - many rivers to cross"
console.log (favSongs.length)

*/

let coffeeDrink = [
    "alex - Cartado",
    "ben - cortado",
    "charlie - whatever's new"
];

coffeeDrink.pop ();

console.log (coffeeDrink)