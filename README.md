* Nombre: Matias Casiba
* Link Repo Github: https://github.com/MatiCasiba/juegos
* Link Netlify: https://juegos-matias-casiba.netlify.app/

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

## Colores y estilo
Agregué colores y fui ajustando tambien las cajas, para empezar, cree colores que luego los utilizaré en elementos con un var():
```sh
:root{
    --colorLetra: #fafafa;
    --colorTituloSubtitulo: #fafafa;
    --colorBoton: #119822;
    --colorCuerpo: #d81159;
    --colorCaja: #aa1155;
    --colorSubtitulo: #aa1155;
    --colorHr: #aa1155;
    --colorBordeBoton: #008000;
    --colorFooter: #fafafab7;
}
```
La finalidad de esto es si a futuro quiero cambiar los colores de tales elementos, solo tengo que cambiarlos aquí y no estar cambiando los valores en cada elemento.

### Titulo y cajas
Notarás varios colores de fondo, en el cuerpo, en cajas y en el titulo, que tambien tendrán diferente tamaños, te los explicaré:
* Titulo
```sh
h1{
    width: 90%; # ocupa un 90% de ancho
    margin: auto; # centra el recuadro
    background-color: var(--colorCaja); #color de fondo
    color: var(--colorTituloSubtitulo); # color de letra
    font-size: 50px; # tamaño de letra
    text-align: center; #centra el texto
    border-left: 10px solid white; # estilo par el borde izquerdo
    border-right: 10px solid white; # estilo para el borde derecho
    padding: 2%; # relleno
}
```

* Cajas: para dar estilos a las cajas, trabajaré con clases, bien verás en el arhcivo index.html que hay clases en elementos div, con esas trabajaré en css para dar color de fondo e ajustar el tamañao.
```sh
.caja{
    width: 90%; # ocupará el 90% de ancho de la pantalla
    margin: auto; # la función es centrar esta caja
    margin-top: 30px; # trndrá un espacio debajo de esta caja
    background-color: var(--colorCaja); # color de fondo
    border-radius: 10px; # sacaré las esquinas puntiagudas
    padding: 2%; # su grosor
}

.caja-juegos{
    background-color: var(--colorCajaJuegos); # color de fondo
    padding: 2%;
    border-radius: 10px;
    margin-bottom: 10px; # verás que hay espacio entre las dos cajas, el responsable de dicha accion es este margin-bottom
}
```
### Subtitulos
Notarás que hay elementos h2 con el color de letra de distito color y ubicado de otra manera, para lograrlo, solo a un elemento h2 le tuve que asignar 2 clases en el archivo index.html, los otros se comportarán de misma manera:
```sh
# html
<h2 class="color-unico subtitulo-unico"> Los más vendidos</h2>

# css
.subtitulo-unico{
    text-align: left; # lo declaré a la izquierda 
    margin: 15px 0 20px 4px; # arriba(15px), derecha(0), abajo(20px), izquierda(4px)
}
.color-unico{
    color: var(--colorTituloSubtitulo);
}
```
Hice estas clases con la finalidad de que solamente este elemento h2 se comporte de manera distinta, ya que los demás h2 actuarán de otra forma:
```sh
h2{
    color: var(--colorSubtitulo); # color de letra
    text-align: end; # el texto se colocará a la derecha
    font-size: 20px; # tamaño de letra
    margin-bottom: 0; # no tendrá margen debajo, lo que logra que el texto quede más cerca del borde creado <hr>
}
```

### Elemento hr
Al elemento hr le di color y estilo, lo he heco de la siguiente manera:
```sh
hr{
    border: 1px dotted var(--colorHr); # grosor del borde, estilo del borde, color del borde
    border-right: none;
    border-left: none;
    margin-top: 0;
}
```
* Nota: dotted le dará el estilo de puntos en el borde, con los bordes derecho e izquierdo, lo declaré none debido a que al inicio y al final dichos puntos eran un poco grande al resto, entonces al hacerlos none, logré quitarlos.

### Footer
El pie de la página tendrá unn diseño, lo hice de la siguiente manera:
```sh
footer{
    background-color: var(--colorFooter); # el color footer tendrá un poco de transparencia
    width: 90%; # ocupa el 90% del ancho
    margin: auto; lo centro 
    margin-top: 10px; # tednrá espacio arriba
    margin-bottom: 10px; # tendrá espacio abajo
    text-align: center; # centra el texto
    border-radius: 10px; 
    padding: 4%;
}
```

