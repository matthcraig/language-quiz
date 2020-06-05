$(document).ready(function(){
  $("#form").submit(function(event){
    
    const firstQuestion = parseInt($("#firstQuestion").val());
    const secondQuestion = parseInt($("#secondQuestion").val());
    const thirdQuestion = parseInt($("#thirdQuestion").val());
    const fourthQuestion = parseInt($("#fourthQuestion").val());
    const fifthQuestion = parseInt($("#fifthQuestion").val());
    const sixthQuestion = parseInt($("#sixthQuestion").val());
    const total = (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion + sixthQuestion);

    if (total === 6) {
      $(".result1").show();
    } else if (total === 7) {
      $(".result2").show();
    }

    event.preventDefault();
    
  })
});