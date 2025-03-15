// Go to top button
const topBtn = document.getElementById("topBtn");

// Add event listener to scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Add event listener to click
topBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
