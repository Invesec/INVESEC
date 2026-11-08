// IMPORTANT: Replace this with the real published Google Forms URL.
// The phone number supplied as the "application URL" is not a Google Forms URL.
const APPLICATION_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_URL_HERE";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

const formLinks = document.querySelectorAll(".form-link");
const formNote = document.getElementById("form-note");
const validFormUrl = /^https:\/\/docs\.google\.com\/forms\/.+/i.test(APPLICATION_FORM_URL);

formLinks.forEach(link => {
  if (validFormUrl) {
    link.href = APPLICATION_FORM_URL;
    link.target = "_blank";
    link.rel = "noopener";
    formNote.textContent = "You will be redirected to the Invesec expression-of-interest form.";
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("The Google Forms link has not been added yet. Open script.js and replace PASTE_YOUR_GOOGLE_FORM_URL_HERE with your published Google Forms URL.");
    });
  }
});
