let balance = 100;
const wheel = document.getElementById('wheel');
const displayBalance = document.getElementById('balance');

function wheelSpin() {
    const betAmount = parseInt(document.getElementById('betAmount').value, 10);
  
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance) {
      alert('Invalid bet amount');
      return;
    }
  
    const degrees = Math.floor(Math.random() * 360) + 1;
    const rotation = 'rotate(${degrees}deg)';
  
  
    timeout(() => {
      const result = calculateResult(degrees);
      updateBalance(result, betAmount);
      updateBalanceDisplay();
      
    }, 100);
  }


  function calculateResult(degrees) {
    //  TO BE UPDATED-- FOR NOW JUST 50/50 ODDS
    return degrees < 180 ? 'win' : 'lose';
  }

  function balanceUpdate(result, betAmount) {
    if (result === 'win') {
      balance += betAmount * 2; // Will be adusted when other bets are added
    } else {
      balance -= betAmount;
    }
  }
  function displayNewBalance() {
    balanceDisplay.textContent = balance;
  }