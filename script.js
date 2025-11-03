document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("status").textContent = "Thank you! Your message has been sent (not really, since this is a static site 😄)";
});
