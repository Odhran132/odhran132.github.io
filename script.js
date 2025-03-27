// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animations on scroll
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => {
    section.classList.add("fade-hidden");
    observer.observe(section);
  });

  // Sidebar toggle functionality
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("toggleSidebar");
  const toggleIcon = document.getElementById("toggleIcon");

  // Set initial state to closed
  sidebar.classList.add("closed");
  toggleButton.style.right = "0";
  toggleIcon.textContent = ">";

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("closed");
    
    if (sidebar.classList.contains("closed")) {
      toggleButton.style.right = "0";
      toggleIcon.textContent = ">";  // Arrow points right when closed
    } else {
      toggleButton.style.right = "20%";
      toggleIcon.textContent = "<";  // Arrow points left when open
    }
  });
});







  

