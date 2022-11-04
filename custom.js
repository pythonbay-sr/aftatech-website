const swiper = new Swiper('.service-images-swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-nav-next',
        prevEl: '.swiper-nav-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});