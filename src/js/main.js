import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  var startupScreenBtn = document.querySelector(".startup-btn");
  var startupScreen = document.querySelector(".startup-screen");
  var gameScreen = document.querySelector(".game");
  var map = document.querySelector(".carte-img");

  var containerImage1 = document.querySelector(".vignette-container-1");

  var firstImageBox = document.querySelector(".vignette-box.t-1");
  var firstImageBtn1 = document.querySelector(".vignette-question.t-1");
  var firstImageBtn2 = document.querySelector(
    ".vignette-question.t-second.t-1"
  );

  var second1ImageBox = document.querySelector(".vignette-box.t-2-1");
  var second2ImageBox = document.querySelector(".vignette-box.t-2-2");

  startupScreenBtn.addEventListener("click", () => {
    startupScreen.classList.add("is-press");
    gameScreen.classList.add("is-press");

    timelineInit();
  });

  function timelineInit() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: gameScreen,
        start: "top",
        end: "10000px",
        markers: true,
        pin: true,
        scrub: true,
      },
    });

    tl.to(
      map,
      {
        scale: 2,
        transformOrigin: "30% 10%",
      },
      "<"
    );

    tl.to(containerImage1, {
      display: "block",

      onComplete: () => {
        document.body.style.overflow = "hidden";
      },
    });

    firstImageBtn1.addEventListener("click", () => {
      firstImageBox.classList.add("is-invisible");
      second1ImageBox.classList.add("is-visible");
    });

    firstImageBtn2.addEventListener("click", () => {
      firstImageBox.classList.add("is-invisible");
      second2ImageBox.classList.add("is-visible");
    });
  }
});
