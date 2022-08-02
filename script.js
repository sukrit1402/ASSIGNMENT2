$(document).ready(function(){
    $(".reviews").each(function(){
      var This = $(this) ;
      var Nums = This.find(".panel").size() ;
      This.find(".panel:first").addClass("PanelAct");
      This.append("<div class='control'></div>") ;
      This.find(".panel").not(".PanelAct")
        .css("left","100%")
      for ( i=0 ; i<Nums ; i++) {
        This.find(".control").append("<span></span>") ;
      }
      This.find(".control span:eq(0)").addClass("ContActive");

      This.find(".control span").click(Reviews);

      function Reviews(){
        var loc = $(this).index();
        var ActivLoc = This.find(".ContActive").index();

        $(this).addClass("ContActive")
          .siblings().removeAttr("class");

        if ( loc > ActivLoc ) {
          var Dire = '100%'
          var IDire = '-100%'
        }
        if ( loc < ActivLoc ) {
          var Dire = '-100%'
          var IDire = '100%'
        }

        This.find(".panel").not(".PanelAct")
        .css("left",Dire) ;
        This.find(".panel:eq("+loc+")")
        .animate({'left':'0'},speed)
        .addClass("PanelAct")
        .siblings(".PanelAct")
        .removeClass("PanelAct")
        .animate({'left':IDire},speed);
      }
    });
  });


  var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}