// const modalTriggers = document.querySelectorAll("div.project-item.modal-trigger");

if (window.matchMedia("(min-width: 480px)").matches) {

  console.log("Je suis grande");
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
    if (modalContainer.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
      document.querySelector("header").style.zIndex = "-10";
      document.querySelector("a#top").style.zIndex = "-10";
    }
    else {
      document.body.style.overflowY = "scroll";
      document.querySelector("header").style.zIndex = "10";
      document.querySelector("a#top").style.zIndex = "9";
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
      // console.log(data.projects[id].id);
      if (id == data.projects[id].id) {
        let h2 = document.getElementById("project-title");
        let description = document.getElementById("description");
        let tag = document.getElementById("tag");
        let github = document.getElementById("github");
        let website = document.getElementById("website");
        // console.log(website);
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

        // console.log(data.projects[id].website);
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
 }
else {
  console.log("je suis petite");
}


window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 480px)").matches) { 

    console.log("Je suis grande");
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
      if (modalContainer.classList.contains("active")) {
        document.body.style.overflowY = "hidden";
        document.querySelector("header").style.zIndex = "-10";
        document.querySelector("a#top").style.zIndex = "-10";
      }
      else {
        document.body.style.overflowY = "scroll";
        document.querySelector("header").style.zIndex = "10";
        document.querySelector("a#top").style.zIndex = "9";
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
        // console.log(data.projects[id].id);
        if (id == data.projects[id].id) {
          let h2 = document.getElementById("project-title");
          let description = document.getElementById("description");
          let tag = document.getElementById("tag");
          let github = document.getElementById("github");
          let website = document.getElementById("website");
          // console.log(website);
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
  
          // console.log(data.projects[id].website);
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

  }
});



// const modalFonction = function () {
  // const modalTriggers = document.querySelectorAll(".modal-trigger");
  // const modalContainer = document.querySelector(".modal-container");
  // const language_btn = document.querySelector(".language");
  // let language = "";

  // language_btn.addEventListener("click", function () {
  //   if (language_btn.innerText == "FR") {
  //     language = "EN";
  //   } else {
  //     language = "FR";
  //   }
  // });

  // let projectItems = document.querySelectorAll(".project-item");
  // let id;
  // for (let i = 0; i < projectItems.length; i++) {
  //   projectItems[i].addEventListener("click", function (event) {
  //     id = this.id;
  //   });
  // }

  // modalTriggers.forEach((trigger) =>
  //   trigger.addEventListener("click", toggleModal)
  // );

  // function toggleModal() {
  //   modalContainer.classList.toggle("active");
  //   const url = get_language_json();
  //   if (modalContainer.classList.contains("active")) {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((jsonData) => {
  //         fillContent(jsonData, id);
  //       });
  //   }
  //   if (modalContainer.classList.contains("active")) {
  //     document.body.style.overflowY = "hidden";
  //     document.querySelector("header").style.zIndex = "-10";
  //     document.querySelector("a#top").style.zIndex = "-10";
  //   }
  //   else {
  //     document.body.style.overflowY = "scroll";
  //     document.querySelector("header").style.zIndex = "10";
  //     document.querySelector("a#top").style.zIndex = "9";
  //   }
  // }

  // function get_language_json() {
  //   let url = "";
  //   switch (language) {
  //     case "FR":
  //       url = "./data/portfolio_fr.json";
  //       break;
  //     case "EN":
  //       url = "./data/portfolio_en.json";
  //       break;
  //     default:
  //       url = "./data/portfolio_en.json";
  //       break;
  //   }
  //   return url;
  // }

  // function fillContent(data, id) {
  //   try {
  //     // console.log(data.projects[id].id);
  //     if (id == data.projects[id].id) {
  //       let h2 = document.getElementById("project-title");
  //       let description = document.getElementById("description");
  //       let tag = document.getElementById("tag");
  //       let github = document.getElementById("github");
  //       let website = document.getElementById("website");
  //       // console.log(website);
  //       let media = document.getElementById("media");
  //       let media_url = document.getElementById("media-url");

  //       h2.innerText = data.projects[id].title;
  //       description.innerText = data.projects[id].description;
  //       github.setAttribute("href", data.projects[id].github);
  //       media.setAttribute("src", data.projects[id].media[0].src);
  //       media.setAttribute("alt", data.projects[id].media[0].alt);

  //       let length = data.projects[id].tag.length;
  //       tag.innerHTML = "";
  //       if (length > 0) {
  //         for (let i = 0; i < length; i++) {
  //           let p = document.createElement("p");
  //           p.innerHTML = data.projects[id].tag[i];
  //           tag.appendChild(p);
  //         }
  //       }

  //       // console.log(data.projects[id].website);
  //       if (data.projects[id].website != "") {
  //         website.setAttribute("href", data.projects[id].website);
  //         website.setAttribute("target", "_blank");
  //         media_url.setAttribute("href", data.projects[id].website);
  //       } else {
  //         website.style.display = "none";
  //         media_url.setAttribute("href", data.projects[id].github);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error + ": Not corresponding project id");
  //   }
  // }
// };

// const sendLink = function (Data, trigger) {
//   // console.log(trigger);
//   // console.log(trigger.id);
//   if (Data.projects[trigger.id].website != "") {
//     // console.log(Data.projects[trigger.id].website);
//     window.open(Data.projects[trigger.id].website, "_blank");
//   }
//   else {
//     // console.log(Data.projects[trigger.id].github);
//     window.open(Data.projects[trigger.id].github, "_blank");

//   }
//   // window.open("http://if3projets.net/wad22/eleonore", '_blank');
// }

// if (this.window.innerWidth > 577) {
//   modalFonction();
// }
// else {
//   console.log("je vais incruster des liens plutôt)");
//   // console.log(modalTriggers);

//   modalTriggers.forEach((trigger) =>
//     trigger.addEventListener("click", function () {
//       fetch("./data/portfolio_en.json")
//         .then((response) => response.json())
//         .then((jsonData) => {
//           sendLink(jsonData, trigger)
//         });
//     })
//   );
// }

// window.addEventListener("resize", function () {

//   if (this.window.innerWidth > 577) {
//     modalFonction();
//   }
//   else {
//     console.log("je vais incruster des liens plutôt)");
//     modalTriggers.forEach((trigger) =>
//       trigger.addEventListener("click", function () {
//         fetch("./data/portfolio_en.json")
//           .then((response) => response.json())
//           .then((jsonData) => {
//             sendLink(jsonData, trigger)
//           });
//       })
//     );
//   }
// });