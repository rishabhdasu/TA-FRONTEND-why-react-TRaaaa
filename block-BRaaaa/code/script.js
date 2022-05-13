let input = document.querySelector("input");
let root = document.querySelector(".root");

// Data

let movies = [
  { name: "Dunkirk", watched: false },
  { name: "Inception", watched: true },
];

function handleChange(event) {
  let id = event.target.id;
  movies[id].watched = !movies[id].watched;
  createUI(movies);
}

function handleEvent(event) {
  if (event.keyCode === 13) {
    movies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI(movies);
  }
}

function createUI(data) {
  root.innerHTML = "";
  data.forEach((movie, index) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let label = document.createElement(`label`);
    label.for = index;
    label.innerText = movie.name;
    let button = document.createElement("button");
    button.innerText = movie.watched ? "Watched" : "To Watch";
    button.id = index;
    button.addEventListener("click", handleChange);
    li.append(label, button);
    root.append(li);
  });
}

createUI(movies);
input.addEventListener(`keyup`, handleEvent);
