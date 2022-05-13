let input = document.querySelector("input");
let root = document.querySelector(".root");

// Data

let movies = [
  { name: "Dunkirk", watched: false },
  { name: "Inception", watched: true },
];

function handleDelete(event) {
  let id = event.target.dataset.id;
  movies.splice(id, 1);
  createUI(movies);
  localStorage.setItem(`movies`, JSON.stringify(movies));
}

function handleToggle(event) {
  let id = event.target.dataset.id;
  movies[id].watched = !movies[id].watched;
  createUI(movies);
  localStorage.setItem(`movies`, JSON.stringify(movies));
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

function createUI(movie) {
  root.innerHTML = "";
  movie.forEach((mov, index) => {
    let li = document.createElement("li");
    li.classList.add("flex");
    let checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    checkbox.addEventListener(`input`, handleToggle);
    checkbox.setAttribute(`data-id`, index);
    checkbox.checked = mov.watched;
    let p = document.createElement(`p`);
    p.innerText = mov.name;
    let span = document.createElement(`span`);
    span.innerText = `X`;
    span.addEventListener(`click`, handleDelete);
    span.setAttribute(`data-id`, index);
    li.append(checkbox, p, span);
    root.append(li);
  });
}

createUI(movies);
input.addEventListener(`keyup`, handleEvent);
