

  AOS.init({
    duration: 2000, // animation duration in ms
    once: true      // ensures animation happens only once
  });



  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
      const nav_logo = document.getElementById("nav_logo");
           const nav_main_part = document.getElementById("nav_main_part");

      if (!nav_logo) return;

      if (window.scrollY > 200) {
        nav_logo.style.display = "block";
        nav_main_part.className = " col-md-11 ";

      } else {
        nav_logo.style.display = "none";
        nav_main_part.className = " col-md-12";
      }
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const nav_bar = document.getElementById("nav_bar");
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 400) {
        nav_bar.classList.add("hide-navbar");
        nav_bar.classList.remove("show-navbar");
      } else {
        nav_bar.classList.add("show-navbar");
        nav_bar.classList.remove("hide-navbar");
      }

      lastScroll = currentScroll;
    });
  });

