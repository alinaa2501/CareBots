// Add a event listener to the window object to check if the user has scrolled the page
// and add a class to make the navbar transparent when the user scrolls the page
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar'); // Get the navbar element
    var navbarToggler = document.querySelector('.navbar-toggler'); // Select the navbar toggler button
    var notFoundCounter = 0;

    // Check if the navbar toggler is visible (is true only when the navbar is in collapsed state, which is only on smaller screens)
    if (navbarToggler) {
        var isNavbarCollapsed = window.getComputedStyle(navbarToggler).display !== 'none';
        // When refreshing when scrolled down, the navbarToggler is not yet found
        // Skip error when this happens and only show it when it happens more often
    } else {
        notFoundCounter++;
        if (notFoundCounter > 1) {
            console.error('Navbar toggler element not yet found.');
            notFoundCounter++;
        }
    }

    // Check if the device is a touch device
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (window.scrollY > 0 && !isNavbarCollapsed && !isTouchDevice) {
        navbar.classList.add('sticky-navbar-transparent');
    } else {
        navbar.classList.remove('sticky-navbar-transparent');
    }
});



// Check if the navbar has sticky-top or fixed-top class
if (document.getElementById('navbar').classList.contains('sticky-top')) {
    navbarClass = 'sticky-top';
} else if (document.getElementById('navbar').classList.contains('fixed-top')) {
    navbarClass = 'fixed-top';
} else {
    console.log('Navbar class not found');
}

// Check the zoom level of the browser after the page is loaded
// and remove the sticky-top or fixed-top class if the zoom level is equal or more than 200%
var zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
var navbar = document.getElementById('navbar'); // Get the navbar element

if (zoomLevel >= 200) {
    navbar.classList.remove(navbarClass);
}

// Add an event listener to check the zoom level of the browser when the window is resized
// and remove the sticky-top or fixed-top class if the zoom level is equal or more than 200%
window.addEventListener('resize', function () {
    var zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
    var navbar = document.getElementById('navbar'); // Get the navbar element

    // if zoom level is equal or more than 200&, remove the sticky-top class
    if (zoomLevel >= 200) {
        navbar.classList.remove(navbarClass);
    } else {
        navbar.classList.add(navbarClass);
    }
});