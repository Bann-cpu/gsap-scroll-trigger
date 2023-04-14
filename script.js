var aniBase = gsap.timeline({
    defaults: {x: 500, rotate: 360, duration: 2}
})

aniBase.to(".article", {ease: "power1.out"})
.to(".b", {ease: "power1.out"}, ">")

gsap.to(".c", {
    x: 300,
    ease: "power1.out",
    duration: 10,
    ScrollTrigger: ".c",
})