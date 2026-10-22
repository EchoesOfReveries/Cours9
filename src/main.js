import './style.css';
import {gsap} from "gsap";

const titre = document.querySelector(".titre");

gsap.to (".titre", {
  x: 10,
});