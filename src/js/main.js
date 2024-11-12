import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  var startupScreenBtn = document.querySelector(".startup-btn");
  var startupScreen = document.querySelector(".startup-screen");
  var gameScreen = document.querySelector(".game");

  startupScreenBtn.addEventListener("click", () => {
    startupScreen.classList.add("is-press");
    gameScreen.classList.add("is-press");
  });
});
