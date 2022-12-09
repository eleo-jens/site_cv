const filters = document.querySelectorAll(".filter");

filters.forEach(function (elem) {
  elem.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(elem.id);
    selectProjects(elem.id);
    toggleBold(elem, filters);
  });
});

let selectProjects = function (category) {
  const galerie = document.querySelector("#galerie");
  // console.log(`J'ai cliqué sur ${category}`);
  // all: display none;
  let toHide = document.getElementsByClassName("all");
  for (let i = 0; i < toHide.length; i++) {
    toHide[i].style.display = "none";
  }
  // category: display
  let toShow = document.getElementsByClassName(category);
  for (let i = 0; i < toShow.length; i++) {
    toShow[i].style.display = "block";
  }
  if (document.getElementsByClassName(category).length <= 3){
      galerie.style.overflowX = "hidden";
  }
  else {
    galerie.style.overflowX = "scroll";
  }
};

let toggleBold = function (elem, filters) {
  elem.classList.toggle("active");
  filters.forEach(function (filter) {
    if (filter.id != elem.id) {
        filter.classList.remove("active");
    }
  });
};
