const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
  modalContainer.classList.toggle("active");
  if (modalContainer.classList.contains("active")){
    fetch('../data/portfolio.json')
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        fillContent(jsonData);
        console.log(jsonData.projects[0]);
      }
      );
  }
}

function fillContent(data){
  console.log(data.projects[0].title);
  console.log(data.projects[0].description);
  console.log(data.projects[0].tag[0]);
  console.log(data.projects[0].github)
}