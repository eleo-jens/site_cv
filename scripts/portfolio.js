console.log("hello");

import myJson from '../data/portofolio.json' assert {type: 'json'};

const modalContainer = document.querySelector(".modal-container");

modalTriggers.forEach(trigger => trigger.addEventListener("click", fillContent));

function fillContent() {
  if (modalContainer.classList.contains("active")){
    console.log(myJson);
  }
}