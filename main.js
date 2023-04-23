const curser = document.querySelector(".curser");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginVia = document.querySelector(".loginVia");
const loginButton = document.querySelector("#loginButton");
const specialHexGame = document.querySelector(".specialhexGame");
const specialhexInf = document.querySelector(".specialhexInf");
const allHexes = document.querySelectorAll(".hexagon");
let logSign = 1;
document.addEventListener("mousemove", function (e) {
  let X = e.clientX;
  let Y = e.clientY;

  curser.style.left = X + "px";
  curser.style.top = Y + "px";
});

document.addEventListener("scroll", function (e) {
  let X = e.clientX;
  let Y = e.clientY;

  curser.style.left = X + "px";
  curser.style.top = Y + "px";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("Itersecting");
    } else entry.target.classList.add("notItersecting");
  });
});

const notItersectingElements = document.querySelectorAll(".notItersecting");
notItersectingElements.forEach((el) => observer.observe(el));

loginButton.addEventListener("click", () => {
  if (logSign % 2 == 0) {
    register.style.visibility = "visible";
    login.style.visibility = "hidden";
    loginButton.innerHTML = "register";
    logSign = 3;
  } else if (logSign % 3 == 0) {
    register.style.visibility = "hidden";
    loginVia.style.visibility = "visible";
    loginButton.innerHTML = "login Via";
    logSign = 1;
  } else {
    login.style.visibility = "visible";
    loginVia.style.visibility = "hidden";
    loginButton.innerHTML = "login";
    logSign = 2;
  }
});

function StartGame() {
  window.open("spaceinvaders/index.html", (target = "_self"));
}

function Prank() {
    window.open("https://www.youtube.com/watch?v=uHgt8giw1LY", "_blank").focus();
}

specialHexGame.addEventListener("pointerover", () => {
  curser.style.transition = "15s";
  curser.style.width = "calc(var(--v1) * 100)";
  curser.style.height = "calc(var(--v1) * 100)";
  specialHexGame.style.scale = "150%";
  specialHexGame.style.background = "rgba(185, 185, 185, 0.6)";
});

specialHexGame.addEventListener("pointerout", () => {
  curser.style.transition = "1s";
  curser.style.width = "calc(var(--v1) * 2.5)";
  curser.style.height = "calc(var(--v1) * 2.5)";
  specialHexGame.style.scale = "100%";
  setTimeout(() => {
    curser.style.transition = "0.1s";
  }, 100);
});

specialhexInf.addEventListener("pointerover", () => {
  curser.style.transition = "15s";
  curser.style.width = "calc(var(--v1) * 100)";
  curser.style.height = "calc(var(--v1) * 100)";
  allHexes.forEach((element) => {
    element.style.background = "#fff";
  });
  specialhexInf.style.scale = "150%";
  specialhexInf.style.background = "rgba(15, 15, 15, 1)";
  specialhexInf.style.color = "#fff";
  specialHexGame.style.background = "rgba(15, 15, 15, 1)";
  specialHexGame.style.color = "#fff";
});

specialhexInf.addEventListener("pointerout", () => {
  curser.style.transition = "1s";
  curser.style.width = "calc(var(--v1) * 2.5)";
  curser.style.height = "calc(var(--v1) * 2.5)";
  specialhexInf.style.scale = "100%";
  specialHexGame.style.color = "#fff";
  allHexes.forEach((element) => {
    element.style.background = "rgba(15, 15, 15, 1)";
  });
  specialHexGame.style.background = "rgba(27, 27, 27, 0.6)";
  setTimeout(() => {
    curser.style.transition = "0.1s";
  }, 100);
});
