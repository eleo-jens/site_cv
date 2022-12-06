const theme_toggle = document.querySelector(".theme");
const visible_icon = theme_toggle.childNodes;

theme_toggle.addEventListener("click", function () {
    if (visible_icon[0].classList.contains("fa-moon") || visible_icon[0].classList.contains("fa-sun")) {
        visible_icon[0].classList.toggle("fa-moon");
        visible_icon[0].classList.toggle("fa-sun");
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    }
});