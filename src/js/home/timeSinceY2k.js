function timeSinceY2k() {
  const y2kDate = new Date("2000-01-01T00:00:00Z");
  const currentDate = new Date();
  const timeDiffMs = currentDate - y2kDate;
  const dateContainer = document.querySelector("#y2k-time");

  let totalSeconds = Math.floor(timeDiffMs / 1000);
  let totalMinutes = Math.floor(totalSeconds / 60);
  let totalHours = Math.floor(totalMinutes / 60);
  let totalDays = Math.floor(totalHours / 24);

  let years = Math.floor(totalDays / 365.25);
  let remainingDays = totalDays % 365.25;

  let months = Math.floor(remainingDays / 30.44);
  let days = Math.floor(remainingDays % 30.44);

  let hours = totalHours % 24;
  let minutes = totalMinutes % 60;
  let seconds = totalSeconds % 60;

  dateContainer.textContent =
    `-${years} years, ${months} months, ${days} days, ` +
    `${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
  dateContainer.classList.toggle("text-red-700");
  dateContainer.classList.toggle("text-red-500");
}

setInterval(timeSinceY2k, 1000);
