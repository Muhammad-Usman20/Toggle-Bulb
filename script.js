const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", () => {
  if (isOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    bulb.classList.remove("on");
    toggleBtn.textContent = "Turn ON";
    isOn = false;
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    bulb.classList.add("on");
    toggleBtn.textContent = "Turn OFF";
    isOn = true;
  }
});
