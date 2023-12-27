//Function to unblur the site
function unblurSite() {
  document.body.style.filter = "blur(0)";
  document.querySelectorAll("section").forEach(section => {
    section.style.filter = "blur(0)";
  });
}

// Function to greet the user
function greetUser() {
  alert("Welcome to Fiza's Escape Corner!");
}

// Function to toggle a dropdown menu
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Function to change the background color
function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

function checkPassword() {
  const enteredPassword = document.getElementById("passwordInput").value;
  const correctPassword = "your_secret_password"; // Replace with the actual password

  if (enteredPassword === correctPassword) {
    unblurSite();
  } else {
    // Handle incorrect password (e.g., display an error message)
    alert("Incorrect password. Please try again.");
  }
}