* Nombre: Matias Casiba
* Link Repo Github:
* Link Netlify:

# Página de Juegos

Para armar la página de juegos, eh utilizado u header (que contendrá el título), un main (que estará todo el contenido, lo eh harmado con elemento de contenedor, para asignarles clases y luego trabajar con estos en el archivo de css), botones y un footer.

## Estructura en el index.html
Te muestro como hice la estructura:
```sh
    <header>
      <h1>Titulo</h1>
    </header>

    <main>
      <div class="caja">
        <h2 class="color-unico"> Los más vendidos</h2>

        <div class="caja-juegos">
          <h2>Subtitulo</h2>
          <hr>
          <img src="ubicacion-imagen" alt="nombre de la imagen">
          <p>Textos</p>
          
          <div class="boton"><button>Comprar!</button></div>
        </div>

        <div class="caja-juegos">
          <h2>Subtitulo</h2>
          <hr>
          <img src="ubicacion-imagen" alt="nombre de la imagen">
          <p>Textos</p>
          <div class="boton"><button>Comprar!</button></div>
        </div>

      </div>
    </main>

    <footer>Pie de página</footer>
```
* Nota: encerré al button con un elemento div que contiene una clase, el motivo de esto fue para poder centrar estos dos botones. Acá te muestro como lo trabajo a esto:
```sh
button{
    color: var(--colorLetra);
    background-color: var(--colorBoton); # fondo
    border: 1px solid var(--colorBordeBoton); # grosor, estilo y color del borde
    border-radius: 5px; # redondeo un poco sus esquinas
    padding: 5%; # su relleno
}
.boton{
    width: 200px; # ancho de la clase
    text-align: center; 
    margin: auto;
}
```
Al agregarlea la clase .boton text.align: center y margin: auto, logro centrar correctamente el botón en el eje horizontal.

## Las imágenes
Para lograr que las imágenes se ajusten al ancho de la pantalla, declaré que su ancho tenga el 100%:
```sh
img{
    width: 100%;
}
```
## Para concetar el index.html con el css
Como el archivo de estilo-1.css se encuentra dentro de la carpeta css, lo que cambiaré es el import del archivo main.js:
```sh
import './css/estilos-1.css' 
```

