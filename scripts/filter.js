// par défaut class all display
console.log(document.querySelector(".filter"));

console.log(document.querySelector(".filter").id);

document.querySelectorAll(".filter").forEach(function (elem) {
  elem.addEventListener("click", (event) => {
    console.log(elem.id);
    filter(elem.id);
  });
});

let filter = function (category) {
    console.log(`J'ai cliqué sur ${category}`);
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
};
