"use strict";

var time = 1500;
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
$(document).ready(function () {
  /* 1.5 秒後開始執行 */
  setTimeout(function () {
    // loading 畫面消失
    $('.js-loading').addClass('loading--fadeOut'); // Anime 停止

    animation.pause();
    /* AOS */

    AOS.init({
      easing: 'ease',
      duration: 600,
      once: true
    });
  }, time);
});
//# sourceMappingURL=all.js.map
