// top_menu_sticker
(function(){
    const header = document.querySelector('.header');
    const headerContainer = document.querySelector('.top_header_container');
    const backgroundImageHeight = 65;
    const headerHeight = document.querySelector('.intro').scrollHeight - backgroundImageHeight;
    // console.log(headerHeight);
    window.onscroll = function(){
        
        if (window.pageYOffset > 70){
            
            headerContainer.style.padding = "0";
            if (window.pageYOffset > headerHeight){
                header.style.backgroundImage = "url('img/top_menu_background.jpg')";
            }
            else{
                header.style.background = "";
            }
        }
        
        else{
            
            headerContainer.style.paddingTop = "63px";
        }
    }
}());

// ovl_carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        navText: ["<img src='img/long-left-arrow.png'>","<img src='img/long-right-arrow.png'>"],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                nav:false
            },
            1400:{
                items:3
            }
        }
    });
  });

  //Burger handler
(function(){
    const burgerItem = document.querySelector('.burger');
    const burgerCross = document.querySelector('.header_nav_close');
    const menu = document.querySelector('.header_nav');
    burgerItem.addEventListener('click', function(){
        menu.classList.add('header_nav_active');
    });
    burgerCross.addEventListener('click', function(){
        menu.classList.remove('header_nav_active');
    });
}());