console.log("Linked!");

const title = document.getElementById("title");
const content = document.getElementsByClassName("content");
const listItems = document.getElementsByTagName("li");
const highlight = document.querySelector(".highlight");
const highlights = document.querySelectorAll(".highlight");

//ticket 2
const firstLI = document.querySelector("li");
const parentOfFirstLI = firstLI.parentNode;

const ul = document.querySelector("li").parentNode;

console.log(ul === parentOfFirstLI);

console.log(ul.children); // html elements only

console.log(ul.childNodes); // EVERYTHING! all the nodes, whether html elements or other nodes

const firstChildYAY = ul.firstChild;
const lastChildYAY = ul.lastChild;
// how do we combine?
console.log("firstChild, lastChild");
console.log(firstChildYAY, lastChildYAY);

const maybe = ul.firstChild.lastChild;
console.log("ul.firstChild.lastChild");
console.log(maybe);

const holly = document.querySelectorAll('ul > firstChild, ul > lastChild');
console.log(holly);

const ulArray = Array.from(document.querySelector("ul"));

console.log(ul.lastElementChild); // this returns last list item, fig.













