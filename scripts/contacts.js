// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("../contacts.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contactme").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});