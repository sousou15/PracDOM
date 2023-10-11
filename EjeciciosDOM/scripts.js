window.onload = function () {
    // Obtener referencias a elementos del DOM
    const enlace = document.getElementById('miEnlace');
    const mostrarInfoBtn = document.getElementById('mostrarInfo');
    const cambiarEnlaceBtn = document.getElementById('cambiarEnlace');
    const Mostrado = document.getElementById("Mostrado");
    const Cambiado = document.getElementById('Cambiado');


    const Incrementar = document.getElementById('Sumar');
    const Decrementar = document.getElementById('Restar');
    const Contador = document.getElementById('Contador');


    const tabla = document.querySelector('table');
    const dimensionBtn = document.getElementById('Dimensiones');
    const BordeBtn = document.getElementById('Borde');
    const alineacionBtn = document.getElementById('Alineacion');

    if (dimensionBtn) {
        dimensionBtn.addEventListener('click', function () {
            const anchoTabla = tabla.offsetWidth;
            const altoTabla = tabla.offsetHeight;
            alert(`Ancho de la tabla: ${anchoTabla}px\nAlto de la tabla: ${altoTabla}px`);
            let nuevoancho, nuevoalto;
            nuevoancho = parseFloat(prompt("Ingrese el primer valor:"));
            nuevoalto = parseFloat(prompt("Ingrese el segundo valor:"));
            if (!isNaN(nuevoancho) && !isNaN(nuevoalto)) {
                // Aplicar las nuevas medidas a la tabla
                tabla.style.width = `${nuevoancho}px`;
                tabla.style.height = `${nuevoalto}px`;

                alert('Medidas actualizadas con éxito.');
            } else {
                alert('Por favor, ingrese medidas válidas (números enteros).');
            }
        });
    }

    if (BordeBtn) {
        BordeBtn.addEventListener('click', function () {
            const estiloTabla = window.getComputedStyle(tabla);
            const anchoBorde = estiloTabla.getPropertyValue('border-width');
            alert(`Borde de la tabla: ${anchoBorde}`);
            const nuevoBorde = parseInt(prompt("Ingrese nuevo valor:"));
            if (!isNaN(nuevoBorde)) {
                // Aplicar las nuevas medidas a la tabla
                tabla.style.borderWidth = `${nuevoBorde}px`;
                alert('Borde actualizado con éxito.');
            } else {
                alert('Por favor, ingrese una medida válidas (números enteros).');
            }
        });
    }



    if (alineacionBtn) {
        alineacionBtn.addEventListener('click', function () {
            const estilo = window.getComputedStyle(tabla);
            if (estilo.getPropertyValue("float") === "none") {
                tabla.style.float = 'right';
            } else if (estilo.getPropertyValue("float") === "right") {
                tabla.style.float = 'left';
            } else {
                tabla.style.float = 'none';
            }
        });
    }



    /*Compruebo que el elemento existe y no es nulo, sino me da error al usar el mismo script en otro html no correspondiente : "Cannot read property 'addEventListener' of null".
    Este error  se produce cuando intentas agregar un evento a un elemento que no existe en la página actual y aparece en la consola del navegador. CTRL +SHIFT+J*/

    if (Incrementar) {
        Incrementar.addEventListener('click', function () {
            let numero = parseInt(Contador.textContent);
            numero++;
            Contador.textContent = numero;
        });
    }


    if (Decrementar) {
        Decrementar.addEventListener('click', function () {
            let numero = parseInt(Contador.textContent);
            numero--;
            Contador.textContent = numero;
        });
    }


    if (mostrarInfoBtn) {
        // Función para mostrar la información del enlace
        mostrarInfoBtn.addEventListener('click', function () {
            const url = enlace.getAttribute('href');
            const texto = enlace.textContent;
            Mostrado.textContent = "URL del enlace:" + url + "\nTexto del enlace: " + texto;
            Cambiado.style.display = 'none'; // Ocultar el párrafo de Cambiado
            Mostrado.style.display = 'block'; // Mostrar el párrafo de Mostrado
        });
    }

    if (cambiarEnlaceBtn) {
        // Función para cambiar la URL y el texto del enlace
        cambiarEnlaceBtn.addEventListener('click', function () {
            enlace.setAttribute('href', 'https://www.example.com');
            enlace.textContent = 'He cambiado';
            Cambiado.textContent = "URL del enlace: https://www.example.com\nTexto del enlace: He cambiado";
            Cambiado.style.display = 'block'; // Mostrar el párrafo de Cambiado
            Mostrado.style.display = 'none'; // Ocultar el párrafo de Mostrado 
        });
    }

    //SCRIPT DEL EJERCICIO 4

    let indice = 0;

    const fotos = document.getElementById("fotos");
    const imagenElement = fotos.querySelectorAll("img");
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");

    function ocultarimagen() {
        for (let i = 0; i < imagenElement.length; i++) {
            if (i !== indice) {
                imagenElement[i].style.display = "none"
            }
        }
    }

    function mostrarimagen(mostrar) {
        imagenElement[mostrar].style.display = "block";
    }

    ocultarimagen();
    mostrarimagen(indice);


    function botona() {
        indice--;

        if (indice < 0) {

            indice++;
        }

        ocultarimagen();
        mostrarimagen(indice);
    }

    function botons() {
        indice++;

        if (indice >= imagenElement.length) {

            indice--;
        }

        ocultarimagen();
        mostrarimagen(indice);
    }

    if (botonAnterior) {
        botonAnterior.addEventListener('click', botona);
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener('click', botons);
    }



}

