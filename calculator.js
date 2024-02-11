//It'll require update in every 6 months
// Last Updated on Jan 2024

function checkEligibility() {
  // Retrieve the input value
  var dateInput = document.getElementById('dateInput').value;

  // Convert the input value to a Date object
  var inputDate = new Date(dateInput);

  // Define the eligibility criteria dates
  var minEligibleDate = new Date('2001-01-02');
  var maxEligibleDate = new Date('2006-01-01');

  // Check if the input date is within the eligibility range
  if (inputDate >= minEligibleDate && inputDate <= maxEligibleDate) {
    document.getElementById('result').textContent = 'You are eligible for IMA, IAF, INA !! & Note: (Upper age limit for candidates holding valid and current Commercial Pilot Licence issued by DGCA (India) is relaxable upto 26 yrs,in short +2 years or attempts.';
  } else {
    document.getElementById('result').textContent = 'Sorry, You are not eligible.';
  }
}
