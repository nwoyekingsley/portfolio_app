import $ from 'jquery';
export const initializeCarousel = () => {
    
    $('.product-slider').owlCarousel({
        autoplay: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: false,
        dots: true,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });
    $('.carousel-testimony').owlCarousel({
        autoplay: true,
        loop: true,
        items:1,
        margin: 0,
        stagePadding: 0,
        nav: false,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });


}