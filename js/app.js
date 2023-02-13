/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Function to get the distance of the section from the top of the viewport
const getDistanceFromTop = (element) => {
  return Math.floor(element.getBoundingClientRect().top);
};

// build the nav
const buildNav = () => {
  sections.forEach((section) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("menu__link");
    link.href = `#${section.id}`;
    link.innerText = section.dataset.nav;
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
};

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
  sections.forEach((section) => {
    const distance = getDistanceFromTop(section);
    if (distance < 200 && distance >= -200) {
      section.classList.add("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.remove("active");
    }
  });
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = (event) => {
  event.preventDefault();
  const targetSection = document.querySelector(
    event.target.getAttribute("href")
  );
  targetSection.scrollIntoView({ behavior: "smooth" });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Build the navigation menu when the page is loaded
document.addEventListener("DOMContentLoaded", buildNav);

// Scroll to section on link click
navList.addEventListener("click", scrollToSection);

// Set sections as active
document.addEventListener("scroll", setActiveSection);

