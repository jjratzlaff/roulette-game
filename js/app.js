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

  if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
    alert('Invalid bet amount');
    return;
  }

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