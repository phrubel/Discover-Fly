// Full Booking System
function ticketChangeHandler(ticket, ifIncrease) {
  const ticketInput = document.getElementById(ticket + "-count");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (ifIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (ifIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  let totalTicket = 0;
  if (ticket == "first") {
    totalTicket = ticketNewCount * 150;
  }
  if (ticket == "economy") {
    totalTicket = ticketNewCount * 100;
  }
  const firstInput = document.getElementById("first-count");
  const firstCount = parseInt(firstInput.value);

  const economyInput = document.getElementById("economy-count");
  const economyCount = parseInt(economyInput.value);

  const subTotal = firstCount * 150 + economyCount * 100;
  document.getElementById("sub-total").innerText = "$" + subTotal;

  const tax = subTotal * 0.1;
  document.getElementById("tax-amount").innerText = "$" + tax;

  const granTotal = subTotal + tax;
  document.getElementById("grand-total").innerText = "$" + granTotal;
}

// Check Button event Handler
document.getElementById("book-now-btn").addEventListener("click", function () {
  document.getElementById("main-content").style.display = "none";
  document.getElementById("welcome-msg").style.display = "block";
});
