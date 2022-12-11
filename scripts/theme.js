const theme_toggle = document.querySelector(".theme i");
// console.log(theme_toggle);

theme_toggle.addEventListener("click", function () {

    if (theme_toggle.classList.contains("fa-moon") || theme_toggle.classList.contains("fa-sun")) {
        theme_toggle.classList.toggle("fa-moon");
        theme_toggle.classList.toggle("fa-sun");
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    }
});