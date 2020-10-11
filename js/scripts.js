$(document).ready(function() {
    $("#delivery").click(function(event) {
      event.preventDefault();
      $("#order").hide();
      $(".location").show(); 
     });

     $("#pick").click(function(event) {
      event.preventDefault();
      $("#order").hide();
      var size = $("#size").val();
      var crust = $("#crust").val();
      var toppings = $("#toppings").val();
      var pizza= $("#numberofpizza").val();
        $("#yourOrder").append("Pizza Size:"+size+"<br>"); 
        $("#yourOrder").append("Crust:"+crust+"<br>"); 
        $("#yourOrder").append("toppings:"+toppings+"<br>"); 
        $("#yourOrder").append("Number Of pizza:"+pizza+"<br>");
       
     });

     $("#checkout").click(function(event) {
      event.preventDefault();
      $(".location").hide();
      var size = $("#size").val();
      var crust = $("#crust").val();
      var toppings = $("#toppings").val();
      var pizza= $("#numberofpizza").val();
        $("#yourOrder").append("Pizza Size:"+size+"<br>"); 
        $("#yourOrder").append("Crust:"+crust+"<br>"); 
        $("#yourOrder").append("toppings:"+toppings+"<br>"); 
        $("#yourOrder").append("Number Of pizza:"+pizza+"<br>"); 
        $("#yourOrder").append("Delivery fee:"+"Rwf1500"); 
     });

   });