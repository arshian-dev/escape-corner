window.onload = () => {
  const blurOverlay = document.querySelector(".blur-overlay");
  const introText = document.querySelector(".intro-text");

  // Show text first
  introText.style.opacity = 1;

  setTimeout(() => {
    // Fade out both text and blur simultaneously
    introText.style.opacity = 0;
    blurOverlay.style.opacity = 0;

    setTimeout(() => {
      // Remove overflow: hidden to show unblurred content
      document.querySelector(".landing-page").style.overflow = "visible";
    }, 1500); /* Adjust delay as needed */
  }, 2000); /* Duration for text visibility */
};

function greetUser() {
  alert("Welcome to Fiza's Escape Corner! If you're Fiza then you're the developer's favorite thing in the world, this space is for you. Have fun! And if not Fiza, leave immediately!");
}

// Function to toggle a dropdown menu
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const flag = true
function changeBackground() {
  const bg = document.querySelector(".lofi-background");
  if (flag) {
    bg.style.backgroundImage = "url(room-bg.jpg)"; // Use url() for paths
  } else {
    bg.style.backgroundImage = "url(study-bg.jpg)";
  }
  flag = !flag; // Toggle the flag
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
