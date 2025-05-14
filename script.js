gsap.to('#box1', {
    x: 1000,
    duration: 2,
    delay:1,
    rotate: 360,
    backgroundColor:'blue',
    borderRadius: '50%',
    scale:0.5

})
gsap.from('#box2', {
    x: 1000,
    // y:500,
    duration: 2,
    delay:1

})

// gsap.from('h1',{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:1 
// })

gsap.to('#box', {
    x:800,
    duration:2,
    delay:1,
    rotate:360,
    repeat: -1,
    yoyo:true,
})


gsap.from('#timelineBox1',{
    x:1000,
    // rotate:360,
    duration:2,
    delay:1,
    repeat: -1,
    yoyo:true,
    backgroundColor: 'purple',
})
gsap.to('#timelineBox2',{
    x:1000,
    // rotate:360,
    duration:2,
    delay:1,
    backgroundColor: 'yellow',
    repeat: -1,
    yoyo:true,
})
// gsap.to('#timelineBox3',{
//     x:1000,
//     // rotate:360,
//     deration:1.5,
//     delay:4,
//     borderRadius:'50%',
//     scale:0.5,
// })

var tl = gsap.timeline();

// tl.to('#timelineBox1', {
//     x:1000,
//     rotate:360,
//     duration:2,
//     delay:1
// })
// tl.to('#timelineBox2', {
//     x:1000,
//     rotate:360,
//     duration:2,
// })
// tl.to('#timelineBox3', {
//     x:1000,
//     rotate:360,
//     duration:2,
// })


tl.from('h2',{
    y: -20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from('h3',{
    y: -20,
    opacity:0,
    duration:1,
    stagger:0.3,
})

tl.from('h1', {
    y:20,
    opacity:0,
    duration:1,
    // scale:0.2,
})