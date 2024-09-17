let amount = 2159.34;

function countMoney() {
  if (amount <= 8159.34) {
    amount += 20;
    console.log("$" + amount.toFixed(2));
  } else {
    clearInterval(interval);
  }
}

let interval = setInterval(countMoney, 1000); // Call countMoney function every 1 second
