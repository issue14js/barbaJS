import './main.css'
import barba from '@barba/core';
import gsap from 'gsap';

barba.init({
  transitions:[{
    name:'first transition',
     leave(data){
       return gsap.to(data.current.container, {
        opacity:0,
        duration:1,
        ease:'power2.inOut'
        
      })
      
    },
    enter(data){
      return gsap.from(data.next.container, {
        left:0,
        duration:1,
        ease:'power2.inOut'
      })

    }
  }]
})