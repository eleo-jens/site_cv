// window.addEventListener("resize", function () {

//   if (this.window.innerWidth > 577) {
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalContainer = document.querySelector(".modal-container");
const language_btn = document.querySelector(".language");
let language = "";

language_btn.addEventListener("click", function () {
  if (language_btn.innerText == "FR") {
    language = "EN";
  } else {
    language = "FR";
  }
});

let projectItems = document.querySelectorAll(".project-item");
let id;
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (event) {
    id = this.id;
  });
}

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
  const url = get_language_json();
  if (modalContainer.classList.contains("active")) {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        fillContent(jsonData, id);
      });
  }
}

function get_language_json() {
  let url = "";
  switch (language) {
    case "FR":
      url = "./data/portfolio_fr.json";
      break;
    case "EN":
      url = "./data/portfolio_en.json";
      break;
    default:
      url = "./data/portfolio_en.json";
      break;
  }
  return url;
}

function fillContent(data, id) {
  try {
    if (id == data.projects[id].id) {
      let h2 = document.getElementById("project-title");
      let description = document.getElementById("description");
      let tag = document.getElementById("tag");
      let github = document.getElementById("github");
      let website = document.getElementById("website");
      let media = document.getElementById("media");
      let media_url = document.getElementById("media-url");

      h2.innerText = data.projects[id].title;
      description.innerText = data.projects[id].description;
      github.setAttribute("href", data.projects[id].github);
      media.setAttribute("src", data.projects[id].media[0].src);
      media.setAttribute("alt", data.projects[id].media[0].alt);

      let length = data.projects[id].tag.length;
      tag.innerHTML = "";
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          let p = document.createElement("p");
          p.innerHTML = data.projects[id].tag[i];
          tag.appendChild(p);
        }
      }

      if (data.projects[id].website != "") {
        website.setAttribute("href", data.projects[id].website);
        website.setAttribute("target", "_blank");
        media_url.setAttribute("href", data.projects[id].website);
      } else {
        website.style.display = "none";
        media_url.setAttribute("href", data.projects[id].github);
      }
    }
  } catch (error) {
    console.log(error + ": Not corresponding project id");
  }
}
