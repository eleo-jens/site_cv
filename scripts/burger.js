const burgerIcon = document.querySelector('.nav-toggler');
const navigation = document.querySelector('nav');

const toggleNav = function () {
    burgerIcon.classList.toggle("active");
    navigation.classList.toggle("active");
};

burgerIcon.addEventListener("click", toggleNav);
