"use strict";

const sectionLinks = document.querySelector(".links");
const headerIcon = document.querySelector(".header__icon");

// const obsCallback = function (entries, observer) {
//   document.onmousewheel = stop;
//   entries.forEach((e) => {
//     console.log(sectionLinks.getBoundingClientRect());
//     if (e.isIntersecting) {

//     }
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(sectionLinks);

headerIcon.addEventListener("click", function () {
  const coordX = sectionLinks.getBoundingClientRect().x;
  const coordY = sectionLinks.getBoundingClientRect().y;
  // window.scrollTo(coordX + window.pageXOffset, coordY + window.pageYOffset);
  window.scrollTo({
    left: coordX + window.pageXOffset,
    top: coordY + window.pageYOffset,
    behavior: "smooth",
  });
});
