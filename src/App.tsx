import React, { useLayoutEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Layouts/Home';
import About from './Layouts/About';
import Projects from './Layouts/Projects';
import Contact from './Layouts/Contact';
import { GithubFill, LinkedinBoxFill, LinkedinFill } from 'akar-icons';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const nav:any = useRef();
  
  useLayoutEffect(()=>{
    let ctx = gsap.context(() => {

    gsap.fromTo(nav.current,{background:'transparent',boxShadow:''},{duration:0.3,scrollTrigger:{toggleActions: 'play none none reverse',start:20,scroller:"#main"},boxShadow:'0 -6px 10px 5px rgba(0,0,0,0.5)',background:"#FFFFFF"})
    });
    return ()=> ctx.revert();
  },[]);

  return (
    <main id="main">
      <div className='nav' ref={nav}>
        <h1>Nour.dev</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <div className='social'>
            <a target={'_blank'} href="https://github.com/NourAshraf01">
            <GithubFill color='#666666'/>
            </a>
            <a href="https://www.linkedin.com/in/nour-ashraf-287393178/" target={'_blank'}>
            <LinkedinBoxFill color='#666666'/>
            </a>
          </div>
        </nav>

      </div>
      <section id='home'>
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
