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

