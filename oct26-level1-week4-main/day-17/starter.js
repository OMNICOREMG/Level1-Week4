const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;

console.log(activityName);
console.log("Before:", seatsLeft);
registered = registered + 2;
seatsLeft = capacity - registered;
console.log("Registered:", registered);
console.log("After:", seatsLeft);

//I thought it was going to immediatly update seatsleft to 5.
//the caculation happens on line 4 where the capcity is subtracted by the registered guest
//but the registered guests changed on line 8 
// In class Ulises said js only reads vertically so i had to move the seatsleft calculation to line 9
//Moving the seatsLeft caculation fixed the stale value issue.