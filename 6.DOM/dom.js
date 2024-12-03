// let parrafoDos=document.getElementById("dos")
// let texto=prompt("ingresa el texto")
// parrafoDos.textContent=texto

/* <div id="miId" class="miClase" style="background:red;
width:200px;heigh:200px"></div> */
let newElem=document.createElement("div")
newElem.id="mi Id"
newElem.className="miClase"
let respuesta=prompt("Escribe el color rojo o azul en el cuadrado")
if (respuesta=="rojo"){
    newElem.className="cuadro_rojo"
}else{
    newElem.className="cuadro_azul"
}
// newElem.style="background:red; width:200px; heigth:200px"
let body=document.querySelector("body")
body.appendChild(newElem)