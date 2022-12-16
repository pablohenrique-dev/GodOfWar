var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints: {
        1200: {
            slidesPerView: 3.5,
        },
        991: {
            slidesPerView: 2.8,
        },
        768: {
            slidesPerView: 2.2,
        },
        320: {
            slidesPerView: 1.1,
        }
    }
});

AOS.init({
    duration: 1000,
    once: false,
});