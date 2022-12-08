const toggleSidebarBtn = document.querySelector(".menu-btn");
const mobSidebar = document.querySelector(".mob-sidebar");
const mainSidebar = document.querySelector(".page-sidebar");
const browseSection = document.querySelector(".browse-section");

const menuToggle = () => {
  if (window.getComputedStyle(mobSidebar).display === "none") {
    mobSidebar.style.display = "block";
    browseSection.style.maxWidth = "calc(100vw - 72px)";
    browseSection.style.marginLeft = "72px";
    mainSidebar.style.display = "none";
  } else if (mobSidebar.style.display !== "none") {
    mobSidebar.style.display = "none";
    mainSidebar.style.display = "block";
    browseSection.style.maxWidth = "calc(100vw - 240px)";
    browseSection.style.marginLeft = "240px";
  }
};

var shortsContainer = document.querySelector(".shorts-section .container");
console.log(shortsContainer.offsetWidth);
