$(document).ready(function(){
  $("#form").submit(function(event){
    
    const firstQuestion = parseInt($("#firstQuestion").val());
    const secondQuestion = parseInt($("#secondQuestion").val());
    const thirdQuestion = parseInt($("#thirdQuestion").val());
    const fourthQuestion = parseInt($("#fourthQuestion").val());
    const fifthQuestion = parseInt($("#fifthQuestion").val());
    const sixthQuestion = parseInt($("#sixthQuestion").val());
    const total = (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion + sixthQuestion);

    if (total >= 6 && total <= 9) {
      $(".result1").show();
    } else if (total > 9 && total <= 13) {
      $(".result2").show();
    } else if (total > 13 && total <= 16) {
      $(".result3").show();
    } else if (total > 16) {
      $(".result4").show();
    }
    
    event.preventDefault();
    
  })
});