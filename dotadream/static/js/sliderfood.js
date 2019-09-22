
$('.slider2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
});


   $(document).ready(function() {
    $('div.blockslide').hover(
     function() {
        $(this.querySelectorAll('.leftblock p')).removeClass('bounceOutLeft');
        $(this.querySelectorAll('.leftblock p')).addClass('bounceInLeft');
     },
     function() {
        $(this.querySelectorAll('.leftblock p')).addClass('bounceOutLeft');
        $(this.querySelectorAll('.leftblock p')).removeClass('bounceInLeft'); // Убираем класс
     }
    )})



$(document).ready(function() {
    $('div.blockslide').hover(
     function() {
        $(this.querySelectorAll('.rightblock p')).removeClass('bounceOutRight');
        $(this.querySelectorAll('.rightblock p')).addClass('bounceInRight');
     },
     function() {
        $(this.querySelectorAll('.rightblock p')).addClass('bounceOutRight');
        $(this.querySelectorAll('.rightblock p')).removeClass('bounceInRight'); // Убираем класс
     }
    )})

$(document).ready(function() {
    $('div.slideout').hover(
     function() {
        $(this.querySelectorAll('.topblock p')).removeClass('fadeOutUp');
        $(this.querySelectorAll('.topblock p')).addClass('fadeInDown');
     },
     function() {
        $(this.querySelectorAll('.topblock p')).addClass('fadeOutUp');
        $(this.querySelectorAll('.topblock p')).removeClass('fadeInDown'); // Убираем класс
     }
    )})


    $(document).ready(function() {
    $('div.slideout').hover(
     function() {
        $(this.querySelectorAll('.bottomblock p')).removeClass('fadeOutDown');
        $(this.querySelectorAll('.bottomblock p')).addClass('fadeInUp');
     },
     function() {
        $(this.querySelectorAll('.bottomblock p')).addClass('fadeOutDown');
        $(this.querySelectorAll('.bottomblock p')).removeClass('fadeInUp'); // Убираем класс
     }
    )})



    $(document).ready(function() {
    $('div.slide').hover(
     function() {
        $(this.querySelectorAll('p')).removeClass('bounceOut');
        $(this.querySelectorAll('p')).addClass('bounceIn');
        $(this.querySelectorAll('img')).addClass('lightSpeedIn');
        $(this.querySelectorAll('img')).removeClass('lightSpeedOut');
        $(this.querySelectorAll('.otzivtext')).addClass('lightSpeedIn');
        $(this.querySelectorAll('.otzivtext')).removeClass('lightSpeedOut');
     },
     function() {
        $(this.querySelectorAll('p')).addClass('bounceOut');
        $(this.querySelectorAll('p')).removeClass('bounceIn');
        $(this.querySelectorAll('img')).addClass('lightSpeedOut');
        $(this.querySelectorAll('img')).removeClass('lightSpeedIn');
        $(this.querySelectorAll('.otzivtext')).removeClass('lightSpeedIn');
        $(this.querySelectorAll('.otzivtext')).addClass('lightSpeedOut');
     }
    )})