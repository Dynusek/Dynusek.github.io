const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginVia = document.querySelector(".loginVia");
const loginButton = document.querySelector("#loginButton");

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
