const tl = gsap.timeline();

function locoMotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
}

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
      }, 25);
    },
  });

  tl.to(" .line h2", {
    animationName: "animat",
    opacity: 1,
  });

  //loading animation end
  //delay-3.5, 
  //duration:0.6

  tl.to("#loader", {
    opacity: 0,
    duration: 0,
    delay: 0,
    display: "none",
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
    opacity: 0,
  });
  tl.from('#hero1 , #page2' , {
    opacity:0,
  },"-=1.2")
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

///        lets create split help
function slitH1() { 
  let h1 = document.querySelector('#footerCreate h1')
  let hlet = document.querySelector("#let");
  let hCreate = document.querySelector("#create");
  let text1 = hlet.textContent
  let text2 = hCreate.textContent

  
  let slited1 = text1.split('') 
  let slited2 = text2.split('') 

  let spanCollection1 = "";
  let spanCollection2 = "";

  slited1.forEach((e) => {
    spanCollection1 += `<span>${e}</span>`;
  });
  slited2.forEach((e) => {
    spanCollection2 += `<span>${e}</span>`;
  });
  hlet.innerHTML = spanCollection1;
  hCreate.innerHTML = spanCollection2;


  h1.addEventListener("mouseenter", () => {
    tl.from('#footer h1 span' , {
      stagger:0.03,
      opacity:0
    })
    tl.to("#footer h1 span", {
      stagger: 0.03,
      color: "transparent",
      webkitTextStroke: "1px #fff",
      duration: 0.2,
      fontWeight: 100,
      boxShadow: "0px 35px 58px -50px rgba(255, 255, 255, 1)",
      fontStyle: 'italic',

    });
  });

  h1.addEventListener("mouseleave", () => {
    tl.from('#footer h1 span' , {
      stagger:0.3,
      opacity:0
    })
    tl.to("#footer h1 span", {
      stagger: 0.03,
      color: "#fff",
      webkitTextStroke: "0px #fff",
      duration: 0.2,
      boxShadow: "none",
      fontStyle : 'noraml',
    });
  });
}
slitH1();
locoMotive();
loadingAnimation();
curAnim();
mainPage();

// Image Effect plus circle
function shery3d(){
  Shery.imageEffect('.image-div', {
    style:5,
    debug:true,
    gooey:true
  })
  Shery.imageEffect('.image-div2',{
    style:5,
    debug:true,
    gooey:true
  })


  function circles(){
    let img = document.querySelector(".circles")
    let img2 = document.querySelector(".circles2")

    img.addEventListener('mouseenter', ()=>{
      tl.to('.img-circle',{
        scale:0,
        opacity:0,
      })
      tl.to(".bg",{
        scale:1,
        duration:0.2,
        ease:"power3.out"
      },'same2')
      tl.to(img , {
        border:'none'
      }, 'same2')

      tl.to('.text-circle' ,{scale:1,opacity:1} )
    })
    img.addEventListener('mouseleave' ,()=>{
      tl.to('.text-circle' ,{
        scale:0,
        opacity:0
      })

      tl.to(".bg",{
        scale:0,
        duration:0.2,
        ease:"power3.out"
      },'same2')
      tl.to(img,{scale:1,border:'2px solid #ffffff'})


      tl.to('.img-circle',{
        scale:1,
        opacity:1,
      })

    })

    img2.addEventListener('mouseenter', ()=>{
      tl.to('.img-circle2',{
        scale:0,
        opacity:0,
      })
      tl.to(img2, {border:'none'} , 'same1')
      tl.to(".bg2",{
        scale:1,
        duration:0.2,
        ease:"power3.out"
      } , 'same1')

      tl.to('.text-circle2' ,{scale:1,opacity:1} )
    })
    img2.addEventListener('mouseleave' ,()=>{
      tl.to('.text-circle2' ,{
        scale:0,
        opacity:0
      })

      tl.to(".bg2",{
        scale:0,
        duration:0.2,
        ease:"power3.out2"
      },'same1')
      tl.to(img2, {border:'2px solid #fff'} , 'same1')


      tl.to('.img-circle2',{
        scale:1,
        opacity:1,
      })

    })


  }
  circles()
}
shery3d()

//Page2

function videoCursor (){
  let vidContainer = document.querySelector('#vidContainer')
  let crcours = document.querySelector('#crcours')
  let video = document.querySelector('.video')
  let videoThum = document.querySelector('.videoThum')

  let videoCursor = document.querySelector('#videoCursor')
  vidContainer.addEventListener("mouseenter", ()=>{
    vidContainer.addEventListener("mousemove", (delt) =>{
      gsap.to(videoCursor , {
        left: delt.clientX ,
        top: delt.clientY,
      })
      crcours.style.display = 'none'
    })
    vidContainer.addEventListener('click' ,()=>{

      videoThum.style.display = 'none'
      video.play();
      vidContainer.addEventListener('click' , ()=>{
        video.pause();
      })
    })

  })

  vidContainer.addEventListener('mouseleave' , ()=>{
    crcours.style.display = 'flex'
        gsap.to(videoCursor , {
          top:'-10%',
          left:'80%'
      })
  })
}
videoCursor()