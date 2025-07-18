function animateSlides() {
  //Init Controller
  const controller = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  const nav1 = document.querySelector(".nav-header");

  //Loop over each sllide
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-image");
    const Img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP
    const slidest2 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slidest2.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slidest2.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=1");
    slidest2.fromTo(Img, { scale: 2 }, { scale: 1 }, "-=0.75");
    slidest2.fromTo(nav1, { y: "-100%" }, { y: "0%" }, "-=0.5");

    const slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slidest2)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
      })
      .addTo(controller);
    const pageTg = gsap.timeline();

    const nextSlide = slides[index + 1];
    pageTg.fromTo(nextSlide, { y: "0%" }, { y: "50%" }, "-=0.5");
    pageTg.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTg.fromTo(nextSlide, { y: "50%" }, { y: "0%" });

    const goodScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0,
      duration: "100%",
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTg)
      .addIndicators({
        colorStart: "white",
        colorTrigger: "white",
        indent: 200,
      })
      .addTo(controller);
  });
}
const mouse = document.querySelector(".cursor");
function moveAnimation(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function burgerToggle() {
  const navBar = document.querySelector(".nav-bar");
  const Logo = document.querySelector("#logo");
  if (navBar.classList.contains("what1")) {
    navBar.classList.remove("what1");
    navBar.classList.remove("active");
    burgerLine1.style.background = "white";
    burgerLine2.style.background = "white";
    gsap.to(Logo, 0.5, { color: "white" });
    gsap.to(burgerLine1, 0.5, { rotate: "0", y: "0" });
    gsap.to(burgerLine2, 0.5, { rotate: "0", y: "0" });
    document.body.classList.remove("hidden");
  } else {
    navBar.classList.add("what1");
    navBar.classList.add("active");
    burgerLine1.style.background = "black";
    burgerLine2.style.background = "black";
    gsap.to(Logo, 0.5, { color: "black" });
    gsap.to(burgerLine1, 0.5, { rotate: "35deg", y: "4.5" });
    gsap.to(burgerLine2, 0.5, { rotate: "-35deg", y: "-4" });
    document.body.classList.add("hidden");
  }
}

function mouseOver(e) {
  const over = e.target;
  console.log(over);
  console.log(over);
  const text = document.querySelector(".cursor-text");
  if (over.id === "logo" || over.classList.contains("burger")) {
    mouse.classList.add("active");
  } else {
    mouse.classList.remove("active");
  }
  if (over.classList.contains("explore")) {
    mouse.classList.add("active-explore");
    text.innerText = "Tap";
    gsap.to(".title-swipe", 0.5, { y: "0%" });
  } else {
    mouse.classList.remove("active-explore");
    text.innerText = "";
    gsap.to(".title-swipe", 0.5, { y: "100%" });
  }
}

const burgerLine1 = document.querySelector(".line-1");
const burgerLine2 = document.querySelector(".line-2");
const burgerTing = document.querySelector(".burger");
burgerTing.addEventListener("click", burgerToggle);
window.addEventListener("mousemove", moveAnimation);
window.addEventListener("mouseover", mouseOver);

animateSlides();
