const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const collapsedClass = "collapsed";

collapseBtn.addEventListener("click", function () {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "collapse menu"
    ? this.setAttribute("aria-label", "expand menu")
    : this.setAttribute("aria-label", "collapse menu");
  body.classList.toggle(collapsedClass);
});

toggleMobileMenu.addEventListener("click", function () {
  this.getAttribute("aria-expanded") == "true"
    ? this.setAttribute("aria-expanded", "false")
    : this.setAttribute("aria-expanded", "true");
  this.getAttribute("aria-label") == "open menu"
    ? this.setAttribute("aria-label", "close menu")
    : this.setAttribute("aria-label", "open menu");
  body.classList.toggle("mob-menu-opened");
});

// board1
let tabs = document.querySelectorAll(".board1_tabs ul li");
let today = document.querySelector(".today");
let month = document.querySelector(".month");
let items = document.querySelectorAll(".board1_item");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    let currentdetail = tab.getAttribute("data-li");
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    items.forEach(function (item) {
      item.style.display = "none";
    });

    if (currentdetail == "today") {
      today.style.display = "block";
    } else if (currentdetail == "month") {
      month.style.display = "block";
    }
  });
});

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn-header")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn-mail")) {
    let dropdowns = document.getElementsByClassName("dropdown-content-mail");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// stickynav
("use strict");

window.addEventListener("scroll", navToggel);
const navigationBar = document.querySelector(".page-header-inner");
function navToggel() {
  if (window.scrollY > 170) {
    navigationBar.classList.add("stickyNavbar");
  } else {
    navigationBar.classList.remove("stickyNavbar");
  }
}
