
import './App.css';
import Top from './components/Top';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Topone from './components/Topone'


import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useEffect } from 'react';



function App() {

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    end:"400vw",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});



  },[])

  return (
    <>
    <Top/>
    <Topone />
    
    <div className='container '>
      <section className='panel'> 
      <Second/>
      </section>
      
      <section className='panel'>
      <Third/>
      </section>
      <section className='panel'>
      <Fourth/>
      </section>
      <section className='panel'>
      <Fifth/>
      </section>
    </div>
    </>
  );
}

export default App;
