console.log("Hola, mundo!")

const title = document.getElementById("title");

title.addEventListener("mouseenter", mouseIn);
title.addEventListener("mouseleave", mouseOut);


function mouseIn() {
    title.style.color = "blue";
    console.log("El mouse ha entrado en el título");

}

function mouseOut() {
    title.style.color = "black";
    console.log("El mouse ha salido del título");
}