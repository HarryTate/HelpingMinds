$( document ).ready(function(){

$(".positive-wellbeing-scroll-to").click(function() {
    $('html, body').animate({
        scrollTop: $('#positive-wellbeing-title').offset().top
    }, 1000);
});
  $(".mental-health-students-scroll-to").click(function() {
        $('html, body').animate({
            scrollTop: $('.mental-health-heading').offset().top
        }, 1000);
});

$(".signs-symptoms-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('#signs-symptoms-title').offset().top
      }, 1000);
});

$(".resources-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('.resources-title').offset().top
      }, 1000);
});
$("#depression-sub-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('#depression').offset().top
      }, 1000);
});

$("#anxiety-sub-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('#anxiety').offset().top
      }, 1000);
});

$("#eating-disorders-sub-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('#eating-disorders').offset().top
      }, 1000);
});

$("#loneliness-sub-scroll-to").click(function() {
      $('html, body').animate({
          scrollTop: $('#loneliness').offset().top
      }, 1000);
});



});
