function initSwipeEvt(elem, opt = {
  down: function() {},
  up: () => {},
  left: function() {},
  right: () => {},
}) {
  elem.addEventListener("touchstart", startTouch, false);
  elem.addEventListener("touchmove", moveTouch, false);


  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        opt.left ? opt.left() : 0;
      } else {
        // swiped right
        opt.right ? opt.right() : 0;
      }
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
        opt.up ? opt.up() : 0;
      } else {
        // swiped down
        opt.down ? opt.down() : 0;
      }
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };
};