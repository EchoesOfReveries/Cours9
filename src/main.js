import './style.css';
import {gsap} from "gsap";

gsap.from(".titre", {
  x: -1500,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});
