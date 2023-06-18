import React, { useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Layouts/Home';
import About from './Layouts/About';
import Projects from './Layouts/Projects';
import Contact from './Layouts/Contact';
import { GithubFill, LinkedinBoxFill, LinkedinFill } from 'akar-icons';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, CssBaseline, IconButton, Paper, ThemeProvider, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import DrawerComponent from './components/DrawerComponent';
import { appTheme } from './themes/theme';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const nav: any = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(nav.current, { background: 'transparent', boxShadow: '' }, { duration: 0.3, scrollTrigger: { toggleActions: 'play none none reverse', start: 20, scroller: "#main" }, boxShadow: '0 -6px 10px 5px rgba(0,0,0,0.5)', background: "#FFFFFF" })
    });
    return () => ctx.revert();
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <main id="main">
        <div className='nav' ref={nav}>
          <h1>Nour.dev</h1>

          {
            isMobile ?
              <DrawerComponent />
              : <nav>
                <a href="#home"><Typography>Home</Typography></a>
                <a href="#about"><Typography>About</Typography></a>
                <a href="#projects"><Typography>Projects</Typography></a>
                <a href="#contact"><Typography>Contact</Typography></a>
                <a download={true} href={process.env.PUBLIC_URL+'/Nour_Abdelmaksoud_CV.pdf'}><Typography>Resume</Typography></a>
                <div className='social'>
                  <a target={'_blank'} href="https://github.com/NourAshraf01">
                    <GithubFill color='#666666' />
                  </a>
                  <a href="https://www.linkedin.com/in/nour-abdelmaksoud-287393178/" target={'_blank'}>
                    <LinkedinBoxFill color='#666666' />
                  </a>
                </div>
              </nav>
          }


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

        <footer>
          <Typography sx={{ textAlign: 'center', fontSize: '18px' }}>Copyright © 2023. All rights are reserved.</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <a target={'_blank'} href="https://github.com/NourAshraf01">
              <GithubFill color='white' />
            </a>
            <a href="https://www.linkedin.com/in/nour-abdelmaksoud-287393178/" target={'_blank'}>
              <LinkedinBoxFill color='white' />
            </a>
          </Box>
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
