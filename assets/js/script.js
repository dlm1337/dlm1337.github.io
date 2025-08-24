"use strict";
//for closing sidebar where basic info is.
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const hideSideBar = document.getElementsByClassName("sidebar-info");

//change the viewing area for gaming.
const mainContent = document.querySelector("[main-content]");

//images for projects article tab. Opens modal to view closer on click.
const img1 = document.getElementById("img1");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

//modal for closer view at screenshots on projects article tab.
var modal = document.getElementById("myModal");
var modalImage = document.getElementById("portfolio-modal-image");
const portfolioModalClose = document.getElementById("portfolio-modal-close");

//nav-bar event handling.
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

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

//brings up closer view of project images.
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

//closes the pop-up modal view at projects.
portfolioModalClose.addEventListener("click", async () => {
  modal.style.display = "none";
});


//sets landing page as default tab.
navigationLinks[0].classList.add("active");
//listen for clicks on all other tabs in nav-bar.
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