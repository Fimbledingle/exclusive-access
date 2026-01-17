function goToStep2() {
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;

  if (!month || !day) {
    alert("Please enter your birth month and day.");
    return;
  }

  showStep(2);

  setTimeout(() => {
    showStep(3);
  }, 3500);
}

function showStep(step) {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("active");
  });
  document.getElementById("step" + step).classList.add("active");
}

/* CALL THIS AFTER OGADS COMPLETION */
function revealSoulCity() {
  const cities = [
    "Kyoto",
    "Cape Town",
    "Istanbul",
    "Lisbon",
    "Ubud",
    "Marrakech",
    "Reykjavík"
  ];

  const city = cities[Math.floor(Math.random() * cities.length)];
  document.getElementById("resultCity").innerText = city;
  showStep(4);
}
