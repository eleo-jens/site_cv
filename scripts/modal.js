const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

let projectItems = document.querySelectorAll(".project-item");
let id; 
for(let i = 0; i < projectItems.length; i++){
  projectItems[i].addEventListener("click", function (event) {
    id = this.id;
  });
}

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
  modalContainer.classList.toggle("active");
  if (modalContainer.classList.contains("active")){
    fetch('../data/portfolio.json')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        fillContent(jsonData, id);
      });
  }
}

function fillContent(data, id){
  try {
    if (id == data.projects[id].id)
    { 
      let h2 = document.getElementById("project-title");
      let description = document.getElementById("description");
      let tag = document.getElementById("tag");
      let github = document.getElementById("github");
      let website = document.getElementById("website");
      let media = document.getElementById("media");

      h2.innerText = data.projects[id].title;
      description.innerText = data.projects[id].description;
      github.setAttribute("href", data.projects[id].github);
      media.setAttribute("src", data.projects[id].media[0].src);
      media.setAttribute("alt", data.projects[id].media[0].alt);

      let length = data.projects[id].tag.length;
      tag.innerHTML = "";
      if (length > 0){
        for (let i = 0; i < length; i++) {
          let p = document.createElement("p");
          p.innerHTML = data.projects[id].tag[i];
          tag.appendChild(p);
        }
      }

      if (data.projects[id].website != ""){
        website.setAttribute("href", data.projects[id].website);
        website.setAttribute("target", "_blank");
      }
      else {
        website.style.display = "none";
      }
    }
  } catch (error) {
    console.log(error + ": Not corresponding project id");
  }
}