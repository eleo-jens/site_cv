const theme_toggle = document.querySelector(".theme i");
const logo = document.querySelector("header>a>img");
console.log(logo);
// console.log(theme_toggle);

theme_toggle.addEventListener("click", function () {

    if (theme_toggle.classList.contains("fa-moon") || theme_toggle.classList.contains("fa-sun")) {
        theme_toggle.classList.toggle("fa-moon");
        theme_toggle.classList.toggle("fa-sun");
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    }
    if(theme_toggle.classList.contains("fa-sun")){
        logo.setAttribute("src","./assets/img/logoeleblanc.png");
    }
    else if(theme_toggle.classList.contains("fa-moon")) {
        logo.setAttribute("src","./assets/img/logoele.png");
    }
});