function moverderecha() {
    const foto = document.getElementById("foto");
    const valoresreal = window.getComputedStyle(foto);
    const fotomargin = parseInt(valoresreal.getPropertyValue("margin-left").replace("px", ""));
    const limiteDerecho = window.innerWidth - foto.offsetWidth;

    if (fotomargin < limiteDerecho) {
        foto.style.marginLeft = (fotomargin + 5) + "px";
    }
}

function moverizq() {
    const foto = document.getElementById("foto");
    const valoresreal = window.getComputedStyle(foto);
    const fotomargin = parseInt(valoresreal.getPropertyValue("margin-left").replace("px", ""));

    if (fotomargin >= 5) {
        foto.style.marginLeft = (fotomargin - 5) + "px";
    }
}

function reset() {
    const foto = document.getElementById("foto");
    foto.style.marginLeft = "800px";

}

function cambiarparrafoej9() {

    const parrafo1 = document.querySelector("p");
    const parrafo2 = document.querySelector("pre");


    if (parrafo1.textContent == "Este es un párrafo con la clase uno.") {
        var texto = parrafo1.textContent;
        parrafo1.textContent = parrafo2.textContent;
        parrafo2.textContent = texto;

        parrafo1.style.backgroundColor = " #00c3ff";
        parrafo1.style.border = "2px solid #333333";
        parrafo1.style.width = "200px";
        parrafo1.style.color = " #940404";
        parrafo1.style.fontSize = "8px";
        parrafo1.style.fontFamily="'Courier New', Courier, monospace";

        parrafo2.style.backgroundColor = " #ffcc00";
        parrafo2.style.border = "2px solid #333";
        parrafo2.style.width = "400px";
        parrafo2.style.color = "  #333";
        parrafo2.style.fontSize = "18px";
        parrafo2.style.fontFamily="'Courier New', Courier, monospace";

    } else {

        var texto = parrafo1.textContent;
        parrafo1.textContent = parrafo2.textContent;
        parrafo2.textContent = texto;

        parrafo2.style.backgroundColor = " #00c3ff";
        parrafo2.style.border = "2px solid #333333";
        parrafo2.style.width = "200px";
        parrafo2.style.color = " #940404";
        parrafo2.style.fontSize = "8px";
        parrafo2.style.fontFamily="'Courier New', Courier, monospace";

        parrafo1.style.backgroundColor = " #ffcc00";
        parrafo1.style.border = "2px solid #333";
        parrafo1.style.width = "400px";
        parrafo1.style.color = "  #333";
        parrafo1.style.fontSize = "18px";
        parrafo1.style.fontFamily="'Courier New', Courier, monospace";

    }

}

function estilo() {
    const parrafo1 = document.querySelector("p");
    const parrafo2 = document.querySelector("pre");

    parrafo2.style.backgroundColor = " #00c3ff";
    parrafo2.style.border = "2px solid #333333";
    parrafo2.style.width = "200px";
    parrafo2.style.color = " #940404";
    parrafo2.style.fontSize = "8px";
    parrafo2.style.fontFamily="'Courier New', Courier, monospace";

    parrafo1.style.backgroundColor = " #ffcc00";
    parrafo1.style.border = "2px solid #333";
    parrafo1.style.width = "400px";
    parrafo1.style.color = "  #333";
    parrafo1.style.fontSize = "18px";
    parrafo1.style.fontFamily="'Courier New', Courier, monospace";

}

