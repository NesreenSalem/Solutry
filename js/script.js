'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector(".header");
const navToggleBtn = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".nav-link li");

navToggleBtn.addEventListener("click",  ()=> {
     //Links
     navLinks.classList.toggle("open");
     links.forEach(link => {
         link.classList.toggle("fade");
     });
 
     //Animation
     navToggleBtn.classList.toggle("toggle");
  }
 );