## Box-sizing
La funcion del box-sizing: border-box hace que el padding y el border pasen a formar parte del cálculo del ancho de la caja y no lo suman posteriormente, lo usé de la siguiente manera:
```sh
*{ # para que afecte a todos
    box-sizing: border-box;
}
```
## Tipografía
Eh importado solo una tipografía para la página y la coloqué en el elemento body para que sea hereditaria para los demás elementos que contengan texto:
```sh
body{
    font-family: "Roboto", sans-serif;
}
```
* Ajusté tamaños de letra en los elementos:
```sh
h1{
    font-size: 50px; # tamaño
    font-weight: 600; # ancho de las letras
}
h2{
    font-size: 20px;
}
p{
    font-size: 12px;
}
.subtitulo-unico{
    font-size: 20px;
}
```

## Ajuste en el footer
El footer ahora tendrá un color de letra blanco, que antes no lo tenia:
```sh
footer{
    color: var(--colorLetra);
}
```

## Hover
Eh usado un hover para el elemento button, cada vez que el usuario se pare por este elemento, cambiará su color de fondo:
```sh
button:hover{
    background-color: var(--colorCaja);
    border: 1px solid #d81159;
}
```

## Modificación de botones
Cambie el elemento button por un elemento de anclaje:
```sh
# html
<div class="boton">
    <a href="una-dirección">Comprar!</a>
</div>

# css
a{
    color: var(--colorLetra);
    background-color: var(--colorBoton);
    border: qpx solid var(--colorBordeBoton);
    border-radius: 5px;
    padding: 3%;
    text-decoration: none;
}
a:hover{
    background-color: var(--colorCaja);
    border: 1px solid #d81159;
}
```

## Contenido del boton de compra
Cuando selecciones el botón de "comprar!", esto se va a encargar de enviarte al archivo que lo contiene, todo esto se encuentra dentro de la carpeta pages, un archivo html y un archvio js (para importar el archivo estilos-1.css trabajado):
```sh
# un ejemplo:
<a href="pages/mario-kart-8/mario-kart.html" title="Mario Kart 8 Deluxe">Comprar!</a>
```
Esta dirección te enviará al archivo mario-kart.html, la estructura es similar al de la página principal, al igual que también será el mismo estilo para el archivo mk-11.html.

### Estructura de los dos archivos nuevos html
La estructura que tendrán estos dos nuevos archivos, como bien mencioné anterior mente, serán iguales
```sh
<header>
  <h1></h1>
</header>

<main> # contenido
  <div class="caja">

    <div class="caja-juegos">
      <h2>Subtitulo</h2>
      <hr>
      <img src="direccion-de-imagenes" alt="nombre de la imagen">
      <p>Texto</p>
      <hr>
      # -- especicicaciones/ requisitos minimo y recomendado (hecho con h3)
          
      <div class="boton">
        <a href="">Volver!</a> # un diseño de boton para volver devuelta a la página principal
      </div>
    </div>

  </div>
    </main>

<footer>Desarrollado por misitio.com</footer> # pie de pagina 
```
* Nota: notarás que despues de los elementos h3, en los elementos p tendrán en partes del texto el elemento b, lo utilizo solo por decoración y destacar. Aparte de la decoración, le doy espacio en el margen derecho del elemento b.
```sh
b{
    margin-right: 5px;
}
```
La finalidad es darle mas espacio entre lo que está dentro del elemento b y el texto que le sigue, ya quehaciendo un espacio con la tecla de space no bastaba, entonces cree esto. 

### Una vincuación en un boton
Al momento de crear los botones para volver, hice una expecion en uno, lo verás en el archivo mk-11.html:
```sh
<a href="../../index.html#mk11">Volver!</a>
```
Esto está conectado a un div que tiene un id="mk11", el motivo por el cual realicé esto, fue porque al momento de volver, te manda al principio de la página, y me es una molestia bajar nuevamente hasta mortal kombat 11. Entonces le agregué ese id para que al momento de volver, vuelva en donde se encuentra mortal kombat 11 en mi archivo index.html:
```sh
# de archivo index.html:

<div class="caja-juegos" id="mk11"> # acá coloco el id
  <h2>Mortal Kombat 11</h2>
  <hr>
  <img src="/image/mortal-kombat-11.webp" alt="mortal kombat 11 imagen">
  # -- TEXTO --
  <div class="boton">
    <a href="pages/mortal-kombat/mk-11.html" title="Mortal Kombat 11">Comprar!</a>
  </div>

</div> <!-- juego mortal kombat -->
```

## NUEVO ARCHIVO CSS (estilos-2.css)
El segundo diseño de esta página eh cambiado algunas cosas, tanto colores, como imágen de fondo (tambien jugué con su color), positions, sombras, etc. Te mostraré como fui haciendo este archivo de css.

