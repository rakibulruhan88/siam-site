// Show Menu ===
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// Menu Show
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
  });
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
}

window.onscroll = () => {
  navMenu.classList.remove("show");
};

// Remove Menu mobile ===
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// -------------
// Email Send
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publickey
  emailjs
    .sendForm(
      "service_nkxgkrk",
      "template_ht7a9qw",
      "#contact-form",
      "D8v7XjWwCsn6QuUAZ"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully";

        // Remove message after 5 seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error)";
      }
    );
};
contactForm.addEventListener("submit", sendEmail);
