// تابع تغییر زبان
function toggleLang() {
  const html = document.documentElement;
  if (html.lang === 'fa') {
    html.lang = 'en';
    html.dir = 'ltr';
    localStorage.setItem('lang', 'en');
    document.querySelector('.lang-toggle')?.textContent = 'فارسی';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });
  } else {
    html.lang = 'fa';
    html.dir = 'rtl';
    localStorage.setItem('lang', 'fa');
    document.querySelector('.lang-toggle')?.textContent = 'English';
    document.querySelectorAll('[data-fa]').forEach(el => {
      el.textContent = el.getAttribute('data-fa');
    });
  }
}

// هنگام بارگذاری صفحه، زبان ذخیره‌شده را اعمال کن
document.addEventListener("DOMContentLoaded", () => {
  // خواندن زبان ذخیره‌شده
  const savedLang = localStorage.getItem('lang') || 'fa';
  const html = document.documentElement;

  if (savedLang === 'en') {
    html.lang = 'en';
    html.dir = 'ltr';
    document.querySelector('.lang-toggle')?.textContent = 'فارسی';
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });
  } else {
    html.lang = 'fa';
    html.dir = 'rtl';
    document.querySelector('.lang-toggle')?.textContent = 'English';
    document.querySelectorAll('[data-fa]').forEach(el => {
      el.textContent = el.getAttribute('data-fa');
    });
  }

  // منوی موبایل
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

  // Scroll Reveal
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