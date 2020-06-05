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

    if (total >= 6 && total <= 10) {
      language = ("HTML");
    } else if (total > 10 && total <= 14) {
      language = ("JavaScript");
    } else if (total > 14 && total <= 18) {
      language = ("C");
    } else if (total > 18) {
      language = (".......Please Try Again.......");
    }

    $(".name").text(personInput);
    $(".language").text(language);
    $(".results").slideUp();
    event.preventDefault();
  })
});