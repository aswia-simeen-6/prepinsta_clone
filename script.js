function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
}

var swiper = new swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 6,
          spaceBetween: 10
        },
    }
  });
  var swiper2 = new swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });