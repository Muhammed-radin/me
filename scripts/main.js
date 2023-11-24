function q(q) {
  return document.querySelector(q + '')
}

function qa(q) {
  return document.querySelectorAll(q + '')
}

function id(id) {
  return document.getElementById(id + '')
}


var isNavMenuActive = 0

q(".nav-btn").onclick = function() {

  if (isNavMenuActive == 0) {
    q('.nav-btn').animate([{
      opacity: 1,
      transform: 'scale(1)'
  }, {
      opacity: 0,
      transform: 'scale(0)'
  }], {
      duration: 300,
      iterations: 1,
    }).onfinish = function() {
      q('.nav-btn ion-icon').name = 'close-outline'
    }

    q('.nav-btn').animate([{
      opacity: 0,
      transform: 'scale(0)'
  }, {
      opacity: 1,
      transform: 'scale(1)'
  }], {
      duration: 300,
      iterations: 1,
      delay: 300
    })

    qa('.nav-item').forEach(function(elem, index) {
      elem.style.display = 'block'
      elem.style.opacity = 0

      elem.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 250,
        delay: index * 150,
        iterations: 1
      }).onfinish = function() {
        elem.style.opacity = 1
      };
    })

    isNavMenuActive = 1;
  } else {
    q('.nav-btn').animate([{
      opacity: 1,
      transform: 'scale(1)'
  }, {
      opacity: 0,
      transform: 'scale(0)'
  }], {
      duration: 300,
      iterations: 1,
    }).onfinish = function() {
      q('.nav-btn ion-icon').name = 'menu-outline'
    }

    q('.nav-btn').animate([{
      opacity: 0,
      transform: 'scale(0)'
  }, {
      opacity: 1,
      transform: 'scale(1)'
  }], {
      duration: 300,
      iterations: 1,
      delay: 300
    });

    qa('.nav-item').forEach(function(elem, index) {
      elem.style.opacity = 1

      elem.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 300,
        delay: index * 150,
        iterations: 1
      }).onfinish = function() {
        elem.style.opacity = 0
        if (index == (qa('.nav-item').length - 1)) {
          qa('.nav-item').forEach(function(el) {
            el.style.display = 'none'
            el.style.opacity = 1;
          })
        }
      };
    })

    isNavMenuActive = 0;
  }
}


// let sec2 = true;

// function animate() {
//   let sY = q('html').scrollTop;
//   if (sY >= q('.sec2-body').scrollWidth || (sY + window.innerHeight) >= (q('.sec2-body').scrollWidth + 400 /*fixed number is creating a range*/ )) {
//     if (sec2) {
//       // animate scroll box

//       q('.img1').style.opacity = 0

//       q('.img1').animate([{
//         opacity: 0
//       }, {
//         opacity: 1
//       }], {
//         duration: 1000,
//         iterations: 1,
//         delay: 100
//       }).onfinish = function() {
//         q('.img1').style.opacity = 1
//       }

//     // q('.img1').style.opacity = 
//       q('.about-body h3').animate([{
//         opacity: 0,
//         transform: "translate(0, 30%)"
//       }, {
//         opacity: 1,
//         transform: "translate(0, 0)"
//       }], {
//         duration: 450,
//         iterations: 1,
//         delay: 60,
//       });

//       sec2 = false;
//     }
//   } else {
//     sec2 = true;
//   }
// }

// document.body.onscroll = animate;
// animate()


/* swipe events */
// var sections = ['home', 'about', 'skill', 'contact'];
// var currentSection = 0

// id('about').scrollIntoView({
//   behavior: 'smooth',
// })

// function scrollDown() {
//   currentSection += 1;
//   currentSection = currentSection == 3 ? 0 : currentSection
//   var now = sections[currentSection];
//   // id(now).scrollIntoView({
//   //   behavior: 'smooth',
//   // })

//   q('html').scrollTo({
//     top: id(now).scrollWidth,
//     behavior: 'smooth'
//   })
// }

// initSwipeEvt(q('body'), {
//   up: scrollDown,
// })