// par défaut class all display
console.log(document.querySelector(".filter"));

console.log(document.querySelector(".filter").id);

document.querySelector(".filter").addEventListener('click', (event) => {
    console.log("Hello");
    console.log(event);
})


let filter = function(){
    document.getElementById("php").addEventListener('click', (event) =>
    {
        console.log("j'ai cliqué sur php");
        // all: display none;
        let toHide = document.getElementsByClassName("all");
        for (let i = 0; i < toHide.length; i++){
            toHide[i].style.display = "none";
        }
        let toShow = document.getElementsByClassName("php");
        for (let i = 0; i < toShow.length; i++){
            toShow[i].style.display = "block";
        }
        // php: display
    
    })
}

