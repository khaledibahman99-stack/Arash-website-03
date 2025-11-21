document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMobile = document.querySelector(".nav-mobile");
  
  if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener("click", () => {
      navMobile.classList.toggle("active");
      const spans = mobileMenuBtn.querySelectorAll("span");
      if (navMobile.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translateY(7px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translateY(-7px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // Scroll Reveal for luxury entrance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .collection-card, .maker-profile').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
