import './main.css'
import barba from '@barba/core';
import gsap from 'gsap';

barba.init({
  transitions:[{
    name:'first transition',
    scync:true,
    leave(data){
      data.current.container.style.position = 'absolute';
      return gsap.to(data.current.container, {
        // opacity:0,
        x: -1500,
        duration:0.7,
        ease:'power1.out'
      })
      
    },
    enter(data){
      data.current.container.style.position = 'absolute';
      return gsap.from(data.next.container, {
        // opacity:0,
        x: 1500,
        duration:0.7,
        ease:'power1.out'
      })

    }
  }]
})