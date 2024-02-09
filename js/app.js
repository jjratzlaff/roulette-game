<<<<<<< HEAD
let balance = 100;
const wheel = document.getElementById('wheel');
const arrow = document.getElementById('arrow');
const balanceDisplay = document.getElementById('balance');

function spinWheel() {
  const betAmount = parseInt(document.getElementById('betAmount').value, 10);

  if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
    alert('Invalid bet amount');
    return;
  }

  const degrees = Math.floor(Math.random() * 360) + 1;
  const rotation = `rotate(${degrees}deg)`;

  wheel.style.transition = 'transform 3s ease-out';
  arrow.style.transition = 'transform 3s ease-out';

  wheel.style.transform = rotation;
  arrow.style.transform = rotation;

  setTimeout(() => {
    const result = calculateResult(degrees);
    updateBalance(result, betAmount);
    updateBalanceDisplay();


  }, 3000);
}

function placeBet(color) {
  const betAmount = parseInt(document.getElementById('betAmount').value, 10);

=======
// VARIABLES
let balance = 100; // Initial balance
const wheelImage = document.getElementById('wheel'); // Wheel element
const balanceDisplay = document.getElementById('balance'); // Balance display element
const resultMessageElement = document.getElementById('resultMessage'); // Result message element
const resultDisplay = document.getElementById('resultDisplay'); // Result display element
const blackBtn = document.getElementById('blackBtn'); // Black button element
const redBtn = document.getElementById('redBtn'); // Red button element
const playAgainBtn = document.getElementById('playAgainBtn'); // Play again button element

// Variables to track user's bet
let selectedColor = null; // Track selected color (black or red)
let selectedBetAmount = 0; // Track selected bet amount

//  WHEEL SPIN FUNCTION
function spinWheel() {
  // Check if user has selected a color and placed a bet
  if (!selectedColor || selectedBetAmount === 0) {
    alert('Please select a color and place a bet before spinning the wheel.');
    return;
  }

  // Generate a random degree for wheel rotation -- I used 360 degrees for this function so that other outputs can be added.
  const degrees = Math.floor(Math.random() * 360) + 1;
  const rotation = `rotate(${degrees}deg)`;

  // Apply wheel rotation animation
  wheelImage.style.transition = 'transform 3s ease-out';
  wheelImage.style.transform = rotation;

  // Determine the result (black or red) based on the wheel's rotation
  const result = calculateResult(degrees);
  updateBalance(result, selectedBetAmount);
  updateBalanceDisplay();
  displayResult(result);

  // Reset wheel rotation after spinning
  wheelImage.style.transition = 'none';
  wheelImage.style.transform = rotation;

  // Check if the game is over
  checkGameStatus();
}

// Check if the game is over (win or run out of money)
function checkGameStatus() {
  if (balance >= 200) {
    endGame("You Win!");
  } else if (balance <= 0) {
    endGame("You Ran Out of Money!");
  }
}

// End the game and display a message
function endGame(message) {
  resultMessageElement.textContent = message;
  playAgainBtn.style.display = 'block'; // Show the "Play Again" button
}

// Function to place a bet on black or red
function placeBet(color) {
  const betAmount = parseInt(document.getElementById('betAmount').value, 10);

  // Validate the bet amount
>>>>>>> main
  if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
    alert('Invalid bet amount');
    return;
  }

<<<<<<< HEAD
  updateBalance(color, betAmount);
  updateBalanceDisplay();
}

function calculateResult(degrees) {
  
  return degrees < 180 ? 'win' : 'lose';
}

function updateBalance(result, betAmount) {
  if (result === 'win') {
    balance += betAmount * 2; 
  } else {
    balance -= betAmount;
  }
}

function updateBalanceDisplay() {
  balanceDisplay.textContent = balance;
}
=======
  // Set selected color and bet amount
  selectedColor = color;
  selectedBetAmount = betAmount;
}

// Determine the result based on the wheel's rotation
function calculateResult(degrees) {
  // In this case, I only have 2 outcomes so < 180 degrees gives us 50/50 odds.
  return degrees < 180 ? 'black' : 'red';
}

// Update balance based on the result and selected bet amount
function updateBalance(result, betAmount) {
  if (result === selectedColor) {
    // Add the bet amount to the balance if the result matches the selected color
    balance += selectedBetAmount * 1;
  } else {
    // Lose the bet amount if the result does not match the selected color
    balance -= selectedBetAmount;
  }

  // Reset selected color and bet amount after spinning
  selectedColor = null;
  selectedBetAmount = 0;
}

// Update balance display in the HTML
function updateBalanceDisplay() {
  balanceDisplay.textContent = balance;
}

// Display the result
function displayResult(result) {
  resultDisplay.textContent = `Result: ${result}`;
  resultDisplay.style.color = result; // Set text color based on result (red or black)
  resultDisplay.style.display = 'block'; // Show the result display
}

// Reset the game to play again
function playAgain() {
  resultDisplay.style.display = 'none'; // Hide the result display
  balance = 100; // Reset balance to initial value
  resultMessageElement.textContent = ''; // Clear result message
  playAgainBtn.style.display = 'none'; // Hide the "Play Again" button
  updateBalanceDisplay(); // Update balance display in the HTML
}

// Initialize balance display
updateBalanceDisplay();
>>>>>>> main
