$(document).ready(function(){
  $("html").niceScroll({cursorcolor:"#fff"});
  $('body').scrollspy({ target: '.navbar' })
  var $doc = $('html, body');
  $('.anchor').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 870);
    return false;
  });
  $(window).scroll(function () {
       if ($(this).scrollTop() > 300) {
           $('.back-top').fadeIn();
       } else {
           $('.back-top').fadeOut();
       }
   });
   $('.back-top').click(function () {
       $('body,html').animate({
           scrollTop: 0
       }, 1600);
       return false;
   });
});
