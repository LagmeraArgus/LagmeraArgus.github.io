document.addEventListener('DOMContentLoaded', function() {
  const backgroundSlider = tns({
    container: '.image-slider',
    items: 1,
    controls: false,
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
    touch: false,
    speed: 1000,
    autoplayTimeout: 2000
  });

  document.querySelectorAll('.page-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      document.querySelectorAll('.page').forEach(page => page.classList.remove('is-active'));
      document.querySelector(`#${this.dataset.target}`).classList.add('is-active');
    })
  })
});