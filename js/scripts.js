$(document).ready(function(){
  $("#form").submit(function(event){
    const personInput = $("input#person").val();
    const firstQuestion = parseInt($("#firstQuestion").val());
    const secondQuestion = parseInt($("#secondQuestion").val());
    const thirdQuestion = parseInt($("#thirdQuestion").val());
    const fourthQuestion = parseInt($("#fourthQuestion").val());
    const fifthQuestion = parseInt($("#fifthQuestion").val());
    const sixthQuestion = parseInt($("#sixthQuestion").val());
    const total = (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion + sixthQuestion);
    let language;

    if (total >= 6 && total <= 9) {
      language = ("HTML");
    } else if (total > 9 && total <= 13) {
      language = ("JavaScript");
    } else if (total > 13 && total <= 16) {
      language = ("C");
    } else if (total > 16) {
      language = ("I'm sorry, try again...");
    }

    $(".name").text(personInput);
    $(".language").text(language);

    $(".results").show();

    event.preventDefault();
    
  })
});