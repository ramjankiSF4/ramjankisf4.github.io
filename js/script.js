document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".navbar");
  const menuBtn = document.querySelector("#menu-btn");
  const backtotop = document.getElementById("back-to-top-btn");
  // Toggle menu visibility on click
  menuBtn.onclick = () => menu.classList.toggle("active");
  // Remove menu visibility when scrolling
  window.onscroll = () => menu.classList.remove("active");
  // Initially hide the back-to-top button
  backtotop.style.display = "none";
  // Show back-to-top button when scrolling down past 100 pixels
  window.addEventListener("scroll", () => {
    backtotop.style.display = window.scrollY > 100 ? "block" : "none";
  });
  // Scroll to top smoothly when back-to-top button is clicked
  backtotop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});