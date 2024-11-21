let formatis12 = false;

document.getElementById("btn12").addEventListener("click", function () {
  formatis12 = true;
  updateClock();
});

document.getElementById("btn24").addEventListener("click", function () {
  formatis12 = false;
  updateClock();
});

function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  let amPm = "";
  if (formatis12) {
    amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
  }

  hours = String(hours).padStart(2, "0");

  clockElement.innerText = `${hours}:${minutes}:${seconds} ${
    formatis12 ? amPm : ""
  }`;
}

setInterval(updateClock, 1000);

updateClock();
