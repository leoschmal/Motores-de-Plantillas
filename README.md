# Uso de Motores de Plantillas con Node JS y Express

## HandleBars - Pug - Ejs

Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
Ambas páginas contarán con un botón que redirija a la otra.
Aspectos a incluir en el entregable:
Realizar las plantillas correspondientes que permitan recorrer el array de productos y representarlo en forma de tabla dinámica, siendo sus cabeceras el nombre de producto, el precio y su foto (la foto se mostrará como un imágen en la tabla)
En el caso de no encontrarse datos, mostrar el mensaje: 'No hay productos'.

## Uso
Clonar todo el repositorio, luego para ejecutar, ubicarse en cada carpeta individual de cada plantilla (Hbs-Pug-Ejs) y ejecutar:
```npm start```.
Se levanta el servidor en localhost:8080 y luego redirigirse a la ruta '/productos'


## Licencia

[MIT](https://choosealicense.com/licenses/mit/)