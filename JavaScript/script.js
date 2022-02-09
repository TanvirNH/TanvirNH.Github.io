$(document).ready(function() {
    
    //Sticky Nav
    $('.section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    // Navigation scroll
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()

      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        1000,
        'linear'
      )
    });
    
    // MOBILE NAVIGATION MENU
    $(".mobile-nav-icon").click(function() {
        var menu = $(".main-nav");
        var icon = $(".mobile-nav-icon ion-icon"); 
        
        menu.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    $(window).resize(function(){
        var nav = $('.main-nav');
        var icon = $(".mobile-nav-icon ion-icon"); 
        if ($(window).width() > 780) {
            nav.css("display", "block");
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});