$(window).scroll(function () {
    if (scrollY > 100) {
        $(".navbar").addClass("sticky");
    }
    else {
        $(".navbar").removeClass("sticky");
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }
    else{
        $('.scroll-up-btn').removeClass("show");
    }
});
$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
});
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior", "auto");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});