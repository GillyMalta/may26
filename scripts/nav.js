// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("../../pages/nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});