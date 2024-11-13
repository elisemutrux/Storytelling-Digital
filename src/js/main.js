import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  var startupScreenBtn = document.querySelector(".startup-btn");
  var startupScreen = document.querySelector(".startup-screen");
  var gameScreen = document.querySelector(".game");
  var map = document.querySelector(".carte-img");
  var firstImageBox = document.querySelector(".vignette-box.t-1");
  var firstImageBtn1 = document.querySelector(".vignette-question");
  var firstImageBtn2 = document.querySelector(".vignette-question.t-second");
  var secondImageBox = document.querySelector(".vignette-box.t-2-1");
  var imageQuestion = document.querySelector(".vignette-question");

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

    tl.to(firstImageBox, {
      display: "block",

      // onComplete: () => {
      //   if (isSkipped == false) {
      //     document.body.style.overflow = "hidden";
      //   }
      //   image.style.zIndex = 1;
      //   btnFirstImage.style.display = "block";
      // },
    });

    tl.to(firstImageBtn1, {});

    firstImageBtn1.addEventListener("click", () => {
      firstImageBox.classList.add("is-invisible");
      secondImageBox.classList.add("is-visible");
    });
  }
});
