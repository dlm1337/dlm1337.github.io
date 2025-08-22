"use strict";

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const mainContent = document.querySelector("[main-content]");
const hideSideBar = document.getElementsByClassName("sidebar-info");
//allows for minimizing the basic info and photo
var x = 0;
sidebarBtn.addEventListener("click", function () {
  if (x % 2 == 0) {
    Array.from(hideSideBar[0].children).forEach(child => {
      if (!child.classList.contains('info_more-btn')) {
        child.style.display = 'none';
      }
    });
  }
  else {
    Array.from(hideSideBar[0].children).forEach(child => {
      child.style.display = 'block';
    });
  }
  x++;
});

//images for projects article. Opens modal to view closer on click.
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

var modal = document.getElementById("myModal");

var modalImage = document.getElementById("portfolio-modal-image");

img1.onclick = function () {
  var src = img1.lastElementChild.src;
  modal.style.display = "block";
  modalImage.src = src;
};
img2.onclick = function () {
  var src = img2.lastElementChild.src;
  modal.style.display = "block";
  modalImage.src = src;
};
img3.onclick = function () {
  var src = img3.lastElementChild.src;
  modal.style.display = "block";
  modalImage.src = src;
};
img4.onclick = function () {
  var src = img4.lastElementChild.src;
  modal.style.display = "block";
  modalImage.src = src;
};
//modal for closer view at screenshots.
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const portfolioModalClose = document.getElementById("portfolio-modal-close");

portfolioModalClose.addEventListener("click", async () => {
  modal.style.display = "none";
});

const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

const filterItems = document.querySelectorAll("[data-filter-item]");
//active class causes an animation and highlights the clicked on tab.
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

let lastClickedBtn = filterBtn[0];
//listens for clicks for each tab on the nav-bar. calls the filler func to handle which should be active.
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
navigationLinks[0].classList.add("active");
const pages = document.querySelectorAll("[data-page]");

//Grabs the page picked on the navbar.
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
//space shooter game
function game() {
  sidebar.style.display = "none";
  mainContent.style.width = "100%";
}
//changes display to article represented on the nav-bar.
function resetSidebar() {
  sidebar.style.display = "block";
}