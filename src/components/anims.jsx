import gsap, { Expo } from "gsap";

const preloader = () => {
  const tl = gsap.timeline();

  tl.to(".follow", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 1.2,
    delay: 1.1,
  })
    .to(".follow", {
      height: "100%",
      ease: Expo.easeInOut,
      duration: 0.7,
      delay: 0.5,
    })
    .to("main", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
    .to(".loading", {
      width: "0%",
      ease: Expo.easeInOut,
      duration: 0.7,
      delay: 0.5,
    })
    .to(".follow", {
      width: "0%",
      ease: Expo.easeInOut,
      duration: 0.7,
      delay: 0.5,
    });
};

export { preloader };
