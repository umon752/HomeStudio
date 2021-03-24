"use strict";

var time = 3000;
/* anime */

anime.timeline({
  loop: true
}).add({
  targets: '.js-opacity',
  opacity: [0, 1],
  duration: 400,
  delay: function delay(el, i) {
    return 70 * i;
  }
}).add({
  targets: '.loading__logo__text',
  rotateY: [-90, 0],
  duration: 400,
  delay: function delay(el, i) {
    return 45 * i;
  }
});
$(document).ready(function () {
  /* 1.3 秒後開始執行 */
  setTimeout(function () {
    // 設定 loading 畫面消失
    AOS.init({
      easing: 'ease',
      duration: 600,
      once: true
    });
    anime.timeline({
      loop: false
    }).add({
      targets: '.loading',
      opacity: [1, 0],
      duration: 800
    });
  }, time);
});
//# sourceMappingURL=all.js.map
