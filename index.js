console.log("Smashing");
const title = document.getElementById("title");
title.setAttribute("style", "color: red; font-size: 30px;");

const newP = document.createElement("p");
newP.textContent = "This is a dynamically added paragraph.";
document.body.appendChild(newP);

const firstP = document.querySelector("p.content");
firstP.textContent = "This paragraph has been updated.";

// const secondP = document.querySelector('p.content:nth-child(2)');
const secondP = firstP.nextElementSibling;
secondP.setAttribute("title", "Hover over me!");

const itemList = document.getElementById("itemList");
itemList.classList.add("styled-list");
clArray = Array.from(itemList.children);
const banana = clArray[1];
banana.classList.remove("list-item");
const date = clArray[3];
itemList.removeChild(date);
