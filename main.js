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

// add touch event listeners to the slider
slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchmove', touchMove);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchcancel', touchEnd);

function touchStart(e) {
  startPos = e.touches[0].clientX;
  isDragging = true;
}

function touchMove(e) {
  if (isDragging) {
    const currentPosition = e.touches[0].clientX;
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function touchEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;

  // slide to the nearest image
  const threshold = slider.clientWidth / 4;
  if (Math.abs(currentTranslate - prevTranslate) > threshold) {
    if (currentTranslate > prevTranslate) {
      slider.style.transform = `translateX(${prevTranslate - slider.clientWidth}px)`;
    } else {
      slider.style.transform = `translateX(${prevTranslate + slider.clientWidth}px)`;
    }
    prevTranslate = currentTranslate;
  } else {
    slider.style.transform = `translateX(${prevTranslate}px)`;
  }
}

// add click event listeners to the prev/next buttons
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
prevBtn.addEventListener('click', slidePrev);
nextBtn.addEventListener('click', slideNext);

function slidePrev() {
  slider.style.transform = `translateX(${prevTranslate + slider.clientWidth}px)`;
  prevTranslate += slider.clientWidth;
}

function slideNext() {
  slider.style.transform = `translateX(${prevTranslate - slider.clientWidth}px)`;
  prevTranslate -= slider.clientWidth;
}
