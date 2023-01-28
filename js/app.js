
//------------> Animación de secciones al hacer Scroll

const seccionAnimada = document.querySelectorAll('.A-S');

const cargarSeccion = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visibleUp');
        }
        else {
          //entrada.target.classList.remove('visibleUp');
        }
    })
};

const opciones = {
    rootMargin: '-30px 0px 0px 0px',
    threshold: 0.4,
}

const observador = new IntersectionObserver(cargarSeccion, opciones);

seccionAnimada.forEach(element => observador.observe(element));

//------------> Scroll Smooth

// Selecciona los links con #
$('a[href*="#"]')
  // Remueve los links que no estan linkeados a nada
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Averiguar el elemento al que desplazarse
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Existe un scroll target?
      if (target.length) {
        // Solo previene el por defecto si la animacion va a pasar
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback despues de la animacion
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Chequea si el target esta focus
            return false;
          } else {
            $target.attr('tabindex','-1'); // agrega tabindex a los elementos no focuseables
            $target.focus(); // Setea el focus otra vez
          };
        });
      }
    }
  });

