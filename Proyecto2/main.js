document.addEventListener("DOMContentLoaded", function () {
  // Recuperar todas las img que tengan la clase lazy-loading
  var imagenes = document.querySelectorAll("img.lazy-loading");
  if ("undefined" !== typeof IntersectionObserver) {
  var observador = new IntersectionObserver(function (entradas) {
      for (var i = 0; i < entradas.length; entradas++) {
          var entrada = entradas[i];
          if (entrada.intersectionRatio > 0) {
              var imagen = entrada.target;
              imagen.src = imagen.dataset.src;//src = data-src
              console.log("Cargada: ", imagen.src)
              observador.unobserve(imagen);
          }
      }
  });
  for (var x = 0; x < imagenes.length; x++) {
      observador.observe(imagenes[x]);
  }
  }
});