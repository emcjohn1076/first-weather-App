//Challenge 1
let now = new Date();

let date = document.querySelector("#dateHeading");
console.log;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

date.innerHTML = `${day} ${hour}:${minutes}`;

//Challenge 2
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("search-text-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", searchCity);
