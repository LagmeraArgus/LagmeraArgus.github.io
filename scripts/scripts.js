document.addEventListener('DOMContentLoaded', function() {
  const backgroundSlider = tns({
    container: '.image-slider',
    items: 1,
    controls: false,
    nav: true,
    navContainer: '.image-slider-nav',
    autoplay: true,
    autoplayButton: '.image-slider-autoplay-toggle',
    touch: false,
    speed: 10000,
    autoplayTimeout: 12000
  });

  document.querySelectorAll('.page-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      document.querySelectorAll('.page').forEach(page => page.classList.remove('is-active'));
      document.querySelector(`#${this.dataset.target}`).classList.add('is-active');
    });
  });

  document.querySelector('.gallery-mode-toggle').addEventListener('click', function(e) {
    document.querySelector('.profile').classList.toggle('gallery-mode');
    document.querySelector('.image-slider-controls').classList.toggle('gallery-mode');
  });
});