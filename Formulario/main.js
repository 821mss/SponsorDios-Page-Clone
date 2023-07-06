const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

let cajaGrid = document.getElementById("contenedorGri");
let back = document.getElementById("back");
let next = document.getElementById("next");
cajaGrid.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    cajaGrid.scrollLeft += evt-deltaY;
});

next.addEventListener("click", ()=>{
    cajaGrid.scrollLeft +=900;
})
back.addEventListener("click", ()=>{
    cajaGrid.scrollLeft +=900;
})
