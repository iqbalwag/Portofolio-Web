// Inisialisasi Swiper
var swiper = new Swiper('.swiper-container', {
  effect: 'fade',
  crossFade: true,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: '.home-navbar',
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  on: {
    slideChange: function () {
      updateNavbar(swiper.activeIndex);
      homeActive(swiper.activeIndex);
    }
  }
});

var swiper2 = new Swiper(".swiper-container2", {
  // direction: "vertical",
  
  // spaceBetween: 50,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".swiper-container3", {
  // direction: "vertical",
  
  // spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Fungsi untuk mengupdate navbar
function updateNavbar(index) {
  const navbarItems = document.querySelectorAll('#navbar li, #navbar img');
  navbarItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function homeActive(index) {
  const navbar = document.querySelector('nav');
  if (index === 0) {
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
}

// Klik pada navbar untuk pindah slide
document.querySelectorAll('#navbar li, #navbar img').forEach((item, index) => {
  item.addEventListener('click', () => {
    swiper.slideTo(index);
  });
});

// Sama ^ tapi untuk home page
document.querySelectorAll('.home-link').forEach((item, index) => {
  item.addEventListener('click', () => {
    swiper.slideTo(index + 1);
  });
});

homeActive(swiper.activeIndex);