document.addEventListener('DOMContentLoaded', function() {
    let money = 959268305730; // Start with R10,000,000,00
    const moneyDisplay = document.getElementById('text-small');
  
    setInterval(function() {
      money -= Math.floor(Math.random() * 1000); // Simulate money decrease
      moneyDisplay.textContent = `R${money.toLocaleString()}`; // Update the displayed money
    }, 1000); // Update every second
  });