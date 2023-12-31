En el packaje json definimos 2 scripts:
 "scripts": {
    "startError": "node --watch errorCors.js",
    "startCorrect": "node --watch correctCors.js"
 },

Estos ficheros js, definen una ruta para manejar solicitudes HTTP GET en la ruta raíz ("/") de la aplicación. 
Sin embargo, 'correctCors.js' habilita el cors con solicitudes desde cualquier origen

Si se abre 'prueba.html' desde el navegador se puede ver el error por consola al hacer la petición cuando 'errorCors.js' está levantado