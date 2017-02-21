$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    },{
        offset: '60px;'
    });
    
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top},500)
    });
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn')
    },{ offset: '50%'});
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round').removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round').removeClass('ion-close-round')
        }
        
    })
})