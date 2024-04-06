function loader(){
    var tl = gsap.timeline();
    tl.to("#yellow1",{
        top:"-100%",
        duration:0.6,
        delay:0.2,
        ease: "expo.out",
    });
    
    tl.from("#yellow2",{
        top:"100%",
        duration:0.6,
        delay:0.1,
        ease:"expo.out"
    },"anim");
    
    tl.to("#loader h2",{
        color:"black",
        duration:0.6
    },"anim");
    tl.to("#loader",{
        opacity:0,
    });
    tl.to("#loader",{
        display:"none",
    });
    gsap.to("#rup",{
        x:650,
        ease:"expo.out",
        rotation:360,
        duration:5,
        delay:0.5
    })
}
loader();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector("#footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})

var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");

elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var bgimg = e.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`;
    })
})




