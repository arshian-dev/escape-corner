function photoIndex(min, max) {
  // Ensure min is less than or equal to max:
  if (min > max) {
    [min, max] = [max, min]; // Swap values if needed
  }
  const randomDecimal = Math.random() * (max - min) + min;
return Math.floor(randomDecimal);
}

// Example usage:
const randomNumber = getRandomNumberInRange(0, 5);
console.log(randomNumber); // Output: A random number from 0 to 5


const backgroundPhotos = [
  "room-bg.jpg",
  "music-bg.jpg",
  "black.png",
];

//Function to unblur the site
function unblurSite() {
  document.body.style.filter = "blur(0)";
  document.querySelectorAll("section").forEach(section => {
    section.style.filter = "blur(0)";
  });
}

// Function to greet the user
function greetUser() {
  alert("Welcome to Fiza's Escape Corner! If you're Fiza then you're the developer's favorite thing in the world, this space is for you. Have fun! And if not Fiza, leave immediately!");
}

// Function to toggle a dropdown menu
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function changeBackground(photoIndex(0, 2)) {
  const chosenPhoto = backgroundPhotos[photoIndex];
  const bg = document.querySelector(".lofi-background");
  bg.style.backgroundImage = `url(${chosenPhoto})`;
}

function checkPassword() {
  const enteredPassword = document.getElementById("passwordInput").value;
  const correctPassword = "fizaorakzai"; // Replace with the actual password

  if (enteredPassword === correctPassword) {
    unblurSite();
  } else {
    // Handle incorrect password (e.g., display an error message)
    alert("Incorrect password. Please try again.");
  }
}
