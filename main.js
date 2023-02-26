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
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}




