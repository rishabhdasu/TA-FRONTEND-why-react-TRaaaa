let input = document.querySelector("input");
let root = document.querySelector(".root");

// Data

let movies = [
  { name: "Dunkirk", watched: false },
  { name: "Inception", watched: true },
];

let elm = React.createElement;

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
  let ui = data.map((movie, index) => {
    let btn = elm(
      "button",
      { id: index, onClick: handleChange },
      movie.watched ? "Watched" : "To Watch"
    );
    let li = elm(
      "li",
      { class: "flex" },
      elm("label", { for: index }, movie.name),
      btn
    );
    return li;
  });
  ReactDOM.render(ui, root);
}

createUI(movies);
input.addEventListener(`keyup`, handleEvent);
