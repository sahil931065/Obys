var tl = gsap.timeline();

//Loading animation
function loadingAnimation() {
  tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  });

  var num = document.querySelector("#line1-num h5");

  tl.from("#line1-num", {
    opacity: 0,
    onStart: function () {
      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          num.innerHTML = grow++;
        } else {
          num.innerHTML = grow;
        }
      }, 35);
    },
  });

  tl.to(" .line h2", {
    animationName: "animat",
    opacity: 1,
  });

  //loading animation end

  tl.to("#loader", {
    opacity: 0,
    duration: 0.6,
    delay: 3.5,
    display:"none"
  });
}

//Main Page is coming
function mainPage() {
    tl.from("#page1", {
        y: 1200,
        color: "#949393",
        ease: "power2",
    });
    tl.from("#nav", {
        opacity: 0,
        duration: 0.6,
    });
    tl.from("#hero1 h1, #hero2 h1, #hero3 , #hero4 h1", {
        y: 120,
        stagger: 0.2,
        opacity:0,
    });
}

 
function curAnim() {
  document.addEventListener("mousemove", (delt) => {
    gsap.to("#crcours", {
      left: delt.x,
      top: delt.y,
    });
  });

  Shery.makeMagnet("#nav-2 h4", {});
}
loadingAnimation();
curAnim();
mainPage();

