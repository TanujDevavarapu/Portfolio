// Dynamic Greeting
function showGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
  document.getElementById("greeting-message").innerText = greeting + " Welcome to my portfolio!";
}
showGreeting();

// Typing Effect for Roles (only for the role part)
const roles = ["Software Developer", "Web Developer", "Front End Developer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed in milliseconds
const erasingSpeed = 50; // Erasing speed in milliseconds
const delayBetweenRoles = 1500; // Delay between roles in milliseconds
const roleElement = document.getElementById("dynamic-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, typingSpeed);
  } else {
      setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, erasingSpeed);
  } else {
      roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
      setTimeout(typeRole, typingSpeed);
  }
}

// Start the typing effect for the role
typeRole();

// Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! Your message has been received.");
  this.reset();
});

