// Processing the order
$(document).ready(function(){
    $("#orderButton").click(eventHandler);
});

eventHandler = function() {
    //Alerts the user if the word "vegan" or "Vegan" that cheesecake contains dairy
    var notesContent = document.getElementById("notesText").value;
    if(notesContent.search("vegan") != -1 || notesContent.search("Vegan") != -1){
        alert("Our cheesecakes contain dairy. Proceed with caution!");
    }

    // The form section of the page is removed and 
    // displays the order details including the topping, quantity, and notes
    $("table").hide();
    $("textarea").hide();
    $("#orderButton").hide();
    $("#amountOfToppings").text("Thank you! Your order has been placed");
    $("#notesLabel").text("Topping: " + $("input[name=topping]:checked", "#toppingType").val() + " | "
        + "Quantity: " + $("#numToppings option:selected").val() + " | "
        + "Notes: " + $("#notesText").val());
}

// Each month of the year has its own entry in the dropdown Menu
// and will update the widget's value when clicking on the desired month
// Note: For the dropdown, I attempted helper function and event handler, however, was not able to get it to work
// so I kept it as below for submission
$(document).ready(function(){
    $("#januaryButton").click(function(){
      $("#dropButton").html("Jan");
    });
    $("#februaryButton").click(function(){
      $("#dropButton").html("Feb");
    });
    $("#marchButton").click(function(){
      $("#dropButton").html("Mar");
    });
    $("#aprilButton").click(function(){
      $("#dropButton").html("Apr");
    });
    $("#mayButton").click(function(){
      $("#dropButton").html("May");
    });
    $("#juneButton").click(function(){
      $("#dropButton").html("Jun");
    });
    $("#julyButton").click(function(){
      $("#dropButton").html("Jul");
    });
    $("#augustButton").click(function(){
      $("#dropButton").html("Aug");
    });
    $("#septemberButton").click(function(){
      $("#dropButton").html("Sep");
    });
    $("#octoberButton").click(function(){
      $("#dropButton").html("Oct");
    });
    $("#novemberButton").click(function(){
      $("#dropButton").html("Nov");
    });
    $("#decemberButton").click(function(){
      $("#dropButton").html("Dec");
    });
  });