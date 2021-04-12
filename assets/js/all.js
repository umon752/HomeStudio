"use strict";

var loading = document.querySelector('.js-loading');
/* Anime */

var animation = anime.timeline({
  loop: true
}).add({
  targets: '.js-loading-logo-pattern',
  opacity: [0, 1],
  duration: 400,
  delay: function delay(el, i) {
    return 70 * i;
  }
}).add({
  targets: '.js-loading-logo-text',
  rotateY: [-90, 0],
  duration: 400,
  delay: function delay(el, i) {
    return 45 * i;
  }
});

window.onload = function () {
  // loading 畫面消失
  loading.classList.add('loading--fadeOut'); // Anime 停止

  animation.pause(); // 載入 AOS

  AOS.init({
    easing: 'ease',
    duration: 600,
    once: true
  });
};
//# sourceMappingURL=all.js.map
