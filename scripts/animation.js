const bulles = document.querySelectorAll(".bulle");

if (bulles.display != "none"){
    //création d'une timeline de GreenSock, la timeline est un container à animations
    const timeline = gsap.timeline({paused:true});
    
    timeline
    .staggerFrom(bulles, 1, {right: -200, ease:"power2.out"}, 0.3, '-=1');
    
    timeline.play();
}
