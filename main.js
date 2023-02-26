 // Menu toggle
        const menuToggle = document.querySelector(".menu-toggle");
        const menuItems = document.querySelector(".menu-items");

        menuToggle.addEventListener("click", () => {
            menuItems.classList.toggle("show");
        });


        // Get all reserve buttons
const reserveButtons = document.querySelectorAll('.reserve-button');

// Add click event listener to each button
reserveButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the trip name from the data-trip attribute
    const tripName = button.dataset.trip;

    // Create the email body with the trip name
    const emailBody = `I would like to reserve the ${tripName} trip.`;

    // Open the email window
    window.location.href = `mailto:info@bike2goentebbe.com?subject=Reservation for ${tripName}&body=${emailBody}`;
  });
});


const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// Check if there are problems with the mobile version of the site
const hasMobileIssues = true; // Set this to true if there are issues with the mobile version of the site

// Display an alert message if there are issues with the mobile version of the site
if (hasMobileIssues) {
  alert('We are experiencing problems on our site. We are still setting up the site, so please use the web version if you encounter any issues. Alternatively, you can book with us through Trip Advisor. We apologize for any inconvenience.');
}

window.onload = function() {
  alert("Dear valued customers, \n\nWe are currently experiencing some technical issues with our website as we are still under construction. We apologize for any inconvenience this may cause. To ensure that you can still book your trip with us, we recommend using our desktop version or proceeding with bookings through Trip Advisor. \n\nOur team is working diligently to resolve the issue as quickly as possible, and we appreciate your patience and understanding during this time. \n\nThank you for choosing our service, and we look forward to providing you with an exceptional travel experience. \n\nBest regards, \n[Bike2goEntebbe]");