### Para importar el nuevo estilo
En el archivo de main.js importo el nuevo del css
```sh
import './css/estilos-2.css'
```

### Colores
Eh trabajado con colores rojos, gris, blanco y negros
```sh
:root{
    --colorSombra: #161a1d; # negro
    --colorSombraTextoFooter: #ba181b; # rojo
    --colorLetra: #fafafa; # blanco
    --colorTituloSubtitulo: #fafafa; # blanco
    --colorCajaJuegos: #fafafa; # blanco
    --colorBoton: #161a1d; # negro distino
    --colorSombraBoton: #ba181b; # rojo
    --colorCuerpo: #d3d3d3b2; # gris transparente
    --colorCaja: #e5383b; # rojo claro 
    --colorSubtitulo: #e5383b; # rojo claro
    --colorBorde: #a4161a; # rojo oscuro
    --colorBordeBoton: #a4161a; # rojo oscuro
    --colorFooter: #0b090a; # negro mas oscuro 
}
```
La finalidad, es que al momento de dar colores a los elementos, estaré usando var () nuevamente, entonces si quiero modificar los colores, solo los tengo tocar en :root y no en cada elemento.

### Elemento html y body
En el elemento html, importaré una imágen de fondo y sacaré el relleno para evitar desprolijidades:
```sh
html{
    background-image: url(../public/image/6936478_game_gaming_play_player_sports_icon.png);
    padding: 0;
}
```
Los iconos de fondo tiene un contraste de negro bastante alto, entonces para apagar el negro de los bordes de estos iconos y el color blanco de fondo, en el elemento body agregué un color gris transparente, para que se sigan notando los iconos de fondo:
```sh
body{
    background-color: var(--colorCuerpo);
    font-family: "Josefin Sans", sans-serif;
    margin: 0;
}
```
* Nota: eliminé los margenes de arriba, debajo, izquierda y derecha, también importé una fuente que afecatará a casi todos los textos que contiene cada elemento.

### TITULO
En el elemento h1 eh modificado varias cosas, te pasaré explicar las funciones de cada uno:
```sh
h1{
    width: 100%; 
    margin: auto;
    background-color: var(--colorCaja);
    box-shadow: 0 5px 20px var(--colorSombra); # 0, sombra debajo(5px), degradado de la sombra(20px)
    
    font-family: "Bebas Neue", sans-serif; # tipografía distinta al del elemento body
    letter-spacing: 15px; # espacio entre letras
    color: var(--colorTituloSubtitulo);
    text-shadow: 2px 2px 2px var(--colorSombra); # sombra derecha(2px), sombra debajo (2px), degradado (2px)
    font-size: 30px; 
    font-weight: bold; # grosor del texto
    text-align: center; # centra el texto
    
    position: fixed; # fija completamente el titulo
    top: 0; # saco espacio que se encontraba en su margen de arriba
    z-index: 10;
}
```
* Nota: z-index con el valor de 10, lo puse porque tenia el problema de que al momento que bajaba el titulo, se escondía detrás de la clase .caja-juegos, para solucionarlo lo agregué, logré corregir el problema.

### Subtitulos
En el elemento h2 tendra una fuente distinta, mientras que en elemento h3, heredará tipografía que se declaró en el elemento body. Algo a resaltar en los elementos h2 es que los elementos h2 que se encuentran dentro de la clase .caja-juegos, tendrán un distinto diseño al que está fuera de esta clase, el elemento h2 que se encuentra fuera tendrá una clase propia que será "subtitulo-unico", acá es donde le doy otro diseño a este elemento h2:
```sh
h2{
    width: 200px; # su ancho (lo que verás que no se extiende a lo largo de la caja juegos.)
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 5px;
    color: var(--colorSubtitulo);
    text-align: center; # centra el texto del recudaro del subtitulo
    font-size: 20px;
    padding: 1%; # tendrá un relleno
    border: 3px solid var(--colorBorde);
    border-radius: 5px; # elimina las esquinas puntiagudas
    box-shadow: 4px 2px 5px var(--colorSombra); # una sombra detrás del recuadro en los subtitulos
}
h3{
    color: var(--colorSubtitulo);
    text-shadow: 2px 1px 2px var(--colorSombra); # una sombro en los textos de los elementos h3
}
.subtitulo-unico{
    width: 200px; 
    background-color: var(--colorCaja);
    font-size: 20px; 
    border: 5px double var(--colorSombra);
    border-radius: 15px;
    padding: 2%;
    margin: 20px 0 0 3px; # arriba(20px) derecha(0) abajo(0) izquierda(3px)
}
.color-unico{ /* h2 class="color-unico" */
    color: var(--colorTituloSubtitulo); # color distino en la letra
}
```

