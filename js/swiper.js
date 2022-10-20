new Swiper('.swiper',{
    loop: true,
    spaceBetween:10,
    autoplay:{
        delay:2000,
        stopOnLastSlide:true,
        disableOnInteraction:false
    },
    breakpoints:{
        1024:{
            slidesPerView:3,
        },
        767:{
            slidesPerView:2,
        },
    }
}
);