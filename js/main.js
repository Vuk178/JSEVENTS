const { createElement } = require("react");

const films = [
    {id: crypto.randomUUID(), title: "Kumovi", genre: "drama", minutes: 175, watched: true},
    {id: crypto.randomUUID(), title: "Coco", genre: "animirnai", minutes: 105, watched: false},
    {id: crypto.randomUUID(), title: "Čudnovate zgode šegrta Hlapića", genre: "animirani", minutes: 80, watched: true},
    {id: crypto.randomUUID(), title: "Život Briana", genre: "komedija", minutes: 94, watched: false},
    {id: crypto.randomUUID(), title: "Moja učiteljica hobotnica", genre: "dokumentarni", minutes: 85, watched: false},
    {id: crypto.randomUUID(), title: "Ne gledaj gore", genre: "komedija", minutes: 130, watched: false}
];

console.log(films);

const list = document.querySelector("#list");
const counter = document.querySelector("#counter");
const empty = document.querySelector("#empty");

function createItem(film) {
    const li = createElement("li");
    li.dataset.id = film.id;
    li.className = "flex items-center gap-2 rounded bg-white p-3 shadow"

    const text = document.createElement("span");
    text.className = "flex-1";
    text.classList.toggle("line-through", film.watched);
    text.textContent = `$(film.title) - $(film.genre) - $(film.minutes) min`;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.dataset.action = "toggle";
    toggle.className = "rounded bg-emerald-100 px-4 py-1 text-sm hover: bg-emerald-500";
    toggle.textContent = film.watched ? "vrati" : "Pregledano";

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.dataset.action = "delete";
    toggle.className = "rounded bg-red-100 px-4 py-1 text-sm hover: bg-red-500";
    toggle.textContent = "OBriši"

    li.append(text, toggle, remove);
    return li;
}
