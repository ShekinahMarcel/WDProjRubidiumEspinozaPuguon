const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    goal: document.getElementById("goal").value
  };

  localStorage.setItem("japaneaseUser", JSON.stringify(user));

  alert("Profile Saved!")

  window.location.href = "A_home.html";
});

  const mySound = new Audio(`audio/JapanEaseAudio.mp3`); 
  mySound.preload = "auto";

  function playSound() {
    mySound.currentTime = 0;
    mySound.play();
  }
