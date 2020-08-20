$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    
    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
});


/* Add scrollspy to <body>
$(".nav-list").on('click', function(e) {

      // prevent default anchor click behavior
      e.preventDefault();

      // animate
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = this.hash;
      });
}); 
*/
/* BACK TO TOP BUTTON */

/*

var mybutton = document.getElementById("btn");

// When the user scrolls down 100px from the top of the document, show the button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
*/


// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Get the modal

var modal = document.getElementById("myModal");

//Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById("myImg");
var images = document.getElementsByClassName("myImages");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Go through all of the images with our custom class

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // attach click listener for this image
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

// When user clicks on <span> (x), close the modal

span.onclick = function() {
    modal.style.display = "none";
}


// SCROLL TO TOP ICON


$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }
});



$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "500");
    return false;
  });
});

















