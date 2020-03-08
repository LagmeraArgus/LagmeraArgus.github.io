document.addEventListener('DOMContentLoaded', function() {
  const backgroundSlider = tns({
    container: '.image-slider',
    items: 1,
    controls: false,
    nav: false,
    autoplay: true,
    autoplayButtonOutput: false,
    touch: false,
    speed: 600
  });

  const pageSlider = tns({
    container: '.pages',
    items: 1,
    controls: false,
    nav: true,
    mode: gallery,
    navPosition: bottom,
    speed: 400
  });
});