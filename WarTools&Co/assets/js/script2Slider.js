// Inicializar Swiper
var swiper = new Swiper(".mySwiper", {
  // Efecto de fundido
  effect: "fade",
  fadeEffect: {
    crossFade: true, // Mejora el fundido cruzado para evitar superposiciones
  },
  // Paginación
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navegación
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Autoplay
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  // Configuración de lazy loading
  lazy: true,
  // Bucle infinito
  loop: true,
  // Velocidad de transición
  speed: 666,
});