import './style.css';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
gsap.from(".titre", {
  x: -1500,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});
 
gsap.from(".carte", {
  y: 120,
  opacity: 0,
  stagger: 0.1,
 
  scrollTrigger: {
    trigger: ".premiere-section",
    start: "top center",
  },
});