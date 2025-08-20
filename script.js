

const buttons = document.querySelectorAll('.filter-btn');
  const notices = document.querySelectorAll('#noticeList li');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');

      notices.forEach(li => {
        const noticeType = li.querySelector('.notice_content').getAttribute('data-type');
        if (type === 'all' || noticeType === type) {
          li.style.display = '';
        } else {
          li.style.display = 'none';
        }
      });
    });
  });




  document.getElementById("readMoreBtn").addEventListener("click", function () {
    const moreText = document.getElementById("moreText");
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      this.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      this.textContent = "Read More";
    }
  });


  const goUpBtn = document.getElementById("goUpBtn");
  window.addEventListener("scroll", () => {
    goUpBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });





  const showBtn = document.getElementById("showMoreFaculty");
  const hiddenCards = document.querySelectorAll(".faculty-card");

  // Initially hide cards after the first 4
  hiddenCards.forEach((card, index) => {
    if(index >= 4) card.classList.add("d-none");
  });

  let expanded = false;

  showBtn.addEventListener("click", () => {
    if (!expanded) {
      // Show all
      hiddenCards.forEach(card => card.classList.remove("d-none"));
      showBtn.textContent = "Show Less";
      expanded = true;
    } else {
      // Hide cards after first 4
      hiddenCards.forEach((card, index) => {
        if(index >= 4) card.classList.add("d-none");
      });
      showBtn.textContent = "Show More";
      expanded = false;
    }
  });



  const counters = document.querySelectorAll('.count');

const options = {
  root: null,
  threshold: 0.5 // trigger when 50% of the section is visible
};

const startCounter = (entry) => {
  if(entry[0].isIntersecting){
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200; // adjust speed

        if(count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
    observer.unobserve(entry[0].target); // run only once
  }
};

const observer = new IntersectionObserver(startCounter, options);
const statsSection = document.querySelector('.statistics');
observer.observe(statsSection);


