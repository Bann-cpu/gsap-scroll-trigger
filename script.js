gsap.registerPlugin(ScrollTrigger);

  gsap.to(".green", { 
    rotation: 900,
    duration: 1,
    scrollTrigger: {
      trigger: '.boxe',
      scrub: 2,
      markers: true,
    }
  });