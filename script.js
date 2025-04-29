// Dynamic Greeting
function showGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
  document.getElementById("greeting-message").innerText = greeting + " Welcome to my portfolio!";
}
showGreeting();
const roles = ["Software Developer", "Web Developer", "Front End Developer"];
let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenRoles = 1500; 
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
      roleIndex = (roleIndex + 1) % roles.length; 
      setTimeout(typeRole, typingSpeed);
  }
}
typeRole();
// Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you for reaching out! Your message has been received.");
  this.reset();
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('nav ul');

    mobileNavToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});

