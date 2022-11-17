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
      tag.innerText = data.projects[id].tag[0];
      github.setAttribute("href", data.projects[id].github);
      if (data.projects[id].website !== ""){
        website.setAttribute("href", data.projects[id].website);
      }
      else {
        website.style.display = "none";
      }
      console.log(data.projects[id].media["src"]);
      media.setAttribute("src", data.projects[id].media[0].src);
      media.setAttribute("alt", data.projects[id].media[0].alt);
    }
  } catch (error) {
    console.log(error + ": Not corresponding project id");
  }
}