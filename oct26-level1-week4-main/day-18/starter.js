const activityName = "Space observation";
const capacity = 10;
const registered = 9;
const seatsLeft = capacity - registered;
const hasSeats = seatsLeft >- 0;

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}
// The Const hasSeats had the wrong comparison
// Using the correct comparison expression allowed the math equation to work
// ===compares without converting the data type
// >= includes equality
