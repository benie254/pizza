// Initialize
// Hide Print Orders table and checkout buttons
$(document).ready(function() {
  $(".table").hide();
  $(".table h2").hide();
  $(".checkout-buttons").hide();
  $(".checkout-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".checkout-info h4").hide();
  $(".delivery-image").hide();

  // Assign variables for pizza Specifications & selections
  $('.btn.proceed').click(function() {
    var pizzaFlavor = $(".flavor option:selected").val();
    var sizeOfPizza = $(".size option:selected").val();
    var toppingOfPizza = $(".topping option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    // Unhide the Orders Table and checkout buttons
    // Hide the place-order button
    $(".table").show();
    $(".table h2").show();
    $(".delivery-image").show();
    $(".checkout-buttons").show();
    $(".btn.proceed").hide();
