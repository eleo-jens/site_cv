
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

// window.addEventListener("resize", redimension);
window.addEventListener("resize", function () {
    // if (window.matchMedia("(min-width: 480px)").matches) {
    if (this.window.innerWidth > 577) {
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
        if (this.document.querySelector("script[src='./scripts/modal.js']")) {
            const head = document.querySelector("head");
            console.log(head);
            head.removeChild(this.document.querySelector("script[src='./scripts/modal.js']"));
        }
    }
});
