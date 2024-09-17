// Add an event listener to the "Confirm" button in the PIN modal
$(".tf-btn").on("click", function() {
    var enteredPin = $("#digit-2").val() + $("#digit-3").val() + $("#digit-4").val() + $("#digit-5").val();
    if (enteredPin !== "2345") {
      // Display an error message
      alert("Incorrect activation pin. Please try again.");
  
      // Prevent the success modal from appearing
      return false;
    } else {
      // Allow the success modal to appear
      $('#success').modal('show');
    }
  });
  