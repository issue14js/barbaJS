import './main.css'
import barba from '@barba/core';
import gsap from 'gsap';

barba.init({
  transitions:[{
    name:"curtain wiper",
    leave(data){
      return gsap.to(".curtain .strips",{
        scaleY:1,
        transformOrigin:"bottom",
        duration:0.5,
        stagger:{
          each:0.09,
          from:"random"
        },
        ease:"circ.inout",
      })
    },
    after(data){
      return gsap.to(".curtain .strips",{
        scaleY:0,
        transformOrigin:"top",
        duration:0.5,
        stagger:{
          each:0.09,
          from:"random"
        },
        ease:"circ.inOut"
      })
    }
    
  }]
})