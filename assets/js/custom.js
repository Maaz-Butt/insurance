// right-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
slid.onclick = () => {
  let dropdwon = document.getElementById("slid-drop");
  dropdwon.classList.toggle("aside-dropdwon");
};

// slider
$(".Customer-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// =====Logo slider====
$(".logo_slider").slick({
  dots: false,
  infinite: true,
  speed: 6000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false, // Disables both previous and next arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// counter
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = parseInt(counter.dataset.target);
  let count = 0;
  const updateCount = () => {
    const increment = Math.ceil((target - count) / 10);
    count += increment;
    counter.innerText = count;
    if (count < target) {
      setTimeout(updateCount, 25);
    }
  };
  // Individual scroll trigger for each counter
  const wrapper = counter.parentElement; // Get the counter's wrapper element
  const triggerPoint =
    wrapper.getBoundingClientRect().top + window.scrollY - 600; // Calculate trigger position based on scroll and wrapper top
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (
      scrollPosition > triggerPoint &&
      !counter.classList.contains("counted")
    ) {
      // Check scroll position and a "counted" class
      updateCount();
      counter.classList.add("counted"); // Add "counted" class to prevent future runs
    }
  });
});
