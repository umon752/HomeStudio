const loading = document.querySelector('.js-loading');



// Anime Loading 動畫
let animation = anime.timeline({
    loop: true
  })
  .add({
    targets: '.js-loading-logo-pattern',
    opacity: [0, 1],
    duration: 400,
    delay: (el, i) => 70 * i
  })
  .add({
    targets: '.js-loading-logo-text',
    rotateY: [-90, 0],
    duration: 400,
    delay: (el, i) => 45 * i
  })



window.onload = function () {

  // Loading 畫面消失
  loading.classList.add('loading--fadeOut');

  // Anime 停止
  animation.pause();

  // 載入 AOS
  AOS.init({
    easing: 'ease',
    duration: 600,
    once: true
  });

};