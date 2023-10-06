function valuesetter(){
gsap.set("nav a",{y:"-100%", opacity:0});
gsap.set(" .row .reveal  .child ",{translateY: "100%",opacity:0});
gsap.set(" .row2 .reveal .child",{translateY: "100%",opacity:0});
}

function revealToSpan(){
  document.querySelectorAll(".reveal").forEach(function(elem){
    //create two spans 
    var parent = document.createElement("span")  ;
    var child = document.createElement("span")  ;
  
  
    //parent and child both sets their respective classed 
    parent.classList.add("parent");
    child.classList.add("child");
  
    //span parent gets child and child gets elem details
     child.innerHTML = elem.innerHTML;
     parent.appendChild(child);
    //elem replaces its value with parent span 
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
  }
function loaderAnimation(){
  var tl = gsap.timeline();
  
  tl
  .to(".fullscreen",{
     height: 0,
     duration: 2,
     ease: Expo.easeInOut
  })
  .to(".fullscreen .parent .child",{
    y:"-100%",
    duration: 1,
    delay: -2,
    ease: Expo.easeInOut,
  })
  .to(".midscreen",{
    height: "100%" ,
    duration: 1,
    delay: -2,
    ease: Expo.easeInOut
  })
  .to(".midscreen",{
    height: 0,
    top:0,
    duration: .5,
    delay:-1,
    ease: Expo.easeInOut,
    onComplete: function(){
      homeAnimations();
    }
  })
  }
function homeAnimations(){

var tl = gsap.timeline();

tl.to("nav a",{
  y: 0,
  stagger:.05,
  opacity:1,
  ease: Expo.easeInOut,
})
tl.to(".row .reveal .child ",{
  y:0,
  opacity:1,
  stagger:.1,
  duration:1,
  ease:Expo.easeInOut
})
tl.to(".row2 .reveal .child ",{
  y:0,
  opacity:1,
  delay:-.7,
  duration:1,
  stagger:.1,
  ease:Expo.easeInOut
})

}

function AboutAnimation(){
 var tl = gsap.timeline();

 tl.to(".about .reveal .child",{
    
 })

}





revealToSpan();
valuesetter();
loaderAnimation();
AboutAnimation();

// signatureAnimation();




