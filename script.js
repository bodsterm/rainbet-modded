let balance = 1000; // Starting balance
const balanceElement = document.getElementById('balance-amount');
const messageElement = document.getElementById('message');

function updateBalance() {
    balanceElement.textContent = balance;
}

function placeBet() {
    const betInput = document.getElementById('bet-amount');
    const betAmount = parseInt(betInput.value);
    
    if (isNaN(betAmount) || betAmount <= 0) {
        messageElement.textContent = 'Please enter a valid bet amount.';
        return;
    }
    
    if (betAmount > balance) {
        messageElement.textContent = 'Insufficient balance!';
        return;
    }
    
    // Simulate a bet (random win/loss for demo)
    const win = Math.random() > 0.5;
    if (win) {
        balance += betAmount;
        messageElement.textContent = `You won ${betAmount} coins!`;
    } else {
        balance -= betAmount;
        messageElement.textContent = `You lost ${betAmount} coins.`;
    }
    
    updateBalance();
    betInput.value = '';
}

function addFreeBalance() {
    balance += 1000; // Add 1000 free coins
    messageElement.textContent = 'Added 1000 free coins!';
    updateBalance();
}

updateBalance();
