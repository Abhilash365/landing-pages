
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let vidCon = document.querySelector(".vid-con");

function curseranime(){
    

vidCon.addEventListener("mousemove",function(co){
    gsap.to(".curser",{

left:co.x ,
top:co.y,

    })
})


vidCon.addEventListener("mouseleave",function(co){
    gsap.to(".curser",{
opacity:0,

scale:0,
    })
})


vidCon.addEventListener("mouseenter",function(co){
    gsap.to(".curser",{
opacity:1,
zIndex:100,
scale:1,
    })
})
}


curseranime();

function loading(){
    gsap.from("#page1 h1",{
   
        opacity:0,
        y:100,
        stagger:0.3,
      delay:0.7,
        duration:0.5,
    })
    
    gsap.from( vidCon,{
        opacity:0,
        y:100,
        
      
        duration:0.8,
    })
    
}

loading();

document.addEventListener("mousemove",function(dets){
    gsap.to(".dot",{
        left:dets.x,
        top:dets.y,
    })
})


let img=document.querySelectorAll(".child");

img.forEach(function (pass) {
    pass.addEventListener("mouseenter",function(){
        gsap.to(".dot",{
    scale:1.2,
        })
    })
    
   pass.addEventListener("mouseleave",function(){
        gsap.to(".dot",{
    scale:0,
        })
    })
    
})

