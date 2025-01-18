
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Al hacer scroll, cambiamos el navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburguesa (móvil)
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Dropdown en mobile
  dropdowns.forEach(dropdown => {
    const parentLink = dropdown.querySelector('a');
    parentLink.addEventListener('click', (e) => {
      // e.preventDefault(); // solo si no quieres navegar
      dropdown.classList.toggle('active');
    });
  });
});




  
document.addEventListener('DOMContentLoaded', () => {
  const trofeoItems = document.querySelectorAll('.trofeo-item');

  trofeoItems.forEach((item) => {
      item.addEventListener('click', (e) => {
          // Prevenir que el clic afecte a otras tarjetas
          e.stopPropagation();

          // Cerrar todas las demás tarjetas activas
          trofeoItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove('activo');
              }
          });

          // Alternar la tarjeta seleccionada
          item.classList.toggle('activo');
      });
  });
});

















