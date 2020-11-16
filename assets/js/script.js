
$(document).ready(function(){
    // Toggles paragraphs display
        $("#toggle-btn-1").click(function(){
        $("#card-1").toggle();
    });
        $("#toggle-btn-2").click(function(){
        $("#card-2").toggle();
    });
        $("#toggle-btn-3").click(function(){
        $("#card-3").toggle();
    });
        $("#toggle-btn-4").click(function(){
        $("#card-4").toggle();
    });

//Add or remove active class on nav 
  $(".nav-link").on("click", function(){
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

//Scroll to top button

    var mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
            }

// Close mobile dropdown menu after item clicked            
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
