$(document).ready(function () {
  //fonction qui ajoute des li au ul
$(document).keypress(function(event){
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      let str = $("#inpt").val();
      if (str !== "") {
      $("#tache").append(`<li><span><i class="fas fa-trash"></i></span> Oui Monseigneur : ${str}</li>`);
      str = $("#inpt").val(""); 
    }  
    }
});

  $("#btn").click(function () {
    let str = $("#inpt").val();
    if (str !== "") {
    $("#tache").append(`<li><span><i class="fas fa-trash"></i></span> Oui Monseigneur : ${str}</li>`);
    str = $("#inpt").val("");
  }
  });

  //fonction qui barre les li
  $("#tache").on("click", "li", function () {
      $(this).toggleClass("completed");
  });

  //fonction qui supprime les li
  $("#tache").on("click", "span", function (event) {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $(this).remove();
      });
    event.stopPropagation();
  });

});
// parent on click enfant
// 30.11 mapper un clavier drum machine appuie sur touche drum machine drumbit.app
