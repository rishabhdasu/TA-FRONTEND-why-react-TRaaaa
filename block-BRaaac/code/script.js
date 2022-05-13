let input = document.querySelector("input");
let root = document.querySelector(".root");

// Data

let movies = [
  { name: "Dunkirk", watched: false },
  { name: "Inception", watched: true },
];

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

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
    root.append(li);
  });
}

createUI(movies);
input.addEventListener(`keyup`, handleEvent);
