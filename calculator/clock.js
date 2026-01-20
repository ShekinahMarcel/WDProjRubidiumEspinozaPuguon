function updateClock() {
  const clockEl = document.getElementById("clock");
  if (!clockEl) return;

  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString();
}




