
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.3, 1, 0.10, 1)",
    duration: 0.1,
  });
function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.33, 1, 0.320, 1)",
    duration: 0.5,
  });

Shery.makeMagnet(".magnet");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    easing: {
        in: 'ease',
        out: 'ease'
      }
  });

  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.9),
      });
    });
  });


  gsap.from

  var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".hero1 h1",
        scroller: "#main",
        start: "top 30%",
        end : "top 0%",
        scrub:3
    },
})
tl.to(".hero1 h1", {
    x:-50,
}, "anim")

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".hero2 p",
        scroller: "#main",
        start: "top 60%",
        end : "top 0%",
        scrub:3
    },
})
tl3.to(".hero2 p", {
    x:50,
})


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".project1 img",
        scroller: "#main",
        start: "top 350%",
        end : "top 0%",
        stagger:0.5,
        delay:0.9,
        scrub:true,
    },
})
tl4.from(".project1 img", {
    x:-1000,
})

var tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact h1",
        scroller: "#main",
        start: "bottom 100%",
        end : "bottom 90%",
        scrub:true,
        opacity:0,
    },
})
tl5.to("#contact h1", {
    x:40
})



function loadinganimation(){
    gsap.to(".hero1 h1",{
        opacity:1,
        delay:0.9,
        duration:0.4, 
        stagger:0.5,
    }),

    gsap.to("#nav ",{
        y:0,
        opacity:1,
        delay:0.5,
        duration:0.6, 
        stagger:0.5 
    })
    gsap.to(".hero2 p",{
        opacity:1,
        delay:1.2,
        duration:0.6
    })
}
loadinganimation();


var tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".elem h1",
        scroller: "#main",
        start: "bottom 100%",
        end : "bottom 40%",
        scrub:true,
        opacity:0,
        delay:1,
        duration:1, 
        stagger:5
    },
})
tl6.to(".elem h1", {
    x:50
})
