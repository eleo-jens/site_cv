const language_toggle = document.querySelector(".language");
// console.log(language_toggle);
// console.log(language_toggle.classList);

const head_title = document.querySelector("head title");

const menu_names = document.querySelectorAll(".menu li a");

const hero_h1 = document.querySelector("#hero h1");
const hero_h2 = document.querySelector("#hero h2");
const hero_h3 = document.querySelector("#hero h3");
const hero_marquee = document.querySelector("#hero marquee");

const about_h2 = document.querySelector("#about h2");
const about_p = document.querySelector("#about .wrap-about-me-p");
const about_img = document.querySelector("#about .wrap-about-me-img");

const projects_h2 = document.querySelector("#projects h2");
const projects_all = document.querySelector("#projects #all");
const projects_galerie_h3 = document.querySelectorAll("#projects #galerie h3");
const projects_galerie_img = document.querySelectorAll("#projects #galerie img");

const skills_h2 = document.querySelector("#skills h2");

const background_h2 = document.querySelector("#background h2");
background_timeline = document.querySelector("#background .box-timeline");

const contact_p1 = document.querySelector("#contact p");
const contact_p2 = document.querySelector("#contact p~p");
const contact_me = document.querySelector("#contact a img");
const contact_cv = document.querySelector("#contact .button-container a");

language_toggle.addEventListener("click", function () {
    // switch (language_toggle.innerText) {
    //     case "EN":
    //         language_toggle.innerText = "FR";
    //         console.log("I speak english");
    //         get_data("en");
    //         break;
    //     case "FR":
    //         language_toggle.innerText = "EN";
    //         console.log(language_toggle.src);
    //         console.log("Je parle français");
    //         get_data("fr");
    //         break;
    // }

    // console.log(language_toggle.classList[2]);

    switch (language_toggle.classList[2]) {
        case "FR":
            language_toggle.src = "./assets/img/icons8-france-48.png";
            language_toggle.classList.remove("FR");
            language_toggle.classList.add("EN");
            // console.log("I speak english");
            get_data("en");
            break;
        case "EN":
            // console.log(language_toggle.src);
            "/assets/img/icons8-great-britain-48.png"
            language_toggle.src = "/assets/img/icons8-great-britain-48.png";
            language_toggle.classList.remove("EN");
            language_toggle.classList.add("FR");
            // console.log("Je parle français");
            get_data("fr");
            break;
    }
});

const get_data = function (lang) {
    url = './data/data_' + lang + '.json';
    // console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
            fill_content(jsonData);
        });
}

const fill_content = function (data) {
    // console.log(data);
    head_title.innerText = data.head.title;

    for (let i = 0; i < menu_names.length; i++) {
        menu_names[i].innerText = data.menu[i];
    }

    hero_h1.innerText = data.hero.h1;
    hero_h2.innerText = data.hero.h2;
    hero_h3.innerText = data.hero.h3;
    hero_marquee.innerText = data.hero.marquee;

    about_h2.innerText = data.about.h2;
    about_p.innerHTML = data.about.p;
    about_img.alt = data.about.img;

    projects_h2.innerText = data.projects.h2;
    projects_all.innerText = data.projects.all;


    skills_h2.innerText = data.skills.h2;

    background_h2.innerText = data.background.h2;
    if (background_timeline.children.length == data.background.boxtimeline.length) {
        let child = background_timeline.firstElementChild;
        while (child) {
            child.remove();
            child = background_timeline.firstElementChild;
        }
        // console.log(background_timeline);
        create_timeline(data);
    }

    contact_p1.innerText = data.contact.p[0];
    contact_p2.innerText = data.contact.p[1];
    contact_me.src = data.contact.me,
        contact_cv.innerText = data.contact.cv;

    for (let i = 0; i < projects_galerie_h3.length; i++) {
        projects_galerie_h3[i].innerText = data.projects.galerie.h3[i];
        projects_galerie_img[i].alt = `${data.projects.galerie.alt} ${data.projects.galerie.h3[i]}`;
    }
};