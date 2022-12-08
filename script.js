const toggleSidebarBtn = document.querySelector(".menu-btn");
const mobSidebar = document.querySelector(".mob-sidebar");
const mainSidebar = document.querySelector(".page-sidebar");
const browseSection = document.querySelector(".browse-section");

const menuToggle = () => {
  if (window.getComputedStyle(mobSidebar).display === "none") {
    mobSidebar.style.display = "block";
    browseSection.style.maxWidth = "calc(100vw - 70px)";
    browseSection.style.marginLeft = "72px";
    mainSidebar.style.display = "none";
  } else if (mobSidebar.style.display !== "none") {
    mobSidebar.style.display = "none";
    mainSidebar.style.display = "block";
    browseSection.style.maxWidth = "calc(100vw - 240px)";
    browseSection.style.marginLeft = "240px";
  }
};

// var x = window.matchMedia("(max-width: 1300px)");

// function sidebarQuery(x) {
//   if (x.matches) {
//     mobSidebar.style.display = "block";
//     mainSidebar.style.display = "none";
//     browseSection.style.maxWidth = "calc(100vw - 72px)";
//     browseSection.style.marginLeft = "72px";
//   }
// }

var shortsContainer = document.querySelector(".shorts-section .container");
console.log(shortsContainer.offsetWidth);

const nextBtn = document.querySelector(".next-btn");
const categoryChips = document.querySelectorAll(".single-chip");
const chipsContainer = document.querySelector(".chips-container");

console.log(categoryChips[0]);

for (let i = 0; i < 17; i++) {
  console.log(categoryChips[i]);
}

// const nextClick = () => {
//   for (let i = 0; i < 17; i++) {
//     chipsContainer.style.marginLeft =
//   }
// };

const shortsSeeMoreBtn = document.querySelector(".see-more-btn");
const shortsContainer = document.querySelector(
  ".shorts-section .grid-container"
);

console.log(shortsContainer);

const shortSeeMore = () => {
  shortsContainer.style.minHeight = "100vh";
};
