function showSection(id) {
    document.querySelectorAll(".section").forEach(section => {
      section.classList.remove("active");
    });
  
    document.getElementById(id).classList.add("active");
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
  });
  