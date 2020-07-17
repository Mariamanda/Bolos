

$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  autoplaySpeed: 2000
});

document.querySelector("#myCard").classList.toggle("flip")

$('div.bgParallax').each(function(){
    var $obj = $(this);

    $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / $obj.data('speed')); 

        var bgpos = '50% '+ yPos + 'px';

        $obj.css('background-position', bgpos );

    }); 
});