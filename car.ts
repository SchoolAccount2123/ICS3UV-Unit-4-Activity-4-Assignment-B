// Author: Connor Wilkins
// Version: 1.0.0
// Date: 2025-12-16


//-----
// CONSTANTS AND VARIABLES
//-----

let carMake: string = "Toyota";
let carModel: string = "Corolla";
let carColor: string = "Silver";
let odometer: number = 65000;
let oilChangeKM: number = 65000;

let gasCost: number[] = new Array(10)
let gasFillCount: number = 0;


// Initial Gas fillup

gasCost[gasFillCount++] = 74.0;

//-----
// Functions
//-----

// Returns a summary of car stats

function carStats(): string {
  return `
Car Make: ${carMake}
Car Model: ${carModel}
Car Colour: ${carColor}
Odometer: ${odometer} km
Last Oil Change: ${oilChangeKM} km
`;
}

//-----
// Prompts user to wrap car a new colour
//-----

function wrapCar(): string {
  return prompt("Enter a new colour to wrap your car:")!;
}

//------
// Simulates driving the car
//------

function drive(): number {
  const kmDriven = Math.floor(Math.random() * (1000 - 100 + 1)) + 4500;
  odometer += kmDriven;
  return kmDriven;
}

// Function to store gas fillup cost

function fillUp(): void {
  const cost = Number(prompt("How much did you pay to fill up your car?"));
  gasCost[gasFillCount++] = cost;
}

//------
// Displays gas costs and returns average
//------

function displayCostToFillUp(): number {
  let total = 0;

  console.log("Gas fill-up costs:");
  for (let i = 0; i < gasFillCount; i++) {
    console.log(`Fill-up ${i + 1}: $${gasCost[i].toFixed(2)}`);
    total += gasCost[i];
  }

  return total / gasFillCount;
}

// Determines if it needs an oil change

function oilChange(mileage: number, lastOilChange: number): boolean {
  if (mileage - lastOilChange >= 5000) {
    oilChangeKM = mileage;
    console.log("An oil change was done.");
    return true;
  }
  return false;
}

//------
// MAIN PROGRAM
//------

console.log("Initial Car Stats:");
console.log(carStats());

// Wrap car
carColor = wrapCar();

// Drive car
const driven = drive();
console.log(`You drove ${driven} km.`);

// Fill up gas
fillUp();

// Display gas costs
const avgCost = displayCostToFillUp();
console.log(`Average cost to fill up: $${avgCost.toFixed(2)}`);

// Oil change check
if (!oilChange(odometer, oilChangeKM)) {
  console.log("Your car does not need an oil change.");
}

// Final stats
console.log("Final Car Stats:");
console.log(carStats());

console.log("\nDone.");