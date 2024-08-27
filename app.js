

function copiar(cadena){
    navigator.clipboard.writeText(cadena)
    .then(() => {
        console.log("Cadena copiada");
    },() => {
        console.error('Error al copiar');
    })
    
    }

    



function cambiosContenedor(cadenaNueva){
    //selecciona el contenedor presentacion__resultado
    let contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = ""; // Limpia el contenido del contenedor

    // Crear un div donde va a a aparecer el texto generado
    let nuevoContenido = document.createElement('div');
    nuevoContenido.className = 'presentacion__resultado__nuevo';
    nuevoContenido.textContent = cadenaNueva; 

    // Agregar el div al contenedor
    contenedorResultado.appendChild(nuevoContenido);

    // Crear un boton nuevo 
    let botonCopiar = document.createElement('button');
    botonCopiar.className = 'presentacion__resultado__copiar'; //se usa className para ponerle una clase
    botonCopiar.textContent = "Copiar"; // se agrega texto

    botonCopiar.addEventListener('click', function() {
        copiar(cadenaNueva);
    });
    // botón aparece en el contenedor
    contenedorResultado.appendChild(botonCopiar);

    // el contenedor es visible
    contenedorResultado.style.display = 'block';

    //borra el text area
    document.getElementById("cadena").value = "";
}

function encriptar(){
    let cadenaUsuario = document.getElementById("cadena").value;
    console.log(`La cadena ingresada es ${cadenaUsuario}`);

    //Sirve para definer los reemplazos que se realizaran
    const reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    /*replace sirve para reemplazar
    / lo que esta entre diagnonales es lo que se busca en cadena, g es para que lo haga en toda la cadena (global)
    match se refiere a la coincidencia que encuentre */
    cadenaEncriptada = cadenaUsuario.replace(/[aeiou]/g, function(match) {
        return reemplazos[match]; // Reemplaza la vocal con su término correspondiente
    });

    console.log(`La nueva cadena es ${cadenaEncriptada}`);

    cambiosContenedor(cadenaEncriptada);

    }

    function desencriptar(){

        let cadenaUsuario = document.getElementById("cadena").value;
        console.log(`La cadena ingresada es ${cadenaUsuario}`);
      
        //Reemplazos a tomar en cuenta
        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
    
        /* Object.keys devuelve un array de las propiedades de un objeto, por tanto
        va a devolver ai,enter,imes,ober,ufat
        
        join |, es para juntar los elementos del array separados por el simbolo indicado
        
        RegExp crea un nuevo objeto y g es para busqueda global de la cadena*/
        const patron = new RegExp(Object.keys(reemplazos).join('|'), 'g');
    
        // Reemplaza las expresiones encriptadas con las letras originales
        let cadenaDesencriptada = cadenaUsuario.replace(patron, function(match) {
            return reemplazos[match]; // Reemplaza la expresión con su letra correspondiente
        });
    
        console.log(`La nueva cadena es ${cadenaDesencriptada}`);
    
        cambiosContenedor(cadenaDesencriptada);
    }




