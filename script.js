var tl = gsap.timeline();

tl.from(".left h2",{
    opacity:0,
    // scale:0,
    y:-30,
    duration:0.5,
    delay:1,
    stagger:0.5
})
tl.from(".right",{
    opacity:0,
    // scale:0,
    y:-30,
    duration:0.5,
    delay:0,
    stagger:0.5
})
tl.from(".body img, .body h1, .body p",{
    opacity:0,
    // scale:0,
    y:-30,
    duration:0.5,
    delay:0,
    stagger:0.5
})


gsap.from("#page2 .page2Left", {
    opacity:0,
    x:-300,
    duration:1,
    delay:0,
    scrollTrigger:{
        trigger:"#page2 .page2Left",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".page2Right div", {
    opacity:0,
    y:-300,
    duration:1,
    delay:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .page2Left",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".page2Right p", {
    opacity:0,
    y:-300,
    duration:1,
    delay:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .page2Left",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".page2Right .cv", {
    opacity:0,
    y:300,
    duration:1,
    delay:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .page2Left",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})


gsap.from("#page3 .top div",{
    opacity:0,
    y:300,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page3 .top",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from("#page3 .top p",{
    opacity:0,
    y:300,
    duration:1,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3 .top",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".bottom div",{
    opacity:0,
    y:300,
    duration:1,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3 .top",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".bottom div img",{
    opacity:0,
    y:300,
    duration:1,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3 .top",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from(".bottom div p",{
    opacity:0,
    y:300,
    duration:1,
    delay:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3 .top",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
