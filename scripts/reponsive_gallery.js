
// const redimension = function () {
//     if ("matchMedia" in window){
//         if(window.matchMedia("(min-width:576px)").matches){
//             let script = document.createElement('script');
//             script.type = "text/javascript";
//             script.src = "/scripts/modal.js";
//             script.setAttribute("defer", "");
//             document.querySelector('head').appendChild(script);
//         }
//     }
// }


if (window.matchMedia("(min-width: 480px)").matches) {
    // console.log("I'm bigger than 480px");
/* La largeur minimum de l'affichage est 480 px inclus */
// if (this.window.innerWidth > 577) {
    // document.write('<script type="text/javascript" src="js/audioplayer.js"></script>');
    if (!this.document.querySelector("script[src='./scripts/modal.js']")) {
        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "./scripts/modal.js";
        script.setAttribute("defer", "");
        console.log(script);
        document.querySelector('head').appendChild(script);
        
    }
}
else {
    /* L'affichage est inférieur à 480px de large */
    if (this.document.querySelector("script[src='./scripts/modal.js']")) {
        // console.log(document.querySelector("script[src='./scripts/modal.js']"));
        $("script[src='./scripts/modal.js']").hide(0);
        // const head = document.querySelector("head");
        // console.log(head);
        // head.removeChild(this.document.querySelector("script[src='./scripts/modal.js']"));
    }
}


// window.addEventListener("resize", redimension);
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 480px)").matches) {
        // console.log("I'm bigger than 480px");
    /* La largeur minimum de l'affichage est 480 px inclus */
    // if (this.window.innerWidth > 577) {
        // document.write('<script type="text/javascript" src="js/audioplayer.js"></script>');
        if (!this.document.querySelector("script[src='./scripts/modal.js']")) {
            let script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "./scripts/modal.js";
            script.setAttribute("defer", "");
            console.log(script);
            document.querySelector('head').appendChild(script);
            
        }
    }
    else {
        /* L'affichage est inférieur à 480px de large */
        if (this.document.querySelector("script[src='./scripts/modal.js']")) {
            // console.log(document.querySelector("script[src='./scripts/modal.js']"));
            $("script[src='./scripts/modal.js']").hide(0);
            // const head = document.querySelector("head");
            // console.log(head);
            // head.removeChild(this.document.querySelector("script[src='./scripts/modal.js']"));
        }
    }
});


// if (window.matchMedia("(min-width: 600px)").matches) {
    /* La largeur minimum de l'affichage est 600 px inclus */
//   } else {
    /* L'affichage est inférieur à 600px de large */
//   }