### Textos del elemento p y color en el b
Los textos que contrendrá los elementos p, tendrán un tamaño de letra y un texto de formato justificado, la funcion de este es que el texto no quede desparejo en sus mrgenes izquerdo y derecho. Respecto al elemento b, le agregue un color rojo, el margin-righ es para dar un espacio entre el texto envuelto con el elemento b y el texto restante del p:
```sh
p{
    font-size: 12px; # tamaño de letra
    text-align: justify; 
}
b{
    margin-right: 5px; # espacio en su margen derecho
    color: var(--colorSubtitulo);
}
```

### Ajustes en las imagenes
En las imágenes eh quitado sus esquinas punteadas, le di una sombra con un color rojo, con la finalidad de generar un efecto luminoso al momento de parame con el mouse sobre la imagen, también le dado espacio entre ellos usando su margen de abajo:
```sh
img{
    width: 100%; # ocupará el 100% de ancho dentro de la caja-juegos
    box-shadow: 0 0 10px var(--colorSombra); # sombra oscura, el 10px es el degradado
    border-radius: 20px; 
    margin-bottom: 10px; # doy espacio debajo de las imágenes
}

img:hover{
    box-shadow: 0 0 15px var(--colorSombraImagen); # este será el causante de que la sombra sea de color rojo, lo que genera el efecto iluminoso
}
```

### Elemento de anclaje
Se creo un boton sin la necesidad de usar el elemento bottom, se uso el elemeneto de anclaje (anchor), tendrá distinto color al momento de pararme sobre este boton:
```sh
a{
    color: var(--colorLetra);
    background-color: var(--colorBoton);
    border: 2px solid var(--colorBordeBoton);
    border-radius: 5px;
    padding: 3%; # su relleno
    text-decoration: none; # elemino el subrayado que contiene la palabra
}
a:hover{ # cambia el color de letra y del fondo
    color: #161a1d; # color negro
    background-color: var(--colorCaja);
}
```
* Nota: Una cosa más sobre este boton, verás que esta dentro de la clase caja-juegos y la mitad fuera de ella, para generar este efecto, trabajé con position, no solo acá, sino que tambien tuve que trabajar un poco con la caja-juegos:
```sh
.caja-juegos{
    background-color: var(--colorCajaJuegos);
    box-shadow: 0 0 8px var(--colorSombra);
    padding: 2%;
    border: 2px solid var(--colorBorde);
    border-radius: 10px;
    margin-top: 40px; # espacio arriba
    margin-bottom: 40px; # espacio abajo

    # aquí lo importante que se complementa con la clase boton:
    position: relative; # establezco un constexto para despues posicionar elementos absolutos
}
.boton{
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    position: absolute; # posiciona el botón relativo a la .caja-juegos
    left: 50%; # centra hroizontalmente el boton
    transform: translateX(-50%) translateY(-50%); # me permite alinear horizontalmente y hace que sobresalga hacia abaja
    bottom: -40px; # su funcion es ajustar lo que sobresale el boton de la caja 
}
```


### Pie de página
El pie de la pagina tendrá un color de fondo, ocupara la totalidad del ancho de la pagina, tendrá una sombra en el texto de color rojo, no tendrá espacio en su margen de abajo, si tendrá espacio en el margen de arriba, te mostraré como lo hice:
```sh
footer{
    background-color: var(--colorFooter);
    font-size: 15px; # tamaño de letras
    color: var(--colorLetra);
    text-shadow: 1px 2px 2px var(--colorSombraTextoFooter); # sombra en el texto
    width: 100%; # su ancho
    margin-top: 5px; # margen de arriba
    margin-bottom: 0; # saco el margen de abajo
    text-align: center; # centra el texto
    padding: 1%;
}
```

### Clase caja
Esta clase, será responsable del tamaño que tendrá el contenido de la página, el proposito por el cual trabajé esto de otra forma, es principalmente por el tamaño, no quería que se extienda demasiado el ancho del contenido dentro, osea lo que es caja-juegos. Para esto solo me puse a trabajr con la clase caja:
```sh
.caja{
    width: 80%; # ocupará el 80% de la pantalla
    max-width: 700px; # aca lo importante, esto me permite que cuando yo extienda el ancho, solo se extienda el contendio hasta 700px
    margin: auto; # centra la caja
    margin-top: 35px; # espacio en el margen de arriba
    border-radius: 10px;
    padding: 2%;
}
```
