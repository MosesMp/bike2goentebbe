// Menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");

menuToggle.addEventListener("click", () => {
    menuItems.classList.toggle("show");
});

// Select all reserve buttons
const reserveButtons = document.querySelectorAll('.reserve-button');

// Loop through each button and add a click event listener
reserveButtons.forEach(button => {
button.addEventListener('click', () => {
// Get the trip name from the data-trip attribute
const tripName = button.getAttribute('data-trip');
// Send an email with the trip name in the subject line
const mailtoLink = `mailto:info@bike2goentebbe.com?subject=Reservation Request - ${tripName}`;
window.location.href = mailtoLink;
});
});






let slideIndex = 0;
showSlides();

function showSlides() {
let i;
const slides = document.getElementsByClassName("slide");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {
slideIndex = 1;
}
slides[slideIndex - 1].style.display = "block";
setTimeout(showSlides, 2000); // Change image every 5 seconds
}



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("home-button").style.display = "block";
} else {
document.getElementById("home-button").style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("home-button").onclick = function() {topFunction()};

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

window.addEventListener('load', function() {
const loader = document.querySelector('.loader');
const pageContent = document.querySelector('.page-content');

// Add 'loading' class to the body element when the loader is displayed
document.body.classList.add('loading');

// Remove 'loading' class and show page content after 3 seconds
setTimeout(function() {
loader.parentElement.removeChild(loader);
pageContent.classList.add('show');
document.body.classList.remove('loading');
}, 2000);
});

if (location.protocol !== 'https:') {
location.replace(`https:${location.href.substring(location.protocol.length)}`);
}


