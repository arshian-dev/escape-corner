function greetUser() {
  alert("Welcome to Fiza's Escape Corner! If you're Fiza then you're the developer's favorite thing in the world, this space is for you. Have fun! And if not Fiza, leave immediately!");
}

// Function to toggle a dropdown menu
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

flag = false
function changeBackground() {
  const bg = document.querySelector(".lofi-background");
  if (flag) {
    bg.style.backgroundImage = "url(room-bg.jpg)"; // Use url() for paths
  } else {
    bg.style.backgroundImage = "url(study-bg.jpg)";
  }
  flag = !flag; // Toggle the flag
}
