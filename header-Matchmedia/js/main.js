// Crea el media query.
const mq = window.matchMedia('(min-width: 320px)');

// Obtiene los contenedores
const container1 = document.getElementById('container-header1');


const idiomas = document.getElementById('idiomas');
const menu = document.getElementById('main-menu');
// Crea un event handler para mq.
function widthChange(mediaQuery) {
  if (mediaQuery.matches) {
    // Si hay match, mueve idiomas a container1.
    container1.appendChild(idiomas);
  } else {
    // Si NO hay match, mueve idiomas a menu, SI ES NECESARIO.
    if (menu.children.length < 2) {
      menu.appendChild(idiomas);
    }
  }
}

// Registra el event handler.
mq.addListener(widthChange);

// Llamada inicial al event handler.
widthChange(mq);
