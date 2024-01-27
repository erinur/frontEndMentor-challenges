const bloque    = document.querySelectorAll('.faq-box')
const h2        = document.querySelectorAll('.question')
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', ()=>{
      console.log('click')
        // Recorrer TODOS los bloque
        bloque.forEach( ( cadaBloque , j )=>{
            // Quitamos la clase activo de TODOS los bloques
            console.log(j)
            bloque[j].classList.remove('active')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('active')
        console.log(i)

    })
})