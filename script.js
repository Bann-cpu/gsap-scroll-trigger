gsap.registerPlugin(ScrollTrigger);

  gsap.to(".green", { 
    duration: 2,
    rotate: 360,
    x: 300,
    scrollTrigger: {
      trigger: '.boxe',
      toggleActions: "restart pause reverse none",
      start: "top 80%",
      //endTrigger: "c", 
      end: "bottom 100px", //"+=300"
      markers: true,
      scrub: 2,
    }
  });

let horizontalSection = gsap.utils.toArray(".horizontal")