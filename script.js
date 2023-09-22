
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 15,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-next",
      prevEl: ".arrow-prev",
    },
  });

const logos = document.querySelectorAll('.logo');

logos.forEach(logo => {
    logo.addEventListener('click', () => {
        const targetId = logo.getAttribute('data-scroll-to');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
