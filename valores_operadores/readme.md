# VAlores, Tipos y Operadores
## Indice
- [tipos de datos o valores](#valores)
## Valores
Imagina un mar de bits
Una computadora moderna tiene mas de 100 mil millones de bits almacendas en su `memoria de trabajo`o`memoria`o `ram `.
Ahora la memoria no volatil o memoria secundaria tiene estos bits de manera ordenada generalmente apilada como si de un eestante de una biblioteca se tratara.

- Tipos (Tipos de datos)
- Operadores.

Cuando nosotros programamos trabajamos en `memoria de trabajo`,para trabajar de manera ordenada con los bts en nuestro mar de bits, jvascript ordena los bits en pequeñas partes o piezas de infromacion a esto se le conoce como `VALORES`.
Cada valor tiene una funcionalidad distinta puede ser un `numero`, `texto` o una `funcion`.

Cuando de hablamos de tipos de datos en JavScript nos referimos a su representacion binaria y al tipo de valor de valor que usamos.

## Datos Primitivos

Son aquellos datos que ya existen no pueden ser creados, actualizados, ni eliminados solo pueden ser llamados para el uso que deseamos darle.

Los datos primitivos en JavaScript son:
### Numeros(Number)
Los valores de tipo numero como es de esperar son numeros y en Javasript se escribe o se hace llamdo de este valor de la siguiente manera:
```js
20
//estamos usando un patron de bits para el numero 20 que existira dentro de memoria de trabjo.
```
> [!TIP] 2^64
- Nummero de punto flotante decimal fraccion
```js
2.7
0.
.0
```
- Numeros de notacion Cientifica
```js
2.998e8
// 2.998 * 10^8
```
> [!WARNING]
> Cuanado JavaSript realize operaciones con numeros enteros el resultado siempre sera exacta, cuando realice operacion con numeros decimales el resultado perdera presicion por que solo tiene 34 bits para almacenar el numero, esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso del numero `PI(3,14)`.*Es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores*.


> [!TIP]
> Cuando javasript hace trabajo de memoria(cuando crea un patron de bits para almacenar)todos son alamcenados con decimal positivo.