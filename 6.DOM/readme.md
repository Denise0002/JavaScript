# DOM-Document Object model
Modelo de documentos de objetos
El DOM es un conjunto de utilidades especificamente diseñadas para manipular ddocumentos `html`.
El DOM transforma el archivo `HTML` en un arbol de nodos jerarquico facilmente manipulables.

El DOM convierte todo el contenido del archivo `HTML` en un objeto de Javascript.

- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p class="parrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
</body>
```
- **mi archivo script.js**
```javascript
document:{
    Element:body,
    Attr:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"}
            Text:"este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:null
                    Text:"Primer elemento"
                    child:[]
                }
                {
                    Element:li,
                    Attr:null
                    Text:"Segundo elemento"
                    child:[]
                }
                {
                    Element:li,
                    Attr:null
                    Text:"Tercer elemento"
                    child:[]
                }
            ]
        }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de Javascript, nos ofrece una `API`. (Aplication Programing Interfacez - Interfaz de Programacion de Aplicaciones).

## Selectores - Recorriendo el DOM
Los selectores nos permiten obtener o cpaturar una o varias etiquetas `HTML`, incluyendo sus atributos, contenido e hijos si los tuvieran.
Los selectores que podemos utilizar son variados, podemos capturar etiquetas atraves de sus atributos, como de el nombre de la etiqueta  misma.
Los selectores son funciones si hablamos de POO, entonces se puede decir que son `metodos`.
Y son los siguientes:

- **getElementById** - Devuelve un elemento (etiqueta) que tenga un  ID especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```

```js
let parrafo=document.getElementById("dos")
```
**getElementByClassName** Debuelve un elemento que tenga una clase especifica 
```js
let parrafo=documento
```
```html
<h1 id="titulo"></h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subtitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos usa para recorrer el DOM tiene Javascript**
- **parentNode:** - Devuelve el nodo padre del elemento.
javascript
```js
const padre = elemento.parentNode;
```
- **children:** - Devuelve una colección de nodos hijos que son elementos (excluye nodos de texto o comentarios).
```js
const hijosCompletos = elemento.childNodes;
```
- **childNodes:** - Devuelve todos los nodos hijos, incluyendo texto, comentarios y elementos.
```js
const hijosCompletos = elemento.childNodes;
```
- **firstChild:** Devuelve el primer hijo de un nodo, que puede ser de cualquier tipo (nodo de texto, comentario o elemento).
```js
const primerHijo = elemento.firstChild;
```
- **firstElementChild:** Devuelve el primer hijo del nodo, pero solo si es un elemento (no texto ni comentarios).
```js
const primerElementoHijo = elemento.firstElementChild;
```
- **lastChild:** Devuelve el último hijo de un nodo (puede ser cualquier tipo de nodo).
```js
const ultimoHijo = elemento.lastChild;
```
- **lastElementChild:** Devuelve el último hijo, pero solo si es un elemento.
```js
const ultimoElementoHijo = elemento.lastElementChild;
```



## Manipulacion del DOM
- **CreateElement** - Este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
```
- **AppendChild** - Nos permite hacer un hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - Los mismo que classNamepero ocn el atributo id.
- **innerHTML** - Devuelve o permite insertar codigo HTML
- (incluyendo tg texto).
- **innerText** - Debuelve o permitr agregar o modificar el contenido de un elemento.
- **textContent** - Nos permite agreagr o modificar el contenido de un elemento.
- **value** - Nos permite obtener o setear valores de un elemento `input`.

## Acciones o Eventos con elementos en el DOM(Averiguar)
`click:` Se activa cuando el usuario hace clic en un elemento.

`mouseover:` Se activa cuando el mouse pasa sobre un elemento.

`mouseout:` Se activa cuando el mouse sale de un elemento.

`keydown:` Se activa cuando una tecla es presionada.

`keyup:` Se activa cuando una tecla es liberada.

`submit:` Se activa cuando un formulario es enviado.

`focus:` Se activa cuando un elemento recibe el foco (por ejemplo, un campo de texto).

`blur:` Se activa cuando un elemento pierde el foco.

`change:` Se activa cuando el valor de un campo de formulario cambia.

`input:` Se activa cuando el valor de un campo de formulario cambia mientras se escribe (más específico que change).

`load:` Se activa cuando un recurso (como una imagen o un script) ha sido completamente cargado.

`resize:` Se activa cuando se redimensiona la ventana del navegador.

`scroll:` Se activa cuando se desplaza el contenido de un elemento o la página.

```js 
addEventListener("click",()=>{

});
```

> [!NOTE]
> Teecnologias para el procesamiento de texto a travez de marcado  `markup` (etiquetas - que nos permite a travez de palabras reservadas darle un estio significado al contenido de las etiquetas). Las primera tecnologia fue `xml`.
> Todas swit de microsoft eran extenciones `html`. La primera tecnologia fue `xml` despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`.