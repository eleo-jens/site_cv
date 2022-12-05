const language_toggle = document.querySelector(".language");

language_toggle.addEventListener("click", function () {
    switch (language_toggle.innerText) {
        case "EN":
            language_toggle.innerText = "FR";
            break;
        case "FR":
            language_toggle.innerText = "EN";
            break;
        default:
            language_toggle.innerText = "FR";
            break;
    }
});

