const burgerIcon = document.querySelector('.nav-toggler');
const navigation = document.querySelector('nav');
const menu_ul = document.querySelector('ul.menu');
const menu_elem = document.querySelectorAll('ul.menu li');
let btn = document.querySelector("a#top");
// console.log(menu_elem);

const toggleNav = function () {
    burgerIcon.classList.toggle("active");
    navigation.classList.toggle("active");
    if(navigation.classList.contains("active")){
        document.body.style.overflowY = "hidden";
    }
    else {
        document.body.style.overflowY = "scroll";
    }
    btn.classList.remove('show');
};

burgerIcon.addEventListener("click", toggleNav);

menu_elem.forEach(function(elem) {
    elem.addEventListener("click", function () {
        burgerIcon.classList.toggle("active");
        navigation.classList.toggle("active");
        document.body.style.overflowY = "scroll";
    })
});