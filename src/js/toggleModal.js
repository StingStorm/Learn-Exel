(() => {
  const backdrop = document.querySelector('.js-menu-container');
  const mobileMenu = document.querySelector('.js-mobile-modal');
  const openModalBtn = document.querySelector('.js-open-modal');
  const closeModalBtn = document.querySelector('.js-close-modal');

  const toggleMenu = () => {
    backdrop.classList.toggle('is-open');
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);

  backdrop.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target)) {
      toggleMenu();
    }
  });

  window.matchMedia('(min-width: 1199px)').addEventListener('change', e => {
    if (!e.matches) return;
    backdrop.classList.remove('is-open');
  });
})();
