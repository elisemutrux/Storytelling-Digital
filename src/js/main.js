import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  window.setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100);
  //variables
  var mapCursor = document.querySelector(".carte-cursor");
  var mapSlider = document.querySelector(".carte-slider");
  const sliderWidth = mapSlider.offsetWidth - mapCursor.offsetWidth;

  var startupScreenBtn = document.querySelector(".startup-btn");
  var startupScreen = document.querySelector(".startup-screen");
  var gameScreen = document.querySelector(".game");
  var map = document.querySelector(".carte-img");

  var btnSkip = document.querySelector(".carte-skip-btn");

  var containerImage1 = document.querySelector(".vignette-container-1");
  var containerImage2 = document.querySelector(".vignette-container-2");
  var containerImage3 = document.querySelector(".vignette-container-3");

  var firstImageBox = document.querySelector(".vignette-box.t-1");
  var firstImageBtn1 = document.querySelector(".vignette-question.t-1");
  var firstImageBtn2 = document.querySelector(
    ".vignette-question.t-second.t-1"
  );

  var second1ImageBox = document.querySelector(".vignette-box.t-2-1");
  var second2ImageBox = document.querySelector(".vignette-box.t-2-2");
  var second1ImageBtn1 = document.querySelector(".vignette-question.t-2-1");
  var second1ImageBtn2 = document.querySelector(
    ".vignette-question.t-second.t-2-1"
  );
  var second2ImageBtn1 = document.querySelector(".vignette-question.t-2-2");

  var threeImageBox = document.querySelector(".vignette-box.t-3");

  var fourImageBox = document.querySelector(".vignette-box.t-4");

  var fiveImageBox = document.querySelector(".vignette-box.t-5");
  var fiveImageBtn1 = document.querySelector(".vignette-question.t-5");
  var fiveImageBtn2 = document.querySelector(".vignette-question.t-second.t-5");

  var six1ImageBox = document.querySelector(".vignette-box.t-6-1");
  var six2ImageBox = document.querySelector(".vignette-box.t-6-2");

  var sevenImageBox = document.querySelector(".vignette-box.t-7");

  var eightImageBox = document.querySelector(".vignette-box.t-8");
  var eightImageBtn1 = document.querySelector(".vignette-question.t-8");
  var eightImageBtn2 = document.querySelector(
    ".vignette-question.t-second.t-8"
  );

  var nineImageBox = document.querySelector(".vignette-box.t-9");

  var tenImageBox = document.querySelector(".vignette-box.t-10");

  var elevenImageBox = document.querySelector(".vignette-box.t-11");

  //passer sur la page du jeu
  startupScreenBtn.addEventListener("click", () => {
    startupScreen.classList.add("is-press");
    gameScreen.classList.add("is-press");
    document.body.style.overflow = "auto";

    timelineInit();
  });

  //variables de la timeline
  function timelineInit() {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: gameScreen,
        start: "top",
        end: "4000px",
        // markers: true,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          var ysaProgress = self.progress * 88;
          mapCursor.style.left = ysaProgress + "%";
        },
      },
    });

    //timeline première partie
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

      onStart: () => {
        document.body.style.overflow = "hidden";
      },
    });

    tl.to(containerImage1, {
      display: "none",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "30% 10%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "30% 10%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "45% 5%",
    });

    //timeline 2ème partie
    tl.to(
      map,
      {
        scale: 2,
        transformOrigin: "45% 5%",
      },
      "<"
    );

    tl.to(fourImageBox, {
      display: "block",
    });

    tl.to(fourImageBox, {
      display: "none",
    });

    tl.to(containerImage2, {
      display: "block",

      onStart: () => {
        document.body.style.overflow = "hidden";
      },
    });

    tl.to(containerImage2, {
      display: "none",
    });

    tl.to(
      sevenImageBox,
      {
        display: "block",
        onStart: function () {
          six1ImageBox.classList.remove("is-visible");
        },
      },
      "<"
    );
    tl.to(sevenImageBox, {
      display: "none",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "45% 5%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "45% 5%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "50% 5%",
    });

    //timeline 3ème partie
    tl.to(map, {
      scale: 2.5,
      transformOrigin: "50% 5%",
    });

    tl.to(containerImage3, {
      display: "block",
      onStart: () => {
        document.body.style.overflow = "hidden";
      },
    });

    tl.to(tenImageBox, {
      display: "block",
    });

    tl.to(tenImageBox, {
      display: "none",
    });

    tl.to(
      containerImage3,
      {
        display: "none",
      },
      "<"
    );

    tl.to(map, {
      scale: 1,
      transformOrigin: "45% 5%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "45% 5%",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "50% 5%",
    });

    tl.to(map, {
      scale: 2.5,
      transformOrigin: "50% 5%",
    });

    tl.to(elevenImageBox, {
      display: "block",
    });

    tl.to(elevenImageBox, {
      display: "none",
    });

    tl.to(map, {
      scale: 1,
      transformOrigin: "50% 5%",
    });

    //écouteurs d'évènements au click
    firstImageBtn1.addEventListener("click", () => {
      firstImageBox.classList.add("is-invisible");
      second1ImageBox.classList.add("is-visible");
    });

    firstImageBtn2.addEventListener("click", () => {
      firstImageBox.classList.add("is-invisible");
      second1ImageBox.classList.add("is-invisible");
      second2ImageBox.classList.add("is-visible");
    });

    second1ImageBtn1.addEventListener("click", () => {
      second1ImageBox.classList.add("is-invisible");
      second2ImageBox.classList.add("is-visible");
    });

    second1ImageBtn2.addEventListener("click", () => {
      second1ImageBox.classList.add("is-invisible");
      second2ImageBox.classList.add("is-invisible");
      threeImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });

    second2ImageBtn1.addEventListener("click", () => {
      second2ImageBox.classList.add("is-invisible");
      threeImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });

    fiveImageBtn1.addEventListener("click", () => {
      fiveImageBox.classList.add("is-invisible");
      six1ImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });

    fiveImageBtn2.addEventListener("click", () => {
      document
        .querySelector(".vignette-box.t-7 .vignette")
        .classList.add("is-invisible");
      fiveImageBox.classList.add("is-invisible");
      six2ImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });

    eightImageBtn1.addEventListener("click", () => {
      eightImageBox.classList.add("is-invisible");
      nineImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });

    eightImageBtn2.addEventListener("click", () => {
      document.querySelector(".vignette-box.t-9").classList.add("is-invisible");
      eightImageBox.classList.add("is-invisible");
      tenImageBox.classList.add("is-visible");
      document.body.style.overflow = "auto";
    });
  }
});
