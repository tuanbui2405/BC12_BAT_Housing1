var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev"
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    effect: 'fade',
    fadeEffect: {
    crossFade: true,
    },
    autoplay: {
        delay: 5000
    }

  });
  