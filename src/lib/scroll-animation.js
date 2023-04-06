import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  // Animation
  tl.to(position, {
    scrollTrigger: {
      x: -3.38,
      y: -10.74,
      z: -5.93,
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate
  })
  .to(target, {
    scrollTrigger: {
      x: 1.52,
      y: 0.77,
      z: -1.08,
      trigger: ".sound-section",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
  })
  .to('.jumbotron-section', {
    scrollTrigger: {
      opacity: 0,
      trigger: ".sound-section",
      start: "top bottom",  
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
  })
}
