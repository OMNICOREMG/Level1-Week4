// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7;
const kitCount = 7;
let deskIsClosed = false;

if (!deskIsClosed) {
  console.log("The desk is closed.");
} else if (kitCount >= learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}
// Expected output was enough kits, but the output was more kits needed
// They used a greater than operater which lacked the equal to 
// The correct expression would be if it its greater than or equal to 
// Testing just 8 kits wouldnt have solved the issue 8 is greater than 7 so you wouldnt have seen the error.
// Changing let deskIsClosed= false then if (!deskIsClosed) Gave me the corect ouput of of no avaiable seats.