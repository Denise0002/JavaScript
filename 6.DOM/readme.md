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

## Selectores
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

> [!NOTE]
> Teecnologias para el procesamiento de texto a travez de marcado  `markup` (etiquetas - que nos permite a travez de palabras reservadas darle un estio significado al contenido de las etiquetas). Las primera tecnologia fue `xml`.
> Todas swit de microsoft eran extenciones `html`. La primera tecnologia fue `xml` despues nace `html`, despues la ultima generacion de tecnologias de marcado de texto `markdown`.